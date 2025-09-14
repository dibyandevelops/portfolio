import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
  Navigation
} from './components';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <Contact />
    </main>
  );
}
