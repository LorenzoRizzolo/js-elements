
// my function (to don't remove)
$(document).ready(function() {
    $('#searchbar').on('input', function() {
      var searchText = $(this).val().toLowerCase();
	  var count = 0
      $('.value').each(function() {
        var value = $(this).text().toLowerCase();
        if (value.indexOf(searchText) !== -1) {
          $(this).show();
		  count++
        } else {
          $(this).hide();
        }
      });
	//   console.log(searchText+": "+count)
    });
  });
  