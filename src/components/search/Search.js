import react from "react";
import {Button, Input, Container, Text, Break} from "./style/search"

function Search({children, ...restProps}) {
    return ( 
        <Container {...restProps}>
            {children}
        </Container>
     );
}

Search.Button = function SearchButton({children, ...restProps}){
    return ( <Button {...restProps} placeholder="Email address">{children} <img src="./images/icons/chevron-right.png" alt="Try Now" /></Button> )
}

Search.Input = function SearchInput({children, ...restProps}){
    return ( <Input {...restProps} /> )
}

Search.Text = function SearchText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Search.Break = function SearchBreak({children, ...restProps}) {
    return <Break {...restProps}>{children}</Break>
}

export default Search;