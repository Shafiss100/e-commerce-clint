import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route path="alluser" element={<Dashboard></Dashboard>} />
          <Route path="profile" element={<Dashboard></Dashboard>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
