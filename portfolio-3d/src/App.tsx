// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BottomNav from './components/BottomNav';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectPage';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <>
    <BottomNav/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/project' element={<ProjectsPage/>}/>
      <Route path='/projects/:id' element={<ProjectDetail/>}/>
    </Routes>
    </>
  );

}
