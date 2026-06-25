export function error(message: string) {
    alert(message);
}

export function success(message: string) {
    alert(message);
}

export function requestString(msg: string): Promise<string> {
    return new Promise<string>((res, rej) => res(prompt(msg)));
}