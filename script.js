
function clock(){
    var ahr = document.getElementById("hour");
    var amin = document.getElementById("min");
    var asec = document.getElementById("sec");
    var aam = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    ahr.innerText = hrs;
    amin.innerText = mins ;
    asec.innerText = secs ;
    aam.innerText = am_pm;
    
};
setInterval(clock,1000);

function time(){
   wokeuptime=document.getElementById("wokeuptime");
    lnchtime=document.getElementById("lnchtime")
   evningtime=document.getElementById("evningtime")
   nighttimes=document.getElementById("nighttimes")
  
   wakeup = document.getElementById("wakeup")
   lunchtime = document.getElementById("lunchtime")
   eveningtime = document.getElementById("eveningtime")
   nighttime = document.getElementById("nighttime")

  wokeuptime.innerText = wakeup.options[wakeup.selectedIndex].text;
  lnchtime.innerText = lunchtime.options[lunchtime.selectedIndex].text;
  evningtime.innerText = eveningtime.options[eveningtime.selectedIndex].text;
  nighttimes.innerText = nighttime.options[nighttime.selectedIndex].text;



  let m = document.getElementById("wakeup").value;
  let n = document.getElementById("lunchtime").value;
  let o = document.getElementById("eveningtime").value;
  let p = document.getElementById("nighttime").value;
  let newtime = new Date().getHours();
 


  if (m == newtime) {
    document.getElementById("image").style.backgroundImage=
      "url(./wakeup.jpg)";
    document.getElementById("texting2").innerText =
      " HI GOOD MORNING !! ";
    document.getElementById("texting1").innerText = "LET'S HAVE BREAKFAST !!";
  }

  if (n == newtime) {
    document.getElementById("image").style.backgroundImage=
      "url(./lunchtime.jpg)";
    document.getElementById("texting2").innerText =
      "GOOD AFTERNOON !! ";
    document.getElementById("texting1").innerText = "LET'S HAVE SOME LUNCH !!";
  }
  if (o == newtime) {
    document.getElementById("image").style.backgroundImage=
      "url(./Coffee.png)";
    document.getElementById("texting2").innerText =
      "GOOD EVENING !! ";
    document.getElementById("texting1").innerText = " YESS!!!IT'S COFFEE TIME !!";
  }
  if (p== newtime) {
    document.getElementById("image").style.backgroundImage=
      "url(./goodnight.png)";
    document.getElementById("texting2").innerText =
      "GOOD NIGHT!! TAKE SOME SLEEP";
    document.getElementById("texting1").innerText = "LET'S HAVE SOME DINNER,YUMM!!";
  }
  if (m != newtime && n != newtime && o != newtime && p != newtime) {
    document.getElementById("image").style.backgroundImage=
      "url(./lunchtime.jpg)";
    document.getElementById("texting2").innerText = "Party Time!";
    document.getElementById("texting1").innerText = "Lets ENJOY !!!";
  }
};



