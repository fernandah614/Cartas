import Card from './Card';
import './CardList.css'; 
import Alefantaa from './imagenes/Alefantaa.png';
import Sauriciooo from './imagenes/Sauriciooo.png';
import Cabayoggo from './imagenes/Cabayoggo.png';
import Oso from './imagenes/Oso.png';
import IlumiMochis from './imagenes/IlumiMochis.png';
import Relinchitoo from './imagenes/Relinchitoo.png';

const CardList = () => {
  const tarjetas = [
    {
      imagen: Alefantaa,
      titulo: 'Alefanta',
      potencia: 23,
      velocidad: 50,
      carga: 50,
    },
    {
      imagen: Relinchitoo,
      titulo: 'Relinchito',
      potencia: 50,
      velocidad: 65,
      carga: 70,
    },
    {
      imagen: Sauriciooo,
      titulo: 'Sauricio',
      potencia: 40,
      velocidad: 44,
      carga: 65,
    },
    
  
    {
      imagen: Oso,
      titulo: 'Oso',
      potencia: 43,
      velocidad:44,
      carga: 63,
    },
    {
      imagen: IlumiMochis,
      titulo: 'IlumiMochis',
      potencia: 23,
      velocidad:94,
      carga: 100,
    },
  ];

  return (
    <div className="fondo-gradiente">
      <div className="card-list">
        {tarjetas.map((tarjeta, index) => (
          <Card
            key={index}
            imagen={tarjeta.imagen}
            titulo={tarjeta.titulo}
            potencia={tarjeta.potencia}
            velocidad={tarjeta.velocidad}
            carga={tarjeta.carga}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;