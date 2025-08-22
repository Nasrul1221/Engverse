import { Form, Card, Button } from 'react-bootstrap';

type Level = 'A1' | 'A2' | 'B1' | 'B2';
type Type = 'Grammar' | 'Reading' | 'Vocabulary' | 'Listening';

interface MyProps {
  setLevel: (state: Level) => void;
  setType: (state: Type) => void;
  level: Level;
  type: Type;
}

export default function SideBar({ setLevel, level, setType, type }: MyProps) {
  return (
    <aside className="my-aside bg-light p-3 d-none d-sm-block">
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
    </aside>
  );
}
