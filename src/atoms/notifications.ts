import { atom } from "jotai";

import { notificationsData } from 'dummy';

export interface NotificationInfoType {
  notificationInfo: {
    profile: string;
    name: string;
    notification: string;
    boldNotification: string | null;
    group: string | null;
    message: string | null;
    timestamp: string;
    newNotification: boolean;
  }
}

export const notificationsAtom = atom(notificationsData);