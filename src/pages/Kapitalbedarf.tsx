import "./Kapitalbedarf.css";
import {Dot, GreyBackground, Info, WhiteBackground} from "../components";
import { useState } from "react";

type Entry = {
    name: string;
    value: number;
};

function Category({
                      title,
                      color,
                      entries,
                      setEntries,
                  }: {
    title: string;
    color: string;
    entries: Entry[];
    setEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
}) {
    const addField = () => {
        setEntries([
            ...entries,
            {
                name: "",
                value: 0,
            },
        ]);
    };

    const removeField = (index: number) => {
        if (entries.length === 1) {
            setEntries([{ name: "", value: 0 }]);
            return;
        }

        setEntries(entries.filter((_, i) => i !== index));
    };

    const updateName = (index: number, value: string) => {
        const copy = [...entries];
        copy[index].name = value;
        setEntries(copy);
    };

    const updateValue = (index: number, value: string) => {
        const copy = [...entries];
        copy[index].value = value === "" ? 0 : Number(value);
        setEntries(copy);
    };

    const sum = entries.reduce((a, b) => a + b.value, 0);

    return (
        <WhiteBackground>
            <div className="category-header">
                <h3>{title}</h3>

                <button
                    className="addBtn"
                    onClick={addField}
                >
                    +
                </button>
            </div>

            <div className="category-table-header">
                <span>Name</span>
                <span>Betrag</span>
            </div>

            <div className="category-scroll">
                {entries.map((entry, index) => (
                    <div
                        className="category-row"
                        key={index}
                    >
                        <div className="category-name">
                            <Dot color={color} />

                            <input
                                value={entry.name}
                                placeholder="Name"
                                onChange={(e) =>
                                    updateName(index, e.target.value)
                                }
                            />
                        </div>

                        <div className="category-value">
                            <input
                                type="number"
                                value={entry.value}
                                onChange={(e) =>
                                    updateValue(index, e.target.value)
                                }
                            />

                            <button
                                className="remove-btn"
                                onClick={() => removeField(index)}
                            >
                                −
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="category-sum">
                <span>Summe</span>

                <div className="sum-box">
                    {sum.toLocaleString("de-DE")} €
                </div>
            </div>
        </WhiteBackground>
    );
}

export default function Kapital({ color }) {
    const [investments, setInvestments] = useState<Entry[]>([
        {
            name: "Honorare",
            value: 20031,
        },
    ]);

    const [assets, setAssets] = useState<Entry[]>([
        {
            name: "Auto",
            value: 20031,
        },
    ]);

    const [costs, setCosts] = useState<Entry[]>([
        {
            name: "Auto",
            value: 20031,
        },
    ]);

    const [equity, setEquity] = useState(5000);
    const [savings, setSavings] = useState(2000);

    const [loanValue, setLoanValue] = useState(25000);
    const [loanNominal, setLoanNominal] = useState(25000);
    const [loanInterest, setLoanInterest] = useState(3);
    const [loanDuration, setLoanDuration] = useState(3);

    const totalInvestments = investments.reduce(
        (a, b) => a + b.value,
        0
    );

    const totalAssets = assets.reduce(
        (a, b) => a + b.value,
        0
    );

    const totalCosts = costs.reduce(
        (a, b) => a + b.value,
        0
    );

    const capitalNeed =
        totalInvestments +
        totalAssets +
        totalCosts;

    const totalEquity = equity + savings;

    const totalDebt = loanValue;

    const totalCapital = totalEquity + totalDebt;

    const difference = totalCapital - capitalNeed;

    const format = (value: number) =>
        `${value.toLocaleString("de-DE")} €`;
    return (
        <GreyBackground direction={"column"}>
        <div className="kapital-container">

            <WhiteBackground>

                <h2>Finanzierung</h2>

                <div className="finance-table">

                    <div className="finance-head">Name</div>
                    <div className="finance-head">Wert</div>
                    <div className="finance-head">Nominalbetrag</div>
                    <div className="finance-head">Zinsen</div>
                    <div className="finance-head">Laufzeit</div>

                    {/* Eigenkapital */}

                    <span className="finance-name">
                        <Dot color={color} />
                        Eigenkapital
                    </span>

                    <input
                        className="finance-input"
                        type="number"
                        value={equity}
                        onChange={(e) =>
                            setEquity(Number(e.target.value))
                        }
                    />

                    <div className="finance-box">-</div>
                    <div className="finance-box">-</div>
                    <div className="finance-box">-</div>

                    {/* Sacheinlagen */}

                    <span className="finance-name">
                        <Dot color={color} />
                        Sacheinlagen
                    </span>

                    <input
                        className="finance-input"
                        type="number"
                        value={savings}
                        onChange={(e) =>
                            setSavings(Number(e.target.value))
                        }
                    />

                    <div className="finance-box">-</div>
                    <div className="finance-box">-</div>
                    <div className="finance-box">-</div>

                    {/* Summe Eigenkapital */}

                    <span className="finance-name sum">
                        <Dot color={color} />
                        Summe Eigenkapital
                    </span>

                    <div className="finance-box bold">
                        {format(totalEquity)}
                    </div>

                    <div className="finance-box">-</div>
                    <div className="finance-box">-</div>
                    <div className="finance-box">-</div>

                    {/* Darlehen */}

                    <span className="finance-name">
                        <Dot color={color} />
                        Gründungsdarlehen
                    </span>

                    <input
                        className="finance-input"
                        type="number"
                        value={loanValue}
                        onChange={(e) =>
                            setLoanValue(Number(e.target.value))
                        }
                    />

                    <input
                        className="finance-input"
                        type="number"
                        value={loanNominal}
                        onChange={(e) =>
                            setLoanNominal(Number(e.target.value))
                        }
                    />

                    <input
                        className="finance-input"
                        type="number"
                        value={loanInterest}
                        onChange={(e) =>
                            setLoanInterest(Number(e.target.value))
                        }
                    />

                    <input
                        className="finance-input"
                        type="number"
                        value={loanDuration}
                        onChange={(e) =>
                            setLoanDuration(Number(e.target.value))
                        }
                    />

                    {/* Summe Kredite */}

                    <span className="finance-name sum">
                        <Dot color={color} />
                        Summe Kredite
                    </span>

                    <div className="finance-box bold">
                        {format(totalDebt)}
                    </div>

                    <div className="finance-box">-</div>
                    <div className="finance-box">-</div>
                    <div className="finance-box">-</div>

                    {/* Kontokorrent */}

                    <span className="finance-name">
                        <Dot color={color} />
                        Kontokorrentkredit
                    </span>

                    <input
                        className="finance-input"
                        type="number"
                        value={0}
                        readOnly
                    />

                    <div className="finance-box">-</div>

                    <div className="finance-box">
                        0 %
                    </div>

                    <div className="finance-box">-</div>

                    {/* Summe Fremdkapital */}

                    <span className="finance-name sum">
                        <Dot color={color} />
                        Summe Fremdkapital
                    </span>

                    <div className="finance-box bold">
                        {format(totalDebt)}
                    </div>

                    <div className="finance-box">-</div>
                    <div className="finance-box">-</div>
                    <div className="finance-box">-</div>

                </div>

            </WhiteBackground>

            <div className="categories">

                <Category
                    title="Investitionen"
                    color={color}
                    entries={investments}
                    setEntries={setInvestments}
                />

                <Category
                    title="Sachanlagen"
                    color={color}
                    entries={assets}
                    setEntries={setAssets}
                />

                <Category
                    title="Gründungskosten"
                    color={color}
                    entries={costs}
                    setEntries={setCosts}
                />

            </div>

            <WhiteBackground>

                <div className="info-box">

                    <Info color={color} />

                    <p>
                        Mit dem Kapitalbedarf (auch Betriebsmittelbedarf) für die
                        Anlaufphase sollen die anfänglichen Fehlbeträge finanziert
                        werden. Diese entstehen, solange die Umsatzerlöse geringer
                        als die Auszahlungen sind. Rechnerisch entspricht der
                        Kapitalbedarf für die Anlaufphase dem Minimum der monatlich
                        kumulierten Liquiditätsüberschüsse und -fehlbeträge.
                    </p>

                </div>

            </WhiteBackground>

            <WhiteBackground>

                <div className="result-grid">

                    <div className="result-card">

                        <span>Gesamtkapitalbedarf</span>

                        <h2>{format(capitalNeed)}</h2>

                    </div>

                    <div className="result-card">

                        <span>Summe Eigen- & Fremdkapital</span>

                        <h2>{format(totalCapital)}</h2>

                    </div>

                    <div className="result-card">

                        <span>Überschüssiges Kapital</span>

                        <h2>{format(difference)}</h2>

                    </div>

                </div>

            </WhiteBackground>

        </div>
        </GreyBackground>
    );
}