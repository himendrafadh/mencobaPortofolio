require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Here you would typically send an email using nodemailer or similar
    console.log('Contact Form Submission:', { name, email, message });

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Please provide all fields.' });
    }

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
