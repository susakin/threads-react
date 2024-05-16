import { NavigationContext } from '@context/NavigationProvider';
import { useContext, useEffect, useRef } from 'react';

export const useTitle = () => {
  const { state } = useContext(NavigationContext);
  const { unreadNotificationNum } = state;
  const titleRef = useRef<string>('');

  const setTitle = (title: string) => {
    if (!title) return;
    titleRef.current = title;
    const prefix = `(${unreadNotificationNum}) `;
    document.title = `${unreadNotificationNum > 0 ? prefix : ''}${title}`;
  };

  useEffect(() => {
    setTitle(titleRef.current);
  }, [unreadNotificationNum]);

  return { setTitle };
};
