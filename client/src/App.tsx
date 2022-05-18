import { Navigate, Route, Routes } from 'react-router';
import Questionnaries from './components/pages/questionnaires';

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/questionnaries/1" />} />
      <Route path="/questionnaries/:questionnaireId" element={<Questionnaries />} />
    </Routes>
  );
}