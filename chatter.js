function addUser() {

    User_name= document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="chatter.html";
}