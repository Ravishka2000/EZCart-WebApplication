import React, { useState } from 'react';
import {
    Typography,
    TextField,
    Button,
    Container,
    Paper,
    Grid,
    Box,
} from '@mui/material';
import axios from 'axios';

function AddProduct() {
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

    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Additional validation for price and quantity
            const price = parseFloat(formData.price);
            const quantity = parseInt(formData.quantity);

            if (isNaN(price) || isNaN(quantity)) {
                setError('Price and Quantity must be valid numbers.');
                return;
            }

            setError(null); // Clear any previous errors

            const response = await axios.post('https://ezcart-zq3e.onrender.com/api/product', formData);
            console.log(response.data); // Handle the response as needed

            // Optionally, reset the form fields after successful submission
            setFormData({
                title: '',
                description: '',
                price: '',
                category: '',
                brand: '',
                quantity: '',
                color: '',
                image: '',
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <br/><br/><br/>
            <Typography variant="h4" gutterBottom sx={{ textDecoration: 'none', fontSize: '28px', fontWeight: '900', color: '#435334', marginLeft: 'auto', marginRight: 'auto' }}>
                Add a New Product
            </Typography>
            <Paper elevation={3} sx={{ padding: '20px' }}>
                <form onSubmit={handleSubmit}>
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
                                type="number"
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
                                label="Image URL"
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        {error && (
                            <Grid item xs={12}>
                                <Typography style={{ color: 'red' }} variant="body2">
                                    {error}
                                </Typography>
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                            >
                                Add Product
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default AddProduct;
