const express = require('express');
const router = express.Router();
const Suggestion = require('../models/Suggestion');

// Créer une nouvelle suggestion
router.post('/creer', async (req, res) => {
  try {
    const suggestion = new Suggestion(req.body);
    await suggestion.save();
    
    console.log('✅ Nouvelle suggestion enregistrée:', suggestion.nom);
    
    res.status(201).json({ 
      success: true, 
      message: 'Suggestion enregistrée avec succès !',
      suggestion: suggestion
    });
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de l\'enregistrement',
      error: error.message
    });
  }
});

// Récupérer toutes les suggestions
router.get('/liste', async (req, res) => {
  try {
    const suggestions = await Suggestion.find().sort({ dateCreation: -1 });
    res.json({ 
      success: true, 
      total: suggestions.length,
      suggestions: suggestions 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Récupérer une suggestion par ID
router.get('/:id', async (req, res) => {
  try {
    const suggestion = await Suggestion.findById(req.params.id);
    if (!suggestion) {
      return res.status(404).json({ 
        success: false, 
        message: 'Suggestion non trouvée' 
      });
    }
    res.json({ success: true, suggestion });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// ⚠️ NOUVELLE ROUTE - Supprimer une suggestion
router.delete('/:id', async (req, res) => {
  try {
    const suggestion = await Suggestion.findByIdAndDelete(req.params.id);
    
    if (!suggestion) {
      return res.status(404).json({ 
        success: false, 
        message: 'Suggestion non trouvée' 
      });
    }
    
    console.log('🗑️  Suggestion supprimée:', suggestion.nom);
    
    res.json({ 
      success: true, 
      message: 'Suggestion supprimée avec succès !',
      suggestion: suggestion
    });
  } catch (error) {
    console.error('❌ Erreur suppression:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de la suppression',
      error: error.message
    });
  }
});

module.exports = router;