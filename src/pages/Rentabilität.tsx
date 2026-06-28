import "./Rentabilität.css";
import { useState } from "react";
import {WhiteBackground, Dot, GreyBackground} from "../components";

type Props = {
    color: string;
};

export default function Rent({ color }: Props) {
    const [values, setValues] = useState({
        umsatzerloese: "104765",
        direkteKosten: "64973",
        gruendungskosten: "9500",
        personalaufwand: "0",
        zinsen: "750",
    });

    const updateValue = (
        key: keyof typeof values,
        value: string
    ) => {
        setValues({
            ...values,
            [key]: value,
        });
    };

    const umsatzerloese =
        Number(values.umsatzerloese) || 0;
    const direkteKosten =
        Number(values.direkteKosten) || 0;
    const gruendungskosten =
        Number(values.gruendungskosten) || 0;
    const personalaufwand =
        Number(values.personalaufwand) || 0;
    const zinsen = Number(values.zinsen) || 0;

    const rohergewinn =
        umsatzerloese - direkteKosten;

    const betriebsergebnis =
        rohergewinn -
        gruendungskosten -
        personalaufwand;

    const ergebnisVorSteuern =
        betriebsergebnis - zinsen;

    return (
        <GreyBackground direction={"column"}>
        <div className="rent-container">
            <WhiteBackground>
                <div className="rent-header">
                    <h2>Rentabilität</h2>
                </div>

                <div className="rent-table-header">
                    <span>Name</span>
                    <span>Monat ▼</span>
                </div>

                <div className="entries-container">
                    <div className="rent-row">
                        <div className="rent-name">
                            <Dot color={color} />
                            <span>Umsatzerlöse</span>
                        </div>

                        <input
                            type="number"
                            className="rent-input"
                            value={values.umsatzerloese}
                            onChange={(e) =>
                                updateValue(
                                    "umsatzerloese",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="rent-row">
                        <div className="rent-name">
                            <Dot color={color} />
                            <span>Direkte Kosten</span>
                        </div>

                        <input
                            type="number"
                            className="rent-input"
                            value={values.direkteKosten}
                            onChange={(e) =>
                                updateValue(
                                    "direkteKosten",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="rent-row">
                        <div className="rent-name">
                            <Dot color={color} />
                            <span>Rohergewinn</span>
                        </div>

                        <div className="rent-output">
                            {rohergewinn.toLocaleString("de-DE")} €
                        </div>
                    </div>

                    <div className="rent-row">
                        <div className="rent-name">
                            <Dot color={color} />
                            <span>Gründungskosten</span>
                        </div>

                        <input
                            type="number"
                            className="rent-input"
                            value={values.gruendungskosten}
                            onChange={(e) =>
                                updateValue(
                                    "gruendungskosten",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="rent-row">
                        <div className="rent-name">
                            <Dot color={color} />
                            <span>Personalaufwand</span>
                        </div>

                        <input
                            type="number"
                            className="rent-input"
                            value={values.personalaufwand}
                            onChange={(e) =>
                                updateValue(
                                    "personalaufwand",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="rent-row">
                        <div className="rent-name">
                            <Dot color={color} />
                            <span>Betriebsergebnis</span>
                        </div>

                        <div className="rent-output">
                            {betriebsergebnis.toLocaleString("de-DE")} €
                        </div>
                    </div>

                    <div className="rent-row">
                        <div className="rent-name">
                            <Dot color={color} />
                            <span>Zinsen</span>
                        </div>

                        <input
                            type="number"
                            className="rent-input"
                            value={values.zinsen}
                            onChange={(e) =>
                                updateValue(
                                    "zinsen",
                                    e.target.value
                                )
                            }
                        />
                    </div>

                    <div className="rent-row">
                        <div className="rent-name">
                            <Dot color={color} />
                            <span>Ergebnis (Vor Steuern)</span>
                        </div>

                        <div className="rent-output">
                            {ergebnisVorSteuern.toLocaleString("de-DE")} €
                        </div>
                    </div>
                </div>
            </WhiteBackground>
        </div>
        </GreyBackground>
    );
}