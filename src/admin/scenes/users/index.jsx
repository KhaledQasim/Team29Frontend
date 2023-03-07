import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar, useGridApiContext, useGridApiRef } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { Delete, EditOutlined, PersonOutlined, Preview } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import { useNavigate, useParams } from "react-router-dom";




const Users = () => {
  
  // const {id} = useParams
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers()
    
  }, []);
  
  const loadUsers = async () => {
    const result = await axios.get("/api/user/get")
    setUsers(result.data);
  };
  // const loadUserByID = async (id) => {
  //   const result =  await axios.get(`/api/user/get/${id}`)
  //   return result.data;
  // }

  
  // apiRef.current.updateRows([{ id: 1, _action: 'delete' }]);  to delete a row
  
  const onClick = async (id, field, newValue) => {
    const r = await axios.get(`/api/user/get/${id}`)

    const dataFirstname ={firstname: newValue, lastname: r.data.lastname, role: r.data.role}
    const dataLastname = {firstname: r.data.firstname, lastname: newValue, role: r.data.role}
    const dataRole = { firstname: r.data.firstname, lastname: r.data.lastname, role: newValue }
    if (field === "firstname") {
      await axios.put(`/api/user/put/${id}`, dataFirstname)
    }
    if (field === "lastname") {
      await axios.put(`/api/user/put/${id}`, dataLastname)  
    }
    if (field === "role") {
      await axios.put(`/api/user/put/${id}`, dataRole)  
    }
    
  }
  const handleClickDelete = async (id) => {
    if (
      window.confirm(
        `Are you sure you want to delete this user?`
      )
    ) {
      // console.log(selected.event.id)
      await axios.delete(`/api/user/delete/${id}`)
      loadUsers();
     
    }
    
  }
 
  

  // }
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "firstname",
      headerName: "First Name",
      flex: 0.5,
      cellClassName: "name-column--cell",
      editable: true,
    },
    {
      field: "lastname",
      headerName: "Last Name",
      flex: 0.5,
      cellClassName: "name-column--cell",
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
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created Date",
      flex: 1,
    
      renderCell: params=> moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS')
     
    },
    {
      field: "ip",
      headerName: "IP",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Access Level",
      flex: 0.75,
      type: "singleSelect",
      valueOptions: ['ADMIN', 'USER'],
      editable: true,
      renderCell: ({ row: { role } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              role === "ADMIN"
                ? colors.greenAccent[600]
                : colors.greenAccent[800]
            }
            borderRadius="4px"
          >
            {role === "ADMIN" && <AdminPanelSettingsOutlinedIcon />}
            {role === "USER" && <PersonOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
   
    {
      field: "delete",
      headerName: "DELETE",
      flex: 0.25,
      renderCell: ({ row: { id } }) => {
        return (
          <Box>
            <Tooltip>
              <IconButton onClick={() =>{handleClickDelete(id)}}>
                <Delete/>
              </IconButton>
            </Tooltip>
          </Box>
          
        )
         
      }
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
        
          onCellEditCommit={(params) => onClick(params.id,params.field,params.value)}
          
         
         
        />
        
      </Box>
      
    </Box>
  );
};

export default Users;
