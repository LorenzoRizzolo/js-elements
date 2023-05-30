var inputs = document.querySelectorAll(".input-container input");
var placeholders = document.querySelectorAll(".input-container .placeholder");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", function() {
    var placeholder = this.nextElementSibling;
    placeholder.style.top = "-20px";
  });
  
  inputs[i].addEventListener("blur", function() {
    var placeholder = this.nextElementSibling;
    if (this.value === "") {
      placeholder.style.top = "8px";
      placeholder.style.fontSize = "";
    }
  });
}
