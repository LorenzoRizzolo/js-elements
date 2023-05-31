const showNotificationButton = document.getElementById('showNotificationButton');
const notification = document.getElementById('notification');

showNotificationButton.addEventListener('click', function() {
  notification.classList.toggle('show');
});
