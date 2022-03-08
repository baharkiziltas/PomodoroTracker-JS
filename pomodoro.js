//timer area
let startingMinutes = 25;
let time = startingMinutes * 60;
let interval = " ";

const countdownEl = document.querySelector("#countdown");
let baslatbuton = document.getElementById("baslat");
let durdurbuton = document.getElementById('durdur');



function start() {
    interval = setInterval(updateCountdown, 1000);
}

function stop() {
    clearInterval(interval);
}


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    if (time > 0) {
        time--;
    };


    if ((minutes == 00 && seconds == 00) || (minutes == 0 && seconds == 0)) {
        clearInterval(interval);
        window.alert("Tebrikler! Molayı ve Bir Kahveyi Hakettin");
        document.getElementById('timearea').style.backgroundColor = '#43a047';
        document.getElementById('countdown').style.backgroundColor = '#43a047';
        document.getElementById('baslat').style.backgroundColor = '#43a047';
        document.getElementById('durdur').style.backgroundColor = '#43a047';
        document.getElementById('timearea').style.backgroundColor = '#43a047';
        document.getElementById('baslatdurdurbutton').style.backgroundColor = '#43a047';
        document.getElementById('baslatdurdurbuttontwo').style.backgroundColor = '#43a047';


        document.getElementById('list').style.textDecoration = "line-through";

        document.getElementById('countdown').innerHTML = "5:00";

        interval = setInterval(mola, 1000);

        const min = 5;
        let times = min * 60;

        function mola() {

            const minute = Math.floor(times / 60);
            let second = times % 60;

            second = second < 10 ? "0" + second : second;

            countdownEl.innerHTML = `${minute}:${second}`;
            if (times > 0) {
                times--;
            };
            if ((minute == 00 && second == 00) || (minute == 0 && second == 0)) {
                document.getElementById('countdown').innerHTML = "Tebrikler!!";

            }

        }

    }

}


// to do area
let addToDoButton = document.getElementById('add');
let toDoContainer = document.getElementById('list');
let inputText = document.getElementById('addToDo');



addToDoButton.addEventListener('click', function () {
    let listItem = document.createElement('li');
    listItem.classList.add('list-item-styling');
    toDoContainer.appendChild(listItem);
    listItem.innerHTML = inputText.value;
    inputText.value = " ";
})