import {error, success} from "./../AppPopup.tsx";

export default function(res: object, showSuccess = true) {
    if (res.status === "success") {
        if (showSuccess) {
            success("Erfolgreich!");
        }
    } else if (res.status === "expired") {
        //TODO: redirect zur login seite
        alert("Neu anmelden");
    } else if (res.status === "fail") {
        error(res.reason);
    }
}