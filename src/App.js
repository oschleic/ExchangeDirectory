import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import {getExchanges} from './api';
import List from './Components/list';
import Exchange from './Components/exchange';

function App() {
  const [exchanges, setExchanges] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() =>{
    const fetch = async () => {
      setExchanges(await getExchanges(10,1));
    }
    fetch();
    console.log(exchanges)
  }, [page])

  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
          <Route path="/" element={<List exchanges={exchanges}></List>}></Route>
          <Route path="/exchange/:id" element={<Exchange exchanges={exchanges}/>}></Route>
      </Routes>


        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
