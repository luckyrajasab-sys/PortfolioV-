import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';

const DemoBackgroundPaths = React.lazy(() =>
  import('@/components/ui/demo').then((module) => ({ default: module.DemoBackgroundPaths }))
);

export default function App() {
  return (
    <BrowserRouter>
      {/* Subtle atmospheric gradient glows & grid background */}
      <div className="ambient-mesh" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />
      
      {/* Top viewport reading progress bar */}
      <ScrollProgress />

      {/* Sticky navigation bar */}
      <Navbar />

      {/* Primary Application Routes */}
      <React.Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/case-study/:slug" element={<ProjectDetails />} />
          <Route path="/demo/background-paths" element={<DemoBackgroundPaths />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>

      {/* Consistent minimal footer */}
      <Footer />
    </BrowserRouter>
  );
}
