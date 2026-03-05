const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema({
  matricule: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  probleme: {
    type: String,
    required: true
  },
  frequence: {
    type: String,
    required: true
  },
  categorie: {
    type: String,
    required: true
  },
  consequences: {
    type: String,
    default: ''
  },
  idee: {
    type: String,
    required: true
  },
  gain: {
    type: String,
    default: ''
  },
  impact: {
    type: String,
    required: true
  },
  dateCreation: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Suggestion', SuggestionSchema);