import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  // Este hook asegura que Bootstrap solo se cargue en el cliente (navegador)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Cargar el script de Bootstrap solo en el cliente
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []); // El array vacío hace que se ejecute solo una vez, después de que el componente se monte

  return <Component {...pageProps} />;
}
