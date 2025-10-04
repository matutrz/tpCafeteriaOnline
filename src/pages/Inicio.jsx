import './inicio.css';
import { CAFE_INFO } from '../data/constants'; 
import Layout from '../components/Layout'; 

function Inicio() {
  return (
    <Layout activeLink="Inicio">
    <div className="main-block">
      <h2 className="bienvenida">¡Bienvenidos a la Cafetería Luna!</h2>
      <img
        alt=""
        src="/mainBg.png"
        width="55%"
        height="auto"
        className="mainBg"
      />

      <div className="intro">
        <p>¡Muchas gracias por visitar nuestra web!</p>

        <p>
          El equipo de Cafetería Luna te invita a visitarnos para probar
          diversos tipos de meriendas y aperitivos. Nuestro local se halla sobre
          la Av. Nazca al nro. 3092. Los horarios de atención son de 08:00 a
          14:00 y de 16:00 a 22:00. ¡Te esperamos!
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default Inicio;
