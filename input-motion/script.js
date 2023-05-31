var inputs = document.querySelectorAll(".input-container input");
var placeholders = document.querySelectorAll(".input-container .placeholder");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", function() {
    var placeholder = this.nextElementSibling;
    placeholder.style.top = "-20px";
    placeholder.style.color = "white";  // color of end transition
  });
  inputs[i].addEventListener("blur", function() {
    var placeholder = this.nextElementSibling;
    if (this.value === "") {
      placeholder.style.top = "8px";
      placeholder.style.fontSize = "";
      placeholder.style.fontSize = "";
      placeholder.style.color = "#999";
    }
  });
}
