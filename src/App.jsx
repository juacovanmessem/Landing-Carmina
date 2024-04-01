import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Carmina from '../src/images/foto-redes.jpg'
import agustin from '../src/images/AGUSTIN-GRAS.jpg'
import judith from '../src/images/JUDITH-RODRIGUEZ.jpg'
import maru from '../src/images/maru-gonzalez.jpg'
import f1 from '../src/images/flyer.jpg'
import v1 from '../src/videos/t-paciente1.mp4'
import v2 from '../src/videos/t-paciente2.mp4'
import v4 from '../src/videos/t-terapeuta-1.mp4'
import v5 from '../src/videos/t-terapeuta-2.mp4'
import v6 from '../src/videos/t-terapeuta-3.mp4'
import bg1 from '../src/images/9.jpg'
import bg2 from '../src/images/10.jpg'
import bg3 from '../src/images/3.jpg'
import bg4 from '../src/images/4.jpg'



function App() {
  const [open, setOpen] = useState(false);
  const [lg1Show, setLg1Show] = useState(false);
  const [lg2Show, setLg2Show] = useState(false);
  const [lg3Show, setLg3Show] = useState(false);

  const [index1, setIndex1] = useState(0);

  const handleSelect1 = (selectedIndex1) => {
    setIndex1(selectedIndex1);
  };

  const [index2, setIndex2] = useState(0);

  const handleSelect2 = (selectedIndex2) => {
    setIndex2(selectedIndex2);
  };



  // const CountdownTimer = ({ targetDate }) => {
  //   const calculateTimeLeft = () => {
  //     const difference = +new Date(targetDate) - +new Date();
  //     let timeLeft = {};
  
  //     if (difference > 0) {
  //       timeLeft = {
  //         Días: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //         Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //         Minutos: Math.floor((difference / 1000 / 60) % 60),
  //         Segundos: Math.floor((difference / 1000) % 60)
  //       };
  //     }
  
  //     return timeLeft;
  //   };
  
  //   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setTimeLeft(calculateTimeLeft());
  //     }, 1000);
  
  //     return () => clearTimeout(timer);
  //   });
  
  //   const timerComponents = [];

  //   Object.keys(timeLeft).forEach((interval) => {
  //     if (!timeLeft[interval]) {
  //       return;
  //     }
  
  //     timerComponents.push(
  //       <span key={interval}>
  //         {timeLeft[interval]} {interval}{' '}
  //       </span>
  //     );
  //   });
  
  //   return (
  //     <div>
  //       {timerComponents.length ? timerComponents :<div><p>Lo sentimos la oferta ya ha terminado, pero igual puedes inscribirte aqui abajo ↓↓</p>
  //       </div> }
  //     </div>
  //   );
  // };

  return (
    <>
      <section id='main'>
        {/* section main hero */}
        <div className="px-4 py-5 text-center text-black" style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
        }}>
          <div className='bg-faded-1 py-2'>
            <h1 className="font-montserrat">ABORDAJE INTEGRAL DEL TRAUMA EN ADULTOS </h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead fs-4 fw-bold mb-4">Programa Online para profesionales de la salud Mental</p>
              <p className="lead mb-4">Conviértete en un profesional informado en Trauma y descubre un modelo de abordaje que integra: Gestalt, neurociencias y terapia corporal en el tratamiento del trauma complejo en adultos.</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a href='#methodologies' className="btn btn-outline-dark btn-lg px-4">Plan de estudios</a>
                <a href='#professionals' className="btn btn-outline-dark btn-lg px-4">Equipo docente</a>
                <a href='#recorded-testmonies' className="btn btn-outline-dark btn-lg px-4">Testimonios</a>
              </div>
              <a href="#payments" className="btn btn-outline-light bg-cyan btn-lg px-4 gap-3 mt-3">Reserva tu lugar en el curso</a>
          </div>
          </div>
        </div>
      </section>
      <section>
        {/* section promotion */}
        <div className="px-4 py-5 bg-cyan text-black row g-0">
          <div className=' col-lg-6 col-12 row g-0 justify-content-center'>  
          <img src={f1} alt="Flyer del curso ofrecido" className='img-fluid rounded img-height p-4 col-12 col-md-10 col-lg-6 w-auto' />   
          </div>
          <div className="col-lg-6 col-12 justify-content-center px-4 text-black">
            <p className="lead fw-bold mb-4 text-center">Aprende a trabajar con tus pacientes desde la Terapia somática - compasiva y ayúdalos a vivir una vida más plena y conectada con su ser </p>
            <p className="lead mb-4">Seguramente ya te diste cuenta de que un gran porcentaje de las consultas en psicoterapia se deben en el fondo a las consecuencias en adultos de experiencias adversas de la infancia y adolescencia.</p>
            <p className="lead mb-4">Las llamadas Heridas Emocionales de la Infancia o secuelas del trauma complejo están presentes en la base del sufrimiento de muchos de nuestros pacientes.</p>            
            <p className="lead mb-4">Baja autoestima, Dependencia Emocional, Trastornos de Ansiedad, Enfermedades psicosomáticas Relaciones disfuncionales Adicciones de todo tipo pueden ser la manifestación del trauma de la infancia no resuelto.</p>            
            <p className="lead mb-4"> Anímate a dar un salto de calidad en tu profesión.</p>
          </div>
          <div className='col-12 text-center'>
            <h2 className="lead section-title fs-4 fw-bold py-4"> En el siguiente video conocerás porqué es importante que incorpores este enfoque revolucionario en tus sesiones de psicoterapia</h2>
            <iframe 
              width="auto" 
              height="500" 
              src="https://www.youtube.com/embed/LueqfqRicRI" 
              frameborder="0" 
              allowfullscreen
              className='p-4 col-12 col-md-10'>
            </iframe>
          </div>
        </div>
      </section>
      <section>
        {/* section storyTelling */}
        <div className="px-4 py-5 text-black" style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
        }}>
          <div className="col-lg-11 p-3 mx-auto bg-faded-2">
            <p className="display-6 mb-4 text-center fw-bold">Una breve historia </p>
            <p className="lead mb-4 text-align-justify">Si estás acá es porque estás buscando nuevas maneras de acompañar a tus pacientes y las herramientas con las que cuentas te están resultando insuficientes. </p>
            <p className="lead mb-4 text-align-justify">Yo tambien estuve ahi… y me sentía muy culpable por no poder ayudar realmente a aliviar el sufrimiento de mis pacientes. En especial de aquellos que habían compartido conmigo situaciones muy dolorosas de su infancia y adolescencia.</p>
            <Button
              onClick={() => setOpen(!open) }
              aria-controls="example-collapse-text"
              aria-expanded={open}
              variant='outline-dark'
            >
              Ver {open? 'menos' : 'más'}
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text">
                <p className="lead my-4 text-align-justify">Entendí que las personas que han sufrido experiencias adversas en la infancia tales como abandono, abuso, negligencia, violencia en diferentes formas, tienen algo en común. Hay una parte de ellas que quedó en el pasado y que encierra cientos de imágenes emociones y sensaciones corporales que guardadas bajo llave para defenderse del  dolor. Y todo ese esfuerzo por dejar atrás ese pasado muchas veces se lleva consigo aspectos como la confianza, la creatividad, la capacidad de disfrute, el autocuidado y la posibilidad de vivir una vida en plenitud.</p>            
                <p className="lead mb-4 text-align-justify">Puedo entender lo que me pasa racionalmente pero me cuesta no desbordarme emocionalmente.</p>
                <p className="lead mb-4 text-align-justify">No puedo confiar en nadie porque siento que todos pueden lastimarme.</p>
                <p className="lead mb-4 text-align-justify">Cuando alguien me grita o confronta quiero desaparecer… me hago chiquitita y me paralizo.</p>
                <p className="lead mb-4 text-align-justify">Elijo siempre el mismo tipo de parejas y es como si no mereciera que me amen bien.</p>
                <p className="lead mb-4 text-align-justify">Estas son algunas de las frases que dicen mis pacientes con frecuencia y que son la puerta de entrada a situaciones mucho más profundas que afectaron su autoestima, su capacidad de resiliencia y su personalidad.</p>
                <p className="lead mb-4 text-align-justify">El trauma está en el cuerpo y un sistema nervioso desregulado es la base de estas manifestaciones. Por eso como terapeutas necesitamos saber cómo intervenir en estos casos para brindar un acompañamiento idóneo y efectivo.</p>
                <p className="lead mb-4 text-align-justify">Imagina poder ofrecer a tus clientes una terapia significativa, centrada en abordar las raíces profundas del trauma y facilitar el proceso de curación descubre el poder de la integración cuerpo mente basada en evidencia científica. </p>
              </div>
            </Collapse>         
          </div>
        </div>
      </section>
      <section>
        {/* section timer */}
        <div className="px-4 py-5 bg-magenta text-center text-black">
          <h1 className="display-6 fw-bold">OFERTA EXCLUSIVA PARA ARGENTINA</h1>
          {/* <div className='lead fw-bold'>
            <CountdownTimer targetDate="2024-03-20T00:00:00" />
          </div> */}
          <div className='lead'>
            <p><span className='fw-bold fs-3'> 30% OFF:</span><span className='fs-5'> 5 cuotas fijas de </span><span className='fs-3'> $42.000</span><span className='fs-5'> o de contado </span><span className='fs-3'> U$S 197</span></p>
          </div>
          <a href='#payments' className="btn btn-outline-dark btn-lg px-4 gap-3 mt-3 fw-bold">Reserva tu lugar ahora</a>
        </div>
      </section>
      <section id='methodologies'>
        {/* section program */}
        <div className='p-4'  style={{
        backgroundImage: `url(${bg4})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
        }}>
          <div className='bg-cream container-md p-4 text-center'>
            <header>
              <h1 className='fw-bold'>¿Qué aprenderás?</h1>
            </header>
            <article>
              <div className='text-start p-3 border border-warning-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Las bases neurocientíficas del trauma complejo en adultos.</span>
              </div>
              <div className='text-start p-3 border border-warning-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Las teorías psicológicas más importantes vinculadas con el enfoque de la psicotraumatología.</span>
              </div>
              <div className='text-start p-3 border border-warning-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Los Principios de la Terapia Gestalt y la Terapia corporal Bioenergética aplicadas al tratamiento de personas que sufrieron experiencias adversas en la infancia.</span>
              </div>
              <div className='text-start p-3 border border-warning-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  El modelo de abordaje integral de <span className='fw-bold'>Terapia Somático Compasiva </span> que integra recursos teóricos metodológicos y actitudinales en el abordaje del Trauma Complejo.</span>
              </div>
            </article>
            <div>
              <a href='https://drive.google.com/file/d/1RMJlizJSzjL9K2z0eCU2j9UqWog6F3Zg/view' target='_blank' className="btn btn-outline-dark btn-lg px-4 gap-3 mt-3 fw-bold">Ver programa completo</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* section methodologies */}
        <div className="pt-5 bg-magenta row g-0 justify-content-center">
          <div className='col-10 col-md-8 col-lg-7 bg-cream rounded-box mb-4'>
            <p className='px-5 pt-5 display-6 fw-bold'>Propuesta de formación OnLine</p>
            <p className='px-5 pb-5 lead'>El Programa de Formación OnLine se basa en una metodología teórico vivencial que permite integrar los contenidos a través de la propia vivencia y supervisar con los docentes todas tus inquietudes en las mentorías en vivo. Cuenta con:</p>
          </div>
          <div className='col-12 row'>
            <div  className='col-12 row g-0 justify-content-center div-right'>
              <div className='col-12 col-md-10 bg-cream rounded-box mb-4'><p className='py-4 ps-5 lead col-10'><strong className='fw-bold'>CLASES GRABADAS:</strong> Cada clase cuenta con una parte teórica grabada donde aprenderás las bases teóricas y científicas del Abordaje .</p></div>
            </div>
            <div className='col-12 row g-0 justify-content-center div-right'>
              <div className='col-12 col-md-10 bg-cream rounded-box mb-4'><p className='py-4 ps-5 lead col-10'><strong className='fw-bold'>MENTORÍAS EN VIVO:</strong> espacio grupal de intercambio para profundizar en algunos conceptos, realizar prácticas y responder preguntas sobre el material teórico.</p></div>
            </div>
            <div  className='col-12 row g-0 justify-content-center div-right'>
              <div className='col-12 col-md-10 bg-cream rounded-box mb-4'><p className='py-4 ps-5 lead col-10'><strong className='fw-bold'>TALLERES VIVENCIALES:</strong> Participarás de workshops sobre temáticas específicas con profesionales invitados referentes en el campo del abordaje integral en Trauma.</p></div>
            </div>
            <div className='col-12 row g-0 justify-content-center div-right'>
              <div className='col-12 col-md-10 bg-cream rounded-box mb-4'><p className='py-4 ps-5 lead col-10'><strong className='fw-bold'>MATERIAL DE ESTUDIO:</strong> accederás a bibliografía específica para cada tema además de una base libros en pdf y artículos científicos con más de 50 ejemplares disponibles.</p></div>
            </div>
            <div  className='col-12 row g-0 justify-content-center div-right'>
              <div className='col-12 col-md-10 bg-cream rounded-box mb-4'><p className='py-4 ps-5 lead col-10'><strong className='fw-bold'>MATERIAL COMPLEMENTARIO:</strong> videos, films y temas musicales que podrás usar para armar tu propia batería de recursos de asistencia y psicoeducación.</p></div>
            </div>
            <div className='col-12 row g-0 justify-content-center div-right'>
              <div className='col-12 col-md-10 bg-cream rounded-box mb-4'><p className='py-4 ps-5 lead col-10'><strong className='fw-bold'>COMUNIDAD EXCLUSIVA DE INTERCAMBIO:</strong> formarás parte de una comunidad exclusiva de acompañamiento a través de Whatsapp durante todo el cursado.</p></div>
            </div>
            <div className='col-12 row g-0 justify-content-center div-right'>
              <div className='col-12 col-md-10 bg-cream rounded-box mb-4'><p className='py-4 ps-5 lead col-10'><strong className='fw-bold'> MODALIDAD DE CURSADO</strong>: La propuesta de Cursado es Online a través de la Plataforma ZOOM y el material complementario estará disponible en una plataforma de E Learning de por vida. Podrás hacer consultas de manera asincrónica y ver las clases en el momento que lo decidas.</p></div>
            </div>
            <div className='col-12 row g-0 justify-content-center div-right'>
              <div className='col-12 col-md-10 bg-cream rounded-box mb-4'><p className='py-4 ps-5 lead col-10'><strong className='fw-bold'>DESTINATARIOS</strong>: psicologos, psiquiatras y estudiantes avanzados de la salud mental; profesionales de la educación y el desarrollo social (podran realizar el programa introductorio: módulos 1 y 2) </p></div>
            </div>
          </div>
        </div>
      </section>
      <section id='professionals'>
        {/* section professionals */}
        <div className='row g-0 justify-content-evenly py-5'  style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
        }}>
          <div className='col-12 col-md-11'>
            <div className='p-4 mb-4 bg-cream row g-0 align-items-center'>
              <div className='text-center col-12 col-md-6'>
                <img src={Carmina} alt="" className="img-height img-fluid" />
                <div className='bg-magenta text-black fw-bold p-2'>
                  <h3>
                    Soy Carmina Varela
                  </h3>
                  <h5>
                    Psicóloga Gestáltica con más de 20 años de experiencia profesional
                  </h5>
                </div>
              </div>
              <div className='col-12 col-md-6 lead p-4 lh-sm'>
                <h2>Directora del Programa y Docente principal</h2>
                <p>
                  Desde Siempre mi búsqueda y mi pasión fueron dos:
                  <ul>
                    <li>
                      Integrar el cuerpo y las emociones al trabajo terapéutico
                    </li>
                    <li>
                      Acercar la psicología a la vida cotidiana
                    </li>
                  </ul>
                </p>
                <p>
                  Esa búsqueda me llevó al teatro, la expresión corporal, las constelaciones familiares, la Programación Neurolinguistica y la Terapia bioenergética buscando mi propia transformación personal y profesional.
                </p>
                <p>
                  Me especialicé en terapia gestáltica y llevo muchos  años acompañando  personas de diferentes lugares de latinoamérica  como terapeuta, formadora y coordinadora de talleres de desarrollo humano.
                </p>
                <p>
                  En esto últimos años me he formado en diferentes enfoque orientados al abordaje en adultos de las secuelas del trauma de la infancia porque entendi que esa integración entre neurociencia y corporalidad era lo que necesitaba.  
                </p>
                <p>
                  Hoy quiero compartir con mis colegas este recorrido a través de mi sistema de Terapia somático Compasiva que incluye recursos de psicotraumatología, neurodanza y Resiliencia e Indagación Compasiva, para ofrecerles una oportunidad de impactar de manera profunda en la vida de sus pacientes y trabajar en la propia sanación.
                </p>
              </div>
            </div>
          </div>
          <div className='col-12 section-subtitle text-light pb-2'><h2>DOCENTES INVITADOS </h2></div>
          <div className='col-11 col-md-5 col-lg-3 my-3'>
            <div className="card bg-cream">
              <img src={agustin} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title bg-magenta text-black px-2">Agustín Gras</h5>
                <p className="card-text">Certificación en Psicotraumatología CCTP III - especialización en Trauma Complejo y Trastornos Disociativos.</p>
                <Button className='bg-magenta text-black' variant='outline-info' onClick={() => setLg1Show(true)}>Mas información</Button>
              </div>
            </div>
            <Modal size="lg" show={lg1Show} onHide={() => setLg1Show(false)} aria-labelledby="example-modal-sizes-title-lg" >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                Agustín Gras
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ul className='lead'>
                  <li>Licenciado en Psicología por la Universidad Católica de Córdoba, Argentina.</li>
                  <li>Maestría en Psicoterapias Conductuales-Contextuales por la Universidad de Almería, España.</li>
                  <li>Egresado del programa de posgrado en Estrés Postraumático del Trauma Center.</li>
                  <li>Terapeuta EMDR.</li>
                  <li>Fundador de Grialis, espacio de asistencia a sobrevivientes de trauma por maltrato, violencia y abuso.</li>
                  <li>Docente en las diplomaturas de Psicotraumatología del Newman Institute, México.</li>
                </ul>
              </Modal.Body>
            </Modal>
          </div>
          <div className='col-11 col-md-5 col-lg-3 my-3'>
            <div className="card bg-cream">
              <img src={maru} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title bg-magenta text-black px-2">Mariana Indira González</h5>
                <p className="card-text">Psicoterapeuta Gestáltica - Psicóloga Forense Fuero Penal Formación en Litigio con perspectiva de Género.</p>
                <Button className='bg-magenta text-black' variant='outline-info' onClick={() => setLg2Show(true)}>Mas información</Button>
              </div>
            </div>
            <Modal size="lg" show={lg2Show} onHide={() => setLg2Show(false)} aria-labelledby="example-modal-sizes-title-lg" >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Mariana Indira González
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ul className='lead'>
                  <li>Lic en Psic Mariana Indira González. Univ Nac de Tucumán</li>
                  <li>Psicoterapeuta Gestáltica - Psicóloga Forense Fuero Penal</li>
                  <li>Formación en Litigio con perspectiva de Género, Evaluaciones Psicodiagnósticas</li>
                  <li>Ex perito Oficial Min. Público Fiscal Maestrando en Psicología Criminal ( Univ. Europea del Atlántico)</li>
                  <li>Asesora en Salud Sexual Integral para Adolescentes Min. De Salud de Nación y PNUD</li>
                  <li>Acompañamiento a Comunidades vulnerables : Miembro Fundadora Fundación Aceptarte y Programa de Orquestas y Coros del Bicentenario Min. De Educación de Nación.</li>
                  <li>Capacitadora a docentes en el Noa (Min de Educación, FAAIE y Acompañantes Terapéuticos en Centro Amatista)</li>
                </ul>
              </Modal.Body>
            </Modal>
          </div>
          <div className='col-11 col-md-5 col-lg-3 my-3'>
            <div className="card bg-cream">
              <img src={judith} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title bg-magenta text-black px-2">Judith Rodriguez</h5>
                <p className="card-text">Psicoterapeuta gestáltica - Psicoterapeuta corporal con orientación Reicheana, Especialista en Eneagrama</p>
                <Button className='bg-magenta text-black' variant='outline-info' onClick={() => setLg3Show(true)}>Mas información</Button>
              </div>
            </div>
            <Modal size="lg" show={lg3Show} onHide={() => setLg3Show(false)} aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Judith Rodriguez
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ul className='lead'>
                  <li>Lic Judith Rodriguez - Licenciada en Psicología por la Universidad Nacional de Córdoba, Argentina.</li>
                  <li>Psicoterapeuta Gestáltica y Psicoterapeuta Corporal con orientación Reichiana, con más de 20 años de experiencia clínica</li>
                  <li>Especialista en Eneagrama y Profesora de Respiración Ovárica.</li>
                  <li>Formación complementaria en Psicooncología y Terapia Cognitiva Conductual.</li>
                  <li>Actualmente cursando la Formación en Psicología Positiva.</li>
                </ul>
              </Modal.Body>
            </Modal>
          </div>
          <a href='#payments' className="btn btn-outline-light btn-lg px-4 gap-3 mt-3 fw-bold col-5">Reserva tu lugar ahora</a>
        </div>
      </section>
      <section id='recorded-testmonies'>
        {/* section testimonies -bubbles-*/}
        <div className="px-4 py-5 bg-cyan">
          <div className='row g-0 justify-content-evenly'>
            <div className='text-center  text-white mt-2 mb-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chat-square-quote-fill filter-shadow" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm7.194 2.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.5 2.5 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.5 2.5 0 0 0-.228-.4 1.7 1.7 0 0 0-.227-.273 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z"/>
              </svg>
              <span className='p-4 fs-3 text-white'>Comentarios</span>
            </div>
            <div className='bubble col-12 col-md-5 col-lg-4 mb-4 mx-2'>
              <div className='text-end text-gold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mx-2 mt-2" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                </svg>  
              </div>
              <p className='p-5 lead fst-italic'>Me resulta cómodo tener las clases grabadas, asi si falto a una clase la puedo ver después y también volver a repasar. Son muy claras las clases teóricas.</p>
              <div className='text-start text-gold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mx-2 mt-2" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                </svg>  
              </div>
            </div>
            <div className='bubble col-12 col-md-5 col-lg-4 mb-4 mx-2'>
              <div className='text-end text-gold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mx-2 mt-2" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                </svg>  
              </div>
              <p className='p-5 lead fst-italic'>Agradezco el tiempo que tomé para la formación, para mi y para las personas con quienes trabajo. A mi me sirvió sobre todo para mirarme con amor y entendimiento.</p>
              <div className='text-start text-gold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mx-2 mt-2" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                </svg>  
              </div>
            </div>
            <div className='bubble col-12 col-md-5 col-lg-4 mb-4 mx-2'>
              <div className='text-end text-gold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mx-2 mt-2" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                </svg>  
              </div>
              <p className='p-5 lead fst-italic'>Me sirvió para profundizar el marco desde el cual leer e intervenir en el proceso con pacientes. En lo personal, para sumar coordenadas a mi propio trabajo terapéutico. </p>
              <div className='text-start text-gold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mx-2 mt-2" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                </svg>  
              </div>
            </div>
            <div className='bubble col-12 col-md-5 col-lg-4 mb-4 mx-2'>
              <div className='text-end text-gold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mx-2 mt-2" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                </svg>  
              </div>
              <p className='p-5 lead fst-italic'>Amplió mucho más mis conocimientos previos y mi panorama de ver las cosas en la vida, ayudándome a revisar mi interior y detenerme para poder sanar y seguir adelante.</p>
              <div className='text-start text-gold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-quote mx-2 mt-2" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
                </svg>  
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* section videos */}
        <div className='row g-0 justify-content-center py-4 bg-cream'>
          <div className="section-title py-2">
            <h2>Ellos ya hicieron su experiencia y te la cuentan asi: </h2>
          </div>
          <div className='col-12 col-md-10 col-lg-6 text-center faq-header mb-4 fw-bold'>
            <h3 className='text-gold-underline'>Pacientes</h3>
            <Carousel activeIndex={index1} onSelect={handleSelect1} data-bs-theme="dark">
              <Carousel.Item className='text-center' interval={200000}>
                <video src={v1}  className='img-height' controls></video>
                <div className='pb-4'>
                  <h3>Corina Alvarez</h3>
                </div>
              </Carousel.Item>
              <Carousel.Item className='text-center'  interval={200000}>
                <video src={v2}  className='img-height' controls></video>
                <div className='pb-4'>
                  <h3>Miguel Blanco</h3>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className='col-12 col-md-10 col-lg-6 text-center'>
            <h3 className='text-gold-underline'> Terapeutas </h3>
            <Carousel activeIndex={index2} onSelect={handleSelect2} data-bs-theme="dark">
              <Carousel.Item className='text-center' interval={200000}>
                <video src={v5}  className='img-height' controls></video>
                <div className='pb-4'>
                  <h3>Gabriela Buratto</h3>
                </div>
              </Carousel.Item>
              <Carousel.Item className='text-center' interval={200000}>
                <div className=' object-fit-fill w-100 h-100 img-height'>
                  <video src={v4} className='img-fluid' controls></video>
                  <div className='pb-4'>
                    <h3>Belén Maltez Posse</h3>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className='text-center' interval={200000}>
                <video src={v6} className='img-height' controls></video>
                <div className='pb-4'>
                  <h3>Julieta Antonucci</h3>
                </div>
              </Carousel.Item>
              {/* <Carousel.Item className='text-center' interval={200000}>
                <video src="./src/videos/t-taller.mp4"  className='img-height' controls></video>
                <div className='pb-4'>
                  <h3>Taller de niños</h3>
                </div>
              </Carousel.Item> */}
            </Carousel>
          </div>
        </div>
      </section>
      <section>
        {/* section testimonies 2 -utilities-*/}
        <div className="px-4 py-5 bg-cyan">
          <div className='container-md'>
            <div className='text-center p-4 fs-3 text-white'>
              <h3>¿Para qué te servirá esta Formación?</h3>
            </div>
            <article>
              <div className='text-start p-3 border border-danger-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Para conocerte más en profundidad, "pescarte" a tí y también ampliar tu abordaje profesional.</span>
              </div>
              <div className='text-start p-3 border border-danger-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Para tener más herramientas para tus sesiones.</span>
              </div>
              <div className='text-start p-3 border border-danger-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Aprenderás que tus padres se equivocaron, pero que ellos hicieron lo que pudieron para criarte, que hay que perdonarse a uno mismo, abrazarse, amar a ese niño interior, respirar profundo y seguir; tratar de perdonar, porque el perdón sana, cargar con culpas u odio no.</span>
              </div>
              <div className='text-start p-3 border border-danger-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Es una experiencia que permite conectar con la historia personal en un espacio cuidado.</span>
              </div>
              <div className='text-start p-3 border border-danger-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Te otorga una mirada nueva, distinta y enriquecedora.</span>
              </div>
              <div className='text-start p-3 border border-danger-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Este curso es recomendado para todos los interesados en explorar y sanar las heridas de la infancia.</span>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section>
        {/* section bonusses */}
        <div className='p-4'  style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
        }}>
          <div className='bg-cream container-md p-4 text-center'>
            <header>
              <h1 className='fw-bold'>Con tu inscripción obtendras:</h1>
            </header>
            <article>
              <div className='text-start p-3 border border-info-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Plantilla con recursos de psicoeducación para trabajar con tus consultantes. Incluye Test cualitativos, Ebooks y Workbooks. <span  className='lead'> Valuado en: U$S <s>49</s></span></span>
              </div>
              <div className='text-start p-3 border border-info-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Listado de Films y música relacionados con la temática. <span  className='lead'> Valuado en: U$S<s>29</s></span></span>
              </div>
              <div className='text-start p-3 border border-info-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Test específicos para evaluar trauma complejo. <span  className='lead'> Valuado en: U$S<s>47</s></span></span>
              </div>
              <div className='text-start p-3 border border-info-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Clases grabadas. <span  className='lead'> Valuado en: U$S <s>37</s></span></span>
              </div>
              <div className='text-start p-3 border border-info-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Plantilla de Recursos de Regulación del Sistema Nervioso. <span  className='lead'> Valuada en: U$S <s>29</s></span></span>
              </div>
              <div className='text-start p-3 border border-info-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Acceso a supervición en vivo. <span  className='lead'> Valuada en: U$S <s>99</s></span></span>
              </div>
              <div className='text-start p-3 border border-info-subtle bg-cream filter-shadow-solid m-2 div-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg> 
                <span>  Acceso a una Red Exclusiva de Terapeutas para derivación de casos.</span>
              </div>
            </article>
            <div>
              <a href='https://drive.google.com/file/d/1RMJlizJSzjL9K2z0eCU2j9UqWog6F3Zg/view' target='_blank' className="btn btn-outline-dark btn-lg px-4 gap-3 mt-3 fw-bold">Ver programa completo</a>
            </div>
          </div>
        </div>
      </section>
      <section id='payments'>
        {/* section payments */}
        <div className="p-5 bg-cream">
          <div className='text-center'>
            <div className='faq-header mb-4 fw-bold text-center'>
              <h2>Precios</h2>
            </div>
            <p className='lead '><strong>Precio Original</strong> :<s> U$S 299</s></p>
            <p className='lead'><strong>Precio especial por lanzamiento</strong> : U$S 249 </p>
            <p className='lead'><strong>En cuotas</strong> :5 cuotas fijas de $42.000</p>
            <p className='lead'><strong>Precios para otros países</strong>: Se abona en tu moneda Local - Financiación disponible con Tarjeta de Credito hasta en 12 cuotas - </p>
            <p className='lead fw-bold'>PROGRAMA INTRODUCTORIO PARA PROFESIONALES DE LA EDUCACION Y EL DESARROLLO SOCIAL, CONSULTAR <a href='https://drive.google.com/file/d/17MqWB8b4oL_tcS1fwzhR5aSs9llPKVFN/view?usp=drive_link' target='_blank' className='link-info'>AQUÍ</a></p>
          </div>
          <div className="row">
            <div className='faq-header mb-4 fw-bold text-center'>
              <h2>Medios de pago</h2>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card payment-card h-100">
                <div className="card-body">
                  <h5 className="card-title">Pagos Internacionales</h5>
                  <p className="card-text">Realiza pagos internacionales de forma segura y rápida.</p>
                  <a href="https://go.hotmart.com/W91118440N" target='_blank' className="payment-link stretched-link btn btn-outline-dark">Realizar pago</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card payment-card h-100">
                <div className="card-body">
                  <h5 className="card-title">Pagos desde Argentina</h5>
                  <p className="card-text">Chatea con nosotros para ofrecerte la opción de pago que más te convenga.</p>
                  <a href="https://wa.me/message/J7LHFZTGP532D1" target='_blank' className="payment-link stretched-link btn btn-outline-dark">Realizar pago</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card payment-card h-100">
                <div className="card-body">
                  <h5 className="card-title">Otras consultas</h5>
                  <p className="card-text">Contacta con nosotros a traves de WhastApp.</p>
                  <a href="https://wa.me/message/J7LHFZTGP532D1" target='_blank' className="payment-link stretched-link btn btn-outline-dark">Contactarse</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pb-5 pt-3' style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
        }}>
        {/* section common questions */}
        <div className='container-sm'>
          <div className='faq-header mb-4 fw-bold text-center text-white'>
            <h2>Preguntas frecuentes</h2>
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Qué pasa si no puedo estar en las clases en vivo?</Accordion.Header>
              <Accordion.Body>
                Tanto el material teórico como las mentorías se grabaran y subirán a la plataforma Hotmart y podrás acceder a ellas de por vida con tu usuario y contraseña.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Hay algun contenido disponible para ver antes de comenzar el curso?</Accordion.Header>
              <Accordion.Body>
                Si, la primera clase estará disponible desde  el 20 de Marzo en la Plataforma
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Cómo hago para ver las clases?</Accordion.Header>
              <Accordion.Body>
                Una vez que te inscribas seras incorporado a un grupo de Whatsapp exclusivo de la Formación, Las clases teóricas se suben semanalmente a la plataforma y las mentorías en vivo se desarrollan a través de la plataforma ZOOM. Recibirás el enlace y el acceso a todo el material a través del Grupo.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>¿Obtendré un certificado al finalizar el Programa?</Accordion.Header>
              <Accordion.Body>
                Al finalizar el programa obtendrás un certificado de asistencia. Para acceder al certificado de aprobación deberás participar del primer y último Workshop en Vivo y completar el formulario de Autoevaluación Final 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>¿Puedo sumarme una vez ya iniciado el curso?</Accordion.Header>
              <Accordion.Body>
              Sí puedes sumarte en cualquier momento ya que el material queda grabado y puedes hacerlo a tu ritmo.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>¿Qué pasa su no es lo que busco?</Accordion.Header>
              <Accordion.Body>
              Si en el plazo de las primeras dos semanas te das cuenta de que el Programa no es lo que buscabas te devolvemos tu dinero. 
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
      <section className='bg-cream'>
        {/* section punch line */}
        <div className='p-5 text-center'>
          <p className='fs-3 fst-italic'>
            "Fuimos heridos en relaciones tempranas lo cual significa que vamos a sanar en relación. Las relaciones pueden ser fuente de sanación que si se abordan adecuadamente, con presencia y compasión." -Gabor Maté. 
          </p>
          <p className='fs-3 lead'>
            Si estas listo para iniciar este viaje, te espero adentro. Con cariño, Carmina.
          </p>
          <img src={Carmina} alt="" className='img-small'/>
        </div>
      </section>
      <footer className="py-4 bg-cyan text-light">
        <div className="text-center border-bottom pb-3 mb-3 row g-0">
          <span className='col-12 col-md-6'>Envianos un email a: carminavarelapsicologa@gmail.com</span>
          <span className='col-12 col-md-6'> O hablanos al: +54 9 381 210 2004</span>
        </div>
        <p class="text-center text-body-light">© 2024 Carmina Varela</p>
      </footer>
      <section className='fixed-bot text-end'>
        {/* boton de wp y scroll*/}
        <div>
          <a href='#main' className='btn btn-dark mx-2 my-1 btn-lg btn-fixed fs-3'>↑</a>
        </div>
        <div>
          <a target='_blank' href='https://wa.me/message/J7LHFZTGP532D1' className='btn btn-success mx-2 my-1 btn-fixed btn-lg text-center px-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}

export default App
