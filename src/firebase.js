// Firebase V9 (add '/compat')
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// LOCAL
const firebaseConfig = {
  apiKey: 'AIzaSyAxnW3dhdbO3gXcPIWs0lTSC4ArI96GU5Y',
  authDomain: 'auth-development-react-6c880.firebaseapp.com',
  projectId: 'auth-development-react-6c880',
  storageBucket: 'auth-development-react-6c880.appspot.com',
  messagingSenderId: '921769527265',
  appId: '1:921769527265:web:e26d1b553a1b47f58234a0',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
