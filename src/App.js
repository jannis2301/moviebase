import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, SingleMovie, Error } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movies/:id" element={<SingleMovie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
