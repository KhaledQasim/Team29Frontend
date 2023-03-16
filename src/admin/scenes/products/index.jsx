import {

  Box,
  IconButton,
  Tooltip,

  useTheme,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import 'react-quill/dist/quill.snow.css';

import Header from "../../components/Header";
import { Clear, Delete, Save } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import ReactQuill from "react-quill";

const View = () => {
  //modal
  const [modalShow, setModalShow] = useState(false);
  const [Quillvalue, setQuillValue] = useState('');

  const [modalImage, setModalImage] = useState("");


  const [modalShowDesc, setModalShowDesc] = useState(false);
  const [modalDesc, setModalDesc] = useState("");
  // const {id} = useParams
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProducts();
  }, []);
  function MyVerticallyCenteredModalForImages(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ background: "#1f2a40" }}>
          <img src={modalImage} alt="product" />
        </Modal.Body>
      </Modal>
    );
  }
  function MyVerticallyCenteredModalForDescription(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{ background: "#1f2a40" }}>
          <ReactQuill
            value={modalDesc}
            readOnly={true}
            theme={"bubble"}
          />
        </Modal.Body>
      </Modal>
    );
  }

  const loadProducts = async () => {
    const result = await axios.get("/products");
    setProducts(result.data);
  };


  const onClick = async (id, field, newValue) => {
    const r = await axios.get(`/product/${id}`);
    const dataName = {
      name: newValue,
      image: r.data.image,
      images: r.data.images,
      price: r.data.price,
      description: r.data.description,
      quantity: r.data.quantity,
      size: r.data.size,
      category: r.data.category,
    };
    const dataDesc = {
      name: r.data.name,
      image: r.data.image,
      images: r.data.images,
      price: r.data.price,
      description: newValue,
      quantity: r.data.quantity,
      size: r.data.size,
      category: r.data.category,
    };
    const dataPrice = {
      name: r.data.name,
      image: r.data.image,
      images: r.data.images,
      price: newValue,
      description: r.data.description,
      quantity: r.data.quantity,
      size: r.data.size,
      category: r.data.category,
    };
    const dataImage = {
      name: r.data.name,
      image: newValue,
      images: r.data.images,
      price: r.data.price,
      description: r.data.description,
      quantity: r.data.quantity,
      size: r.data.size,
      category: r.data.category,
    };
    const dataImages = {
      name: r.data.name,
      image: r.data.image,
      images: newValue,
      price: r.data.price,
      description: r.data.description,
      quantity: r.data.quantity,
      size: r.data.size,
      category: r.data.category,
    };
    const dataQuantity = {
      name: r.data.name,
      image: r.data.image,
      images: r.data.images,
      price: r.data.price,
      description: r.data.description,
      quantity: newValue,
      size: r.data.size,
      category: r.data.category,
    };
    const dataCategory = {
      name: r.data.name,
      image: r.data.image,
      images: r.data.images,
      price: r.data.price,
      description: r.data.description,
      quantity: r.data.quantity,
      size: r.data.size,
      category: newValue,
    };
    const dataSize = {
      name: r.data.name,
      image: r.data.image,
      images: r.data.images,
      price: r.data.price,
      description: r.data.description,
      quantity: r.data.quantity,
      size: newValue,
      category: r.data.category,
    };
    if (field === "name") {
      await axios.put(`/api/product/${id}`, dataName);
    }
    if (field === "image") {
      await axios.put(`/api/product/${id}`, dataImage);
    }
    if (field === "images") {
      await axios.put(`/api/product/${id}`, dataImages);
    }
    if (field === "description") {
      await axios.put(`/api/product/${id}`, dataDesc);
    }
    if (field === "quantity") {
      await axios.put(`/api/product/${id}`, dataQuantity);
    }
    if (field === "category") {
      await axios.put(`/api/product/${id}`, dataCategory);
    }
    if (field === "size") {
      await axios.put(`/api/product/${id}`, dataSize);
    }
    if (field === "price") {
      await axios.put(`/api/product/${id}`, dataPrice);
    }
  };
  const handleClickDelete = async (id) => {
    if (window.confirm(`Are you sure you want to delete this product?`)) {

      await axios.delete(`/api/product/${id}`);
      loadProducts();
    }
  };


  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Product Name",
      flex: 0.5,

      editable: true,
    },
    {
      field: "description",
      headerName: "Product Description",
      flex: 1,
      editable: true,
      renderCell: (params) => (
        <IconButton onClick={() => {
          setModalShowDesc(true);
          setModalDesc(params.row.description);
        }}>
          <h6>Click to view description/ Double Click empty space to Edit --></h6>
        </IconButton>
      ),

    },
    {
      cellClassName: "price",
      field: "price",
      headerName: "Price",
      flex: 0.3,

      editable: true,
      type: "number",
      renderCell: (params) => "£ " + params.row.price / 100,
    },
    {
      field: "image",
      headerName: "Product Image",
      renderCell: (params) => (
        <IconButton onClick={() => {
          setModalShow(true);
          setModalImage(params.row.image);
        }}>
          <img src={params.row.image} alt="product" width={60} height={60} />
        </IconButton>
      ),
      flex: 0.3,
      editable: true,
      sortable: false,
      filterable: false,
    },
    {
      field: "images",
      renderCell: ({ row: { images } }) => {
        const imagesArray = images.split(",");
        return (
          imagesArray.map((image) =>
            <IconButton
              onClick={() => {
                setModalShow(true);
                setModalImage(image);
              }}
            >
              <img src={image} alt="product" width={50} height={50} />
            </IconButton>
          )
        );
      },
      headerName: "Product Images",
      flex: 1,
      editable: true,
      sortable: false,
      filterable: false,
    },
    {
      field: "size",
      headerName: "Size",
      flex: 0.3,
      editable: true,
      type: "singleSelect",
      valueOptions: ["S", "M", "L", "XL"],
    },
    {
      field: "category",
      headerName: "Category",
      flex: 0.3,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Shirts", "Pants", "Shorts", "Sweaters"],
    },
    {
      field: "quantity",
      headerName: "Product Quantity",
      flex: 0.3,
      editable: true,
      type: "number",
    },
    {
      field: "delete",
      headerName: "DELETE",
      flex: 0.25,
      renderCell: ({ row: { id } }) => {
        return (
          <Box>
            <Tooltip>
              <IconButton
                onClick={() => {
                  handleClickDelete(id);
                }}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Products" subtitle="Managing the Products" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .price": {
            color: `${colors.greenAccent[500]}`,
          },

          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={products}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          loading={!products.length}
          getRowId={(row) => row.id}
          onCellEditCommit={(params) =>
            onClick(params.id, params.field, params.value)
          }
        
        />
        <MyVerticallyCenteredModalForImages
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <MyVerticallyCenteredModalForDescription
          show={modalShowDesc}
          onHide={() => setModalShowDesc(false)}
        />

      </Box>
      <Box sx={{ marginTop: 3,}}>
              Press the save button to copy the value below when editing the description of already existing products! <IconButton onClick={() => navigator.clipboard.writeText(Quillvalue)} ><Save /></IconButton> To Clear <IconButton onClick={()=> setQuillValue("")} ><Clear/></IconButton>
      </Box>
      <ReactQuill
              style={{ marginTop: 25 }}
              theme="snow"
              value={Quillvalue}
              onChange={setQuillValue}
      />
    </Box>
  );
};

export default View;
