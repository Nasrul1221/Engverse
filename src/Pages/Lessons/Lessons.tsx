import { useState } from 'react';
import { Button, Form, Card, Col, Row, Container } from 'react-bootstrap';
import data from '../../LessonsData';
import './styles.css';
import MyOffcanvas from '../../Components/MyOffcanvas';
import SideBar from './SideBar';

type Level = 'A1' | 'A2' | 'B1' | 'B2';
type Type = 'Grammar' | 'Reading' | 'Vocabulary' | 'Listening';

interface Lesson {
  title: string;
  id: number;
  description: string;
}

export default function Lessons() {
  const [level, setLevel] = useState<Level>('A1');
  const [type, setType] = useState<Type>('Grammar');
  const [show, setShow] = useState(false);

  const lesson = data[level][type];

  return (
    <section style={{ height: '90vh' }} className="d-flex">
      <SideBar
        setLevel={setLevel}
        setType={setType}
        type={type}
        level={level}
      />

      <MyOffcanvas
        headerTitle="Menu"
        className="d-block d-sm-none"
        show={show}
        setShow={setShow}
      >
        <SideBar
          setLevel={setLevel}
          setType={setType}
          type={type}
          level={level}
        />
      </MyOffcanvas>

      <Container className="p-3">
        <Button
          variant="outline-primary"
          onClick={() => setShow(true)}
          className="d-block d-sm-none mb-3"
        >
          Menu
        </Button>
        <Row className="g-3">
          {lesson &&
            lesson.map((info: Lesson) => (
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100">
                  <Card.Img />
                  <Card.Body>
                    <Card.Title>{info.title}</Card.Title>
                    <Card.Text>{info.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
}
