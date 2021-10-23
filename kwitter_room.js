var firebaseConfig = {
    apiKey: "AIzaSyBMEylNfDgvvhRKw9-Rw4f2h1P2d-gBanc",
    authDomain: "kwitter-c9916.firebaseapp.com",
    databaseURL: "https://kwitter-c9916-default-rtdb.firebaseio.com",
    projectId: "kwitter-c9916",
    storageBucket: "kwitter-c9916.appspot.com",
    messagingSenderId: "102543197505",
    appId: "1:102543197505:web:337540cb5bc83d09cc4dc0"
  };

firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=" Welcome " + user_name + " ! ";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room names - " + Room_names);
    row='<div class="room_name" id="'+ Room_names +'" onclick="redirectToRoomName(this.id)">#'+ Room_names + '</div> <hr>';
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function add_room(){
     room_name=document.getElementById("room_name").value;
     localStorage.setItem("room_name", room_name);
     firebase.database().ref("/").child(room_name).update({purpose:"adding room name", room_name:room_name});
}
function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}