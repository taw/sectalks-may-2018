document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  if (document.getElementById("password").value === "flag{...}") {
    alert("Password correct");
  } else {
    alert("Password wrong");
  }
})
