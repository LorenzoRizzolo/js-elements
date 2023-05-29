var input = document.getElementById("myInput");
    var placeholder = document.getElementById("placeholder");
    input.addEventListener("focus", function() {
      placeholder.style.top = "-20px";
      // placeholder.style.fontSize = "100%";
    });
    input.addEventListener("blur", function() {
      if (input.value === "") {
        placeholder.style.top = "8px";
        placeholder.style.fontSize = "";
      }
});