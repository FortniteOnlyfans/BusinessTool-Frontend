import {error, success} from "./../AppPopup.tsx";

export default function(res: object) {
    if (res.status === "success") {
        success("Erfolgreich!");
    } else if (res.status === "expired") {
        //TODO: redirect zur login seite
        alert("Neu anmelden");
    } else if (res.status === "fail") {
        error(res.reason);
    }
}