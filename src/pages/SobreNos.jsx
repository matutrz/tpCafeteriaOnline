import "./sobreNos.css";
import Carousel from 'react-bootstrap/Carousel';
import Layout from '../components/Layout'; 
import { Container } from "react-bootstrap";


function sobreNos() {
    return(
        <Layout activeLink="SobreNos">
            <h1 id="titulo">Sobre Nosotros</h1>
            <Container className="main">
                    <Carousel fade className='carousel'>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="/ubicacion.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3 class="slideTitle">¿Dónde encontrarnos?</h3>
                            <p class="slideDesc">En la localidad de Potrillo, calle Rosales al 3092, podés encontrarnos de Lunes a Sábados
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
                            <h3 class="slideTitle">Nuestra historia</h3>
                            <p class="slideDesc">Nos sentimos honrados de poder brindar un buen servicio hace ya más de dos décadas, cuando abrimos
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
                            <h3 class="slideTitle">Nuestros productos</h3>
                            <p class="slideDesc">
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
                            <h3 class="slideTitle">Nuestro staff</h3>
                            <p class="slideDesc">
                                En Cafetería Luna, nos es grato poder brindar un entorno de trabajo tranquilo y enriquecedor
                                que les permite a nuestros empleados tanto ingresar al mundo laboral como crecer profesionalmente.
                                ¿Te interesa sumarte? Sentite libre de contactarte con nosotros por cualquiera de los canales
                                disponibles ¡Te esperamos!
                            </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                </Container>
            </Layout>
    );
    
};

export default sobreNos;