
  function FalseOrEven(tt)
    {
      if ((tt % 2) == 0) {
        return true;
      }
      return false;
    }


  function _(id)
  {return document.getElementById(id);}

  function renderTime()

  	{var textbox = document.getElementById("showtime");
      var textbox = $("#showtime");
      var textbox = $(".c1");
      var ctime = new Date();

      var pd = "AM";

      var h,m,s;

      h = ctime.getHours();
      m = ctime.getMinutes();
      s = ctime.getSeconds();


       // structure time output
     
       var digit=ctime.getSeconds ();

/*      if (FalseOrEven (digit) )
{
  console.log (digit + " Even");
}else{
 console.log (digit + " Odd");
} */
      // hour
      if( h === 0 )
      {h = 12;}

     else if( h > 12 )
     {h = h - 12; 
      pd = "PM";}


     // add zero before hour if below 10
     if( h < 10 )

    {h = "0"+h;}

    // add zero before minute of below 10 also
    if(  m < 10 )

   {m = "0"+m;}

    // add zero before seconds
   if( s < 10 )

    {s = "0"+s;} 
      

      // Now lets display this time
     //textbox.value = h +":"+m+":"+s+" "+pd;
  textbox.val(h +":"+m+":"+s+" "+pd);
  setTimeout("renderTime()",1000);}


  renderTime();
