const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const BASE_URL = "https://credenciamento.eletrofrio.com.br:5900/galileo/api/api_hackathon";


// endpoint alarmes
app.get("/alarmes", async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}?route=alarmes`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});


// endpoint unidades
app.get("/unidades", async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}?route=unidades`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});


// endpoint telemetria
app.get("/telemetria/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const response = await axios.get(
            `${BASE_URL}?route=telemetria&dispositivoId=${id}`
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
});