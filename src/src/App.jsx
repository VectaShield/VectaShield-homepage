
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import ParticleBackground from '@/components/ParticleBackground';
import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';
import AboutPage from '@/pages/AboutPage';
import Layout from '@/components/layout/Layout';
import { ThemeProvider } from '@/components/ThemeProvider';

const Page = ({ children }) => (
  <motion.main
    className="min-h-[100dvh]"                 // avoid white flashes/layout jumps
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.24, ease: "easeOut" }}
  >
    {children}
  </motion.main>
);

function App() {
  const location = useLocation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ParticleBackground />
      <AnimatePresence mode="wait" onExitComplete={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Page><HomePage /></Page>} />
            <Route path="about" element={<Page><AboutPage /></Page>} />
            <Route path="contact" element={<Page><ContactPage /></Page>} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
