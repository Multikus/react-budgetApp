import Costs from "./components/CostComponents/Costs/Costs";
import NewCost from "./components/FormNewCost/NewCost";

function App(props) {

  const costs = [
    {
      id: 'c1',
      date: new Date(2023, 2, 26),
      description: 'Холодильник',
      amount: 999.99
    },
      {
      id: 'c2',
      date: new Date(2023, 1, 12),
      description: 'MacBook',
      amount: 1254.72
    },
      {
      id: 'c3',
      date: new Date(2023, 0, 19),
      description: 'Jeans',
      amount: 49.99
    },
  ]

  // функция обработчик для получения данных из дочернего компонента
  // также добавляет новый объект в массив с объектами 
  const addCostHandler = (cost) => {
    costs.push(cost);
    console.log(costs);
    console.log('new object add');
  }

  return (
    <div className="App">
        <h1>Happy hacking</h1>
        <NewCost 
        onAddCost={addCostHandler}
        />
        <Costs 
            dataCost={costs}
        />
    </div>
  );
}

export default App;
