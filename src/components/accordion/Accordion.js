import react, { useState, useContext, createContext } from "react";
import { Container, Inner, Title, Frame, Item, Header, Body } from "./style/accordion";

const ToggleContext = createContext()

function Accordion({children, ...restProps}) {
    return ( 
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
     );
}


Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}


Accordion.Frame = function AccordionFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}


Accordion.Item = function AccordionItem({children, ...restProps}){
    const [toggle, setToggle] = useState(false)
    return <ToggleContext.Provider value={{toggle, setToggle}}> <Item {...restProps}>{children}</Item> </ToggleContext.Provider>
}


Accordion.Header = function AccodionHeader({children, ...restProps}){
    const {toggle, setToggle} = useContext(ToggleContext)
    return <Header {...restProps} onClick={()=>toggle(setToggle(prevToggle => !prevToggle))}>
        {children}
        {toggle ?( <img src="/images/icons/close-slim.png" />) : (<img src="/images/icons/add.png" />)}
    </Header>
}


Accordion.Body = function AccordionBody({children, ...restProps}){
    const {toggle, setToggle} = useContext(ToggleContext)
    return toggle && <Body {...restProps}>{children}</Body>
}


export default Accordion;