import { useAtomValue } from 'jotai'
import { notificationsAtom } from 'atoms/notifications';

import Card from 'componentes/Card';
import Header from 'componentes/Header';

export default function Notifications() {
  const notifications = useAtomValue(notificationsAtom);

  return (
    <div className='notifications-page'>
      <Header />
      {notifications.map((notification, index) =>
        <Card
          key={index}
          notificationInfo={notification}
        />
      )}
    </div>
  )
}
