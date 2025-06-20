const frogPic = [
    "https://outforia.com/wp-content/uploads/2022/03/types-of-frogs-yellow-banded-poison-dart-frog.jpg"
    ,"https://outforia.com/wp-content/uploads/2022/03/types-of-frogs-malayan-horned-frog.jpg"
    ,"https://outforia.com/wp-content/uploads/2022/03/types-of-frogs-Vietnamese-Mossy-Frog.jpg"

];
const frogName = [
    "Yellow-Banded Poison Dart Frog"
    ,"Malayan Horned Frog"
    ,"Vietnamese Mossy Frog"

];
const frogGeo = [
    "https://outforia.com/wp-content/uploads/2022/03/types-of-frog-yellow-banded-poison-dart-frog-map.jpg"
    ,"https://th.bing.com/th/id/R.dc649e050b4423d8b0098ae1617e0ac8?rik=f4ciXnp8FnSOww&riu=http%3a%2f%2fontheworldmap.com%2fmalaysia%2fmalaysia-location-map.jpg&ehk=mlT6iaLTBckQ%2f0WAWEomZGDDCKAL%2bSO1XVURoDBFytE%3d&risl=&pid=ImgRaw&r=0"
    ,"https://th.bing.com/th/id/OIP.bHqPKksrNN-vB1fMjl7PHwAAAA?r=0&rs=1&pid=ImgDetMain"
];
const frogGeoTxt = [
    "Nourthern South America"
    ,"Malaysia"
    ,"Northern Vietnam"
]
const frogFact = [
    "They are mostly active during the day. One of the largest poison dart frogs being about 2 inches. They eat insects like ants, spiders, termites, and crickets. Each frog has a unique pattern so you wont find any other frog that look alike."
    ,"Horn Frog"
    ,"Moss Frog"
]
let frogSlide = 0;

function changeFrogUp() {
    frogSlide = frogSlide + 1;
    document.getElementById("frogPhoto").src = frogPic[frogSlide];
    document.getElementById("frogspc").textContent = frogName[frogSlide];
    document.getElementById("frogLocation").src = frogGeo[frogSlide];
    document.getElementById("frogFacts").textContent = frogFact[frogSlide];
    document.getElementById("frogLocationTxt").textContent = frogGeoTxt[frogSlide];
    if (frogSlide == frogPic.length){
        frogSlide = 0;
        document.getElementById("frogPhoto").src = frogPic[frogSlide];
        document.getElementById("frogspc").textContent = frogName[frogSlide];
        document.getElementById("frogLocation").src = frogGeo[frogSlide];
        document.getElementById("frogFacts").textContent = frogFact[frogSlide];
        document.getElementById("frogLocationTxt").textContent = frogGeoTxt[frogSlide];
    };
}

function changeFrogDown() {
    frogSlide = frogSlide - 1;
    document.getElementById("frogPhoto").src = frogPic[frogSlide];
    document.getElementById("frogspc").textContent = frogName[frogSlide];
    document.getElementById("frogLocation").src = frogGeo[frogSlide];
    document.getElementById("frogFacts").textContent = frogFact[frogSlide];
    document.getElementById("frogLocationTxt").textContent = frogGeoTxt[frogSlide];
    if (frogSlide < 0){
        frogSlide = frogPic.length - 1;
        document.getElementById("frogPhoto").src = frogPic[frogSlide];
        document.getElementById("frogspc").textContent = frogName[frogSlide];
        document.getElementById("frogLocation").src = frogGeo[frogSlide];
        document.getElementById("frogFacts").textContent = frogFact[frogSlide];
        document.getElementById("frogLocationTxt").textContent = frogGeoTxt[frogSlide];
    };
}

document.getElementById("nextF").addEventListener('click',() =>{
    changeFrogUp();
});

document.getElementById("previousF").addEventListener('click',() =>{
    changeFrogDown();
});