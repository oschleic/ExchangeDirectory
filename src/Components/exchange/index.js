import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { getExchange } from '../../api'
import './exchange.css';
import Button from 'react-bootstrap/Button';
import {ArrowLeft} from 'react-bootstrap-icons';



function Exchange() {
    let {id} = useParams();
    const [exchange, setExchange] = useState({});
    useEffect(() =>{
        const fetch = async () => {
          setExchange(await getExchange(id));
        }
        fetch();
    })


    const goBack = (e) =>{
        e.preventDefault();
        window.location.href="/";
    }

    return ( 
    <>
        <Button variant="light" className='button' onClick={e => goBack(e)}><ArrowLeft/> Back</Button>
        <div className='exchange-container'>
            <div>
                <img className="image" src={exchange.image} alt={exchange.id} />
                <div class="name">{exchange.name}</div> 
            </div>
            
            <span className='tag'>Trust Score: {exchange.trust_score}</span>
            <span className='tag'>Year Established: {exchange.year_established}</span>
            <span className='tag'>Country: {exchange.country}</span>
            
            
            <a href={exchange.facebook_url}>Facebook</a>
            <a href={exchange.reddit_url}>Reddit</a>
            <a href={exchange.telegram_url}>Telegram</a>
            <a href={exchange.slack_url}>Slack</a>
            

            
        </div>
        
    </> 
    );
}

export default Exchange;