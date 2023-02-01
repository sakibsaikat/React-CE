import React from 'react';
import './CreatePost.css';
import Top from './../UniversalTop/Top';
import CreateForm from './CreateForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const CreatePost = () => {


  return (
    <div className='mainContent'>
      <Top />

      <div className='bottom flex'>
        <CreateForm />
      </div>

    </div>
  )
}

export default CreatePost