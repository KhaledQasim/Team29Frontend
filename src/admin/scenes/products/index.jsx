import {
  Avatar,
  Box,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DataGrid,
  GridToolbar,
 
} from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import {
  Delete,

} from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";


const View = () => {
  

  // const {id} = useParams
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await axios.get("/products");
    setProducts(result.data);
  };
  // const loadUserByID = async (id) => {
  //   const result =  await axios.get(`/api/user/get/${id}`)
  //   return result.data;
  // }
  const clickedImages = () => {
    console.log("clicked images");
  };

  // apiRef.current.updateRows([{ id: 1, _action: 'delete' }]);  to delete a row

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
      // console.log(selected.event.id)
      await axios.delete(`/api/product/${id}`);
      loadProducts();
    }
  };

  // }
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
    },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   headerAlign: "left",
    //   align: "left",
    // },
    // {
    //   field: "phone",
    //   headerName: "Phone Number",
    //   flex: 1,
    // },
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
   
          <IconButton >
            <img src={params.row.image} alt="product" width={60} height={60} />
          </IconButton>
       

      ),
      flex: 1,
      editable: true,
      sortable: false,
      filterable: false,
    },
    {
      field: "images",

      onCellEditStart: clickedImages,
      // renderCell: params => { let imagesArray = params.row.images.split(",") && <Avatar src={params.row.images.split(",")} /> },
      // onClick:{clickedImages()},
      renderCell: ({ row: { images } }) => {
        const imagesArray = images.split(",");
        return (
          <IconButton>
            <img src={imagesArray[0]} alt="product" width={60} height={60} />
          </IconButton>
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
      <Header title="TEAM" subtitle="Managing the Team Members" />
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
      </Box>
    </Box>
  );
};

export default View;
