import "./Dashboard.css"
import "../components.tsx"
import {GET} from "../backend/Backend.tsx";
import {LineChart} from "@mui/x-charts"
import {GreyBackground, WhiteBackground} from "../components.tsx";
import { useEffect, useState } from "react";

interface CalcResult {
    umsatz: number;
    kosten: number;
    gewinn: number;
    deckungsbeitrag: number;
    rentabilitat: number;
    liquiditat: number;
    kapitalbedarf: number;
}

interface VersionData {
    date: number;
    result: CalcResult;
}

export default function Dashboard() {
    const [data, setData] = useState<VersionData[]>([]);
    const projectId = sessionStorage.getItem("projectId");

    useEffect(() => {
        if (!projectId) return;

        GET(`/calc/all/${projectId}`)
            .then((res: any) => {
                setData(res.results);
            })
            .catch(console.error);
    }, [projectId]);

    // Labels für X-Achse (Monate)
    const labels = data.map((v) =>
        new Date(v.date).toLocaleDateString("de-DE", {
            month: "short",
            year: "2-digit",
        })
    );


    return (
        <>
            <div className="dashboard-background">
                <div id="greyBoard">
                    <GreyBackground direction={"row"}>
                        <WhiteBackground>
                            <p id="liq">LIQUIDITÄT</p>
                        </WhiteBackground>
                        <WhiteBackground>
                            <p id="rent">RENTABILITÄT</p>
                        </WhiteBackground>
                    </GreyBackground>
                    <GreyBackground direction={"row"}>
                        <WhiteBackground>
                            <p id="ums">UMSATZ</p>
                            <LineChart
                                height={400}
                                xAxis={[
                                    {
                                        scaleType: "point",
                                        data: labels,
                                    },
                                ]}
                                series={[
                                    {
                                        data: data.map((v) => v.result.umsatz),
                                        showMark: true,
                                        curve: "monotoneX",
                                    },
                                ]}
                            />
                        </WhiteBackground>
                        <WhiteBackground>
                            <p id="kap">KAPITALBEDARF & FINANZIERUNG</p>
                        </WhiteBackground>
                    </GreyBackground>
                </div>
            </div>
        </>
    )
}