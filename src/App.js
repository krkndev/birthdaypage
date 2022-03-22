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

import { Button, Col, Container, Image, Row } from 'react-bootstrap';

function App() {
  return (
    <Container className='my-background my-auto' fluid>
      <Row>
        <Col className='mx-auto' xs={10} md={12}>
          <Image
            fluid
            className='pt-5'
            src={party}
            alt='Fiesta Sorpresa'
          />
        </Col>
      </Row>
      <Row>
        <Col className='mx-auto' xs={6} md={8} lg={9}>
          <Image fluid src={inviteText} alt={'Estas invitado'} />
        </Col>
      </Row>
      <Row>
        <Col className='mx-auto' xs={3} lg={4} xxl={8}>
          <Image fluid src={eightys} alt='Numero 80' />
        </Col>
      </Row>

      <Row>
        <Col className='mx-auto' xs={6} md={4}>
          <Image fluid className='px-5' src={yearsOf} alt='Años de' />
        </Col>
      </Row>
      <Row>
        <Col className='mx-auto' xs={10} md={12}>
          <Image fluid src={donMario} alt='Don Mario' />
        </Col>
      </Row>
      <Row>
        <Col className='mb-3 mx-auto px-0' xs={10} md={12}>
          <Image fluid className='px-2' src={date} alt='Fecha' />
        </Col>
      </Row>
      <Row>
        <Col name='Direccion' xs={6}>
          <Row>
            <Col xs={12}>
              <Image
                className='ml-3'
                fluid
                src={address}
                alt='Direccion'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className='d-flex justify-content-center'>
              <Button
                variant='primary'
                href='https://www.google.com/maps/dir//20.291663,-103.604979/@20.291663,-103.6071677,17z/data=!4m2!4m1!3e0'
              >
                VER MAPA
              </Button>
            </Col>
          </Row>
        </Col>
        <Col name='Mapa' className='mx-auto' xs={6}>
          <iframe
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2076174121876!2d-103.60716088462193!3d20.29167171790577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMjDCsDE3JzMwLjAiTiAxMDPCsDM2JzE3LjkiVw!5e0!3m2!1sen!2smx!4v1647921359530!5m2!1sen!2smx'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col className='mx-auto mt-3' xs={7} md={9} xxl={12}>
          <Image fluid src={suggestion} alt='suggestion' />
        </Col>
      </Row>
      <Row>
        <Col className='mx-auto' xs={10} md={12}></Col>
      </Row>
      <Row>
        <Col className='mx-auto my-0 mt-3 pulse' xs={12}>
          <Image fluid className='pulse' src={beers} alt='Cervezas' />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
