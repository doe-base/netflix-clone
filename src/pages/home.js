import react from "react";
import JumbotronContainer from "../container/Jumbotron";
import FooterContainer from "../container/Footer";
import AccordionContainer from "../container/Accodion";
import HeaderContainer from "../container/Header"
import Search from "../components/search/Search";
import Feature from "../components/feature/Feature"

function Home() {
    return ( 
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more</Feature.Title>
                    <Feature.Subtitle>Watch anywhere, Cancle at any time.</Feature.Subtitle>
                    <Search>
                        <Search.Input placeholder="Email address"/>
                        <Search.Button>Try now</Search.Button>
                        <Search.Break />
                        <Search.Text>Ready to watch? Enter your email to create or restart your membership</Search.Text>
                    </Search>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <AccordionContainer/>
            <FooterContainer />
           
        </>
     );
}

export default Home;