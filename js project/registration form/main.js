var form=document.getElementById("reg-form");
console.log(form);

var Name=document.getElementById("input-field-1");
console.log(Name);

var Email=document.getElementById("input-field-2");
console.log(Email);

var password=document.getElementById("input-field-3");
console.log(password);

var firstpara=document.getElementById("para-1");
console.log(firstpara);

var secondpara=document.getElementById("para-2");
console.log(secondpara);

var thiredpara=document.getElementById("para-3");
console.log(thiredpara);

var button=document.getElementById("btn"); 
console.log(button);

var b=Email.value;

var d=b.split("");
console.log(d);


button.addEventListener("click",function(){

    if(Name.value==""){
        firstpara.innerHTML="please enter the name";
        firstpara.style.color="red";
                            }
                            

   if( Email.value==""){
                     secondpara.innerHTML="please enter the  email";
                     secondpara.style.color="red";}
                        

   if ( Email.value!=""){
                var a=Email.value;
                var b=a.split("");
                console.log(b);

            for(i=0; i<b.length; i++){
                
            if (b[i]==" "){
                secondpara.innerHTML="please type without space";
                 secondpara.style.color="red";
            } 
            

        }
    }
                    
            if( password.value==""){
                    thiredpara.innerHTML="please enter the correct password";
                    thiredpara.style.color="red";
                        }
            else if( password.value.length<8){
                thiredpara.innerHTML="password must be 8 words";
                thiredpara.style.color="red";

            } 
                               



 var a=Name.value;
var c=password.value;
var b=Email.value;


localStorage.setItem("Name",a);
localStorage.setItem("Email",b);
localStorage.setItem("password",c); 


})

var loginform=document.getElementById("button-log");
loginform.addEventListener("click",function(){
                    location.href="file:///E:/fabvey/project/js%20project/login%20form/index.html";
})




