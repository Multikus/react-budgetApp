import CostForm from "./CostForm";
import './NewCost.css'


function NewCost(props) {
    
    // функция получения данных из дочернего компонента
    const saveCostDataHandler = (inputCostData) => {

        let id = new Date();

        const costData = {
            id: id.getTime(),
            ...inputCostData,
        }

        props.onAddCost(costData);
    }
    // onSaveCostData={saveCostDataHandler} - собственный обработчик для вызова функции в дочернем компоненте
    return (
        <div className='new-cost'>
            <CostForm onSaveCostData={saveCostDataHandler}/>
        </div>
    );

}

export default NewCost;
