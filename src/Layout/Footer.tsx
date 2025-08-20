import { Container, Row, Col } from 'react-bootstrap';
import MainLogo from '../Components/Icons/MainLogo';
import Email from '../Components/Icons/Email';
import Call from '../Components/Icons/Call';
import Location from '../Components/Icons/Location';

interface Info {
  icon: React.ReactNode;
  info: string;
  id: number;
}

const infos: Info[] = [
  {
    icon: <Email />,
    info: 'fst20071221@gmail.com',
    id: 0,
  },
  {
    icon: <Call />,
    info: '+123123123123',
    id: 1,
  },
  {
    icon: <Location />,
    info: 'Somewhere in the world',
    id: 2,
  },
];

export default function Footer() {
  return (
    <footer className="footer ">
      <Container className="py-3">
        <Row className="g-3 justify-content-center">
          <Col xs={12} sm={8} md={10} lg={4}>
            <MainLogo width={40} variant="footer-logo mb-2" />
            {/* <div className="d-flex align-items-center gap-2">
            <Email />
            <p className="p-0 m-0 text-white small">fst20071221@gmail.com</p>
          </div> */}
            {infos.map((info) => (
              <div className="d-flex align-items-center gap-2" key={info.id}>
                {info.icon}
                <p className="p-0 m-0 text-white small">{info.info}</p>
              </div>
            ))}
          </Col>
          <Col sm={4} md={2} lg={4}>
            <p className="p-0 m-0 fw-bold text-white">Home</p>
            <p className="p-0 m-0 mt-2 text-white">Lessons</p>
            <p className="p-0 m-0 mt-1 text-white">Tests</p>
            <p className="p-0 m-0 mt-1 text-white">Profile</p>
          </Col>
          <Col lg={4} className="">
            <p className="p-0 m-0 fw-bold text-white">About us</p>
            <p className="p-0 m-0 mt-2 text-white">Contributors</p>
            <p className="p-0 m-0 mt-1 text-white">Our goals</p>
            <p className="p-0 m-0 mt-1 text-white">Updated</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
