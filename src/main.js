import express from "express";
import dotenv from "dotenv";


const app = express();
app.use(express.json());

dotenv.config({ path: "config.env" });
// const PORT = process.env.PORT || 8080;
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
});

