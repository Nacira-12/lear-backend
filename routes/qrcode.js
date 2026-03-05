const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');

// Générer un QR code pour l'application
router.get('/generer', async (req, res) => {
  try {
    const appURL = process.env.APP_URL + '/app.html';
    
    const qrCodeDataURL = await QRCode.toDataURL(appURL, {
      width: 300,
      margin: 2,
      color: {
        dark: '#E31837',  // Rouge Lear
        light: '#FFFFFF'
      }
    });

    console.log('✅ QR Code généré pour:', appURL);

    res.json({ 
      success: true, 
      qrCode: qrCodeDataURL, 
      url: appURL 
    });
  } catch (error) {
    console.error('❌ Erreur génération QR:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de la génération du QR code' 
    });
  }
});

module.exports = router;