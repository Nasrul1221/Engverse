import { useState } from 'react';
import { Button, Form, Card, Col, Row, Container } from 'react-bootstrap';
import myData from '../../cards.json';
import './styles.css';
import MyOffcanvas from '../../Components/MyOffcanvas';
import SideBar from './SideBar';
import { NavLink, useLocation } from 'react-router-dom';

type Level = 'A1' | 'A2' | 'B1' | 'B2';
type Type = 'Grammar' | 'Reading' | 'Vocabulary' | 'Listening';

interface Lesson {
  title: string;
  id: number;
  description: string;
  path?: string;
}

type LessonsData = Record<Level, Record<Type, Lesson[]>>;
const data: LessonsData = myData;

export default function Lessons() {
  const location = useLocation();
  const [level, setLevel] = useState<Level>('A1');
  const [type, setType] = useState<Type>(location.state || 'Grammar');
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
        <Form className="d-flex flex-column gap-3 mb-3">
          <Form.Group controlId="level">
            <Form.Label className="my-label">Level</Form.Label>
            <Form.Select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setLevel(e.target.value as Level)
              }
              value={level}
              name="level"
              id="level"
              aria-label="Choosing an english level"
              size="sm"
            >
              <option value="A1">A1</option>
              <option value="A2">A2</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="type">
            <Form.Label className="my-label">Type</Form.Label>
            <Form.Select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setType(e.target.value as Type)
              }
              value={type}
              name="type"
              id="type"
              aria-label="Choosing a type of a lesson"
              size="sm"
            >
              <option value="Grammar">Grammar</option>
              <option value="Listening">Listening</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Card>
          <Card.Body className="d-flex flex-column gap-2">
            <Card.Title>Additionally</Card.Title>
            <Button disabled>Cheat sheets</Button>
            <Button disabled>Watching hub</Button>
            <Button disabled>Words</Button>
          </Card.Body>
        </Card>
      </MyOffcanvas>

      <Container className="pt-4 ps-3 pe-3">
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
              <Col xs={12} sm={6} md={4} lg={3} key={info.id}>
                <Card
                  className="h-100 text-decoration-none"
                  as={NavLink}
                  to={`/lessons/${level}/${type}/${info.path}`}
                >
                  <Card.Img />
                  <Card.Body>
                    <Card.Title style={{ color: '#009dff' }}>
                      {info.title}
                    </Card.Title>
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
