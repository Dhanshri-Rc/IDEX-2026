import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Tracks from "./pages/Tracks";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import Committee from "./pages/Committee";
import Registration from "./pages/Registration";
import ParticipantLogin from "./pages/ParticipantLogin";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Layout navVariant="dark">
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/tracks"
            element={
              <Layout navVariant="dark">
                <Tracks />
              </Layout>
            }
          />
          <Route
            path="/speakers"
            element={
              <Layout navVariant="dark">
                <Speakers />
              </Layout>
            }
          />
          <Route
            path="/schedule"
            element={
              <Layout>
                <Schedule />
              </Layout>
            }
          />
          <Route
            path="/committee"
            element={
              <Layout>
                <Committee />
              </Layout>
            }
          />
          <Route
            path="/registration"
            element={
              <Layout navVariant="dark">
                <Registration />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout navVariant="dark">
                <Contact />
              </Layout>
            }
          />
          {/* Standalone pages without the marketing Navbar/Footer chrome */}
          <Route path="/login" element={<ParticipantLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* SPA-safe catch-all (fixes refresh 404 in production hosting) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
