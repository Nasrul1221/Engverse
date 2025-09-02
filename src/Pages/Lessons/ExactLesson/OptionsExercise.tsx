import { type Lesson } from '../types';
import { Field, Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { object, ObjectSchema, string, StringSchema } from 'yup';
import '../styles.css';

interface ResultType {
  showResult: boolean;
  result: number;
  allExercises: number;
}

interface Props {
  data: Lesson;
  setResult: (state: (prev: ResultType) => ResultType) => void;
}

export default function OptionsExercise({ data, setResult }: Props) {
  const handleSubmit = (values: Record<string, string>) => {
    const keys = Object.values(values);

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === data?.exercises.options[i].answer)
        setResult((prev: ResultType) => ({ ...prev, result: prev.result + 1 }));
    }

    setResult((prev: ResultType) => ({
      ...prev,
      showResult: true,
      allExercises: keys.length,
    }));
  };

  const initialValues = data?.exercises?.options.reduce(
    (acc, _, i) => {
      acc[`answer${i}`] = '';
      return acc;
    },
    {} as Record<string, string>,
  );

  const validationSchema: ObjectSchema<Record<string, string | undefined>> =
    object(
      data?.exercises?.options.reduce(
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
      onSubmit={handleSubmit}
      initialValues={initialValues || {}}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form noValidate onSubmit={formik.handleSubmit}>
          {data?.exercises.options.flatMap((item, index) => (
            <div
              key={`div-${index}`}
              className="d-flex gap-1 align-items-center mb-3"
            >
              <div className="numbered me-2">{index + 1}</div>
              {item.question.split(' ').map((piece, pieceIndex) => {
                if (piece === '...') {
                  return (
                    <Field
                      as={Form.Select}
                      name={`answer${index}`}
                      key={`form-${index}`}
                      className="max-width"
                    >
                      {data.exercises.options[index].options?.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </Field>
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
