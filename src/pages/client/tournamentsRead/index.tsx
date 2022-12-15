import { Redirect } from 'react-router-dom';
import { clientRouts } from '@routing/routs';

const TournamentsReadPage = () => {
  return <Redirect to={clientRouts.tournaments} />;
};

export default TournamentsReadPage;
