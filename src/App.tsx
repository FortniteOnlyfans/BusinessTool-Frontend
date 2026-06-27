import './App.css'
import './components.tsx'
import {GreyBackground, PageBackground, PageHeader} from "./components.tsx"
import {CSSProperties, useEffect, useState} from "react";
import {initStates, setPage} from "./menu/PageManager.tsx";

interface InnerProps {
    color: CSSProperties
}

function App() {
    const [upperColor, setUpperColor] = useState("#525252");
    const [lowerColor, setLowerColor] = useState("#525252");
    const [name, setName] = useState("Dashboard");
    const [Inner, setInner] = useState<React.ComponentType<InnerProps> | null>(null);

    useEffect(() => {
        initStates(setUpperColor, setLowerColor, setName, setInner);
    }, []);

    return (
        <>
            <PageHeader color={lowerColor} name={name} setPage={p => setPage(p)}/>
            <PageBackground lowerColor={lowerColor} upperColor={upperColor}>
                <GreyBackground direction={"column"}>
                    {Inner ? <Inner color={lowerColor}/> : <div/>}
                </GreyBackground>
            </PageBackground>
        </>
    )
}

export default App