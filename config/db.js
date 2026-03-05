const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connecté avec succès');
  } catch (error) {
    console.error('❌ Erreur de connexion MongoDB:', error.message);
    console.error('Vérifiez votre URL MongoDB dans le fichier .env');
    console.error('\n⚠️  Le serveur démarre quand même (sans base de données)');
    console.error('Les suggestions ne seront PAS sauvegardées');
  }
};

module.exports = connectDB;