import { useLocation } from 'react-router-dom';

export default function Result() {
  const location = useLocation();
  return (
    <div>
      {location.state.result}/{location.state.allExercices}
    </div>
  );
}
