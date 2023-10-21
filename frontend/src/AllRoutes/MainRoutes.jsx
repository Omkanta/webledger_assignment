import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SinglePage } from '../Pages/SinglePage'
import Login from '../Pages/Login'
import Recipe from '../Pages/Recipe'
import { FavPage } from '../Pages/FavPage'

export const MainRoutes = () => {
    const user=localStorage.getItem("webledger_token")||null
  return (
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/recipe' element={user?<Recipe/>:<Login/>}></Route>
        <Route path='/singlepage/:id' element={user?<SinglePage/>:<Login/>}></Route>
        <Route path='/favpage' element={user?<FavPage/>:<Login/>}></Route>
   </Routes>
  )
}
