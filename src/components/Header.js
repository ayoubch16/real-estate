import Container from 'react-bootstrap/esm/Container';
import '../index.css'
import Menu from './Menu'
import Button from 'react-bootstrap/esm/Button';
function Header() {
  return (

    <div className="header">
      <Container>
        <Menu />
        <div className='Info py-5'>
          <h1 className='my-5'>Find your perfect <br></br> Home  </h1>
          <p className='my-3'>We make sure you get the best deal possible and at very fair
            <br></br>
            price. our other benefits include
          </p>
          <Button className= 'p-3 my-5 btnStart' variant="">Get started</Button>
        </div>
        
      

      </Container>


    </div>

  );
}

export default Header;
