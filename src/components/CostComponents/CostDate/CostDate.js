import './CostDate.css'

function CostDate(props) {
    // Для более чистого кода выносим день месяц год в отдельные переменные
    const day = props.date.toLocaleDateString('ru-RU', {day: 'numeric' });
    const month = props.date.toLocaleDateString('ru-RU', {month: 'long' });
    const year = props.date.toLocaleDateString('ru-RU', {year: 'numeric'});

    return (
        <div className='cost-date'>
            <div className='cost-date__month'>{month}</div>
            <div className='cost-date__year'>{year}</div>
            <div className='cost-date__day'>{day}</div>
        </div>
    );
}

export default CostDate;