import express from "express";
import cors from 'cors';
import rootrouter from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/v1',rootrouter)


const PORT = 5000; // Example port, change as needed
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});

