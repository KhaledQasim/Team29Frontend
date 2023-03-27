import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import axios from "axios";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);

  const loadData = async () => {
    await axios.get("/api/GeoIp/get")
    .then((res) => {
       setData(res.data);
     
    })
  }
  useEffect(() => {
    loadData();
  }, [])
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      
      </Box>
      <h1>{ JSON.stringify(data) }</h1>
    </Box>
   
  );
};

export default Geography;
