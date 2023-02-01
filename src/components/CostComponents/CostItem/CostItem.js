import "./CostItem.css"
import CostDate from "../CostDate/CostDate";
import Card from "../WrapperBox/Card";

function CostItem(props) { 


    return (
        <Card className="cost-item">
            <CostDate date={props.date}/>
            <div className="cost-item__description">
                <h2>{props.description}</h2>
                <span className="cost-item__price">{props.amount}</span>
            </div>
        </Card>
    );
}

export default CostItem;

