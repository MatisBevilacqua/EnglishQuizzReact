// import './App.css'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Started from './Components/Started';
import Register from './Components/Register';
import Login from './Components/Login';
import Main from './Components/Main';
import QuizCreate from './Components/QuizCreate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Started />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/quizcreate' element={<QuizCreate/>}/>
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
