import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import MailCheck from './components/Mailcheck';
import ResetPassword from './components/ResetPassword';
import OptionPage from './components/OptionPage';
import GameBoard from './components/GameBoard';
import MainPage from './components/MainPage';
import MoreOption from './components/MoreOption';

function App() {
  return (
    <div className="App">

      <Routes>
       <Route path="/" element={<OptionPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mailcheck" element={<MailCheck />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/moreoption" element={<MoreOption />} />
       

       </Routes>
    </div>
  );
}

export default App;
