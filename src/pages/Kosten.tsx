import "../App.css"
import {
    GreyBackground,
    WhiteBackground
} from "../components.tsx";
import Menu from "../menu/Menu.tsx";
import {useEffect, useState} from "react";
import type {InnerProps} from "../App.tsx";
import type {ProjectVersion} from "../menu/PageManager.tsx";
import {pageHookRegistry} from "../menu/PageManager.tsx";

export type CostEntry = {
    id: number;
    name: string;
    amount: number;
};

type CostSectionProps = {
    title: string;
    entries: CostEntry[];
    setEntries: React.Dispatch<React.SetStateAction<CostEntry[]>>;
};

export function CostSection({
                         title,
                         entries,
                         setEntries,
                     }: CostSectionProps) {

    function addEntry() {
        setEntries(prev => [
            ...prev,
            {
                id: Date.now(),
                name: "",
                amount: 0
            }
        ]);
    }

    function removeEntry(id: number) {
        setEntries(prev =>
            prev.filter(entry => entry.id !== id)
        );
    }

    function updateName(id: number, value: string) {
        setEntries(prev =>
            prev.map(entry =>
                entry.id === id
                    ? { ...entry, name: value }
                    : entry
            )
        );
    }

    function updateAmount(id: number, value: string) {
        setEntries(prev =>
            prev.map(entry =>
                entry.id === id
                    ? {
                        ...entry,
                        amount: Number(value) || 0
                    }
                    : entry
            )
        );
    }

    const sum = entries.reduce(
        (acc, entry) => acc + entry.amount,
        0
    );

    return (
        <div className="cost-section">

            {/* Header */}
            <div className="cost-header">
                <h2>{title}</h2>

                <button
                    className="addBtn"
                    onClick={addEntry}
                >
                    +
                </button>
            </div>

            {/* Spaltenüberschriften */}
            <div className="cost-labels">
                <span>Name</span>
                <span>Betrag</span>
            </div>

            {/* Scrollbarer Listenbereich */}
            <div className="cost-list">

                {entries.map(entry => (
                    <div
                        key={entry.id}
                        className="cost-row"
                    >
                        <input
                            value={entry.name}
                            onChange={e =>
                                updateName(
                                    entry.id,
                                    e.target.value
                                )
                            }
                        />

                        <input
                            type="number"
                            value={entry.amount}
                            onChange={e =>
                                updateAmount(
                                    entry.id,
                                    e.target.value
                                )
                            }
                        />

                        <button
                            className="removeBtn"
                            onClick={() =>
                                removeEntry(entry.id)
                            }
                        >
                            -
                        </button>
                    </div>
                ))}
            </div>

            {/* Trennlinie */}
            <div className="cost-divider" />

            {/* Immer sichtbar */}
            <div className="cost-summary">
                <span>Summe</span>

                <div className="sum-box">
                    {sum.toLocaleString("de-DE")} €
                </div>
            </div>

        </div>
    );
}


export default function Kosten({pid, color}) {
    const [personnelCosts, setPersonnelCosts] = useState<CostEntry[]>([]);
    const [operatingCosts, setOperatingCosts] = useState<CostEntry[]>([]);
    const [directCosts, setDirectCosts] = useState<CostEntry[]>([]);

    useEffect(() => {
        pageHookRegistry[pid] = {
            save: function (pv: ProjectVersion) {

            },
            load: function (pv: ProjectVersion) {

            }
        };
    }, []);

    return (
        <>
                <GreyBackground direction={"row"}>
                    <WhiteBackground>
                        <CostSection
                            title="Direkte Kosten"
                            entries={directCosts}
                            setEntries={setDirectCosts}
                        />
                    </WhiteBackground>

                    <WhiteBackground>
                        <CostSection
                            title="Betriebsausgaben"
                            entries={operatingCosts}
                            setEntries={setOperatingCosts}
                        />
                    </WhiteBackground>

                    <WhiteBackground>
                        <CostSection
                            title="Personalausgaben"
                            entries={personnelCosts}
                            setEntries={setPersonnelCosts}
                        />
                    </WhiteBackground>
        </>
    );
};