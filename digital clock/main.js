
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
       
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

function showdate(){
    var day=new Date();
    var D=day.getDate();
    var M=day.getMonth();
    var Y=day.getFullYear();
     var D1=D;
     var M1=M;
     var Y1=Y;
    document.getElementById("MyClock").innerHTML=D1;
    document.getElementById("MyClock-1").innerHTML=M1+1;
    document.getElementById("MyClock-2").innerHTML=Y1;
}
showdate();

var totaldays=["sunday","monday","tuesday","wednesday","thurday","friday","sataurday"];
var sunday=document.getElementById("day-2");
var monday=document.getElementById("day-3");
var tuesday=document.getElementById("day-4");
var wednesday=document.getElementById("day-5");
var thurday=document.getElementById("day-6");
var friday=document.getElementById("day-7");
var sataurday=document.getElementById("day-8");
    console.log(sataurday);

function displayday(){
    var days=new Date();
    var todayday=days.getDay();
    if(totaldays[todayday]=="sunday"){
        sunday.style.color="red";
    }
    else{
        sunday.style.color="white";
    }
    if(totaldays[todayday]=="monday"){
        monday.style.color="red";
    }
    else{
        monday.style.color="white";
    }
    if(totaldays[todayday]=="tuesday"){
        tuesday.style.color="red";
    }
    else{
        tuesday.style.color="white";
    }
    if(totaldays[todayday]=="wednesday"){
        wednesday.style.color="red";
    }
    else{
        wednesday.style.color="white";
    }
    if(totaldays[todayday]=="thurday"){
        thurday.style.color="red";
    }
    else{
        thurday.style.color="white";
    }
    if(totaldays[todayday]=="friday"){
        friday.style.color="red";
    }
    else{
        friday.style.color="white";
    }
    if(totaldays[todayday]=="sataurday"){
        sataurday.style.color="red";
    }
    else{
        sataurday.style.color="white";
    }
}
displayday();