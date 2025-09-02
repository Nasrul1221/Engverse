import { type Lesson } from '../types';
import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { object, string, StringSchema, type ObjectSchema } from 'yup';

interface Props {
  data: Lesson;
}

export default function TextExercise({ data }: Props) {
  const navigate = useNavigate();

  const handleSubmit = (values: Record<string, string>) => {
    const keys = Object.values(values);
    let result = 0;

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === data?.exercises.text[i].answer) result++;
    }

    navigate('/result', {
      state: { result: result, allExercices: keys.length },
    });
  };

  const initialValues = data?.exercises?.text.reduce(
    (acc, _, i) => {
      acc[`answer${i}`] = '';
      return acc;
    },
    {} as Record<string, string>,
  );

  const validationSchema: ObjectSchema<Record<string, string | undefined>> =
    object(
      data?.exercises?.text.reduce(
        (acc, ex, i) => {
          acc[`answer${i}`] = string().test(
            'check-answer',
            'Wrong',
            (value) => {
              if (value?.trim() === '') return false;
              if (!value) return true;

              return value.toLowerCase() === ex.answer.toLowerCase()
                ? true
                : false;
            },
          );
          return acc;
        },
        {} as Record<string, StringSchema>,
      ),
    );
  return (
    <Formik
      initialValues={initialValues || {}}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form noValidate onSubmit={formik.handleSubmit}>
          {data?.exercises.text.flatMap((item, index) => (
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
                          (formik.touched as Record<string, boolean>)[
                            `answer${index}`
                          ] &&
                          !(formik.errors as Record<string, string>)[
                            `answer${index}`
                          ]
                        }
                        isInvalid={
                          (formik.touched as Record<string, boolean>)[
                            `answer${index}`
                          ] &&
                          !!(formik.errors as Record<string, string>)[
                            `answer${index}`
                          ]
                        }
                      ></Form.Control>
                    </Form.Group>
                  );
                }

                if (piece === '\n') return <br key={`br-${pieceIndex}`} />;

                return (
                  <span
                    key={`span-${pieceIndex}`}
                    className="fs-6"
                  >{` ${piece} `}</span>
                );
              })}
            </div>
          ))}
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}
