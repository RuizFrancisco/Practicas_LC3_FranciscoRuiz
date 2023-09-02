import React from "react";
import "./Table.css";

const Table = ({ netIncomes }) => {
  return (
    <div>
      <table className="income-table">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((item, index) => (
            <tr key={item + index}>
              <td>{item.brand}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
