var mySwitch = document.getElementById("mySwitch");
var statusElement = document.getElementById("status");
if(!mySwitch.checked){
    statusElement.textContent = "OFF";
}
mySwitch.addEventListener("change", function() {
  if (this.checked) {
    statusElement.textContent = "ON";
    // Puoi fare altre azioni asincrone qui in base allo stato del pulsante
  } else {
    statusElement.textContent = "OFF";
    // Puoi fare altre azioni asincrone qui in base allo stato del pulsante
  }
});