import react, { useContext, useEffect, useState } from "react";
import Fuse from "fuse.js"; //using fuse to simplify live search
import SelectProfileContainer from "./SelectProfileContainer";
import { FirebaseContext } from "../context/firebase"
import  Loading  from "../components/loading/Loading.js"
import Header from "../components/header/Header"
import Card from "../components/cards/Cards"
import FooterContainer from "../container/Footer";
import Player from "../components/player/Player";
import * as ROUTES from "../constant/routes"
import logo from "../logo.svg"

function BrowseContainer( { slides } ) {
    const [category, setCategory] = useState('series')
    const [slideRows, setSlideRows] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)

    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}

    useEffect(() =>{
        const fuse = new Fuse(slideRows, {keys: ['data.description', 'data.title', 'data.genre' ]})
        const results = fuse.search(searchTerm).map(({ item }) => item)

        if(slideRows.length > 0 && searchTerm.length > 3 && results.length > 0){
            setSlideRows(results)
        }else{
            setSlideRows(slides[category])
        }
    }, [searchTerm])

    useEffect(() =>{
        setTimeout(() =>{
            setLoading(false)
        }, 3000)
    }, [profile.displayName])


    useEffect(() => {
        setSlideRows(slides[category])
    }, [slides, category])
 
    return profile.displayName ? ( 
        <>
            {loading ? <Loading src={profile.photoURL} /> 
            : <Loading.ReleaseBody/>}

            <Header src='joker1' dontShowOnSmallViewPort>
                    <Header.Frame>
                        <Header.Group>
                            <Header.Logo to={ROUTES.HOME}  alt="logo" src={logo}/>
                            <Header.TextLink active={category === 'series' ? 'true' : 'false'} onClick={() => setCategory('series')}>Series</Header.TextLink>
                            <Header.TextLink active={category === 'films' ? 'true' : 'false'} onClick={() => setCategory('films')}>Films</Header.TextLink> 
                        </Header.Group>

                        <Header.Group>
                            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                            <Header.Profile>
                                <Header.Picture   alt="user" src={user.photoURL}/>
                                <Header.Dropdown>
                                    <Header.Group style={{marginButtom: '10px'}}>
                                        <Header.Picture src={user.photoURL} />
                                        <Header.TextLink style={{cursor: 'default'}}>{user.displayName}</Header.TextLink>
                                    </Header.Group>
                                    <Header.Group>
                                        <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign Out</Header.TextLink>
                                    </Header.Group>
                                </Header.Dropdown>
                            </Header.Profile>
                        </Header.Group>
                    </Header.Frame> 

                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton onClick={() => console.log('pop up')}>Play</Header.PlayButton>
                </Header.Feature>
            </Header>

            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                    <Card.Meta>
                                        <Card.SubTitle>{item.title}</Card.SubTitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                    <Player.Video src="/videos/bunny.mp4" />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>

            <FooterContainer />
        </>
        ):
        <SelectProfileContainer  user={user} setProfile={setProfile}/>
    }

export default BrowseContainer;