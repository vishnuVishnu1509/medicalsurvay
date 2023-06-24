function greatest(){
    a=first.value;
    b=second.value;
    c=third.value;
    if(a>b&&a>c){
        alert("greatest is "+a);
    }
    else if(b>c){
        alert("greatest is "+b);
    }
    else{
        alert("greatest is "+c);
    }
}

function sample(){
    r=((p.value*t.value*r.value)/100);
    alert("SI = "+r);

}

function copytext(){
    c=p.value;
    t.value=c;

}

function names(){
    f=n.value;
    e=c.value;
    for(i=0;i<e;i++)
    {
       d.innerText+=f;
    }
}

function logins(){
    u=user.value;
    p=pass.value;
    if(u=="admin" && p=="india")
    {
        window.location="myblog.html";
    }
    else
    {
        alert("fill details appropriatly ");
    }
}


function register(){
    uns=un.value;
    pws=pw.value;
    cps=cp.value;
    pns=pn.value;
    nation=national.value;
    tas=ta.value;
    if((uns.length==0)&&(pws.length==0)){
        alert("fill the blanks");
    }
    if(cps!=pws){
            alert("password doesn't match"); }
     else{
           alert("username : "+uns+"   password : "+pws+"   confirm pw : "+cps+"   phone : "+pns+"   natinality : "+nation+"   address : "+tas);
        }
}

function sums(){
    r=0;
    for(i=1;i<=10;i++){
    r+=parseInt(prompt("enter numbers"));
    }
    res.innerText="sum = "+r;
}

var c=0;
function changeimage()
{
    c=c+1;
    if(c==1 || c==4)
    {
    document.getElementById("im").src="modi.jfif";
    if(c==4){
        c=1;
    }
    }
    if(c==2)
    {
        document.getElementById("im").src="power.jfif";
       
    }
    if(c==3)
    {
        document.getElementById("im").src="background.jfif";
      
    }
    
    
    if(c==4)
    {
        c=0;
    }
    
   

}
//setInterval(changeimage,1000);