// Set the configuration for your app
// TODO: Replace with your project's config object
var firebaseConfig = {
    apiKey: "AIzaSyBXbSYnWUPgwDX1Hb50HfMlcDhKBKGIK3w",
    authDomain: "multiplayer-rps-fb5b4.firebaseapp.com",
    databaseURL: "https://multiplayer-rps-fb5b4.firebaseio.com",
    projectId: "multiplayer-rps-fb5b4",
    storageBucket: "multiplayer-rps-fb5b4.appspot.com",
    messagingSenderId: "700095988544",
    appId: "1:700095988544:web:d13cf60bd6dd4bb4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

//global variables
var p1Wins;
var p1Losess;
var p1Name;
var p1Choice;

var p2Wins;
var p2Losess;
var p2Name;
var p2Choice;

var playerTurn;

database.ref().on("value", function(snapshot) {

}, function(errorObject) {

    console.log("The read failed: " + errorObject.code);

});