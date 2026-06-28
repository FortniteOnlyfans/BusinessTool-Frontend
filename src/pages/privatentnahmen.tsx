import "./privatentnahmen.css";
import {Dot, GreyBackground, Info, WhiteBackground} from "../components.tsx";
import { useState } from "react";

type Entry = {
    name: string;
    value: number;
};

export default function Privat({ color }) {
    const [entries, setEntries] = useState<Entry[]>([
        {
            name: "Lebenshaltung gesamt",
            value: 24750,
        },
    ]);

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
            setEntries([
                {
                    name: "",
                    value: 0,
                },
            ]);
            return;
        }

        setEntries(entries.filter((_, i) => i !== index));
    };

    const updateName = (index: number, name: string) => {
        const newEntries = [...entries];
        newEntries[index].name = name;
        setEntries(newEntries);
    };

    const updateValue = (index: number, value: string) => {
        const newEntries = [...entries];
        newEntries[index].value =
            value === "" ? 0 : Number(value);

        setEntries(newEntries);
    };

    const sum = entries.reduce(
        (acc, entry) => acc + entry.value,
        0
    );

    return (
        <GreyBackground direction={"column"}>
        <div className="privat-container">
            <WhiteBackground>
                <div className="privat-header">
                    <h2>Privatentnahme</h2>

                    <button
                        className="addBtn"
                        onClick={addField}
                    >
                        +
                    </button>
                </div>

                <div className="privat-table-header">
                    <span>Name</span>
                    <span>Jahr 1</span>
                </div>

                <div className="entries-container">
                    {entries.map((entry, index) => (
                        <div
                            className="privat-row"
                            key={index}
                        >
                            <div className="privat-name">
                                <Dot color={color} />

                                <input
                                    className="name-input"
                                    placeholder="Name eingeben"
                                    value={entry.name}
                                    onChange={(e) =>
                                        updateName(
                                            index,
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <div className="privat-input-row">
                                <input
                                    type="number"
                                    className="privat-input"
                                    value={entry.value}
                                    onChange={(e) =>
                                        updateValue(
                                            index,
                                            e.target.value
                                        )
                                    }
                                />

                                <button
                                    className="remove-btn"
                                    onClick={() =>
                                        removeField(index)
                                    }
                                >
                                    −
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="sum-section">
                    <div className="divider"></div>

                    <div className="sum-row">
                        <span>
                            Summe Private Ausgaben
                        </span>

                        <div className="sum-box">
                            {sum.toLocaleString("de-DE")} €
                        </div>
                    </div>
                </div>
            </WhiteBackground>

            <WhiteBackground>
                <div className="info-box">
                    <Info color={color} />

                    <p>
                        Die Position „Privatentnahmen“
                        wird durch die Differenz aus
                        privaten Ausgaben und privatem
                        Einkommen ermittelt. Sollte das
                        private Einkommen die privaten
                        Ausgaben übersteigen, werden die
                        Privatentnahmen automatisch auf
                        null gesetzt.
                    </p>
                </div>
            </WhiteBackground>
        </div>
        </GreyBackground>
    );
}