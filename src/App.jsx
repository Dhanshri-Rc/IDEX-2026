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
import CopyrightForm from "./pages/DashboardPages/CopyrightForm";
import DashboardLayout from "./pages/DashboardPages/DashboardLayout";
import SubmitPaper1 from "./pages/DashboardPages/SubmitPaper1";
import EditProfile from "./pages/DashboardPages/EditProfile"

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
          <Route element={<DashboardLayout />}>
    <Route path="/dashboard" element={<Dashboard />} />
    {/* <Route path="/submit-paper" element={<SubmitPaper />}
    <Route path="/check-status" element={<CheckStatus />} /> */}
    <Route path="/copyright-form" element={<CopyrightForm />} />
     <Route path="/submit-paper" element={<SubmitPaper1/>} />
     <Route path="/edit-profile" element={<EditProfile />} />
    {/* <Route path="/my-submissions" element={<MySubmissions />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/messages" element={<Messages />} />
    <Route path="/notifications" element={<Notifications />} /> */}
</Route>

          {/* SPA-safe catch-all (fixes refresh 404 in production hosting) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
