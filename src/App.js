import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import Header from './components/header';
import Dashboard from './pages/Dashboard/DashboardIndex'
import Sidebar from './components/Sidebar/SidebarIndex';
import SettingPage from './pages/Setting/SettingPage';
import ConversationPage from './pages/Conversation/ConversationPage'
import BroadcastingPage from './pages/Broadcasting/BroadcastingPage'
import ContactPage from './pages/Contact/ContactPage';
import TemplatePage from './pages/Templates/TemplatePage'
import MapTemplateVariable from './pages/Dashboard/MapTemplateVariable';
import BroadcastPage from './pages/Dashboard/BroadcastPage'
import Message from './pages/Dashboard/Message';



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
                     <Route path='/conversation' element={ConversationPage} />
                     <Route path='/broadcasting' element={BroadcastingPage} />
                     <Route path='/template' element={TemplatePage} />
                     <Route path='/contact' element={ContactPage} />
                     <Route path='/setting' element={SettingPage} />
                     <Route path='/map-template-variable' element={<MapTemplateVariable />} />
                     <Route path="/broadcast" element={<BroadcastPage />} />
                     <Route path="/message" element={<Message />} />
                 </Routes>
            </div>
        </div>
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;