import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {getExchanges} from './api';
import List from './Components/list';

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
    <div className="App">
      <List exchanges={exchanges}></List>
      
    </div>
  );
}

export default App;
