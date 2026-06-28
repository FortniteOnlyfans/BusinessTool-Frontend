import "../App.css"
import "../components.tsx"
import {
    Dot,
    GreyBackground,
    InputNormal, SumNormal,
    WhiteBackground
} from "../components.tsx";
import {GET} from "../backend/Backend.tsx";
import {useEffect, useRef, useState} from "react";
import {pageHookRegistry, PROJ_STATE} from "../menu/PageManager.tsx";
import type {ProjectVersion} from "../menu/PageManager.tsx";

export default function Umsatz({pid, color}) {
    const [lowerColor, setLowerColor] = useState("#bf3f60");

    const [calc, setCalc] = useState(null);

    const [aboPreis, setAboPreis] = useState(0);
    const [nutzerZahl, setNutzerZahl] = useState(0);
    const [premNutzerZahl, setPremNutzerZahl] = useState(0);

    console.log("render", {
        aboPreis,
        nutzerZahl,
        premNutzerZahl
    });

    const stateRef = useRef({ aboPreis, nutzerZahl, premNutzerZahl });
    stateRef.current = { aboPreis, nutzerZahl, premNutzerZahl };

    useEffect(() => {
        pageHookRegistry[pid] = {
            save: function (pv: ProjectVersion) {
                if (!pv.extra) pv.extra = {};

                const current = stateRef.current;
                pv.extra.preisPremium = current.aboPreis;
                pv.extra.basisNutzer = current.nutzerZahl;
                pv.extra.premiumNutzer = current.premNutzerZahl;
            },
            load: function (pv: ProjectVersion) {
                if (!pv.extra) return;
                setAboPreis(pv.extra.preisPremium);
                setNutzerZahl(pv.extra.basisNutzer);
                setPremNutzerZahl(pv.extra.premiumNutzer);

                GET(`/project/${PROJ_STATE.currentId}/calc/latest`).then(data => setCalc(data));
            }
        };
    }, []);

    return (
        <>
            <GreyBackground direction={"column"}>
                <WhiteBackground>
                    <div id="umsatzUpper">
                        <div id="umsatzUpperInner">
                            <label>Abopreis in € (Monat)</label>
                            <InputNormal value={aboPreis}
                                         onChange={(e) => setAboPreis(e.target.value)}/>
                        </div>
                        <div id="umsatzUpperInner">
                            <label>Nutzeranzahl</label>
                            <InputNormal value={nutzerZahl}
                                         onChange={(e) => setNutzerZahl(e.target.value)}/>
                        </div>
                        <div id="umsatzUpperInner">
                            <label>Premium Nutzer</label>
                            <InputNormal value={premNutzerZahl}
                                         onChange={(e) => setPremNutzerZahl(e.target.value)}/>
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