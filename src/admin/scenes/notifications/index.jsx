import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import { AirplaneTicket, BusAlert, Delete } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import ReactQuill from "react-quill";

const Notification = () => {
    //modal
    const [modalShow, setModalShow] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const [modalShowDesc, setModalShowDesc] = useState(false);
    const [modalDesc, setModalDesc] = useState("");
    // const {id} = useParams
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [notifications, setNotifications] = useState([]);
    useEffect(() => {
        loadNotifications();
    }, []);
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

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body style={{ backgroundColor: "#1f2a40" }}>
                    <img src={modalImage} style={{width:"600px",height:"600px"}} alt="product" />
                </Modal.Body>
            </Modal>
        );
    }
    const loadNotifications = async () => {
        const LowStockResult = await axios.get("/api/notifications/low-stock");
        const NoStockResult = await axios.get("/api/notifications/no-stock");
        const add = LowStockResult.data.concat(NoStockResult.data)
        setNotifications(add);
    };
    // const loadUserByID = async (id) => {
    //   const result =  await axios.get(`/api/user/get/${id}`)
    //   return result.data;
    // }

    // apiRef.current.updateRows([{ id: 1, _action: 'delete' }]);  to delete a row




    // }
    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Product Name",
            flex: 0.5,
        },
        {
            field: "description",
            headerName: "Product Description",
            flex: 1,
            renderCell: (params) => (
                <IconButton onClick={() => {
                    setModalShowDesc(true);
                    setModalDesc(params.row.description);
                }}>
                    <h6>Click to view description!</h6>
                </IconButton>
            ),
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
            type: "number",
            renderCell: (params) => "£ " + params.row.price / 100,
        },
        {
            field: "image",
            headerName: "Product Image",
            renderCell: (params) => (
                <IconButton
                    onClick={() => {
                        setModalShow(true);
                        setModalImage(params.row.image);
                    }}
                >
                    <img src={params.row.image} alt="product" width={60} height={60} />
                </IconButton>
            ),
            flex: 0.3,
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

            sortable: false,
            filterable: false,
        },
        {
            field: "size",
            headerName: "Size",
            flex: 0.3,

            type: "singleSelect",
            valueOptions: ["S", "M", "L", "XL"],
        },
        {
            field: "category",
            headerName: "Category",
            flex: 0.3,

            type: "singleSelect",
            valueOptions: ["Shirts", "Pants", "Shorts", "Sweaters"],
        },
        {
            field: "quantity",
            headerName: "Product Quantity",
            flex: 0.3,

            type: "number",
        },
        {

            headerName: "Current State",
            flex: 0.5,
            renderCell: (params) => (
                params.row.quantity <= 5 && params.row.quantity > 0 ?
                    <h4 style={{ color: "orange" }}>LOW STOCK</h4> //low stock
                    :
                    <h4 style={{ color: "red" }}>NO STOCK</h4>    //no stock
            ),
            sortable: false,
            filterable: false,
        },
    ];

    return (
        <Box m="20px">
            <Header title="Stock" subtitle="Managing the Stock" />
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
                    rows={notifications}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                    loading={!notifications.length}
                    getRowId={(row) => row.id}

                />

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <MyVerticallyCenteredModalForDescription
                    show={modalShowDesc}
                    onHide={() => setModalShowDesc(false)}
                />
            </Box>
        </Box>
    );
};

export default Notification;
