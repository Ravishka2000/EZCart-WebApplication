import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Container,
    Typography,
    TextField,
    Button,
    Grid,
    Paper,
    Box,
} from '@mui/material';
import axios from 'axios';

function EditProduct() {
    const { productId } = useParams();
    const [productData, setProductData] = useState({}); // Use an object, not an array

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        brand: '',
        quantity: '',
        color: '',
        image: '',
    });

    useEffect(() => {
        async function fetchProductData() {
            try {
                const response = await axios.get(`https://ezcart-zq3e.onrender.com/api/product/${productId}`);
                const productData = response.data;

                // Set the product data in the state
                setProductData(productData);

                // Set the form data with the product data, but only if images are defined
                if (productData.images && productData.images.length > 0) {
                    setFormData({
                        title: productData.title,
                        description: productData.description,
                        price: productData.price.toString(),
                        category: productData.category,
                        brand: productData.brand,
                        quantity: productData.quantity.toString(),
                        color: productData.color,
                        image: productData.images[0].url, // Access the URL only if images are defined
                    });
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchProductData();
    }, [productId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const price = parseFloat(formData.price);
            const quantity = parseInt(formData.quantity);

            if (isNaN(price) || isNaN(quantity)) {
                console.error('Price and Quantity must be valid numbers.');
                return;
            }

            // Clear any previous errors
            // Send a PUT request to update the product data
            await axios.put(`https://ezcart-zq3e.onrender.com/api/product/${productId}`, formData);

            // Redirect to the dashboard or product details page after a successful update

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <br/><br/><br/>
            <Typography variant="h4" gutterBottom sx={{ textDecoration: 'none', fontSize: '28px', fontWeight: '900', color: '#435334', marginLeft: 'auto', marginRight: 'auto' }}>
                Edit Product
            </Typography>
            <Paper elevation={3} sx={{ padding: '16px' }}>
                <form onSubmit={handleUpdate}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Price"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Category"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Brand"
                                name="brand"
                                value={formData.brand}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Quantity"
                                name="quantity"
                                type="number"
                                value={formData.quantity}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Color"
                                name="color"
                                value={formData.color}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Image Url"
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                            >
                                Update Product
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default EditProduct;
