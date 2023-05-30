var mySwitch = document.getElementById("mySwitch");
var statusElement = document.getElementById("status");
if(!mySwitch.checked){
    statusElement.textContent = "OFF";
}
mySwitch.addEventListener("change", function() {
  if (this.checked) {
    statusElement.textContent = "ON";
  } else {
    statusElement.textContent = "OFF";
  }
});