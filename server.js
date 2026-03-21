const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Charger les variables d'environnement
dotenv.config({ path: __dirname + '/.env' });

// Connexion à MongoDB
connectDB();

// Créer l'application Express
const app = express();

// Middleware CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// ✅ Servir les fichiers Frontend statiques
app.use(express.static(path.join(__dirname, '../Frontend')));

// Routes API
app.use('/api/suggestion', require('./routes/suggestion'));
app.use('/api/qrcode', require('./routes/qrcode'));

// Route de test
app.get('/api', (req, res) => {
  res.json({ 
    message: '✅ API Lear Corporation fonctionne !',
    version: '1.0.0',
    status: 'online'
  });
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
});