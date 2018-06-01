
//start-scr
var startScreen = document.querySelector('.test-wraper-start');
var btnStart = document.querySelector('#start-btn');
var startScreenContent = document.querySelector('.first-screen__text-top');
//test-scr
var testContent = document.querySelector('.test-wraper-2');
var table1 = testContent.querySelector('.table-letter');
var table2 = testContent.querySelector('.table-letter2');
var table3 = testContent.querySelector('.table-letter3');
var btn = document.querySelector('#test-abc');
var rotateContent = document.querySelector('.test-block__lesson-wrap');
var timer = document.querySelectorAll('.test-timer');
var btnOverlay = document.querySelector('.btn-overlay');
//scrin-hint
var abcHint = document.querySelector('.hint-rotate');
var hintP = abcHint.querySelector('.hint-rotate__text');
var hintGreen = abcHint.querySelector('.text-green');
var hintContent = abcHint.querySelector('.text-blue');
var abcHintOk = document.querySelector('#adc-hint-ok');
//result-scr 
var testResult = document.querySelector('.test-wraper-result');
var btnResult = testResult.querySelector('#btn-result');

//timer------------
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var timeResult = [];
var timerVal = 0;
var minute = 0;
var timerStart;
var e = ['Отлично! А теперь попробуй прочитать парам.', 'Хорошо! А теперь прочитай тройками))).']
console.log(btnStart);
// timer start---------
function onTimer(arg) {
	timerStart = setInterval(function() {
		timerVal++
		if (timerVal < 10) {
			timerVal = '0' + timerVal;
		};
		if (timerVal%60 == 0) {
			timerVal = '00';
			minute++;
		}
		timer[arg].textContent = minute + ' : ' + timerVal;
	}, 1000);
}
function stopTimer(arr) {
	clearInterval(timerStart)
	timerVal = '00';
	minute = 0;
	timeRes(arr);
}
//end timer-----------
function styleNextTimer(arg) {
	timer[arg-1].classList.remove('test-timer--active');
	timer[arg].classList.remove('disabled');
	timer[arg].classList.add('test-timer--active');
}
//Test results
function timeRes(arg) {
	var timeString = timer[arg-1].innerHTML.split('');
	var time = parseInt(timeString[0]*60)+parseInt(timeString[4]+timeString[5]);
	timeResult.push(time);
}
console.log(timer[1]);
//step start-scr
btnStart.addEventListener('click', function() {
	startScreen.classList.add('hidden');
	testContent.classList.remove('hidden');
	timer[0].classList.add('test-timer--active');
	b = 0;
	c = 0;
	onTimer(b);
	if (a<4) {
		a++;
		switch(a) {
			case 2: 
			table1.classList.add('hidden');
			table2.classList.remove('hidden');
			break;
			case 3: 
			table2.classList.add('hidden');
			table3.classList.remove('hidden');
			break;
		}
		console.log(a);
	}
});
btn.addEventListener('click', function() {
	console.log('This is '+d);
	if (b<5) {
		b++;
		switch(b) {
			case 1 : 
			rotateContent.style.transform = 'rotate(90deg)';
			rotateContent.classList.add('hidden');
			abcHint.classList.remove('hidden');
			btnOverlay.classList.remove('hidden');
			hintContent.textContent = 'сверху-вниз';
			styleNextTimer(b);
			stopTimer(b);
			break;
			case 2 : 
			rotateContent.style.transform = 'rotate(180deg)';
			rotateContent.classList.add('hidden');
			abcHint.classList.remove('hidden');
			btnOverlay.classList.remove('hidden');
			hintContent.textContent = 'вверх ногами';
			styleNextTimer(b);
			stopTimer(b);
			break;
			case 3 : 
			rotateContent.style.transform = 'rotate(270deg)';
			rotateContent.classList.add('hidden');
			abcHint.classList.remove('hidden');
			btnOverlay.classList.remove('hidden');
			hintContent.textContent = 'снизу-вверх';
			styleNextTimer(b);
			stopTimer(b);
			break;
			case 4 : 
			rotateContent.style.transform = 'rotate(360deg)';
			rotateContent.classList.add('hidden');
			abcHint.classList.remove('hidden');
			btnOverlay.classList.remove('hidden');
			hintContent.textContent = 'на скорость';
			styleNextTimer(b);
			stopTimer(b);
			break;
			default : 
			clearInterval(timerStart);
			timeRes(b);
			startScreen.classList.remove('hidden');
			testContent.classList.add('hidden');
			var bestTime = Math.min.apply(null, timeResult);
			for (i = 0; i<timer.length; i++) {
				timerVal = '00';
				minute = 0;
				timer[i].textContent = minute + ' : ' + timerVal;
				timer[i].classList.add('disabled');
			};
		timer[0].classList.remove('disabled');
		timer[timer.length-1].classList.remove('test-timer--active');
		console.log(timer[4].innerHTML.split(''));
		console.log(timeResult);
		console.log(bestTime);
	};
};
if(a==3 && b==5) {
				testContent.classList.add('hidden');
				testResult.classList.remove('hidden');
				startScreen.classList.add('hidden');
			}
if (a==1) {
	startScreenContent.textContent= e[0];
} else if(a==2){
	startScreenContent.textContent= e[1];
}
});
abcHintOk.addEventListener('click', function() {
	if(c<5) {
		c++;
		rotateContent.classList.remove('hidden');
		abcHint.classList.add('hidden');
		btnOverlay.classList.add('hidden');
		onTimer(c);
		console.log(c);
	}
});
btnResult.addEventListener('click', function() {
	location.reload();
});
//modal-hint
//modalHint
var modalHint = document.querySelector('.modal-hint');
var openHint = document.querySelector('#modal-hint');
var closeHint = document.querySelector('.hint-btn');
var hintOver = document.querySelector('.overlay');
openHint.addEventListener('click', function() {
	modalHint.classList.remove('hidden');
	hintOver.classList.remove('hidden')
});
closeHint.addEventListener('click', function() {
	modalHint.classList.add('hidden');
	hintOver.classList.add('hidden');
});