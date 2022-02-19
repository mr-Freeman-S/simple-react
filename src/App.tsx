import React, {useState} from 'react';
import './App.css';
import Rating from "./Components/Accordion/Rating";
import Accordion from "./Components/Accordion/Accordion";
import OnOff from "./Components/OnOff/OnOff";
import OnOffSecond from "./Components/OnOff/OnOffSecond";

function App() {
    const  [light, setLight] = useState<boolean>(true)

    return (
        <div className="App">
{/*            <PageTitle title='This is APP component'/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>*/}
            <Accordion titleValue={"Menu"}/>
            <OnOff switchOn={light} setLight={setLight}/>
            <OnOffSecond/>
        </div>
    );
}

function PageTitle(props:any) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}
export default App;
