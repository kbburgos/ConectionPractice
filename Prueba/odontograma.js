var bandera=true;
var diente=0;


function printID(e){
    e= e|| window.event;
    e= e.target ||e.srcElement;
    console.log("ID:" + e.id);
    diente=e.id;
};


function showContent() {
    setTimeout(function(){
    if(bandera){
        document.getElementById()
        document.getElementById("myModal").style.display='block';
        bandera=false;
        console.log(diente);
        document.getElementById("numeroDiente").innerText="Diente Número: "+ diente;
    }else{
        document.getElementById("myModal").style.display='none';
        bandera=true;
    }
    }, 1000);
};


