import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
};

export default useScrollToTop;
