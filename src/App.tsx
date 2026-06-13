import './App.css'
import './components.tsx'
import {GreyBackground, PageHeader, PageBackground, WhiteBackground, Dot, Info} from "./components.tsx"

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
        </>
    )
}

export default App