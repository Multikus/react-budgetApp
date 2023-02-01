import './Costs.css'
import CostItem from '../CostItem/CostItem';
import Card from '../WrapperBox/Card';


function Costs(props) {
    return (
        <Card className='costs'>
            <CostItem 
                date={props.dataCost[0].date}
                description={props.dataCost[0].description}
                amount={props.dataCost[0].amount}
            />
            <CostItem 
                date={props.dataCost[1].date}
                description={props.dataCost[1].description}
                amount={props.dataCost[1].amount}
            />
            <CostItem 
                date={props.dataCost[2].date}
                description={props.dataCost[2].description}
                amount={props.dataCost[2].amount}
            />
        </Card>
    );
}

export default Costs;