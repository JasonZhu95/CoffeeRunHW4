(function (window) {
  'use strict';
  var App = window.App || {};
    
  var FirebaseConfig = {
    apiKey: "AIzaSyC4skvGs2Gy-3FqIw5gLBxu0HiW7p_kwPU",
    authDomain: "coffeerunhw4-b7d54.firebaseapp.com",
    projectId: "coffeerunhw4-b7d54",
    storageBucket: "coffeerunhw4-b7d54.appspot.com",
    messagingSenderId: "209348375773",
    appId: "1:209348375773:web:4f49cde6b387e964b49734",
    measurementId: "G-41TK9DT6SL"
  };
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);
  
  window.App = App;
  
  })(window);