import { Box, Button, Select, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import MUIRichTextEditor from "mui-rte";
import { useState } from "react";
import { data } from "jquery";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [description, setDescription] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const handleFormSubmit = (values) => {
    setDisabled(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    console.log(values);

    setTimeout(() => {
      setDisabled(false);
    }, 1250); 
  };
  function saveDescription(data) {
    
    setDescription(data);
    
  }
 
  

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
                <option value="Shirts">Shirts</option>
                <option value="Pants">Pants</option>
                <option value="Shorts">Shorts</option>
                <option value="Sweaters">Sweaters</option>
              </select>
              
              <MUIRichTextEditor
                className="MUIRichTextEditor"
                variant="filled"
                // type="text"
                label="Description"
                // onBlur={handleBlur}
                
                value={values.description = description}
                name="description"
                // value={values.category}
             
                onSave={(data) => { saveDescription(data)}}
                // onChange={handleDescriptionChange}
                sx={{outerWidth:"10000px"}}
                // error={!!touched.description && !!errors.description}
                // helperText={touched.description && errors.description}
              
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" disabled={disabled}>
                Create New Product
              </Button>
            </Box>
         
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
  /Shirts|Pants|Shorts|Sweaters/;
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

};

export default Form;