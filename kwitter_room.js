
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBX3vX6U_4Buz0pMDfx4SIpxDczLb6mOPk",
      authDomain: "gauri-bcxb.firebaseapp.com",
      projectId: "gauri-bcxb",
      storageBucket: "gauri-bcxb.appspot.com",
      messagingSenderId: "907609965458",
      appId: "1:907609965458:web:926a524524b17ee7b6f74b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
