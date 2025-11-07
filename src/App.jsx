import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionAbout from "./components/SectionAbout";
import SectionWork from "./components/SectionWork";
import ContactRegister from "./components/ContactRegister";

function App() {
  return (
    <div className="min-h-screen bg-ivory text-deepBlue">
      <Navbar />

      <main>
        <Hero />
        <SectionAbout />
        <SectionWork />
        <ContactRegister />
      </main>

      <footer className="border-t border-gold/20 py-6 text-center text-sm text-deepBlue/70 bg-ivory/80">
        © {new Date().getFullYear()} Sanskrutik Kaladarpan. Crafted with tradition and technology.
      </footer>
    </div>
  );
}

export default App;
