import "../App.css"
import "../components.tsx"
import {
    Dot,
    GreyBackground,
    InputNormal,
    PageBackground,
    PageHeader, SumNormal,
    WhiteBackground
} from "../components.tsx";
import {GET} from "../backend/Backend.tsx";
import {useEffect, useState} from "react";
import {PROJ_STATE} from "../menu/PageManager.tsx";
import Menu from "../menu/Menu.tsx";

export default function Umsatz() {
    const [upperColor, setUpperColor] = useState("#e7d2d8");
    const [lowerColor, setLowerColor] = useState("#bf3f60");
    const [name, setName] = useState("Umsatz");
    const projectname = "Probeunternehmen"



    const [calc, setCalc] = useState(null);

    useEffect( () => {
        GET(`/project/${PROJ_STATE.currentId}/calc/latest`).then(data => setCalc(data));
    }, []);


    return (
        <>
                <GreyBackground direction={"column"}>
                    <WhiteBackground>
                        <div id="umsatzUpper">
                            <div id="umsatzUpperInner">
                                <label>Abopreis in € (Monat)</label>
                                <InputNormal/>
                            </div>
                            <div id="umsatzUpperInner">
                                <label>Nutzeranzahl</label>
                                <InputNormal/>
                            </div>
                            <div id="umsatzUpperInner">
                                <label>Premium Nutzer</label>
                                <InputNormal/>
                            </div>
                        </div>
                    </WhiteBackground>
                    <WhiteBackground>
                        <div id="umsatzLower">
                            <div id="umsatzLowerInner">
                                <div id="dottedItem"><Dot color={lowerColor}/>
                                    <label>Umsatz</label>
                                </div>
                                <SumNormal>{calc ? calc.umsatz : ""} €</SumNormal>
                            </div>
                            <div id="umsatzLowerInner">
                                <div id="dottedItem"><Dot color={lowerColor}/>
                                    <label>Kosten</label>
                                </div>
                                <SumNormal>{calc ? calc.kosten : ""} €</SumNormal>
                            </div>
                            <div id="umsatzLowerInner">
                                <div id="dottedItem"><Dot color={lowerColor}/>
                                    <label>Rohgewinn</label>
                                </div>
                                <SumNormal>{calc ? calc.gewinn : ""} €</SumNormal>
                            </div>
                        </div>
                    </WhiteBackground>
                </GreyBackground>
        </>
    )
}