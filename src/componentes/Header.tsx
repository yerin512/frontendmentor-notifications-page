interface NotificationNumberType {
  notificationNumber: number
}

export default function Header({ notificationNumber }: NotificationNumberType) {
  return (
    <div className='notifications__header'>
      <div className='notifications__title-wrap'>
        <h1 className='notifications__title'>Notifications</h1>
        <span className='notifications__number'>{notificationNumber}</span>
      </div>
      <p className='notification__confirm-button'>Mark all as read</p>
    </div>
  )
}
