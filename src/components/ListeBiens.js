import { Row, Col, Container, Button } from 'react-bootstrap';
import villa from '../images/Villa.jpg'

function ListeBiens() {
  return (

    <div className='p-5'>
      <Container className='Liste'>
        <Row>
          <Col>
            {/* <h1 className='text-center'>Image 1</h1> */}
            <img src={villa} className='img-fluid' />
          </Col>
          <Col>
            <h1 className='titleListe'>Who We Are and What You Get From Us</h1>
            <p>loremLaborum consectetur sit eiusmod velit aliqua. Commodo magna fugiat deserunt ut ea laborum sunt commodo deserunt ea. Commodo incididunt aliquip consequat veniam magna ad. Aliqua deserunt incididunt sit occaecat nulla consectetur eiusmod. Ex quis eiusmod enim nostrud veniam mollit cillum nostrud ea sint.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ListeBiens;
