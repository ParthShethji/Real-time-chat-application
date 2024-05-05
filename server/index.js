const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

require('dotenv').config();

app.use(cors({
    origin: ["https://real-time-chat-application-frontend.vercel.app],
    methods: ["POST", "GET"],
    credentials: True,
}));
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
