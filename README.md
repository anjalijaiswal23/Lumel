Here’s a professional `README.md` file specifically tailored for your **Hierarchical Table React.js Assignment** using react.js and Scss:

---

## 🚀 **Hierarchical Table Assignment**

## 📖 Description
This project is a React.js-based hierarchical table component where parent rows reflect the sum of child row values. The table supports:

✅ Dynamic value updates  
✅ Percentage-based and direct value allocation  
✅ Recursive state updates for parent-child hierarchy  
✅ Variance calculation based on original values  
✅ Clean React state management using `useState`  

---

## 🛠️ **Technologies Used**
- **React.js**  
- **Scss**
- **JavaScript (ES6+)**  
- **Vite** (for fast builds and HMR)  

---

## 📂 **Project Structure**
```
src
├── components
│   ├── Table
│   │   ├── Table.jsx
│   │   ├── Table.module.scss
│   ├── Row
│   │   ├── Row.jsx
│   │   ├── Row.module.scss
├── styles
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _reset.scss
│   ├── index.scss
├── data
│   ├── calculateUtils.js
├── App.jsx
├── main.jsx
├── .env
├── .gitignore
├── README.md
├── package.json
└── vite.config.js
```

---

## 🚀 **Installation**

### 1. **Clone the Repository**  
```bash
git clone https://github.com/anjalijaiswal23/Lumel.git
```

### 2. **Navigate to the Project Directory**  
```bash
cd hierarchical-table
```

### 3. **Install Dependencies**  
Using npm:
```bash
npm install
```
Or with yarn:
```bash
yarn install
```


---

## 🚀 **Running the Project**

### ➡️ **Start the Project in Development Mode**  
```bash
npm run dev
```

### ➡️ **Build for Production**  
```bash
npm run build
```

---

## 📡 **How It Works**
✅ **Parent Value Calculation** – Parent values are calculated dynamically from the sum of child row values.  
✅ **Direct Value Update** – Updates row value directly and updates parent recursively.  
✅ **Percentage-Based Update** – Calculates new value based on percentage and updates parent.  
✅ **Variance Calculation** – Variance is calculated based on original value.  
✅ **Recursive State Update** – State is updated using `useState` and recursive functions.  



## 🏆 **Features**
✅ Dynamic Hierarchy  
✅ Clean State Management  
✅ Recursion for Parent-Child Updates  
✅ Fully Responsive  
✅ Fast Build with Vite  

---

## 🧪 **Testing**
### ➡️ **Run Tests**
```bash
npm test
```

---

## 🌈 **How to Use**
1. Enter a new value or percentage in the input field next to a row.  
2. Click the **"Set"** button to apply a direct value update.  
3. Click the **"%"** button to apply a percentage-based update.  
4. Parent values will automatically reflect the sum of child values.  
5. Variance will update automatically.  

---

## 🖥️ **Example**
### **Initial State:**
| **Label**      | **Value** | **Input** | **Allocation %** | **Allocation Val** | **Variance %** |
|---------------|-----------|-----------|------------------|---------------------|----------------|
| Electronics    | 1400      |           | [button]          | [button]            | 0%             |
| -- Phones      | 800        |           | [button]          | [button]            | 0%             |
| -- Laptops     | 700        |           | [button]          | [button]            | 0%             |

### **After Changing Value:**
| **Label**      | **Value** | **Input** | **Allocation %** | **Allocation Val** | **Variance %** |
|---------------|-----------|-----------|------------------|---------------------|----------------|
| Electronics    | 1580      |           | [button]          | [button]            | 5.33%          |
| -- Phones      | 880        |           | [button]          | [button]            | 10%            |
| -- Laptops     | 700        |           | [button]          | [button]            | 0%             |

---




## 🛡️ **License**
This project is licensed under the [MIT License](LICENSE).

