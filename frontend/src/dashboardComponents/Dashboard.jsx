import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Box, Card, CardMedia, CardContent, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, IconButton, Grid } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import axios from 'axios';

const Dashboard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://ezcart-zq3e.onrender.com/api/product")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDelete = (productId) => {
        axios.delete(`https://ezcart-zq3e.onrender.com/api/product/${productId}`)
            .then((res) => {
                // If the deletion is successful, you may want to update the product list to reflect the changes.
                // You can fetch the updated product list again or remove the deleted product from the state.
                const updatedProducts = products.filter(product => product._id !== productId);
                setProducts(updatedProducts);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    // Function to handle search and update filtered products
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = products.filter(product =>
            product.category.toLowerCase().includes(term)
        );
        setFilteredProducts(filtered);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <div className="container">
                <div className="content">
                    <Box sx={{ overflowX: "hidden", marginTop: "96px" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Card sx={{ padding: '16px', backgroundColor: '#CEDEBD', color: '#fff' }}>
                                    <CardContent>
                                        <ShoppingCartIcon style={{ fontSize: '48px' }} />
                                        <Typography variant="h5" gutterBottom>
                                            Product Count
                                        </Typography>
                                        <Typography variant="h4" gutterBottom>
                                            {products.length}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={6}>
                                <Card sx={{ padding: '16px', backgroundColor: '#9EB384', color: '#fff' }}>
                                    <CardContent>
                                        <ShoppingCartIcon style={{ fontSize: '48px' }} />
                                        <Typography variant="h5" gutterBottom>
                                            Total Sold Count
                                        </Typography>
                                        <Typography variant="h4" gutterBottom>
                                            {products.reduce((acc, product) => acc + product.sold, 0)}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <TableContainer component={Paper} sx={{ marginTop: '16px' }}>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ backgroundColor: '#9EB384', color: '#fff' }} >
                                    
                                        <TableCell align="center" style={{ fontSize: '18px', fontWeight: 'bold' }}>Product</TableCell>
                                        <TableCell align="center" style={{ fontSize: '18px', fontWeight: 'bold' }}>Price</TableCell>
                                        <TableCell align="center" style={{ fontSize: '18px', fontWeight: 'bold' }}>Description</TableCell>
                                        <TableCell align="center" style={{ fontSize: '18px', fontWeight: 'bold' }}>Category</TableCell>
                                        <TableCell align="center" style={{ fontSize: '18px', fontWeight: 'bold' }}>Quantity</TableCell>
                                        <TableCell align="center" style={{ fontSize: '18px', fontWeight: 'bold' }}>Sold Count</TableCell>
                                        <TableCell align="center" style={{ fontSize: '18px', fontWeight: 'bold' }}>Actions</TableCell>
                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products.map((product) => (
                                        <TableRow key={product._id} sx={{ backgroundColor: '#FAF1E4' }}>
                                            <TableCell align="center">
                                               
                                                    {product.images && product.images.length > 0 && (
                                                        <Card sx={{
                                                            display: "flex",
                                                            py: 2,
                                                            flexDirection: "column",
                                                            height: "100%",
                                                            maxWidth: "250px",
                                                            transition: "transform 0.2s ease-in-out",
                                                            "&:hover": {
                                                                transform: "scale(1.02)",
                                                                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)"
                                                            }
                                                        }}>
                                                            <CardMedia component="img" height="auto" image={product.images[0].url} alt={product.title} sx={{ pb: 1, width: '30%', margin: "0 auto" }} />

                                                            <CardContent sx={{ flex: 1, margin: "0 auto" }}>
                                                                <Box>
                                                                    <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
                                                                        {product.title}
                                                                    </Typography>
                                                                </Box>
                                                            </CardContent>
                                                        </Card>
                                                    )}
                                                
                                            </TableCell>
                                            <TableCell align="center">Rs.{product.price}.00</TableCell>
                                            <TableCell align="center">
                                                <Typography variant="body1" color="textSecondary" paragraph>
                                                    {product.description}
                                                </Typography>
                                            </TableCell>
                                            <TableCell align="center">{product.category}</TableCell>
                                            <TableCell align="center">{product.quantity}</TableCell>
                                            <TableCell align="center">{product.sold}</TableCell>
                                            <TableCell align="center">
                                                <IconButton onClick={() => handleDelete(product._id)} color="error">
                                                    <DeleteIcon />
                                                </IconButton>
                                                <Link to={`/edit-product/${product._id}`} style={{ textDecoration: 'none' }}>
                                                    <IconButton color="primary">
                                                        <EditIcon />
                                                    </IconButton>
                                                </Link>

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </div>
            </div>
        </Box>
    )
}

export default Dashboard;
