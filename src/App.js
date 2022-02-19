import react from "react";
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Redirect } from "react-dom"
import Home from "./pages/home";
import Browse from "./pages/browse";
import Singup from "./pages/singup";
import Singin from "./pages/signin";
import * as ROUTES from './constant/routes'
import useAuthListener from '../src/hooks/use-auth-listener'


function App() {
  const {user} = useAuthListener();
  // console.log(user)

  return (
    <BrowserRouter>
      <Routes>

        
          <Route path={ROUTES.HOME} element={user ? <Navigate to={ROUTES.BROWSE} /> : <Home />}/>
          <Route path={ROUTES.BROWSE} element={user ? <Browse /> : <Navigate to={ROUTES.SIGN_IN} />} />
          <Route path={ROUTES.SIGN_IN} element={user ? <Navigate to={ROUTES.BROWSE} /> : <Singin />}/>
          <Route path={ROUTES.SIGN_UP} element={user ? <Navigate to={ROUTES.BROWSE} /> : <Singup />}/>
        
      </Routes>
    </BrowserRouter>
    );
}

export default App;
