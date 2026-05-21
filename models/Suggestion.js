const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema(
{
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
        enum: [
            'quotidien',
            'hebdomadaire',
            'mensuel',
            'occasionnel'
        ],
        default: 'hebdomadaire'
    },

    zonesImpact: {
        type: [String],
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
        default: []
    },

    statut: {
        type: String,
        enum: [
            'En attente',
            'Validée',
            'Rejetée',
            'En cours de traitement'
        ],
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

    dateValidation: {
        type: Date,
        default: null
    }

},
{
    timestamps: true
}
);

// Index
SuggestionSchema.index({ matricule: 1 });
SuggestionSchema.index({ departement: 1 });
SuggestionSchema.index({ statut: 1 });

module.exports = mongoose.model('Suggestion', SuggestionSchema);