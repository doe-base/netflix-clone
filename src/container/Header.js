import react from "react";
import Header from "../components/header/Header";
import * as ROUTES from "../constant/routes"
import logo from "../logo.svg"


function HeaderContainer({ children }) {
    return ( 
       <Header>
           <Header.Frame>
               <Header.Logo to={ROUTES.HOME}  alt="logo" src={logo}/>
               <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
           </Header.Frame>
           {children}
       </Header> 
     );
}

export default HeaderContainer;