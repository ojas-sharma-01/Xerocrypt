import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import First from './questions/first/one';
import Second from './questions/second/two';
import Third from './questions/third/three';
import Leaderb from './components/leaderboard/leaderb';
import Team from './components/createTeam/team';
import Jointeam from './components/createTeam/joinTeam.jsx';
import Createteam from './components/createTeam/createTeam.jsx';
import YourTeam from './components/yourTeam/yourteam.jsx';
import Login from './components/login_signup/login.jsx';
import AuthProvider from './contexts/authcontext.jsx';
import TeamProvider from './contexts/teamcontexts.jsx';
import Signup from './components/login_signup/signup.jsx';

function App() {
  return (
    <TeamProvider>
      <AuthProvider>
        <Router>
          <div className="App bg-black">
            <Routes>
              {/* <Route path='/team' element={<Team />} /> */}
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Signup />} />
              <Route path='/your_team' element={<YourTeam />} />
              <Route path='/join_team' element={<Jointeam />} />
              <Route path='/create_team' element={<Createteam />} />
              <Route path="/" element={<Team />} />
              <Route path="/first" element={<First />} />
              <Route path="/second" element={<Second />} />
              <Route path="/third" element={<Third />} />
              <Route path='/leaderboard/:no' element={<Leaderb />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </TeamProvider>
  );
}

export default App;
