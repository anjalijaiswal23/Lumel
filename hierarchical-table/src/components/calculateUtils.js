export const initialData = [
    {
        "id": "electronics",
        "label": "Electronics",
        "value": 1400, //this value needs to be calculated from the children values (800+700)
        "children": [
          {
            "id": "phones",
            "label": "Phones",
            "value": 800
          },
          {
            "id": "laptops",
            "label": "Laptops",
            "value": 700
          }
        ]
      },
      {
        "id": "furniture",
        "label": "Furniture",
        "value": 1000, //this need to be calculated from the children values (300+700)
        "children": [
          {
            "id": "tables",
            "label": "Tables",
            "value": 300
          },
          {
            "id": "chairs",
            "label": "Chairs",
            "value": 700
          }
        ]
      }
  ];
  
  export const updateHierarchy = (data, id, newValue, setData) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, value: newValue };
      } else if (item.children) {
        return {
          ...item,
          children: updateHierarchy(item.children, id, newValue, setData),
          value: item.children.reduce((sum, child) => sum + child.value, 0)
        };
      }
      return item;
    });
    setData(newData);
  };
  