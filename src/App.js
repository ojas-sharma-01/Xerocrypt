import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import First from './components/first/one';
import Second from './components/second/two';
import Third from './components/third/three';
import Leaderb from './components/leaderboard/leaderb';
import Team from './components/createTeam/team';
import Jointeam from './components/createTeam/joinTeam.jsx';
import Createteam from './components/createTeam/createTeam.jsx';
import YourTeam from './components/yourTeam/yourteam.jsx';
import Login from './components/login_signup/login.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/team' element={<Team />} />
          <Route path='/login' element={<Login />} />
          <Route path='/your_team' element={<YourTeam />} />
          <Route path='/join_team' element={<Jointeam />} />
          <Route path='/create_team' element={<Createteam />} />
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path='/leaderboard' element={<Leaderb />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
