// app/dashboard/pages/notifications/page.tsx
'use client';
import { useEffect, useState } from 'react';

interface Notification {
  id: number;
  title: string;
  content: string;
  read: boolean;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    async function fetchNotifications() {
      const res = await fetch('/api/notifications');
      const data: Notification[] = await res.json();
      setNotifications(data);
    }

    fetchNotifications();
  }, []);

  const markAsRead = async (id: number) => {
    await fetch(`/api/notifications/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ read: true }),
    });

    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };


  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`p-4 mb-2 ${
              notification.read ? 'text-gray-400' : 'text-black'
            }`}
          >
            <div className="font-semibold">{notification.title}</div>
            <p>{notification.content}</p>
            <button
              onClick={() => markAsRead(notification.id)}
              className="text-blue-500 hover:underline"
              disabled={notification.read}
            >
              {notification.read ? 'Read' : 'Mark as Read'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}