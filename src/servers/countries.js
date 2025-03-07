import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());


app.get("/api/countries", async (req, res) => {
    try {
        const { origin, destination, currency } = req.query;
        const response = await axios.get(`https://api.travelpayouts.com/data/en/countries.json`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const key = "5ae2e3f221c38a28845f05b6f1871bf887b3a0f13b1539aa3e220ca7";

app.get("/api/country/:id", async (req, res) => {
    try {
        const { origin, destination, currency } = req.query;
        const response = await axios.get(`https://api.opentripmap.com/0.1/en/places/geoname?name=${req.params.id}&apikey=${key}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  
});app.get("/api/countryplaces/:lat/:lon", async (req, res) => {
     let radius = 30000; // 30 km radius 
    try {
        const { origin, destination, currency } = req.query;
        const response = await axios.get(`https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${req.params.lon}&lat=${req.params.lat}&apikey=${key}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));