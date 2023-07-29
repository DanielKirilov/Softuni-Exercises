function notify(message) {
  let notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";

  notification.addEventListener("click", hideNotification);
  function hideNotification(e) {
    let notificationBtn = e.target;
    notificationBtn.style.display = "none";
  }
}
