var $children=$(".con_tab_select").children("div");
var l=$children.length;

/*for(var i=0;i<l;i++){

	$($children[i]).bind("click",function(){

		$(this).addClass("tab_active").siblings().removeClass("tab_active");

		if($(this).text()=="智能配件"){
			$(".fire_svg_pic_one").show();
			$(".fire_svg_pic_two").hide();
		}
		else{
			$(".fire_svg_pic_one").hide();
			$(".fire_svg_pic_two").show();
		}

	});

}*/
$($children).each(function(index){

	$($children[index]).bind("click",function(){

		$(this).addClass("tab_active").siblings().removeClass("tab_active");

		if($(this).text()=="智能配件"){

			$(".fire_svg_pic_one").show();

			$(".fire_svg_pic_two").hide();
		}
		else{
			
			$(".fire_svg_pic_one").hide();

			$(".fire_svg_pic_two").show();
		}

	});


}
	);