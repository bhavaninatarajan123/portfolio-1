var shop=document.getElementById("shopping");


var designbag=document.createElement("div");
designbag.classList.add("bag-design");
shop.appendChild(designbag);

var scl=document.createElement("div");
scl.classList.add("bag-type");
designbag.appendChild(scl);

var detail1 =document.createElement("p");
detail1.setAttribute("id","bag1");
scl.appendChild(detail1);
detail1.innerHTML="back bag";

var clg=document.createElement("div");
clg.classList.add("bag-clg");
designbag.appendChild(clg);

var detail2=document.createElement("p");
detail2.setAttribute("id","bag2");
clg.appendChild(detail2);
detail2.innerHTML="hand bag";

var travel=document.createElement("div");
travel.classList.add("bag-travel");
designbag.appendChild(travel);

var detail3=document.createElement("p");
detail3.setAttribute("id","bag3");
travel.appendChild(detail3);
detail3.innerHTML="Travel bag";






var buy=document.createElement("div");
buy.classList.add("add-card");
shop.appendChild(buy);

var icon=document.createElement("div");
icon.classList.add("icon");
buy.appendChild(icon);


var icons=document.createElement("i");
icons.classList.add("fa","fa-shopping-cart");
icons.setAttribute("aria-hidden",true);
icon.appendChild(icons);

var para1=document.createElement("div");
para1.classList.add("para");
icon.appendChild(para1);

var p=document.createElement("p");
p.classList.add("para1");
para1.appendChild(p);
para1.innerHTML="0";




var item=[
    {
        id:0,
        img:"image/black.jpg",
        title:"Back bag",
        content:"URBAN CARRIER (SCHOOL BAG)", 
        doller:" 50% , $ 700", 

    },
    {
        id:1,
        img:"image/red-1.jpg",
        title:"Back bag",
        content:"RED PRINTED SCHOOL BAG",
        doller:" 25% , $ 500", 
    },
    {
        id:2,
        img:"image/hand-1.jpg",
        title:"Hand bag",
        content:"BLUE SHOULDER BAG ",
        doller:" 25% , $ 800", 
    },
    {
        id:3,
        img:"image/hand-2.jpg",
        title:"Hand bag",
        content:"GIRLS fav bag",
        doller:" 50% , $ 1200", 
    },
    {
        id:4,
        img:"image/travel-3.jpg",
        title:"Travel bag",
        content:"VILLAIN ACTIVE GYM BAG",
        doller:" 50% , $ 2200",

    },
    {
        id:5,
        img:"image/travel-2.jpg",
        title:"Travel bag",
        content:"NYLON PLAIN SUITCASE",
        doller:"20% , $ 3500",
    },
    
    {
        id:6,
        img:"image/clg-1.jpg",
        title:"Back bag",
        content:"TRAVEL UNISEX BACKPACK",
        doller:" 50% , $ 999",
    },
    {
        id:7,
        img:"image/travel-4.jpg",
        title:"Travel bag",
        content:"LEATHER DUFFLE BAG",
        doller:"25% , $ 1500",
    },
    {
        id:8,
        img:"image/hand-3.jpg",
        title:"Back bag",
        content:"DESIGNER BACK BAG",
        doller:"10% , $ 1000",
    }   
]



var cardSection=document.getElementById("card-section");

var container=document.createElement("div");
container.classList.add("container");
cardSection.appendChild(container);

var row=document.createElement("div");
row.classList.add("card-row");
container.appendChild(row);

item.forEach(function(e){
var col=document.createElement("div");
col.classList.add("card-col");
row.appendChild(col);

var card=document.createElement("div");
card.classList.add("card-card");
col.appendChild(card);

var image=document.createElement("img");
image.setAttribute("src",e.img);
card.appendChild(image);

var heading=document.createElement("h2");
card.appendChild(heading);
heading.innerHTML=e.title;

var cont=document.createElement("p");
card.appendChild(cont);
cont.innerHTML=e.content;

var doller=document.createElement("p");
doller.classList.add("doller");
card.appendChild(doller);
doller.innerHTML=e.doller;

var btn=document.createElement("div");
btn.classList.add("btn-1");
card.appendChild(btn);

var buttons=document.createElement("button");
buttons.classList.add("button-1");
btn.appendChild(buttons);
buttons.innerHTML="Add to card";
})


var a=0;
var addtocart=document.getElementsByClassName("button-1");
for(let i=0;i<addtocart.length;i++){
    addtocart[i].addEventListener("click",function(){
        a++;
        para1.innerHTML=a;
    })
}
var colum=document.getElementsByClassName("card-col");

 var backbag=document.getElementById("bag1");
 item.forEach(function(e){
 backbag.addEventListener("click",function(){
    
        if(e.title=="Back bag"){
            var a=e.id;
            colum[a].style.display="block";
        }
        else{
            var b=e.id;
            colum[b].style.display="none";
        }
    })
 })

 var handbag=document.getElementById("bag2");
 item.forEach(function(e){
    handbag.addEventListener("click",function(){
        if(e.title=="Hand bag"){
            var a=e.id;
            colum[a].style.display="block";
        }
        else{
            var b=e.id;
            colum[b].style.display="none";
        }
    })
 })

 var travelbag=document.getElementById("bag3");
 item.forEach(function(e){
    travelbag.addEventListener("click",function(){
        if(e.title=="Travel bag"){
            var a=e.id;
            colum[a].style.display="block";
        }
        else{
            var b=e.id;
            colum[b].style.display="none";
        }
    })
 })

 var add_cart=document.getElementsByClassName("fa-shopping-cart");
for(let i=0;i<add_cart.length;i++){
    add_cart[0].addEventListener("click",function(){
        location.href="file:///E:/fabvey/project/js%20project/add%20to%20card/index.html";
    })
}
var cards=document.getElementsByClassName("card-card");
console.log(cards);
item.forEach(function(e){
    for(let i=0;i<addtocart.length;i++){
     addtocart[i].addEventListener("click",function(){
        var add_to_cart=cards[i].innerHTML;
        localStorage.setItem("image",add_to_cart);
     })
    } 
})