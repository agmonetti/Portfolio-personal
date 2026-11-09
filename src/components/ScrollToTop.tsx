import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Restablece el scroll de la ventana en cada cambio de ruta,
// para que la página destino se muestre desde el principio.
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
