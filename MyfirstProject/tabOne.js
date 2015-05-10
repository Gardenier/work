
var $arry=$(".con_rgt_top").find("ul").children("li");//获取所有的li;alert($arry.length);
var length=$arry.length;

	/*for (var i = 0; i <length; i++) {

		$($arry[i]).bind("click",function(){

			$(this).addClass("con_active").siblings().removeClass("con_active");

			if($(this).text()=="所有"){
                 $(".all").show();
			}
			else{
				$(".all").hide();
			}
		});
	}*/
	$($arry).each(function(index){

		$($arry[index]).bind("click",function(){

			$(this).addClass("con_active").siblings().removeClass("con_active");

						if($(this).text()=="所有"){
			                 $(".all").show();
						}
						else{
							$(".all").hide();
						}
		});
	});
		