import express from 'express'

const app = express();

app.get(`/products`, (req, res) => {
    console.log("GET /products");
});
export const viteNodeApp = app;