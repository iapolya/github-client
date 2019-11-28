import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';

function App({ children }) {
  return (
    <div>
      <div>header</div>
        {children}
      <div>footer</div>
    </div>
  );
}

export default App;
