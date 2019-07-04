function randomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function randomKey(obj) {
    return randomElement(Object.keys(obj));
};

function randomAdjective() {
    let adjectives = [
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

function renderRouteName() {
    let routeName = document.getElementById("routeName");

    let left = randomAdjective();
    let right = randomKey(climbers);

    routeName.text = left + '-' + right;
}

document.addEventListener('DOMContentLoaded', function () {
    renderRouteName();
});