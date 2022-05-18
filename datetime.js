var clock=document.getElementById('clock');
var date=document.getElementById('date');

function hexoClock(){
    var time=new Date();
    var h=(time.getHours()).toString();
    var m=time.getMinutes().toString();
    var s=time.getSeconds ().toString ();
    if (h.length<2){
        h='0'+h;
    }
    if (m.length<2){
        m='0'+m;
    }
    if (s.length<2){
        s='0'+ s;
    }
    var clockString=h + ':' + m + ':' + s;

    var year = time.getFullYear().toString();
    var Month = time.getMonth().toString();
    var day = time.getDay().toString();

    if (Month.length<2){
        Month='0'+ Month;
    }
    if (day.length<2){
        day='0'+ day;
    }

    var dateString = year + '.' + Month + '.' + day

    clock.textContent=clockString;
    date.textContent=dateString;
}

hexoClock ();
setInterval (hexoClock, 1000);