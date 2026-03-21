const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema({
  matricule: {
    type: String,
    required: true,
    trim: true
  },
  nom: {
    type: String,
    required: true,
    trim: true
  },
  departement: {
    type: String,
    required: true,
    trim: true,
    default: ''
  },
  titreIdee: {
    type: String,
    required: true,
    trim: true
  },
  probleme: {
    type: String,
    required: true,
    trim: true
  },
  frequence: {
    type: String,
    enum: ['quotidien', 'hebdomadaire', 'mensuel', 'occasionnel'],
    default: 'hebdomadaire'
  },
  zonesImpact: {
    type: [String],
    enum: ['Magasin', 'Coupe', 'Préparation', 'Assemblage', 'Expédition', 'Autre'],
    default: []
  },
  idee: {
    type: String,
    required: true,
    trim: true
  },
  gain: {
    type: String,
    trim: true,
    default: ''
  },
  kpisImpactes: {
    type: [String],
    enum: [
      'Productivité',
      'Coûts',
      'Qualité',
      'Délais',
      'Ergonomie',
      'Traçabilité',
      'Scrap',
      'Énergie',
      'Stocks',
      'Ressources',
      'Autre'
    ],
    default: []
  },
  statut: {
    type: String,
    enum: ['En attente', 'Validée', 'Rejetée', 'En cours de traitement'],
    default: 'En attente'
  },
  commentaireAdmin: {
    type: String,
    trim: true,
    default: ''
  },
  pointsAttribues: {
    type: Number,
    default: 0,
    min: 0
  },
  dateCreation: {
    type: Date,
    default: Date.now
  },
  dateModification: {
    type: Date,
    default: Date.now
  },
  dateValidation: {
    type: Date,
    default: null
  }
});

// Index pour améliorer les performances
SuggestionSchema.index({ matricule: 1 });
SuggestionSchema.index({ departement: 1 });
SuggestionSchema.index({ statut: 1 });
SuggestionSchema.index({ dateCreation: -1 });

module.exports = mongoose.model('Suggestion', SuggestionSchema);