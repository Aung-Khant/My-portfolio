import { motion } from "framer-motion";
import { Contact } from "./components/Contact";
import { FluidBackground } from "./components/FluidBackground";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";

export default function App() {
  return (
    <>
      <FluidBackground />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Hero />
        <Projects />
        <Contact />
        <Resume />
        <Footer />
      </motion.main>
    </>
  );
}
