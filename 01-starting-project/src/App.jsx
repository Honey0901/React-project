import Examples from './Components/Examples.jsx';
import Header from './Components/Header.jsx';
import CoreConcepts from './Components/CoreConpets.jsx';



function App() {
  
  return (
    <div>
      <Header />

      <main> 
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
