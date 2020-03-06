function RunFlashContent(movieSRC,movieWidth,movieHeight) {
document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+movieWidth+'" height="'+movieHeight+'" align="middle">\n');

document.write('<param name="wmode" value="transparent"><param name="movie" value="'+movieSRC+'" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed src="'+movieSRC+'" wmode="transparent" quality="high" bgcolor="#ffffff" width="'+movieWidth+'" height="'+movieHeight+'" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" />\n');

document.write('</object>\n');

}


/*Current date script credit: 
JavaScript Kit (www.javascriptkit.com)
*/

function getDate() {
var mydate=new Date();
var year=mydate.getYear();
if (year < 1000)
year+=1900;
var day=mydate.getDay();
var month=mydate.getMonth();
var daym=mydate.getDate();
if (daym<10)
daym="0"+daym;
var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
return dayarray[day]+", "+montharray[month]+" "+daym+", "+year;
}

function getYear() {
var mydate=new Date();
var year=mydate.getYear();
if (year < 1000)
year+=1900
return year;
}