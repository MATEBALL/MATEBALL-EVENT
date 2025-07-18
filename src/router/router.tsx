import { createBrowserRouter } from 'react-router-dom';
import BaseballTeamMatcher from '../pages/baseball-team-matcher';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseballTeamMatcher />,
  },
]);