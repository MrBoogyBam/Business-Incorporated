let newUser = undefined;
let userName = undefined;
let userAge = undefined;
let map = new Map();
const ageList = [
    {
        name: "MrBoogyBam",
        birthdate: new Date("1/27/2006 1:00:00")
    },
    {
        name: "The Head Obamid",
        birthdate: new Date("8/19/2005")
    },
    {
        name: "Permutative",
        birthdate: new Date("6/11/2003")
    },
    {
        name: "SquillyBobJoe",
        birthdate: new Date("21/21/21")
    },
    {
        name: "sashagames2012",
        birthdate: new Date("8/3/2021")
    }
];

for(let i = 0; i < ageList.length; i++) {
    map.set("new-user-" + ageList[i].name, document.createElement("div"));
    map.set("user-name-" + ageList[i].name, document.createElement("p"));
    map.set("user-age-" + ageList[i].name, document.createElement("p"));

    document.getElementById("age-list").appendChild(map.get("new-user-" + ageList[i].name));

    map.get("new-user-" + ageList[i].name).className = "user";
    map.get("user-name-" + ageList[i].name).className = "name";
    map.get("user-age-" + ageList[i].name).className = "age";
    

    map.get("new-user-" + ageList[i].name).appendChild(map.get("user-name-" + ageList[i].name));
    map.get("new-user-" + ageList[i].name).appendChild(map.get("user-age-" + ageList[i].name));

    setAge(i);
}

setInterval(() => {
    for(let i = 0; i < ageList.length; i++) {
        setAge(i);
    }
}, 1000);

function setAge(i) {
    const today = new Date();
    const differenceInTime = today.getTime() - ageList[i].birthdate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    ageList[i].age = (differenceInDays/365.24).toFixed(10);

    map.get("user-name-" + ageList[i].name).innerHTML = ageList[i].name;
    map.get("user-age-" + ageList[i].name).innerHTML = ageList[i].age;
}

document.getElementById("mm-button").onclick = function() {
    window.location.href = "../index.html"
}