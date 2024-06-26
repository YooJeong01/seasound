const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys=[], audio = new Audio("/audio/a.mp3");

const playTune = (key) => {
    audio.src=`/audio/${key}.mp3`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active"); //active 클래스를 넣으면서 키보드가 눌린것처럼 색이 변하는 css 적용
    setTimeout(()=>{ //계속 눌려있는 모습을 방지하기 위해, 150ms뒤에 active클래스를 삭제
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key=>{
    allKeys.push(key.dataset.key);
    key.addEventListener("click", ()=> playTune(key.dataset.key));
});

const showHideKeys = () => { //키 코드 온오프
    pianoKeys.forEach(key=> key.classList.toggle("hide"));
}

const handleVolume = (e) => { //볼륨 조절
    audio.volume = e.target.value;
}

// 키보드는 아무데서나 눌릴수있기때문에, 피아노위에 onmouseover라던지 등을 추가로 해야할듯
const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown",pressedKey);