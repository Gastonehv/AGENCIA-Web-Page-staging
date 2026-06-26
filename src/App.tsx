import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './context/LanguageProvider';
import { ScrollProvider } from './context/ScrollProvider';

// Pages
import Home from './pages/Home';
import Cursor from './components/Cursor';

const Identidad = lazy(() => import('./pages/Identidad'));
const Arquitectura = lazy(() => import('./pages/Arquitectura'));
const Automatizacion = lazy(() => import('./pages/Automatizacion'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Privacidad = lazy(() => import('./pages/Privacidad'));
const Terminos = lazy(() => import('./pages/Terminos'));
const Playground = lazy(() => import('./pages/Playground'));
const NarrativePrototype = lazy(() => import('./pages/NarrativePrototype'));

function App() {
  return (
    <LanguageProvider>
      <ScrollProvider>
        <Router>
          <Cursor />
          <ScrollToTop />
          <Layout>
            <Navbar />
            <Suspense fallback={null}>
              <Routes>
                <Route path="/narrativa-v1" element={<NarrativePrototype />} />
                <Route path="/automatizacion" element={<Automatizacion />} />
                <Route path="/esencia" element={<Navigate to="/" replace />} />
                <Route path="/" element={<Home />} />
                <Route path="/identidad" element={<Identidad />} />
                <Route path="/infraestructura" element={<Arquitectura />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/privacidad" element={<Privacidad />} />
                <Route path="/terminos" element={<Terminos />} />
                <Route path="/playground" element={<Playground />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </ScrollProvider>
    </LanguageProvider>
  );
}

export default App;
