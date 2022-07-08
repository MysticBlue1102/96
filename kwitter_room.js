     
     var firebaseConfig = {
        apiKey: "AIzaSyDpLqxSejutyUjDQnCEaKyH_vkCyhOnLmo",
        authDomain: "kwitternew-a273d.firebaseapp.com",
        databaseURL: "https://kwitternew-a273d-default-rtdb.firebaseio.com",
        projectId: "kwitternew-a273d",
        storageBucket: "kwitternew-a273d.appspot.com",
        messagingSenderId: "934280659869",
        appId: "1:934280659869:web:f4b0d98419419c7585a574"
      };
      
      // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
  
     user_name=localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML="Welcome! " + user_name +"!";
  
     function addRoom()
     {
           room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose : "adding room name"
           });
     
           localStorage.setItem("room_name", room_name);
           window.location = "kwitter_page.html";
     }
  
     function getData() {firebase.database().ref("/").on('value',
     function(snapshot) {document.getElementById("output").innerHTML =
     "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
     Room_names = childKey;
     //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' ># " +Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+= row;
     //End code
     });});}
     getData();
  
  
  
  
        function redirectToRoomName(name)
        {
              console.log(name);
              localStorage.setItem("room_name" , name);
              window.location = "kwitter_page.html";
        }
  
        function logout()
        {
              localStorage.removeItem("user_name");
              localStorage.removeItem("room_name");
              window.location = "kwitter.html";
        }