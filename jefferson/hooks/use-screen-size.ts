
import { useState, useEffect } from 'react';

interface ScreenSize {
  lessThan: (width: number) => boolean;
  width: number;
  height: number;
}

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    ...screenSize,
    lessThan: (width: number) => screenSize.width < width,
  };
};

export default useScreenSize;
