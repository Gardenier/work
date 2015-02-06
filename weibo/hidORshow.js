//
//其它选项显示与隐藏
var hide=document.getElementById('li'),
Other_log=document.getElementById('other_log'),
tT=document.getElementById('tTriangle'),
dT=document.getElementById('dTriangle');

function  Show()
{
	hide.style.display='';
	tT.style.display='';
	dT.style.display='none';
}
function  Hid()
{
	hide.style.display='none';
	dT.style.display='';
	tT.style.display='none';
}
Other_log.onclick=function()
{
	if(hide.style.display=='none')
	{
		Show();
	}
	else
	{
		Hid();
	}
}