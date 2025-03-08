import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Hierarchical Table</h1>
      </header>
      <main>{children}</main>
      <footer>© 2025 - My Table App</footer>
    </div>
  );
};

export default MainLayout;
