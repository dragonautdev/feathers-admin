import iziToast from 'izitoast'

class NotificationGenerator {
  static generateNotification(message, onClose) {
    let notification = {
      title: message.title || '',
      message: message.text,
      position: 'topCenter',
      onClose: onClose
    }
    // notify
    switch (message.type) {
      case 'success':
        iziToast.success(notification)
        break;
      case 'warning':
        iziToast.warning(notification)
        break;
      case 'error':
        iziToast.error(notification)
        break;
      default:
        iziToast.info(notification)
        break;
    }
  }
}

export default NotificationGenerator
