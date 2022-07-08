     
     var firebaseConfig = {
        apiKey: "AIzaSyDpLqxSejutyUjDQnCEaKyH_vkCyhOnLmo",
        authDomain: "kwitternew-a273d.firebaseapp.com",
        databaseURL: "https://kwitternew-a273d-default-rtdb.firebaseio.com",
        projectId: "kwitternew-a273d",
        storageBucket: "kwitternew-a273d.appspot.com",
        messagingSenderId: "934280659869",
        appId: "1:934280659869:web:f4b0d98419419c7585a574"
      };
      
     
        firebase.initializeApp(firebaseConfig);

  
  user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
  
  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
  
        document.getElementById("msg").value = "";
  }
  