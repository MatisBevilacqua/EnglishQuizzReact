// import './App.css'
import PropTypes from 'prop-types';
import { Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import Started from './Components/Started';
import Register from './Components/Register';
import Login from './Components/Login';
import ChooseLanguage from './Components/ChooseLanguage';
import QuizCreate from './Components/QuizCreate';
import TimerQuiz from './Components/TimerQuiz';
import NameQuiz from './Components/NameQuiz';
import PageQuizUser from './Components/PageQuizUser';
import MainUser from './Components/MainUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Started />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/chooselanguage' element={<ChooseLanguage/>}/>
          <Route path='/quizcreate' element={<QuizCreate/>}/>
          <Route path='/timerquiz/:name' element={<TimerQuiz/>}/>
          <Route path='/namequiz' element={<NameQuiz/>}/>
          <Route path='/pagequizuser' element={<PageQuizUser/>}/>
          <Route path='/mainuser' element={<MainUser/>}/>
        </Route>
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <Outlet />
  )
}

export default App
