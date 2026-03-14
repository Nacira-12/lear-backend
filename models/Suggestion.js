const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema({
  matricule:    { type: String, required: true },
  nom:          { type: String, required: true },
  departement:  { type: String, default: '' },
  titreIdee:    { type: String, default: '' },
  probleme:     { type: String, required: true },
  frequence:    { type: String, default: '' },
  zonesImpact:  { type: [String], default: [] },
  idee:         { type: String, required: true },
  gain:         { type: String, default: '' },
  kpisImpactes: { type: [String], default: [] },
  dateCreation: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Suggestion', SuggestionSchema);