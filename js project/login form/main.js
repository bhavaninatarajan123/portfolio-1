
var a=document.getElementById("form-1");
console.log(a);

var b=document.getElementById("form-2");
console.log(b);

var c=document.getElementById("form-3");
console.log(c);

var d=document.getElementById("form-btn");
console.log(d);


d.addEventListener("click",function(){
    var x=a.value ;
    console.log(x);
    var y=b.value ;
    console.log(y);
    var z=c.value ;
    console.log(z);
var name=localStorage.getItem("Name");
console.log(name);
var email=localStorage.getItem("Email");
var passwords=localStorage.getItem("password"); 


        if(name==x){
                    if( email==y){
                        if(passwords==z){
                                alert("login process completed successfully");
                                location.href="file:///E:/fabvey/project/js%20project/product%20card/index.html";
                                  }
                        else{
                                    alert("Your pass word is not correct ,login failed");
                                  }
                        
                    }   
                    else{
                        alert("Email is not correct");
                    }
                    }
        else{
                        alert("Enter your name correctly");
                    }

})