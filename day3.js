function day31(){
    document.getElementById("d1").style.color=c1.value;
}

function finde(){
    var a=[1,2,3,4,5,6,7,8];
   
    for(i=0;i<a.length;i++){
        if(a[i]%2==0){
            document.getElementById("even").innerHTML+=a[i]+",";
        }
    }
}

function summax(){
    a=[10,20,30,40,50];
    m=Math.max(10,20,30,40,50);
    s=0;
    for(i=0;i<a.length;i++){
        s+=a[i];
    }
    document.getElementById("sm").innerText="sum = "+s+"  max = "+m;

}

function loginss(){
    u=document.getElementById("user").value;
    p=document.getElementById("pass").value;
    if(u=="admin" && p=="india"){
        document.getElementById("uc").innerText="user name : "+u.toUpperCase()+"   password : "+p.toUpperCase();
    }
    else{
        document.getElementById("user").style.backgroundColor="red";
        document.getElementById("pass").style="background-color:red"
    }
}

function inc(){
    document.getElementById("im").style.width="400";
    document.getElementById("im").style.height="400";
}
function decr(){
    document.getElementById("im").style.width="100";
    document.getElementById("im").style.height="100";
}

function stir(){
    f=document.getElementById("p").value;
    s=document.getElementById("t").value;
    f1=f[0];
    s1=s[0];
    document.getElementById("r").innerText=f1+s1;

}

var c=0;
            function displayim(){
                if(c==0){
                    document.getElementById("power").style.visibility="visible";
                    document.getElementById("modi").style.visibility="visible";
                    document.getElementById("power").src="power.jfif";
                    document.getElementById("modi").src="modi.jfif";
                    document.getElementById("p").style.visibility="hidden";
                    document.getElementById("m").style.visibility="hidden";
                   
                    c=1;
                }
                else{
                    c=0;
                    document.getElementById("power").style.visibility="hidden";
                    document.getElementById("modi").style.visibility="hidden";
                    document.getElementById("p").style.visibility="visible";
                    document.getElementById("m").style.visibility="visible";
                    document.getElementById("p").innerText="Display image";
                    document.getElementById("m").innerText="Display image";

                
                }
            }