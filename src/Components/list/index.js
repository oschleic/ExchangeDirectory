import './list.css'
import {useEffect, useState} from 'react';
import { getExchanges } from '../../api';
import Button from 'react-bootstrap/Button';
import {ArrowLeft, ArrowRight} from 'react-bootstrap-icons';

function List() {
    const [exchanges, setExchanges] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() =>{
      const fetch = async () => {
        setExchanges(await getExchanges(10,page));
      }
      fetch();
    }, [page])
  
    const changePage = (difference) => {
      if(difference === -1 && page === 1){
        difference = 0;
      }
      setPage(page + difference)
    }
  
    const leftArrow =  <Button size={70} className={"arrow"} disabled={page === 1} variant="light" onClick={(e) => {
        e.preventDefault();
        changePage(-1);
        console.log("click")
    }}><ArrowLeft/> </Button>;

    const rightArrow = <Button size={70} className="arrow" variant="light" onClick={(e) => {
        e.preventDefault();
        changePage(1);
        console.log("click")
    }}>
        <ArrowRight/>
    </Button>;
    

    const getColor = (score) => {
        var hue=((score / 10)*120).toString(10);
        return {
            backgroundColor: ["hsl(",hue,",100%,50%)"].join("")
        };
    }


    return (
    <>
        <div className='table-container'>
        <table>
            <thead>
                <th colSpan={2}>Exchange</th>
                <th>Trust rating</th>
                <th></th>
            </thead>
            <tbody>
                {exchanges.map( exchange => 
                    <tr key={exchange.id}
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href="/exchange/" + exchange.id;
                            }}
                    >
                        <td>
                            <img className='exchange-logo' src={exchange.image} alt={exchange.id} />
                        </td>
                        <td>
                            <div className='exchange-name'>
                                {exchange.name}
                            </div>
                        </td>
                        <td>
                            <div className='trust-score' style={getColor(exchange.trust_score)}>{exchange.trust_score} / 10</div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>

        </div>

    <div className='page-selection'>
        {leftArrow}
        <div className='space' />
        {rightArrow}
    </div>

    </>
    );
}

export default List;