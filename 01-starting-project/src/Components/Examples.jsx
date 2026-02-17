import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import {TabButton} from './TabButton.jsx';
import Section from '../Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples(){

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
    return(
        <Section title="Examples" id="examples">
         <Tabs 
      
         buttons= { 
         <>
          <TabButton isSelected={tabContent==='components'} 
          onSelect={() =>
           SelectHandler('components')}>Components</TabButton>          
          <TabButton isSelected={tabContent==='jsx'} 
          onSelect={() => 
          SelectHandler('jsx')}>JSX</TabButton>          
          <TabButton isSelected={tabContent==='props'}
           onSelect={() => SelectHandler('props')}>Props</TabButton>          
          <TabButton isSelected={tabContent==='state'} 
          onSelect={() => SelectHandler('state')}>State</TabButton>          
          </>
         }
          >
            {tabContent}
         </Tabs>
         <menu>
            
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
          </menu>
        </Section>
    );
}