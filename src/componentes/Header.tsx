import { useAtom } from 'jotai'
import { notificationsAtom } from 'atoms/notifications';

export default function Header() {
  const [notifiactions, setNotifications] = useAtom(notificationsAtom);

  const notificationNumber = notifiactions.filter(({ newNotification }) => newNotification).length;

  const removeNewNotification = () => notifiactions.map(notification => ({ ...notification, newNotification: false }))

  const handleClickAllRead = () => {
    setNotifications(removeNewNotification);
  }

  return (
    <div className='notifications__header'>
      <div className='notifications__title-wrap'>
        <h1 className='notifications__title'>Notifications</h1>
        <span className='notifications__number'>{notificationNumber}</span>
      </div>
      <button
        className='notification__confirm-button'
        onClick={handleClickAllRead}
      >
        Mark all as read
      </button>
    </div>
  )
}
