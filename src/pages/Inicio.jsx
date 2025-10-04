import './Inicio.css';
import Carousel from 'react-bootstrap/Carousel';

function Inicio() {
  return (
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
          la calle Rosales al nro. 3092. Los horarios de atención son de 08:00 a
          14:00 y de 16:00 a 22:00. ¡Te esperamos!
        </p>
      </div>

    <Carousel fade className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/ubicacion.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>¿Dónde encontrarnos?</h3>
          <p>En la localidad de Potrillo, calle Rosales al 3092, podés encontrarnos de Lunes a Sábados
            desde las 08:00 a las 14:00 y 16:00 a 22:00
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img
          className="d-block w-100"
          src="/historia.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Nuestra historia</h3>
          <p>Nos sentimos honrados de poder brindar un buen servicio hace ya más de dos décadas, cuando abrimos
            nuestras puertas en julio del año 2003.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/productos.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Nuestros productos</h3>
          <p>
            Tanto si sos fanático de lo dulce así como si tenés un paladar más salado, o incluso si lo tuyo es lo amargo,
            contamos con un plato para vos. Tortas, facturas, tostados y sandwiches, así como café, té e incluso un set de mate, 
            entre todos los tipos de productos que ofrecemos en nuestra cafetería.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/staff.jpg"
          alt="Fourth slide"
        />
      <Carousel.Caption>
          <h3>Nuestro staff</h3>
          <p>
            En Cafetería Luna, nos es grato poder brindar un entorno de trabajo tranquilo y enriquecedor
            que les permite a nuestros empleados tanto ingresar al mundo laborar como crecer profesionalmente.
            ¿Te interesa sumarte? Sentite libre de contactarte con nosotros por cualquiera de los canales
            disponibles ¡Te esperamos!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


      <div className="footer">
          <p>Cafetería Luna 2025®</p>
      </div>
    </div>
  );
};

export default Inicio;
