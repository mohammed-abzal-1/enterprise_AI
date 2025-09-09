import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Solutions } from "./components/Solutions";
import { Enterprise } from "./components/Enterprise";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <Enterprise />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}