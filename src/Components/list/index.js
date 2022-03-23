import './list.css'
import {BoxArrowUpRight} from 'react-bootstrap-icons'

function List(props) {
    const getColor = (score) => {
        var hue=((score)*120).toString(10);
        return {
            backgroundColor: ["hsl(",hue,",100%,50%)"].join("")
        };
    }

    return (
    <>
        <table>
            <th colSpan={2}>Exchange</th>
            <th>Trust rating</th>
            <th></th>
            {props.exchanges.map( exchange => 
                <tr key={exchange.id}>
                    <td>
                        <img className='exchange-logo' src={exchange.image} alt={exchange.id} />
                    </td>
                    <td>
                        <div className='exchange-name'>
                            {exchange.name}
                            <a href={exchange.url}><BoxArrowUpRight  /></a>
                        </div>
                    </td>
                    <td>
                        <div className='trust-score' style={getColor(exchange.trust_score)}>{exchange.trust_score}</div>
                    </td>
                </tr>
            )}
        </table>

    </>
    );
}

export default List;