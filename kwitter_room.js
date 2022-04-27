
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDD_JKeX0rIHY5j2BlAvuQAynwKI5HGgQA",
      authDomain: "st-fairy-school-c1c8e.firebaseapp.com",
      databaseURL: "https://st-fairy-school-c1c8e-default-rtdb.firebaseio.com",
      projectId: "st-fairy-school-c1c8e",
      storageBucket: "st-fairy-school-c1c8e.appspot.com",
      messagingSenderId: "257489031941",
      appId: "1:257489031941:web:7cd007ed8a9553123bdd6c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    

    user_name = localStorage.getItem("user_name");
    document.getElementById("user").innerHTML = "Welcome " + user_name + "  !" ;

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            purpose : "adding the room"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>" 
      document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}


