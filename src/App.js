import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Leaderb from './components/leaderboard/leaderb';
import Team from './components/createTeam/team';
import Jointeam from './components/createTeam/joinTeam.jsx';
import Createteam from './components/createTeam/createTeam.jsx';
import YourTeam from './components/yourTeam/yourteam.jsx';
import Login from './components/login_signup/login.jsx';
import AuthProvider from './contexts/authcontext.jsx';
import TeamProvider from './contexts/teamcontexts.jsx';
import Signup from './components/login_signup/signup.jsx';
import Ques_temp from './question_template/ques_template.jsx';
import Four04 from './components/404/four04.jsx';
import Loading from './components/loader/loading_.jsx';
import ClockProvider from './contexts/clockContext.jsx';
import Dbprovider from './firebutil/firestore/firestoredb.js';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <ClockProvider>
      <Dbprovider>
      <TeamProvider>
        <AuthProvider>
            <Router>
              <div className="App bg-black">
                <Routes>
                  <Route path='/ques' element={< Ques_temp />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Signup />} />
                  <Route path='/your_team' element={<YourTeam />} />
                  <Route path='/join_team' element={<Jointeam />} />
                  <Route path='/create_team' element={<Createteam />} />
                  <Route path="/" element={<Team />} />
                  <Route path='/leaderboard/:no' element={<Leaderb />} />
                  <Route path='*' element={<Four04 />} />
                  <Analytics />
                </Routes>
              </div>
            </Router>
        </AuthProvider>
      </TeamProvider>
      </Dbprovider>
    </ClockProvider>
  );
}

export default App;
