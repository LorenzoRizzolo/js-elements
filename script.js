// card motions
const boxes = document.querySelectorAll('.box');
let isScrolling = false;
boxes.forEach(function(box) {
  box.addEventListener('click', function() {
    this.classList.toggle('open');
  });
});

// page load
var loadingDiv = document.getElementById('loading');
    
    function showLoadingDiv() {
      loadingDiv.style.display = 'block';
    }
    
    function hideLoadingDiv() {
      loadingDiv.style.display = 'none';
    } 
    
    document.addEventListener('DOMContentLoaded', function() {
      showLoadingDiv();
      
      var minDisplayTime = 500; // Durata minima in millisecondi (3 secondi)
      var loadStartTime = new Date().getTime();
      
      window.addEventListener('load', function() {
        var loadEndTime = new Date().getTime();
        var loadTime = loadEndTime - loadStartTime;
        
        if (loadTime < minDisplayTime) {
          var delayTime = minDisplayTime - loadTime;
          setTimeout(hideLoadingDiv, delayTime);
        } else {
          hideLoadingDiv();
        }
      });
    });


var inputs = document.querySelectorAll(".input-container input");
var placeholders = document.querySelectorAll(".input-container .placeholder");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", function() {
    var placeholder = this.nextElementSibling;
    placeholder.style.top = "-20px";
    placeholder.style.color = "black";
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
