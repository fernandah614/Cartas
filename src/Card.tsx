type CardProps = {
  imagen: string;
  titulo: string;
  potencia: number;
  velocidad: number;
  carga: number;
};

const Card = ({ imagen, titulo, potencia, velocidad, carga }: CardProps) => {
  const ver = () => {
    alert(
      `El mochis es ${titulo}, la potencia es: ${potencia}, la velocidad: ${velocidad}, la carga: ${carga}`
    );
  };

  return (
    <div className="card">
      <img src={imagen} alt={titulo} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        <p>🔥 Potencia: {potencia}</p>
        <p>⚡ Velocidad: {velocidad}</p>
        <p>📦 Carga: {carga}</p>
        <button className="botones" onClick={ver}>
          Ver👀
        </button>
      </div>
    </div>
  );
};

export default Card;
