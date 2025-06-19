const frogPic = ["https://outforia.com/wp-content/uploads/2022/03/types-of-frogs-yellow-banded-poison-dart-frog.jpg","https://outforia.com/wp-content/uploads/2022/03/types-of-frogs-malayan-horned-frog.jpg","https://outforia.com/wp-content/uploads/2022/03/types-of-frogs-Vietnamese-Mossy-Frog.jpg"];
const frogName = ["Yellow-Banded Poison Dart Frog","Malayan Horned Frog","Vietnamese Mossy Frog"];

let frogSlide = 0;

function changeFrogUp() {
    frogSlide = frogSlide + 1;
    document.getElementById("frogPhoto").src = frogPic[frogSlide];
    document.getElementById("frogspc").textContent = frogName[frogSlide];
    if (frogSlide == frogPic.length){
        frogSlide = 0;
        document.getElementById("frogPhoto").src = frogPic[frogSlide];
        document.getElementById("frogspc").textContent = frogName[frogSlide];
    };
}

function changeFrogDown() {
    frogSlide = frogSlide - 1;
    document.getElementById("frogPhoto").src = frogPic[frogSlide];
    document.getElementById("frogspc").textContent = frogName[frogSlide];
    if (frogSlide < 0){
        frogSlide = frogPic.length - 1;
        document.getElementById("frogPhoto").src = frogPic[frogSlide];
        document.getElementById("frogspc").textContent = frogName[frogSlide];
    };
}

document.getElementById("nextF").addEventListener('click',() =>{
    changeFrogUp();
});

document.getElementById("previousF").addEventListener('click',() =>{
    changeFrogDown();
});