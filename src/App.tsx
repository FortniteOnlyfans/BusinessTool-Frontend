import './App.css'
import './components.tsx'
import {
    GreyBackground,
    PageHeader,
    PageBackground,
    WhiteBackground,
    Dot,
    Info,
    InputNormal,
    InputHighlight
} from "./components.tsx"

function App() {

    const lowerColor="#bf3f60"
    const upperColor="#e7d2d8"
    const name="Umsatz"

    return (
        <>
            <PageHeader color={lowerColor} name={name} />
            <PageBackground lowerColor={lowerColor} upperColor={upperColor} >
                <GreyBackground>
                    <WhiteBackground>
                        <table>
                            <thead>
                            <tr>
                                <th className="p1">Abopreis</th>
                                <th className="p1">Nutzeranzahl</th>
                                <th className="p1">Premiumnutzer</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="p0">6€</td>
                                <td className="p0">100 000</td>
                                <td className="p0">20 000</td>
                            </tr>
                            </tbody>
                        </table>
                    </WhiteBackground>
                    <WhiteBackground>
                        <table>
                            <tbody>
                            <tr>
                                <td><Dot color={lowerColor}/></td>
                                <td className="p0">Umsatz</td>
                                <td className="p0">120 000€</td>
                            </tr>
                            <tr>
                                <td><Dot color={lowerColor}/></td>
                                <td className="p0">Kosten</td>
                                <td className="p0">100 000€</td>
                            </tr>
                            <tr>
                                <td><Dot color={lowerColor}/></td>
                                <td className="p0">Rohgewinn</td>
                                <td className="p0">16,67%   20 000€</td>
                            </tr>
                            </tbody>
                        </table>
                        <Info color={lowerColor}/>
                    </WhiteBackground>
                    <WhiteBackground>
                        <div>
                            <Dot color={lowerColor}/>
                            <Dot color={lowerColor}/>
                            <Dot color={lowerColor}/>
                        </div>
                        <div>
                            <label className="p0">Umsatz</label>
                            <label className="p0">Kosten</label>
                            <label className="p0">Rohgewinn</label>
                        </div>
                        <div>
                            <InputNormal content={"120 000€"}/>
                            <InputNormal content={"100 000€"}/>
                            <InputHighlight content={"16,67%     20 000€"} color={lowerColor}/>
                        </div>
                    </WhiteBackground>
                </GreyBackground>
            </PageBackground>
        </>
    )
}

export default App