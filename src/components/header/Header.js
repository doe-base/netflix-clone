import react, { useState } from "react";
import { Link as ReactRouterLink } from "react-router-dom"

import {
    Background, 
    Container, 
    Logo, 
    Button, 
    Feature, 
    Text, 
    FeatureCallOut, 
    TextLink, 
    Group, 
    Picture, 
    Profile, 
    Dropdown, 
    Search, 
    SearchIcon, 
    SearchInput,
    PlayButton
} from "./style/header"

function Header({ bg=true, children, ...restProps }) {
    return ( 
        bg ? <Background {...restProps}>{children}</Background> : children
     );
}

Header.Frame = function HeaderFrame({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Text = function HeaderText({children, ...restProps}){

    return <Text {...restProps}>{children}</Text>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){

    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.TextLink = function HeaderTextLink({children, ...restProps}){

    return <TextLink {...restProps}>{children}</TextLink>
}

Header.Group = function HeaderGroup({children, ...restProps}){

    return <Group {...restProps}>{children}</Group>
}

Header.Picture = function HeaderPicture({src, ...restProps}){

    return <Picture {...restProps} src={`/images/users/${src}.png`} />
}

Header.Profile = function HeaderProfile({children, ...restProps}){

    return <Profile {...restProps}>{children}</Profile>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}){

    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm}){
    const [searchActive, setSearchActive] = useState(false)

    return (
    <Search>
        <SearchIcon onClick={() => setSearchActive((prevSearchActive) => !prevSearchActive)}>
            <img src="/images/icons/search.png" alt="Search"/>
        </SearchIcon>
        <SearchInput 
        value={searchTerm} 
        onChange={({ target }) => setSearchTerm(target.value)} 
        placeholder='Search films and series' 
        active={searchActive}/>
    </Search>
 )
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}



Header.Button = function HeaderButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return( 
    <ReactRouterLink to={to}>
        <Logo {...restProps}/>
    </ReactRouterLink>
)
}

export default Header;