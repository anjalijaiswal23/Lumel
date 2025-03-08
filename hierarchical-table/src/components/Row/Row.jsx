import React, { useState } from 'react';
import styles from './Row.module.scss';
import { updateHierarchy } from '../calculateUtils';

const Row = ({ row, data, setData }) => {
  const [inputValue, setInputValue] = useState('');

  const handlePercentageChange = () => {
    const percentage = parseFloat(inputValue);
    if (!isNaN(percentage)) {
      const newValue = row.value + (row.value * percentage) / 100;
      updateHierarchy(data, row.id, newValue, setData);
    }
  };

  const handleValueChange = () => {
    const newValue = parseFloat(inputValue);
    if (!isNaN(newValue)) {
      updateHierarchy(data, row.id, newValue, setData);
    }
  };

  const variance = (
    ((row.value - row.originalValue) / row.originalValue) *
    100
  ).toFixed(2);

  return (
    <tr>
      <td>{row.label}</td>
      <td>{row.value}</td>
      <td>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </td>
      <td>
        <button onClick={handlePercentageChange}>%</button>
      </td>
      <td>
        <button onClick={handleValueChange}>Set</button>
      </td>
      <td>{variance}%</td>
    </tr>
  );
};

export default Row;
