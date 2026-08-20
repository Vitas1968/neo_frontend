import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { HomePage } from './pages/HomePage';
import { LoansPage } from './pages/LoansPage';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<h1>Сервисы</h1>} />
        <Route path="/loans" element={<LoansPage />} />
      </Routes>
    </>
  );
}

export default App;
