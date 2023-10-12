import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

function AllOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from your server when the component mounts
        axios.get('https://ezcart-zq3e.onrender.com/orders').then((res) => setOrders(res.data))
    }, []);

    const exportPdf = async () => {
        const doc = new jsPDF({ orientation: 'landscape' });

        doc.autoTable({
            html: '#orders',
            theme: 'grid'
        });


        doc.save("Orders.pdf");
    }

    const trimProductName = (name, maxLength) => {
        return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;
    }

    return (
        <Box p={5} bgcolor="">
            <Typography variant="h2" fontWeight={800} gutterBottom>
                All Orders
            </Typography>
            <Button variant="contained" color="primary" onClick={exportPdf} style={{ marginBottom: '10px' }}>
                Export as PDF
            </Button>
            <TableContainer component={Paper}>
                <Table id='orders'>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 'bold' }}>Order ID</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>User</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Products</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Total Price</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Payment Method</TableCell>
                            <TableCell style={{ fontWeight: 'bold' }}>Created At</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map(order => (
                            <TableRow key={order._id}>
                                <TableCell>{order._id}</TableCell>
                                <TableCell>{order.user}</TableCell>
                                <TableCell>
                                    <ul>

                                        {order.products.map((product, index) => (
                                            <li key={product._id}>
                                                {trimProductName(product.name, 10)} (Qty: {product.quantity}, Price: {product.price})
                                                {index < order.products.length - 1 && <br />} {/* Add line break if not the last product */}
                                            </li>
                                        ))}
                                    </ul>
                                </TableCell>
                                <TableCell>{order.totalPrice}</TableCell>
                                <TableCell>{order.paymentMethod}</TableCell>
                                <TableCell>{new Date(order.createdAt).toLocaleString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default AllOrders;
