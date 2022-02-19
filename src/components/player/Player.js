import react, {useState, useContext, createContext} from "react";
import reactDom from "react-dom";
import {Container, Button, Overlay, Inner, Close} from './style/player'

export const PlayContext = createContext();

function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false)

    return ( 
        <PlayContext.Provider value={{showPlayer, setShowPlayer}}>
            <Container {...restProps}>
                {children}
            </Container>
        </PlayContext.Provider>
     );
}

Player.Video = function PlayerVideo({src, ...restProps}){
    const { showPlayer, setShowPlayer } = useContext(PlayContext)
    // from reactDOM comes .createPortal
    return showPlayer ? reactDom.createPortal(
        <Overlay onClick={()=> setShowPlayer(false)}>
            <Inner>
                <video id="netflix-player" controls>
                    <source src={src} type="video/mp4" />
                </video>
                <Close />
            </Inner>
        </Overlay>,
        document.body
    )
    : null
}


Player.Button = function PlayerButton({...restProps}){
    const { showPlayer, setShowPlayer } = useContext(PlayContext)

    return(
        <Button onClick={() => setShowPlayer((showPlay) => !showPlay)}>
            Play
        </Button>
    )
}

export default Player;