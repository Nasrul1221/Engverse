import hero from '../../assets/hero-logo.svg';
import './styles.css';
import { Container, Button, Row, Col } from 'react-bootstrap';

export default function HeroSection() {
  return (
    <section style={{}}>
      <Container fluid className="p-4">
        <Row>
          <Col md={6}>
            <div>
              <h1 className="display-1 fw-normal">
                Eng<span className="title-span">verse</span>
              </h1>
              <p className="display-6">English is easy when you use Engverse</p>
              <p className="fs-3 fw-light">
                Eng<span className="title-span">verse</span> is a versatile
                platform for learning English
              </p>
              <div className="d-flex gap-5 mt-5">
                <Button size="lg">Start Learning</Button>
              </div>
            </div>
          </Col>

          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              src={hero}
              className="hero"
              alt="The animated Earth with the woman on it"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
