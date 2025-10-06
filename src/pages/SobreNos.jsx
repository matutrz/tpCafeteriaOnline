import "./sobreNos.css";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye, faSeedling, faHeart, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const sobreNos = () => {
    return(
        <div className="sobre-nos-page">
            <Container className="text-center py-5">
                <h1 className="page-title mb-4">Conoce Luna & Granos Café</h1>
            </Container>
    
            <section className="mision-vision-section py-4">
                <Container>
                    <Row>
                        <Col md={6} className="text-center mb-4">
                            <FontAwesomeIcon icon={faBullseye} className="vision-icon mb-3" />
                            <h2 className="section-subtitle">Nuestra Misión</h2>
                            <p>
                                Ofrecer una experiencia de café excepcional, manteniendo un compromiso inquebrantable con la calidad artesanal del grano 
                                y creando un espacio cálido y acogedor que fomente la conexión en la comunidad de Potrillo.
                            </p>
                        </Col>
                        <Col md={6} className="text-center mb-4">
                            <FontAwesomeIcon icon={faEye} className="vision-icon mb-3" />
                            <h2 className="section-subtitle">Nuestra Visión</h2>
                            <p>
                                Ser reconocidos como la cafetería de especialidad líder en la región, un referente de sostenibilidad y 
                                el destino preferido por aquellos que valoran el arte del buen tueste y la calidez humana.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container className="main">
                <Carousel fade className='carousel-custom'>
                    
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-img"
                        src="/ubicacion.jpg" 
                        alt="Ubicación de Luna & Granos Café"
                        />
                        <Carousel.Caption className="carousel-caption-custom">
                            <h3 className="slide-title">¿Dónde encontrarnos?</h3>
                            <p className="slide-desc">
                                En la localidad de Potrillo, calle Rosales al 3092. <br/>
                                Te esperamos de Lunes a Sábados: 08:00 a 14:00 y 16:00 a 22:00.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-img"
                        src="/historia.jpg"
                        alt="Fachada histórica de la cafetería"
                        />
                        <Carousel.Caption className="carousel-caption-custom">
                            <h3 className="slide-title">Nuestra Historia</h3>
                            <p className="slide-desc">
                                Nos sentimos honrados de poder brindar un buen servicio hace ya más de dos décadas, 
                                cuando abrimos nuestras puertas en Julio del año 2003.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-img"
                        src="/productos.jpg"
                        alt="Variedad de productos, tortas y café"
                        />
                        <Carousel.Caption className="carousel-caption-custom">
                            <h3 className="slide-title">Nuestros Productos</h3>
                            <p className="slide-desc">
                                Contamos con un plato para todos: fanáticos de lo dulce, salado o amargo. 
                                Desde tortas y facturas, hasta tostados, sandwiches, y un set de mate, cubrimos todos tus antojos.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                        className="d-block w-100 carousel-img"
                        src="/staff.jpg"
                        alt="Equipo de trabajo de la cafetería"
                        />
                        <Carousel.Caption className="carousel-caption-custom">
                            <h3 className="slide-title">Nuestro Staff</h3>
                            <p className="slide-desc">
                                En Luna & Granos, valoramos un entorno de trabajo tranquilo y enriquecedor. 
                                ¿Te interesa sumarte? Sentite libre de contactarte con nosotros. ¡Te esperamos!
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </Container>
        <section className="valores-section py-5">
                <Container className="text-center">
                    <h2 className="section-title mb-5">Nuestros Valores Fundamentales</h2>
                    <Row className="justify-content-center">
                        
                        <Col sm={4} className="valor-block">
                            <FontAwesomeIcon icon={faSeedling} className="valor-icon" />
                            <h3 className="valor-title">Origen Ético</h3>
                            <p>Elaboramos cada producto, desde el pan hasta el espresso, con dedicación y manos expertas.</p>
                        </Col>

                        <Col sm={4} className="valor-block">
                            <FontAwesomeIcon icon={faHeart} className="valor-icon" />
                            <h3 className="valor-title">Pasión y Calidez</h3>
                            <p>Cada taza se sirve con dedicación y el deseo de crear un momento memorable para ti.</p>
                        </Col>
                        
                        <Col sm={4} className="valor-block">
                            <FontAwesomeIcon icon={faHandsHelping} className="valor-icon" />
                            <h3 className="valor-title">Comunidad</h3>
                            <p>Apoyamos a nuestros productores locales y servimos como un punto de encuentro para todos nuestros vecinos.</p>
                        </Col>
                        
                    </Row>
                </Container>
            </section>
        </div>
    );
};

/*function sobreNos() {
    return(
        <div>
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
    </div>
    );
};*/

export default sobreNos;