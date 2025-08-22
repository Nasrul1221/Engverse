import { Offcanvas } from 'react-bootstrap';

interface MyProps {
  children: React.ReactNode;
  headerTitle: string;
  className?: string;
  show: boolean;
  setShow: (state: boolean) => void;
}

export default function MyOffcanvas({
  children,
  headerTitle,
  className,
  show,
  setShow,
}: MyProps) {
  return (
    <Offcanvas show={show} onHide={() => setShow(false)} className={className}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{headerTitle}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  );
}
