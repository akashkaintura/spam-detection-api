const express = require('express');
const app = express();
const authMiddleware = require('./middleware/authMiddleware');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
const searchRoutes = require('./routes/searchRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/contacts', authMiddleware, contactRoutes);
app.use('/search', authMiddleware, searchRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
