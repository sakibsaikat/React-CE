import React from 'react';
import './App.css';
import Sidebar from './components/UniversityDashboard/SidebarSection/Sidebar';
import Body from './components/UniversityDashboard/BodySection/Body';
import CreatePost from './components/UniversityDashboard/CreatePost/CreatePost';
import UniversityPosts from './components/UniversityDashboard/UniversityPosts/UniversityPosts';
import UniversityWaiver from './components/UniversityDashboard/UniversityWaiver/UniversityWaiver';
import UniversityLogin from './components/UniversityDashboard/UniversityLogin/UniversityLogin';
import UniversityRegister from './components/UniversityDashboard/UniversityRegister/UniversityRegister';
import Home from './components/Homepage/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import Logout from './components/UniversityDashboard/Logout';

function App() {

  return (

    <BrowserRouter>


    <Routes>
      <Route path='/home'  element={
        <div className="home_container">
        <Home />
      </div>
      } />

      <Route path='/uniregister'  element={
        <div className="register_container">
        <UniversityRegister />
      </div>
      } />

      <Route path='/unilogin'  element={
        <div className="login_container">
        <UniversityLogin />
      </div>
      } />


      <Route element={<PrivateComponent/>}>

      <Route path='/'  element={
        <div className="container">
        <Sidebar />
        <Body />
      </div>
      } />

      <Route path='/create'  element={
        <div className="container">
        <Sidebar />
        <CreatePost />
      </div>
      } />

      <Route path='/posts'  element={
        <div className="container">
        <Sidebar />
        <UniversityPosts />
      </div>
      } />


      <Route path='/create_waiver'  element={
        <div className="container">
        <Sidebar />
        <CreatePost />
      </div>
      } />


      <Route path='/waivers'  element={
        <div className="container">
        <Sidebar />
        <UniversityWaiver />
      </div>
      } />

      
    <Route path='/logout'  element={<Logout />} />

    </Route>



    </Routes>

      


    </BrowserRouter>
  );
}

export default App;
