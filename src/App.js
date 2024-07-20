import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import Header from './components/header';
import Dashboard from './pages/Dashboard/DashboardIndex'
import Sidebar from './components/Sidebar/SidebarIndex';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='main d-flex'>
            <div className='sidebarWrapper'>
                 <Sidebar/>
            </div>
            <div className='content'>
                 <Routes>
                     <Route path='/' exact={true} element= {<Dashboard/>}/>
                     <Route path='/dashboard' exact={true} element= {Dashboard}/>
                 </Routes>
            </div>
        </div>
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;
