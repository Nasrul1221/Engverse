import { type Lesson } from '../types';
import { Field, Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { object, ObjectSchema, string, StringSchema } from 'yup';

// type MyFormikProps = Record<string, string> | undefined;
// type ValidationSchemaType = ObjectSchema<Record<string, string | undefined>>;

interface Props {
  data: Lesson;
  // initialValues: MyFormikProps;
  // validationSchema: ValidationSchemaType;
}

export default function OptionsExercise({
  data,
  // initialValues,
  // validationSchema,
}: Props) {
  const navigate = useNavigate();

  const handleSubmit = (values: Record<string, string>) => {
    const keys = Object.values(values);
    let result = 0;

    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === data?.exercises.options[i].answer) result++;
    }

    navigate('/result', {
      state: { result: result, allExercices: keys.length },
    });
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
                      key={`form-${pieceIndex}`}
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
