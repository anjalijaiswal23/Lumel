import React, { useState } from 'react';
import Table from '../Table/Table';
import { initialData } from '../calculateUtils';

// ✅ Helper function to initialize originalValue recursively
const initializeData = (data) => {
  return data.map((item) => ({
    ...item,
    originalValue: item.value, // ✅ Set original value based on initial value
    children: item.children ? initializeData(item.children) : undefined
  }));
};

const Home = () => {
  // ✅ Initialize data using the helper function
  const [data, setData] = useState(initializeData(initialData));

  return <Table data={data} setData={setData} />;
};

export default Home;
