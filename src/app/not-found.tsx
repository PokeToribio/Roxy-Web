// pages/404.tsx
import React from 'react';
import Image from 'next/image';

const Custom404 = () => {
  return (
    <div className="page-404">
      <p className="page-404__text">
        ¡Vaya! La página que buscas se ha extraviado. Roxy está en una misión para rastrearla.
      </p>
      <Image
        src="/404.png"
        alt="Roxy Migurdia Investigando"
        width={1000}     // Ajusta el ancho para hacerlo más grande
        height={750}     // Ajusta la altura proporcionalmente
        className="page-404__image"
      />
      <h1 className="page-404__heading">
        ¡Oops! Página no encontrada
      </h1>
    </div>
  );
};

export default Custom404;
