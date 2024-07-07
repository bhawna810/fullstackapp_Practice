import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Login, Main } from './containers';

const App = () => {
  return (
    <div className='text-blue-500 font-semibold'>

      <Routes>
        <Route path='/*' element={<Main/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>

    </div>
  )
}

export default App;