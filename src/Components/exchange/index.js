import {useParams} from 'react-router-dom';

function Exchange() {
    let {id} = useParams();
    return ( 
    <>
        <p>{id}</p>
    </> 
    );
}

export default Exchange;