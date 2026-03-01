// import './App.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <main>
//         <Home />
//         <About />
//         <Projects />
//         <Skills />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;




import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Certificates from './components/Certificates'; // 1. Naya Import
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Certificates /> {/* 2. Naya Section yahan add kiya hai */}
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;