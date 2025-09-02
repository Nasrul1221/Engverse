import '../styles.css';

interface ResultType {
  showResult: boolean;
  result: number;
  allExercises: number;
}

interface Props {
  resultData: ResultType;
}

export default function Result({ resultData }: Props) {
  const percentage = (resultData.result / resultData.allExercises) * 100;

  return (
    <div>
      <h2 className="fs-1">
        Result:{' '}
        <span>
          {resultData.result}/{resultData.allExercises}
        </span>
      </h2>
      {percentage === 0 ? (
        <p className="fs-5">
          Don't worry! It's just the <span className="my-span">beginning</span>.
          Try again and you'll <span className="my-span">get better</span>!
        </p>
      ) : percentage >= 1 && percentage <= 40 ? (
        <p className="fs-5">
          Good <span className="my-span">effort</span>! Keep{' '}
          <span className="my-span">practicing</span> and you'll improve.
        </p>
      ) : percentage >= 41 && percentage <= 70 ? (
        <p className="fs-5">
          <span className="my-span">Not bad</span>! You're getting there, just a
          little more <span className="my-span">practice</span>.
        </p>
      ) : percentage >= 71 && percentage <= 99 ? (
        <p className="fs-5">
          Great <span className="my-span">job</span>! Just one more step to
          <span className="my-span">perfection</span>!
        </p>
      ) : (
        <p className="fs-5">
          Excellent! You <span className="my-span">mastered</span> this
          exercise!
        </p>
      )}
    </div>
  );
}
