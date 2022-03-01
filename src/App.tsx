import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import OnOff from "./Components/OnOff/OnOff";
import OnOffSecond from "./Components/OnOff/OnOffSecond";
import UncontrolledRating from "./Components/Accordion/UncontrolledRating";

function App() {
    const [light, setLight] = useState<boolean>(true)

    const [ratingValue, setRatingValue] = useState<1 | 2 | 3 | 4 | 5>(1)

    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <div className="App">
            {/*            <PageTitle title='This is APP component'/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>*/}
            <Accordion collapsed={collapsed} setCollapsed={setCollapsed} titleValue={"Menu"}/>
            <OnOff switchOn={light} setLight={setLight}/>
            <OnOffSecond/>
            <UncontrolledRating value={ratingValue} setValue={setRatingValue}/>
        </div>
    );
}

function PageTitle(props: any) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
