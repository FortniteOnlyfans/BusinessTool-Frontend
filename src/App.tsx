import './App.css'
import './components.tsx'
import {GreyBackground, PageBackground, PageHeader} from "./components.tsx"
import {CSSProperties, useEffect, useState} from "react";
import {initStates, setPage} from "./menu/PageManager.tsx";
import {GlobalModalContainer} from "./Modal.tsx";

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
                <GreyBackground direction={"column"}>
                    <WhiteBackground>
                        <table>
                            <thead>
                            <tr>
                                <th>Abopreis</th>
                                <th>Nutzeranzahl</th>
                                <th>Premiumnutzer</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>6€</td>
                                <td>100 000</td>
                                <td>20 000</td>
                            </tr>
                            </tbody>
                        </table>
                    </WhiteBackground>
                    <WhiteBackground>
                        <table>
                            <tbody>
                            <tr>
                                <td><Dot color={lowerColor}/></td>
                                <td>Umsatz</td>
                                <td>120 000€</td>
                            </tr>
                            <tr>
                                <td><Dot color={lowerColor}/></td>
                                <td>Umsatz</td>
                                <td>120 000€</td>
                            </tr>
                            <tr>
                                <td><Dot color={lowerColor}/></td>
                                <td>Umsatz</td>
                                <td>120 000€</td>
                            </tr>
                            </tbody>
                        </table>
                        <Info color={lowerColor}/>
                    </WhiteBackground>
                </GreyBackground>
            </PageBackground>
            <GlobalModalContainer/>
        </>
    )
}

export default App