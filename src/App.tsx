import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import Visit, { Footer } from '@/components/Visit';

function App() {
  return (
    <div className="min-h-screen bg-noir-950 text-cream-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
