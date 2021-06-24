import express from "express";
import Router from "./routes/routes.router.js";

const app = express();
app.use(express.json());

app.use(Router);

app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message
        });
    }
    return res.status(500).json({
        message: 'Internal server error'
    });
});

app.listen(5000, () => console.log('API running...'));