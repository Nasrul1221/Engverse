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
      <Container className="pt-3">
        <div className="d-inline-flex flex-column text-center">
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
        </div>
      </Container>
    </footer>
  );
}
