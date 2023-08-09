import { useEffect, useState } from 'react';

const useNavScroll = () => {
  const [navState, setNavState] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);

    return () => {
      window.removeEventListener('scroll', onNavScroll);
    }
  }, []);

  return navState;
}

export default useNavScroll