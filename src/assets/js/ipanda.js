window.setTimeout("getip()",1000);function getip(){var xhr=new XMLHttpRequest();var url='https://api.xteam.xyz/cekip';xhr.onloadend=function(){data=JSON.parse(this.responseText);
document.getElementById("userhit").textContent=data.userhit};xhr.open("GET",url,true);xhr.send();}
