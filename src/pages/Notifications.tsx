import Card from 'componentes/Card';
import Header from 'componentes/Header';

import { notifications } from '../dummy';

export default function Notifications() {
  return (
    <div className='notifications-page'>
      <Header notificationNumber={notifications.length} />
      {notifications.map((notification, index) =>
        <Card
          key={index}
          notificationInfo={notification}
        />
      )}
    </div>
  )
}
