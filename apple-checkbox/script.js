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

var switch2 = document.getElementById("choose");
var status2 = document.getElementById("choose-status");
if(!switch2.checked){
  status2.textContent = "Email";
}
switch2.addEventListener("change", function() {
  if(this.checked){
      status2.textContent = "Phone";
  }else{
    status2.textContent = "Email";
  }
});