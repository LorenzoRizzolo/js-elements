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
