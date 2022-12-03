
import {Row,Col,Container,Button} from 'react-bootstrap';

function BarRecherche() {
  return (
    <>
      <div className='barRech mx-3'>
<Container>
<Row>
          <Col>Location</Col>
          <Col>Type</Col>
          <Col>Price Range</Col>
          <Col><Button variant="dark">Dark</Button></Col>
        </Row>
</Container>


      </div>
    </>
  );
}

export default BarRecherche;
