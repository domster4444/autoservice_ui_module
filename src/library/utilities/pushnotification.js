const triggerPushNotification = (msg) => {
  // check if the browser supports push notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    new Notification(msg);
  } else {
  }
};

export default triggerPushNotification;
