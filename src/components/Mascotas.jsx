import React from 'react';

// Importas las imágenes como módulos
import gatoImg from './gato.jpeg';
import perroImg from './perro.jpeg';
import pezImg from './pez.jpeg';

const Mascotas = () => {
  const mascotas = [
    {
      nombre: 'Destructor de mundos',
      descripcion: 'Un gato que cree que el mundo le pertenece.',
      imagen: gatoImg,  // Usas la variable importada
    },
    {
      nombre: 'Rayo veloz',
      descripcion: 'Un perro hiperactivo que quiere destruir la casa.',
      imagen: perroImg,
    },
    {
      nombre: 'Burbujas',
      descripcion: 'Un pez simpático que solo hace "blub blub".',
      imagen: pezImg,
    },
  ];

  return (
    <>
      <div style={{ padding: '20px' }}>
        <h2>Bienvenido a mi página sobre mis mascotas</h2>
        <hr />
        <p>Esta aplicación simple fue creada con React. ¡Puedes patrocinar a mis mascotas!</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {mascotas.map((mascota, index) => (
          <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
            <img src={mascota.imagen} className="card-img-top" alt={mascota.nombre} />
            <div className="card-body">
              <h5 className="card-title">{mascota.nombre}</h5>
              <p className="card-text">{mascota.descripcion}</p>
              <button
                className="btn btn-primary"
                onClick={() => alert(`Patrocinaste a ${mascota.nombre}`)}
              >
                Patrocinar
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Mascotas;
