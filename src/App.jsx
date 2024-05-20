import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  Home,
  MyFridge,
  ShowRecipes,
  Community,
  AddIngredients,
  EditIngredients,
  SignIn,
  SignUp,
} from './pages';

import Context from './components/Context';
import './index.css';
import { useState } from 'react';
import Post from './pages/Post';

function App() {
  const [isSidebarOpened, setisSidebarOpened] = useState(false);
  const handleSidebar = (isSidebarOpened) => {
    setisSidebarOpened(!isSidebarOpened);
  };

  return (
    <Context.Provider value={{ isSidebarOpened, handleSidebar }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MyFridge" element={<MyFridge />}></Route>
          <Route path="/ShowRecipes" element={<ShowRecipes />}></Route>
          <Route path="/Community" element={<Community />}></Route>
          <Route path="/AddIngredients" element={<AddIngredients />}></Route>
          <Route path="/EditIngredients" element={<EditIngredients />}></Route>
          <Route path="/board/:id" element={<Community />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
