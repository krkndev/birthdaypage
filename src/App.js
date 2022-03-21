import './App.css';
import party from './images/fiesta.png';
import eightys from './images/80.png';
import inviteText from './images/youAreInvited.png';
import yearsImg from './images/years.png';
import donMario from './images/donMario.png';
import date from './images/date.png';
import address from './images/address.png';
import mapBtn from './images/mapBtn.png';
import suggestion from './images/suggestion.png';
// import beers from './images/beers.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Container, Image, Ratio, Row } from 'react-bootstrap';

function App() {
   return (
      <Container fluid>
         <Container>
            <Row>
               <Col sm={12}>
                  <Image fluid className='pt-5 tada' src={party} alt='party' />
               </Col>
            </Row>
         </Container>
         <Container className='no-padding-container '>
            <Row className='justify-content-md-center'>
               <Col sm={12}>
                  <Image
                     fluid
                     className='no-padding-container'
                     src={inviteText}
                     alt='Estas Invitado'
                     margin='10rem'
                  />
               </Col>
            </Row>
         </Container>
         <Row className='justify-content-md-center'>
            <Col sm={4}>
               <Image fluid className='fit-80s' src={eightys} alt='80s' />
            </Col>
         </Row>
         <Row className='justify-content-md-center'>
            <Col sm={12}>
               <Image fluid className='fit-80s' src={yearsImg} alt='Años de' />
            </Col>
         </Row>
         <Row className='justify-content-md-center'>
            <Col sm={12}>
               <Image
                  fluid
                  className='fit-img'
                  src={donMario}
                  alt='Don Mario'
               />
            </Col>
         </Row>
         <Row className='justify-content-md-center'>
            <Col sm={12}>
               <Image fluid className='fit-date' src={date} alt='date' />
            </Col>
         </Row>
         <Row className='fit-map-img'>
            <Col sm={6}>
               {/* <Image fluid className='fit-map' src={address} alt='Address' /> */}
               <Ratio aspectRatio={0.25}>
                  <div>
                     <Image
                        fluid
                        className='fit-map'
                        src={address}
                        alt='MAPA VA AQUI'
                     />
                  </div>
               </Ratio>
               <Image fluid className='fit-map' src={mapBtn} alt='Map button' />
            </Col>
            <Col sm={6}></Col>
         </Row>
         <Row className='justify-content-md-center'>
            <Col sm={12}>
               <Image
                  fluid
                  className='fit-suggestion'
                  src={suggestion}
                  alt='suggestion'
               />
            </Col>
         </Row>
         <Row className='justify-content-md-center'>
            <Col sm={12}>
               {/* <Image fluid className='fit-footer' src={beers} alt='beers' /> */}
            </Col>
         </Row>
      </Container>
   );
}

export default App;
