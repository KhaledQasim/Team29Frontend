import { Box, IconButton, Popover, useTheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import { useAtom } from "jotai";
import { AtomLowStock, AtomNoStock } from "../../../App";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [lowStocks, setLowStock] = useState([]);
  const [noStocks, setNoStock] = useState([]);
  
  // code for popper to work (notification bell dropdown menu)
  const [anchorEl, setAnchorEl] = useState(null);
  const loadNotifications = async () => {
    const LowStock = await axios.get("/api/notifications/low-stock");
    setLowStock(LowStock.data);
    const NoStock = await axios.get("/api/notifications/no-stock");
    setNoStock(NoStock.data);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
 
  useEffect(() => {
    const interval = setInterval(() => {
      loadNotifications();
    }, 1500);
  
    return () => clearInterval(interval); 
  }, [])

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        {/* <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton> */}
      </Box>

      {/* ICONS */}
      <Box display="flex" >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <>
                <IconButton 
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                >
                  <span className="badge bg-primary">{ noStocks.length + lowStocks.length }</span>
                  <NotificationsOutlinedIcon />
                </IconButton>
                <Popover 
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  
                >
                  <Table hover style={{ background:"white",}}>
                    <thead >
                      <tr>
                        {
                          noStocks.length === 0  && lowStocks.length === 0 ?
                          <th>No notifications</th>
                          : noStocks.length === 0 ?
                            <></>
                          :<th>OUT OF STOCK</th>
                        }
                        
                      </tr>
                    </thead>
                    <tbody >
                      {noStocks.map((noStock, index) => (
                        <tr key={index + 1} >
                          <td>{noStock.name  + " in category: " + noStock.category + " has no stock left!"}</td>
                        </tr>
                      ))}
                    </tbody>

                    <thead>
                      {
                        lowStocks.length === 0 ?
                        <></>
                        :
                        <tr>
                          <th>LOW STOCK</th>
                        </tr>
                      }
                      
                    </thead>
                    <tbody>
                      {lowStocks.map((lowStock, index) => (
                        <tr key={index + 1}>
                          <td>{lowStock.name  + " in category: " + lowStock.category + " has remaining quantity of " + lowStock.quantity + "!"}</td>
                        </tr>
                      ))}
                      
                    </tbody>
                  </Table>
                </Popover>
              </>
        {/* <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default Topbar;
