var switches = document.querySelectorAll(".mySwitch");
var statusElements = document.querySelectorAll(".status");

switches.forEach(function(switchElement, index) {
  var statusElement = statusElements[index];
  if(!switches.checked){
    statusElement.querySelector("span").textContent = "OFF"
  }
  switchElement.addEventListener("change", function() {
    if (this.checked) {
      statusElement.querySelector("span").textContent = "ON";
      // Puoi fare altre azioni asincrone qui in base allo stato del pulsante
    } else {
      statusElement.querySelector("span").textContent = "OFF";
      // Puoi fare altre azioni asincrone qui in base allo stato del pulsante
    }
  });
});