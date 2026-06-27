import {error, success} from "./../AppPopup.tsx";

export default function(res: object, showSuccess = true) {
    if (res.status === "success") {
        if (showSuccess) {
            success("Erfolgreich!");
        }
    } else if (res.status === "expired") {
        error("Sie sind nicht angemeldet - Bitte anmelden!")
        window.location.href = "/login";
    } else if (res.status === "fail") {
        error(res.reason);
    }
}