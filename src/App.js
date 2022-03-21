import './App.css';
import party from './images/fiesta.png';
import eightys from './images/80.png';
import inviteText from './images/youAreInvited.png';
import yearsOf from './images/yearsOf.png';
import donMario from './images/donMario.png';
import date from './images/date.png';
import address from './images/address.png';
import suggestion from './images/suggestion.png';
import beers from './images/beers.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Col, Container, Image, Row } from 'react-bootstrap';

function App() {
   return (
      <Container className='my-background ' fluid>
         <Container name='Fiesta Sorpresa'>
            <Row className='mx-auto'>
               <Col
                  className='mx-auto'
                  xs={10}
                  sm={10}
                  md={12}
                  lg={12}
                  xl={12}
                  xxl={12}
               >
                  <Image
                     fluid
                     className='pt-5'
                     src={party}
                     alt='Fiesta Sorpresa'
                  />
               </Col>
            </Row>
         </Container>

         <Container name='Estas invitado'>
            <Row className='mx-auto'>
               <Col
                  className='mx-auto'
                  xs={6}
                  sm={6}
                  md={8}
                  lg={9}
                  xl={9}
                  xxl={9}
               >
                  <Image fluid src={inviteText} alt={'Estas invitado'} />
               </Col>
            </Row>
         </Container>

         <Container name='Numero 80'>
            <Row className='mx-auto'>
               <Col
                  className='mx-auto'
                  xs={3}
                  sm={3}
                  md={3}
                  lg={4}
                  xl={4}
                  xxl={8}
               >
                  <Image fluid src={eightys} alt='Numero 80' />
               </Col>
            </Row>
         </Container>

         <Container name='Años de'>
            <Row className='mx-auto'>
               <Col
                  className='mx-auto'
                  xs={6}
                  sm={6}
                  md={4}
                  lg={4}
                  xl={4}
                  xxl={4}
               >
                  <Image fluid className='px-5' src={yearsOf} alt='Años de' />
               </Col>
            </Row>
         </Container>
         <Container name='Don Mario'>
            <Row className='mx-auto'>
               <Col
                  className='mx-auto'
                  xs={10}
                  sm={10}
                  md={12}
                  lg={12}
                  xl={12}
                  xxl={12}
               >
                  <Image fluid src={donMario} alt='Don Mario' />
               </Col>
            </Row>
         </Container>
         <Container className='px-0' name='Fecha'>
            <Row className='mx-auto px-0'>
               <Col
                  className='mx-auto px-0'
                  xs={10}
                  sm={10}
                  md={12}
                  lg={12}
                  xl={12}
                  xxl={12}
               >
                  <Image fluid className='px-2' src={date} alt='Fecha' />
               </Col>
            </Row>
         </Container>
         <Container name='Mapa y Direccion'>
            <Row>
               <Col
                  className='mx-auto'
                  xs={5}
                  sm={5}
                  md={6}
                  lg={6}
                  xl={6}
                  xxl={6}
               >
                  <Image fluid src={address} alt='Direccion' />
               </Col>
               <Col
                  className='mx-auto'
                  xs={5}
                  sm={5}
                  md={6}
                  lg={6}
                  xl={6}
                  xxl={6}
               >
                  <Image fluid src={address} alt='Direccion' />
               </Col>
            </Row>
         </Container>
         <Container name='Ser puntual'>
            <Row className='mx-auto'>
               <Col
                  className='mx-auto'
                  xs={7}
                  sm={7}
                  md={9}
                  lg={9}
                  xl={9}
                  xxl={12}
               >
                  <Image fluid src={suggestion} alt='suggestion' />
               </Col>
            </Row>
         </Container>
         <Container>
            <Row className='mx-auto'>
               <Col
                  className='mx-auto'
                  xs={10}
                  sm={10}
                  md={12}
                  lg={12}
                  xl={12}
                  xxl={12}
               ></Col>
            </Row>
         </Container>
         {/* <Container name='Cervezas'> */}
         <Row>
            <Col
               className='mx-auto'
               xs={8}
               sm={8}
               md={12}
               lg={12}
               xl={12}
               xxl={12}
            >
               <Image fluid src={beers} alt='Cervezas' />
            </Col>
         </Row>
         {/* </Container> */}
      </Container>
   );
}

export default App;
