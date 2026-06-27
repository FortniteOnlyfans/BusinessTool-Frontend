import './App.css'
import './components.tsx'
import {Dot, GreyBackground, Info, PageBackground, PageHeader, WhiteBackground} from "./components.tsx"
import {useEffect, useState} from "react";
import {initStates} from "./menu/PageManager.tsx";
import {setPage} from "./menu/PageManager.tsx";
import Privat from "./pages/privatentnahmen.tsx";
import Rent from "./pages/Rentabilität.tsx";

function App() {
    const [upperColor, setUpperColor] = useState("#e7d2d8");
    const [lowerColor, setLowerColor] = useState("#bf3f60");
    const [name, setName] = useState("Umsatz");

    useEffect(() => {
        initStates(setUpperColor, setLowerColor, setName)
    }, []);

    return (
        <>
            <PageHeader color={lowerColor} name={name} setPage={p => setPage(p)} />
            <PageBackground lowerColor={lowerColor} upperColor={upperColor} >
                <GreyBackground>
                   <Rent color={lowerColor}/>
                </GreyBackground>
            </PageBackground>
        </>
    )
}

export default App