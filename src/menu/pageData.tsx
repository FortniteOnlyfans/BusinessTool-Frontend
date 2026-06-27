import Ums from "../pages/Ums.tsx";
import Liq from "../pages/Liq.tsx";
import NewProj from "../exec/NewProj.tsx";
import DelProj from "../exec/DelProj.tsx";
import OpenProj from "../exec/OpenProj.tsx";
import OpenProjVersion from "../exec/OpenProjVer.tsx";
import Logout from "../exec/Logout.tsx";

export const pageData = {
    dash: {
        name: "Dashboard"
    },

    kost: {
        lowerColor: "#a6c59d",
        upperColor: "#e5eae3",
        name: "Kosten"
    },

    ums: {
        lowerColor: "#bf3f60",
        upperColor: "#e7d2d8",
        name: "Umsatz",
        page: Ums
    },

    kapfin: {
        lowerColor: "#e9a77e",
        upperColor: "#f4e3da",
        name: "Kapitalbedarf & Finanzierung"
    },

    liq: {
        lowerColor: "#9f739f",
        upperColor: "#e7e2e7",
        name: "Liquidität",
        page: Liq
    },

    rent: {
        lowerColor: "#dbc487",
        upperColor: "#eae3d1",
        name: "Rentabilität"
    },

    vergl: {
        name: "Vergleich"
    },

    speichern: {
        name: "Projekt speichern"
    },

    neuver: {
        name: "Neue Projektversion"
    },

    openver: {
        name: "Projektversion öffnen",
        exec: OpenProjVersion
    },

    openproj: {
        name: "Projekt öffnen",
        exec: OpenProj
    },

    newproj: {
        name: "Neues Projekt",
        exec: NewProj
    },

    delproj: {
        name: "Lösche Projekt",
        exec: DelProj
    },

    logout: {
        name: "Ablemden",
        exec: Logout
    }
}