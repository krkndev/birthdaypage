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
    <Container className='my-background my-auto' fluid>
      <Row>
        <Col
          className='mx-auto'
          xs={10}
          md={12}
        >
          <Image
            fluid
            className='pt-5'
            src={party}
            alt='Fiesta Sorpresa'
          />
        </Col>
      </Row>
      <Row>
        <Col
          className='mx-auto'
          xs={6}
          md={8}
          lg={9}
        >
          <Image fluid src={inviteText} alt={'Estas invitado'} />
        </Col>
      </Row>
      <Row>
        <Col
          className='mx-auto'
          xs={3}
          lg={4}
          xxl={8}
        >
          <Image fluid src={eightys} alt='Numero 80' />
        </Col>
      </Row>

      <Row>
        <Col
          className='mx-auto'
          xs={6}
          md={4}
        >
          <Image fluid className='px-5' src={yearsOf} alt='Años de' />
        </Col>
      </Row>
      <Row>
        <Col
          className='mx-auto'
          xs={10}
          md={12}
        >
          <Image fluid src={donMario} alt='Don Mario' />
        </Col>
      </Row>
      <Row>
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
      <Row>
        <Col
          name='Direccion'
          className='mx-auto'
          xs={5}
          md={6}
        >
          <Image fluid src={address} alt='Direccion' />
        </Col>
        <Col
          name='Mapa'
          className='mx-auto'
          xs={5}
          sm={5}
          md={6}
          lg={6}
          xl={6}
          xxl={6}
        ></Col>
      </Row>
      <Row>
        <Col
          className='mx-auto'
          xs={7}
          md={9}
          xxl={12}
        >
          <Image fluid src={suggestion} alt='suggestion' />
        </Col>
      </Row>
      <Row>
        <Col
          className='mx-auto'
          xs={10}
          md={12}
        ></Col>
      </Row>
      <Row>
        <Col
          className='mx-auto my-0 mt-3 pulse'
          xs={8}
          md={12}
        >
          <Image fluid className='pulse' src={beers} alt='Cervezas' />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
