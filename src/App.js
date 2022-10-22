import './css/App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';

function App() {
  // project 1
  // return (
  //   <div className="App">
  //     <Navbar />
  //     <Main />
  //   </div>
  // );

  return (
    <>
      <Navbar />
      <Hero />
      <Main />
    </>
  );
}

export default App;
