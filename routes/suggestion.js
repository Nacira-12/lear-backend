const express = require('express');
const router = express.Router();
const Suggestion = require('../models/Suggestion');

// Créer une suggestion
router.post('/creer', async (req, res) => {
  try {
    const suggestion = new Suggestion(req.body);
    await suggestion.save();
    console.log('✅ Suggestion enregistrée:', suggestion.nom);
    res.status(201).json({ success: true, message: 'Suggestion enregistrée !', suggestion });
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Liste toutes les suggestions
router.get('/liste', async (req, res) => {
  try {
    const suggestions = await Suggestion.find().sort({ dateCreation: -1 });
    res.json({ success: true, suggestions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Supprimer une suggestion
router.delete('/:id', async (req, res) => {
  try {
    const suggestion = await Suggestion.findByIdAndDelete(req.params.id);
    if (!suggestion) return res.status(404).json({ success: false, message: 'Suggestion non trouvée' });
    res.json({ success: true, message: 'Suggestion supprimée !', suggestion });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;