import { Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { HomePage } from './pages/HomePage';
import { LoansPage } from './pages/LoansPage';
import { ServicesPage } from './pages/ServicesPage';
import { FlexboxPage } from './pages/FlexboxPage';
import { GridPage } from './pages/GridPage';
import { ParentChildPage } from './pages/ParentChildPage';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/loans" element={<LoansPage />} />
        <Route path="/flexbox" element={<FlexboxPage />} />
        <Route path="/grid" element={<GridPage />} />
        <Route path="/parent-child" element={<ParentChildPage />} />
      </Routes>
    </>
  );
}

export default App;
