const admin = require('firebase-admin');

// Initialize the Firebase Admin SDK
// You should have the Firebase service account credentials in your .env file
admin.initializeApp({
    credential: admin.credential.cert({
        "projectId": process.env.FIREBASE_PROJECT_ID,
        "privateKey": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), 
        "clientEmail": process.env.FIREBASE_CLIENT_EMAIL,
    }),
});

module.exports = admin;
