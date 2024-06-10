function init() {
    printHash();
}

async function printHash() {
    const clearValue = document.forms["data"]["secret"].value + ':'
        + document.forms["data"]["guid"].value + ':'
        + document.forms["data"]["version"].value + ':'
        + document.forms["data"]["day"].value;

    document.getElementById("clearResult").innerHTML = "Clear value: " + clearValue;

    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder("utf-8").encode(clearValue));

    document.getElementById("hashedResult").innerHTML = "Hashed value: " + Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
}

const text =
    "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hash = await window.crypto.subtle.digest("SHA-256", data);
    return hash;
}


