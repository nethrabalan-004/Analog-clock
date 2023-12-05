const hour=document.querySelector('.hrs');
const minute=document.querySelector('.min');
const second=document.querySelector('.sec');

setInterval(runClock,1000);

function runClock(){
  const time=new Date();
  const sec=time.getSeconds()/60;
  const min=(sec+time.getMinutes())/60;
  const hrs=(min+time.getHours())/12;
  hour.style.transform = `rotate(${hrs*360}deg)`;
  minute.style.transform = `rotate(${min*360}deg)`;
  second.style.transform = `rotate(${sec*360}deg)`;

}

runClock();