import hero from '../../assets/hero-logo.svg';
import './styles.css';
import { Container } from 'react-bootstrap';

export default function HeroSection() {
  return (
    <section>
      <Container className="d-flex align-items-center">
        <div>
          <h1 className="display-1 fw-normal">
            Eng<span className="title-span">verse</span>
          </h1>
          <p className="display-6 text-wrap">
            English is easy when you use Engverse
          </p>
        </div>

        <img src={hero} className="hero" />
        <input type="text" />
      </Container>
    </section>
  );
}
