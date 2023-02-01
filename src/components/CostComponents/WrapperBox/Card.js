import './Card.css'

function Card(props) {
    //в строке ниже собираем все классы которые придут в компонентах
    const classes = 'card ' + props.className

    // {props.children} - возвращает всё что будет между тегами компонента Card
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;