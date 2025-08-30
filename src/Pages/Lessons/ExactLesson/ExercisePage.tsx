// React && Hooks
import { useFormik, Formik } from 'formik';
import { useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';

// Styles
import '../styles.css';
import '../../../markdown-styles.css';

// Data
import myData from '../../../data.json';

// Libraries
import Form from 'react-bootstrap/Form';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { string, object, StringSchema } from 'yup';
import ReactMarkdown from 'react-markdown';

// TS
import {
  type LessonsData,
  type Lesson,
  type Level,
  type Type,
  type Id,
} from '../types';

const data: LessonsData = myData;

export default function ExercisePage() {
  const { level, type, id } = useParams<{ level: Level; type: Type; id: Id }>();

  const lesson: Lesson | undefined = useMemo(() => {
    if (!level || !type || !id) return undefined;
    return data[level][type][id];
  }, [level, type, id]);

  const initialValues = lesson?.exercises?.reduce(
    (acc, ex, i) => {
      acc[`answer${i}`] = '';
      return acc;
    },
    {} as Record<string, string>,
  );

  const validationSchema = object(
    lesson?.exercises?.reduce(
      (acc, ex, i) => {
        acc[`answer${i}`] = string().test('check-answer', 'Wrong', (value) => {
          if (value?.trim() === '') return false;

          return value === ex.answer ? true : false;
        });
        return acc;
      },
      {} as Record<string, StringSchema>,
    ),
  );

  if (!lesson?.exercises || lesson.exercises.length === 0)
    return <div>No exercises yet</div>;

  return (
    <div className="mt-2">
      <Container fluid="sm" className="border rounded p-4 mb-3">
        <Row className="d-flex gap-3">
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
                  {lesson['exercise-info']}
                </ReactMarkdown>
              </Card.Body>
            </Card>
          </Col>

          <Col xs="12" lg="6" className="order-lg-1">
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues || {}}
              onSubmit={() => console.log(1)}
            >
              {(formik) => (
                <Form noValidate onSubmit={formik.handleSubmit}>
                  {lesson?.exercises.flatMap((item, index) => (
                    <div
                      key={`div-${index}`}
                      className="d-flex gap-1 align-items-center mb-3"
                    >
                      <div className="numbered me-2">{index + 1}</div>
                      {item.question.split(' ').map((piece, pieceIndex) => {
                        if (piece === '...') {
                          return (
                            <Form.Group key={`form-${pieceIndex}`}>
                              <Form.Control
                                type="text"
                                {...formik.getFieldProps(`answer${index}`)}
                                isValid={
                                  formik.touched[`answer${index}`] &&
                                  !formik.errors[`answer${index}`]
                                }
                                isInvalid={
                                  formik.touched[`answer${index}`] &&
                                  !!formik.errors[`answer${index}`]
                                }
                              ></Form.Control>
                            </Form.Group>
                          );
                        }

                        if (piece === '\n')
                          return <br key={`br-${pieceIndex}`} />;

                        return (
                          <span
                            key={`span-${pieceIndex}`}
                            className="fs-6"
                          >{` ${piece} `}</span>
                        );
                      })}
                    </div>
                  ))}
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
