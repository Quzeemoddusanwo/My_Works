function talk(){
    var know = {
        "Who are you" : "Hello, Code with Quzeem here",
        "How are you" : "Good :)",
        "What can i do for you" : "Please Give us A Follow & Like.",
        "Your followers" : "I have my family of 5000 members, i don't have follower, have supportive family",
        "ok" : "Thank you so much",
        "Bye" : "Okay! Will next soon...."
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if(user in know){
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    }else{
        document.getElementById("chatLog").innerHTML = "Sorry,I didn't understand <br>";
    }
}