import { useState } from 'react';
import { EXAMPLES } from './data.js';
import {CORE_CONCEPTS} from './data.js';
import Header from './Components/Header.jsx';
import {CoreConcepts} from './Components/CoreConcepts.jsx';
import {TabButton} from './Components/TabButton.jsx';


function App() {
  const [tabContent, setTabContent] = useState('');

  


  function SelectHandler(selectedButton1){
        setTabContent(selectedButton1);
        // console.log(tabContent);
  }
        let selectedButton = <p>Please Select a topic </p>;
        if (tabContent) {
          selectedButton = (
            <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                  <code>
                        {EXAMPLES[tabContent].code}
                  </code>
              </pre>
          </div>
          );
        }
  return (
    <div>
      <Header />

      <main> 
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) =><CoreConcepts key={concept.title}  {...concept} />)}
            {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section >
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton isSelected={tabContent==='components'} onSelect={() => SelectHandler('components')}>Components</TabButton>          
          <TabButton isSelected={tabContent==='jsx'} onSelect={() => SelectHandler('jsx')}>JSX</TabButton>          
          <TabButton isSelected={tabContent==='props'} onSelect={() => SelectHandler('props')}>Props</TabButton>          
          <TabButton isSelected={tabContent==='state'} onSelect={() => SelectHandler('state')}>State</TabButton>          
          </menu>
{/*       
            {!tabContent ? <p>Select a tab to see topic content.</p> : null}
            {tabContent ? ( 
              <div id="tab-content">
            <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                  <code>
                        {EXAMPLES[tabContent].code}
                  </code>
              </pre>
          </div>
            ) : null}  */}
            {selectedButton}
        </section>
      </main>
    </div>
  );
}

export default App;
