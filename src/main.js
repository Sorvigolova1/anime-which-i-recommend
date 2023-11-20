import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app')

let introduction = document.querySelector('.introduction')
function moving(){
	introduction.className = 'active'

}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
window.onload=moving
setTimeout(function(){
let nameless= document.querySelector('.nameless')
nameless.style.opacity = '100%'
},1500)
if (window.innerWidth > 992) {
document.onmousemove= function(event){
	let x = event.x-296
	let y = event.y-456
	document.querySelector('.Eye1').style.transform = `rotate(${57.2958*arctag(x,y)}deg`
	document.querySelector('.Eye2').style.transform = `rotate(${57.2958*arctag(x,y)}deg`
	function arctag(x,y){
		if (x > 0 && y>0) return Math.PI / 2 - Math.atan(x/y)
		if (x < 0 && y>0) return Math.PI / 2 - Math.atan(x/y)
		if (x < 0 && y<0) return Math.PI  + Math.atan(y/x)
			if (x > 0 && y<0) return 3* Math.PI / 2 +Math.abs( Math.atan(x/y))
	}

}
}
let time = document.querySelector('.time');
let S = document.querySelector('.S');
function counter(){
	let a=1
	let s=100
	let timeid = setInterval(function(){
		time.textContent=`t=${a} с`
		S.textContent=`s=${s} м`
		if (a==5){
			a=0
			s=0
		}
   a+=1
   s+=100
	},990)
}
	
counter()