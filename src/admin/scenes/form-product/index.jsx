import { Alert, Box, Button, IconButton, Select, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import MUIRichTextEditor from "mui-rte";
import { useEffect, useState } from "react";
import { data } from "jquery";
import axios from "axios";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Save, SaveAltOutlined } from "@mui/icons-material";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
 
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [Quillvalue, setQuillValue] = useState('');

  const handleFormSubmit = async (values) => {
   
    setSuccessMsg(null);
    setErrorMsg(null);
    await axios.post("/api/product", values)
      .then((res) => {
   
        setSuccessMsg("Product Created!");
    
      })
      .catch((error) => {
        if (error.response) {
        
          setErrorMsg(JSON.stringify(error.response.data).slice(17, -2));
     
        }
      })
    setTimeout(() => {
      setDisabled(false);
    }, 1250);
    
   
  };

 
 

 

  return (
    <Box m="20px">
      <Header title="CREATE PRODUCT" subtitle="Create a New Product" />

      <Formik
        onSubmit={handleFormSubmit }
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              // gridTemplateColumns="repeat(5, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 1" }}
              />
               <select className="form-select" aria-label="Default select example" style={{ color: "#bfc1c6", background: "#293040" , height:"52"}}
                variant="filled"
                type="text"
                label="Size"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.size}
                name="size"
               
              >
                <option value="">Please Choose a Size!</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Quantity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.quantity}
                name="quantity"
                error={!!touched.quantity && !!errors.quantity}
                helperText={touched.quantity && errors.quantity}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 1" }}
              />
              
              <select className="form-select" aria-label="Default select example" style={{ color: "#bfc1c6", background: "#293040" , height:"52"}}
                variant="filled"
                type="text"
                label="Category"
                onBlur={handleBlur}
                onChange={handleChange}
                // value={values.category}
                name="category"
               
              >
                <option value="">Please Choose a Category!</option>
                <option value="T-Shirts">T-Shirts</option>
                <option value="Jeans">Jeans</option>
                <option value="Jumpers">Jumpers</option>
                <option value="Shorts">Shorts</option>
                <option value="Jackets">Jackets</option>
              </select>
              
            
            </Box>
           
            <ReactQuill
              style={{ marginTop: 25 }}
              theme="snow"
              value={values.description = Quillvalue}
              onChange={setQuillValue}
            />
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" disabled={disabled}>
                Create New Product
              </Button>
            </Box>
            {
              successMsg ?
               
                <Alert severity="success" >{successMsg}
                 
                </Alert>
           
                
                :<></>
               
            }
            {
               errorMsg ?
                  
                <Alert severity="error">{errorMsg}</Alert>
                
                
              : <></>
            }
          </form>
        )}
     
      </Formik>
    </Box>
  );
};

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const sizeRegExp =
  /S|M|L|XL/;
const categoryRegExp =
  /T-Shirts|Jeans|Shorts|Jumpers|Jackets/;
const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  size: yup.string().required("required").matches(sizeRegExp, "Role must be ADMIN or USER!"),
  quantity: yup.number().typeError("Must only be a number!").required("required"),
  price: yup.number().typeError("Must only be a number!").required("required"),
  category: yup.string().required("required").matches(categoryRegExp, "Role must be ADMIN or USER!"),
  description: yup.string().required("required"),
  // contact: yup
  //   .string()
  //   .matches(phoneRegExp, "Phone number is not valid")
  //   .required("required"),

});
const initialValues = {
  name: "",
  size: "",
  quantity: "",
  price: "",
  category: "",
  description: "",
  image:"/HTML/we-WEAR-10.png",
  images:"/HTML/we-WEAR-13.png,/HTML/we-WEAR-12.png,/HTML/we-WEAR-12.png",
};

export default Form;