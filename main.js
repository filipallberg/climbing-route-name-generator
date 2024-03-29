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

const getRouteNameElement = () => document.getElementById("routeName");

const getClimberDescriptionElement = () => document.getElementById("climberDetails");

const getHref = climberName => climbers[climberName][0];

const getDescription = climberName => climbers[climberName][1];

const getLastName = climberName => climberName.split(" ")[1];

const createRouteName = climberName => randomAdjective() + '-' + getLastName(climberName);

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min; // inclusive

function renderRouteName(climberName) {
    const routeName = getRouteNameElement();

    routeName.text = createRouteName(climberName);
    routeName.href = getHref(climberName);
}

function renderClimberDescription(climberName) {
    const climberDetails = getClimberDescriptionElement();
    climberDetails.innerHTML = getDescription(climberName);
}

function pleasantHue() {
    const goldenRatio = 0.618033988749895;
    const hueMax = 360;

    const baseHue = randomInt(0, hueMax); 

    return (baseHue + (baseHue / goldenRatio)) % hueMax;
}

function cssHSL(hue, saturation, lightness) {
    return 'hsl(' + hue + ',' + saturation + '%,' + lightness + '%)';
}

function generateBackgroundColor() {
    const sat = randomInt(55, 70);
    const l = randomInt(65, 85);

    return [pleasantHue(), sat, l];
}

function generateAHrefColor(hue, saturation, lightness) {
    return [hue, saturation-10, lightness-30];
}

function darkenRouteNameRelativeToBackground(backgroundHsl) {
    const routeName = getRouteNameElement();
    routeName.style.color = cssHSL(...generateAHrefColor(...backgroundHsl));
}

function setAHrefColorInDescription(hsl) {
    const description = getClimberDescriptionElement();
    const links = description.querySelectorAll('a');

    links.forEach(a => {
        a.style.color = cssHSL(...generateAHrefColor(...hsl));
    });
}

function keysToLowerCase(obj) {
    const newObj = {};

    Object.keys(obj).forEach(key => {
        const k = key.toLowerCase();
        newObj[k] = obj[key];
    });
    return newObj;
}

document.addEventListener('DOMContentLoaded', function () {
    climbers = keysToLowerCase(climbers);

    const urlParams = new URLSearchParams(window.location.search);
    const rawClimberNameSeed = urlParams.get('name') || '';

    const climberNameSeed = rawClimberNameSeed.toLowerCase();

    const climberName = climberNameSeed in climbers ? climberNameSeed : randomKey(climbers);

    renderRouteName(climberName);
    renderClimberDescription(climberName);

    const hsl = generateBackgroundColor();

    document.body.style.backgroundColor = cssHSL(...hsl);
    darkenRouteNameRelativeToBackground(hsl);
    setAHrefColorInDescription(hsl);
});