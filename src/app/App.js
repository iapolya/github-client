import React from 'react';
import '../App.css';
import 'antd/dist/antd.css';

function App({ children }) {
  return (
    <div style={Layout}>
        {children}
    </div>
  );
}

export default App;

const Layout = {
    margin: '50px'
};
