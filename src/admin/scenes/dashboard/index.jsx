import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { SupervisedUserCircleOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [usersAmount, setUsersAmount] = useState(0);
  const [usersNew, setUsersNew] = useState(0);
  const [ordersAmount, setOrdersAmount] = useState(0);
  const [ordersNew, setOrdersNew] = useState(0);
  const [ordersNewMonth, setOrdersNewMonth] = useState([]);
  const [orders, setOrders] = useState([]);

  const getUserAmount = async () => {
    await axios.get("/api/user/number/get").then((data)=>setUsersAmount(data.data))
  } 

  const getUserNew = async () => {
    await axios.get("/api/user/new").then((data)=>setUsersNew(data.data))
  }

  const getOrderAmount = async () => {
    await axios.get("/api/order/number/get").then((data)=>setOrdersAmount(data.data))
  }
  
  const getOrdersNew = async () => {
    await axios.get("/api/order/new").then((data)=>setOrdersNew(data.data))
  }

  const getOrdersMonth = async () => {
    await axios.get("/api/order/new/month").then((data)=>setOrdersNewMonth(data.data))
  }

  const loadOrders = async () => {
    
    await axios.get("/api/getAllOrders")
    .then((data)=>setOrders(data.data))
   
  };

  useEffect(() => {
    getOrdersMonth();
    getUserNew();
    getUserAmount();
    getOrderAmount();
    getOrdersNew();
    
    
  }, [])
  
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          {/* <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button> */}
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={usersAmount}
            subtitle="Total Users"
            // progress="0.75"
            // increase="+14%"
            showCircle={false}
            icon={
              <SupervisedUserCircleOutlined
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={ordersAmount}
            subtitle="Total Orders"
            // progress="0.50"
            // increase="+21%"
            showCircle={false}
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={usersNew}
            subtitle="New Users This Month"
            progress={usersNew/usersAmount}
            
            increase={(usersNew/usersAmount*100).toFixed(2)+"%"}
            showCircle={true}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            showCircle={true}
            title={ordersNew}
            subtitle="Orders Today"
            progress={ordersNew/ordersAmount}
            increase={(ordersNew/ordersAmount*100).toFixed(2)+"%"}
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        {/* <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box> */}
        <Box
          gridColumn="span 6"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Orders This Month
            </Typography>
          </Box>
          {ordersNewMonth.map((order, i) => (
            <Box
              key={`${order.id}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {`ID: ${order.id} . ${order.email}`}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {`Payment Type: ${order.paymentType}`}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{`Status: ${order.orderStatus} , Date: ${order.createdAt}`}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${order.totalPrice}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box> */}
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true}
              enableLabel={false} />
          </Box>
        </Box> */}
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          padding="15px"
        >
          <Typography
            variant="h10"
            fontWeight="600"
            sx={{ marginBottom: "5px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="400px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
