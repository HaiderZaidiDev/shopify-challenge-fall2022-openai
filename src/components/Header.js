import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
      <Col xs={12}>
        <Row className="header">
            <div className="header-content">
                <h1>Exhibiting the Power of GPT-3 </h1>
                <h2> Created for the Shopify Front End Developer Challenge (Fall 2022), by Haider Zaidi </h2>
                <a href="https://github.com/HaiderZaidiDev/shopify-challenge-fall2022-openai" target="_blank"> <button className="cta-btn"> View Repository </button></a>
            </div>
        </Row>
      </Col>

  );
}

export default Header;
