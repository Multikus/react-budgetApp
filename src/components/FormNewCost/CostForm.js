import React, { useState } from 'react';
import './CostForm.css'

function CostForm(props) {
    const [inputName, setInputName] = useState('');
    const [newInputCost, setInputNewCost] = useState('');
    const [costInputDate, setInputCostDate] = useState('');

    const nameChangeHandler = (e) => {
        setInputName(e.target.value);
    }

    const inputNewCostHandler = (e) => {
        console.log(e.target.value);
        setInputNewCost(e.target.value);
    }

    const inputCostDateHandler = (e) => {
        console.log(e.target.value);
        setInputCostDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const costData = {
            date: new Date(costInputDate),
            description: inputName,
            amount: newInputCost,
        };

        props.onSaveCostData(costData);//передаю данные в родительский компонент
        setInputName('');
        setInputNewCost('');
        setInputCostDate('');
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input 
                        type='text'
                        value={inputName}
                        onChange={nameChangeHandler}
                        />
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input 
                        type='number' 
                        min='0.01' 
                        step='0.01'
                        value={newInputCost}
                        onChange={inputNewCostHandler}/>
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input 
                        type='date'
                        value={costInputDate}
                        onChange={inputCostDateHandler}/>
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить расход</button>
                </div>
            </div>
        </form>
    );
}

export default CostForm;