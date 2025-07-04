document.querySelector(".btn").addEventListener("click", (event) => {
  event.preventDefault();
  let passwords = localStorage.getItem("passwords");
  if (passwords == null){
    let json = [];
    json.push({username: username.value, password: password.value});
    alert("Password Saved");
    localStorage.setItem("passwords", JSON.stringify(json))
  }
  else{
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({username: username.value, password: password.value});
    alert("Password Saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  }
});