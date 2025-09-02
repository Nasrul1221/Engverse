// React && Hooks
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

// Styles
import '../styles.css';
import '../../../markdown-styles.css';

// Data
import { lessonData } from '../../../data.ts';

// Libraries
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

// TS
import { type Lesson, type Level, type Type, type Id } from '../types';
import TextExercise from './TextExercise.tsx';
import OptionsExercise from './OptionsExercise.tsx';

const obj = {
  'exercise 1': TextExercise,
  'exercise 2': OptionsExercise,
  'exercise 3': TextExercise,
};

export default function ExercisePage() {
  const { level, type, id } = useParams<{ level: Level; type: Type; id: Id }>();

  const [userExercise, setUserExercise] = useState<
    'exercise 1' | 'exercise 2' | 'exercise 3'
  >('exercise 1');

  const Comp = obj[userExercise];

  const lesson: Lesson | undefined = useMemo(() => {
    if (!level || !type || !id) return undefined;
    return lessonData[level][type][id];
  }, [level, type, id]);

  if (!lesson?.exercises || lesson.exercises.text.length === 0)
    return <div>No exercises yet</div>;

  return (
    <div className="mt-2">
      <Container fluid="sm" className="border rounded p-4 mb-3">
        <div className="d-flex gap-3">
          <Button
            variant={
              userExercise === 'exercise 1' ? 'primary' : 'outline-primary'
            }
            onClick={() => setUserExercise('exercise 1')}
          >
            Exercise 1
          </Button>
          <Button
            variant={
              userExercise === 'exercise 2' ? 'primary' : 'outline-primary'
            }
            onClick={() => setUserExercise('exercise 2')}
          >
            Exercise 2
          </Button>
          <Button
            variant={
              userExercise === 'exercise 3' ? 'primary' : 'outline-primary'
            }
            onClick={() => setUserExercise('exercise 3')}
          >
            Exercise 3
          </Button>
        </div>
        <Row className="d-flex gap-3 mt-4">
          <Col className="text-center order-lg-2">
            <h1 className="my-title my-title-border rounded p-2">
              {lesson.title}
            </h1>
            <Card>
              <Card.Body>
                <ReactMarkdown
                  components={{
                    strong: ({ ...props }) => (
                      <strong className="bold-paragraph" {...props} />
                    ),
                  }}
                >
                  {lesson.exerciseInfo}
                </ReactMarkdown>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" lg="6" className="order-lg-1">
            <Comp data={lesson} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
