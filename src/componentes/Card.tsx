import { NotificationInfoType } from 'atoms/notifications';


export default function Card({ notificationInfo }: NotificationInfoType) {
  const {
    name,
    profile,
    notification,
    boldNotification,
    group,
    message,
    timestamp,
    newNotification } = notificationInfo;

  return (
    <div className='notification-card'>
      <section className='notification-card__left-wrap'>
        <img src={profile} alt={`${name}'s profile`} />
      </section>
      <section className='notification-card__right-wrap'>
        <div className='notification-card__first-line-wrap'>
          <p className='notification-card__name'>{name}</p>
          <p className='notification-card__notification'>{notification}</p>
          <p className='notification-card__notification--bold'>{boldNotification}</p>
          <span className='notification-card__group'>{group}</span>
          {newNotification && (
            <div className='notification-card__unread-mark'>🤩</div>
          )}
        </div>
        <p className='notification-card__time'>{timestamp}</p>
        <div className='notification-card__message-container'>
          <p className="notification-card__message">
            {message}
          </p>
        </div>
      </section>
    </div>
  )
}
