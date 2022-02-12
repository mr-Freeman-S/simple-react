import React, {useState} from 'react';
import './App.css';
import Rating from "./Components/Rating";
import Accordion from "./Components/Accordion";
import OnOff from "./Components/OnOff/OnOff";

function App() {
    const  [light, setLight] = useState<boolean>(true)

    return (
        <div className="App">
            <PageTitle title='This is APP component'/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Accordion collapsed={false} titleValue={"Menu"}/>
            <OnOff switchOn={light} setLight={setLight}/>
        </div>
    );
}

function PageTitle(props:any) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}
export default App;
