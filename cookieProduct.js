function calculateCookies() {

    let boxes = parseInt(document.getElementById("boxInput").value);

    let totalCookies = boxes * 6;

    let totalWeight = boxes * 180;

    document.getElementById("cookieResult").value = totalCookies;

    document.getElementById("weightResult").value = totalWeight + " grams";

}