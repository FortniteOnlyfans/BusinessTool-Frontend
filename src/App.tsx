import './App.css'
import './components.tsx'
import {GreyBackground, PageBackground, PageHeader} from "./components.tsx"
import {CSSProperties, useEffect, useState} from "react";
import {initStates, setPage} from "./menu/PageManager.tsx";

interface InnerProps {
    color: CSSProperties
}

function App() {
    const [upperColor, setUpperColor] = useState("#e7d2d8");
    const [lowerColor, setLowerColor] = useState("#bf3f60");
    const [name, setName] = useState("Umsatz");
    const [Inner, setInner] = useState<React.ComponentType<InnerProps> | null>(null);

    useEffect(() => {
        initStates(setUpperColor, setLowerColor, setName, setInner);
    }, []);

    return (
        <>
            <PageHeader color={lowerColor} name={name} setPage={p => setPage(p)}/>
            <PageBackground lowerColor={lowerColor} upperColor={upperColor}>
                <GreyBackground>
                    {Inner ? <Inner color={lowerColor}/> : <div/>}
                </GreyBackground>
            </PageBackground>
        </>
    )
}

export default App