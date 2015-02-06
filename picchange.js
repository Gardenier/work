//
//图片轮播
var cont=document.getElementById('lbottom').getElementsByTagName('img'),
nav=document.getElementById('pic_cha_nav').getElementsByTagName('span'),
arrleft=document.getElementById('arrleft'),
arrright=document.getElementById('arrright'),
on=document.getElementById('lbottom'),
index=1,
start;
function ButCha()
{
	for(var i=0;i<nav.length;i++)
	{
		if(nav[i].className=='active')
		{
			nav[i].className='';break;
		}
	}
	nav[index-1].className='active';
}
function PicCha()
{
	for(var i=0;i<cont.length;i++)
	{
		if(cont[i].style.display=='')
		{
			cont[i].style.display='none';
			break;
		}
	}
	cont[index-1].style.display='';
}
function move(flag)
{
	if(flag)
	{
		if(index==3){index=1;}
		else{index++;}
	}
	else
	{
		if(index==1){index=3;}
		else{index--;}
	}
	ButCha();
	PicCha();
}
function autotabstart()
{
	start=setInterval(
		function(){move(true);},2000);
}
function autotabstop()
{
	clearInterval(start);
}
for(var i=0;i<nav.length;i++)
{
	nav[i].onclick=function()
	{
		index=this.getAttribute('index');
		ButCha();
		PicCha();
	}
}
arrright.onclick=function(){
	move(true);
}
arrleft.onclick=function(){
	move(false);
}
on.onmouseover=function()
{
	autotabstop();
}
on.onmouseout=function()
{
	autotabstart();
}