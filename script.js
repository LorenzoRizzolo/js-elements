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
