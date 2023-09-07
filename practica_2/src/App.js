import "./App.css";
import Table from "./components/table/Table";

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];
  const averageIncome = (
    netIncomes.reduce((total, item) => total + item.income, 0) /
    netIncomes.length
  ).toFixed(2);

  return (
    <div className="App">
      <Table netIncomes={netIncomes} />

      <p>Promedio Ingreso Neto: {averageIncome}</p>
    </div>
  );
}

export default App;
