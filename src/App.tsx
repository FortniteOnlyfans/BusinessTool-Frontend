import "./App.css"
import {
    Dot,
    GreyBackground,
    InputNormal,
    PageBackground,
    PageHeader,
    SumNormal,
    WhiteBackground
} from "./components.tsx";
import Menu from "./menu/Menu.tsx";


export default function Umsatz() {
    const lowerColor = "#bf3f60"
    const upperColor = "#e7d2d8"
    const name = "Umsatz"
    const projectname = "Probeunternehmen"

    return (
        <>
            <PageHeader color={lowerColor} name={name} projectname={projectname} imgName={"src/images/Umsatz.png"}>
                <Menu color={lowerColor} setPage={"ums"}/>
            </PageHeader>
            <PageBackground lowerColor={lowerColor} upperColor={upperColor}>
                <GreyBackground>
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
                                <InputNormal/>
                            </div>
                            <div id="umsatzLowerInner">
                                <div id="dottedItem"><Dot color={lowerColor}/>
                                    <label>Kosten</label>
                                </div>
                                <SumNormal>1200 €</SumNormal>
                            </div>
                            <div id="umsatzLowerInner">
                                <div id="dottedItem"><Dot color={lowerColor}/>
                                    <label>Rohgewinn</label>
                                </div>
                                <InputNormal/>
                            </div>
                        </div>
                    </WhiteBackground>
                </GreyBackground>
            </PageBackground>
        </>
    );
};