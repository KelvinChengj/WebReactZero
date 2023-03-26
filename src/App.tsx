import React,{ useEffect, useState }  from 'react';
import { Slider } from 'primereact/slider';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primeflex/primeflex.css'
import TopBar from './TopBar';
import { Button } from 'primereact/button';
import { ListBox } from 'primereact/listbox';
import {theme} from './serivce/config'

function App() {
  const [value, setValue] = useState<any>(50);
  const [themeValue, setthemeValue] = useState(null);
  //theme :50,100~900,  blue, green, teel, cyan
  return (
      <div className="APP">
        
          <TopBar ColorTheme={themeValue} ColorDeep={`${value*10}`}/>

          <div className="card">
              <h5>Basic: {value*10}</h5>
              <Slider value={value} onChange={(e) => setValue(e.value)} step={10} 
              style={{width: "14rem"}}/>
              <ListBox value={themeValue} options={theme} 
              onChange={(e) => setthemeValue(e.value)} optionLabel="name" style={{ width: '15rem' }} />

              <h5>button Color Test</h5>
              <Button style={{background:"var(--blue-500)"}}>Test</Button>
              <Button className='bg-blue-500'>Test</Button>
          </div>
      </div>
  );
}

export default App;
