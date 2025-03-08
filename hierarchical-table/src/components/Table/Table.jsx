import React from 'react';
import Row from '../Row/Row';
import styles from '../Table/Table.module.scss';

const Table = ({ data, setData }) => {
  const calculateTotal = () =>
    data.reduce((total, row) => total + row.value, 0);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Label</th>
          <th>Value</th>
          <th>Input</th>
          <th>Allocation %</th>
          <th>Allocation Val</th>
          <th>Variance %</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <Row key={row.id} row={row} data={data} setData={setData} />
        ))}
        <tr>
          <td><b>Grand Total</b></td>
          <td><b>{calculateTotal()}</b></td>
          <td colSpan="4"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
