function randomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function randomKey(obj) {
    return randomElement(Object.keys(obj));
};

function randomAdjective() {
    const adjectives = [
        "admiring",
        "adoring",
        "affectionate",
        "agitated",
        "amazing",
        "angry",
        "awesome",
        "beautiful",
        "blissful",
        "bold",
        "boring",
        "brave",
        "busy",
        "charming",
        "clever",
        "cocky",
        "cool",
        "compassionate",
        "competent",
        "condescending",
        "confident",
        "cranky",
        "crazy",
        "dazzling",
        "determined",
        "distracted",
        "dreamy",
        "eager",
        "ecstatic",
        "elastic",
        "elated",
        "elegant",
        "eloquent",
        "epic",
        "exciting",
        "fervent",
        "festive",
        "flamboyant",
        "focused",
        "friendly",
        "frosty",
        "funny",
        "gallant",
        "gifted",
        "goofy",
        "gracious",
        "great",
        "happy",
        "hardcore",
        "heuristic",
        "hopeful",
        "hungry",
        "infallible",
        "inspiring",
        "interesting",
        "intelligent",
        "jolly",
        "jovial",
        "keen",
        "kind",
        "laughing",
        "loving",
        "lucid",
        "magical",
        "mystifying",
        "modest",
        "musing",
        "naughty",
        "nervous",
        "nice",
        "nifty",
        "nostalgic",
        "objective",
        "optimistic",
        "peaceful",
        "pedantic",
        "pensive",
        "practical",
        "priceless",
        "quirky",
        "quizzical",
        "recursing",
        "relaxed",
        "reverent",
        "romantic",
        "sad",
        "serene",
        "sharp",
        "silly",
        "sleepy",
        "stoic",
        "strange",
        "stupefied",
        "suspicious",
        "sweet",
        "tender",
        "thirsty",
        "trusting",
        "unruffled",
        "upbeat",
        "vibrant",
        "vigilant",
        "vigorous",
        "wizardly",
        "wonderful",
        "xenodochial",
        "youthful",
        "zealous",
        "zen"
    ];
    
    return randomElement(adjectives);
}

function getHref(climberLastName) {
    return climbers[climberLastName][0];
}

function getDescription(climberLastName) {
    return climbers[climberLastName][1];
}

function createRouteName(climberLastName) {
    return randomAdjective() + '-' + climberLastName;
}

function renderRouteName(climberLastName) {
    const routeName = document.getElementById("routeName");

    routeName.text = createRouteName(climberLastName);
    routeName.href = getHref(climberLastName);
}

function renderClimberDescription(climberLastName) {
    const climberDetails = document.getElementById("climberDetails");
    climberDetails.innerHTML = getDescription(climberLastName);
}

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function pleasantHue() {
    const goldenRatio = 0.618033988749895;
    const hueMax = 360;

    const baseHue = randomInt(hueMax); 

    return (baseHue + (baseHue / goldenRatio)) % hueMax;
}

function cssHSL(hue, saturation, lightness) {
    return 'hsl(' + hue + ',' + saturation + '%,' + lightness + '%)';
}

function generateBackgroundColor() {
    const sat = '60';
    const l = '75';

    return cssHSL(pleasantHue(), sat, l);
}

document.addEventListener('DOMContentLoaded', function () {
    const climberLastName = randomKey(climbers);
    renderRouteName(climberLastName);
    renderClimberDescription(climberLastName);
    document.body.style.backgroundColor = generateBackgroundColor();
});