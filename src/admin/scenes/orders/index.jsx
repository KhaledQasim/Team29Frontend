import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  useGridApiContext,
  useGridApiRef,
} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import {
  Delete,
  EditOutlined,
  PersonOutlined,
  Preview,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import { useNavigate, useParams } from "react-router-dom";

const Orders = () => {
  // const {id} = useParams
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setOrders] = useState([]);
  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    const result = await axios.get("/api/getAllOrders");
    setOrders(result.data);
  };
  // const loadUserByID = async (id) => {
  //   const result =  await axios.get(`/api/user/get/${id}`)
  //   return result.data;
  // }

  // apiRef.current.updateRows([{ id: 1, _action: 'delete' }]);  to delete a row

  const onClick = async (id, field, newValue) => {
    // const r = await axios.get(`/api/order/setOrderStatus/${id}`);

    const data = {
      orderStatus: newValue,
      paymentType: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      email: "",
      postCode: "",
      products: "",
      userId: "",
      totalPrice: "",
    };

    await axios
      .put(`/api/order/setOrderStatus/${id}`, data)

      .catch((err) => {
        console.log(err);
        alert(`there was an error, check console,  ${err}`);
      });
  };
  //   const handleClickDelete = async (id) => {
  //     if (
  //       window.confirm(
  //         `Are you sure you want to delete this user?`
  //       )
  //     ) {
  //       // console.log(selected.event.id)
  //       await axios.delete(`/api/user/delete/${id}`)
  //       loadOrders();

  //     }

  //   }

  // }
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.5,
    },
    {
      field: "userId",
      headerName: "Customer Id",
      flex: 0.5,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 0.75,
    },
    {
      field: "city",
      headerName: "City",
      flex: 0.5,
    },
    {
      field: "postCode",
      headerName: "Post Code",
      flex: 0.5,
    },
    {
      field: "paymentType",
      headerName: "Payment Type",
      flex: 0.5,
    },

    {
      field: "products",
      headerName: "Total Price",
      flex: 0.5,
      scrollY: true,
      renderCell: ({ row: { products } }) => {
       
        let totalPrice = 0;
        const data = JSON.parse(products);
        for (let i = 0; i < data.length; i++) {
          let price = data[i].price;
          let quantity = data[i].quantity;
          totalPrice += price * quantity;
        }
        return (
          <Typography color={colors.greenAccent[500]} sx={{ ml: "5px" }}>
            {(`£ ${totalPrice}`)}
          </Typography>
        );
        
          ;
      },
    },
    {
      field: "createdAt",
      headerName: "Created Date",
      flex: 0.4,

      renderCell: (params) =>
        moment(params.row.createdAt).format("YYYY-MM-DD HH:MM:SS"),
    },

    {
      field: "orderStatus",
      headerName: "Order Status",
      flex: 0.75,
      type: "singleSelect",
      valueOptions: ["Processing", "Shipped", "Cancelled", "Delivered"],
      editable: true,
      renderCell: ({ row: { orderStatus } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              orderStatus === "Processing"
                ? colors.blueAccent[500]
                : orderStatus === "Shipped"
                ? colors.greenAccent[700]
                : orderStatus === "Cancelled"
                ? colors.redAccent[500]
                : orderStatus === "Delivered"
                ? colors.greenAccent[500]
                : null
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {orderStatus}
            </Typography>
          </Box>
        );
      },
    },

    // {
    //   field: "delete",
    //   headerName: "DELETE",
    //   flex: 0.25,
    //   renderCell: ({ row: { id } }) => {
    //     return (
    //       <Box>
    //         <Tooltip>
    //           <IconButton onClick={() =>{handleClickDelete(id)}}>
    //             <Delete/>
    //           </IconButton>
    //         </Tooltip>
    //       </Box>

    //     )

    //   }
    // },
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
          rows={users}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          loading={!users.length}
          getRowId={(row) => row.id}
          onCellEditCommit={(params) =>
            onClick(params.id, params.field, params.value)
          }
        />
      </Box>
    </Box>
  );
};

export default Orders;
