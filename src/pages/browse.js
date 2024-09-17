import react from "react";
import useContent from "../hooks/use-content";
import selectionMap from "../untils/selection-map";
import BrowseContainer from "../container/Browse"

function Browse() {

    const { series } = useContent('series')
    const { films } = useContent('films')
    // console.log(series)
    // console.log(films)

    const slides = selectionMap({ series, films })

    return ( 
        <BrowseContainer slides={slides}/>
     );
}

export default Browse;