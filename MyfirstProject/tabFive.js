var $child=$(".sport_tab").find("ul").children("li");
var $day=$(".day").children("div");
var $pic=$(".pic").children("div");
var lp=$pic.length;
var ld=$day.length;
var lc=$child.length;
$($child).each(function(index){

    $($child[index]).bind("click",function(){

    	if(index==2 && $($day[2]).attr("class")=="d_active"){

    		$($pic[lp-1]).show().siblings().hide();

    	}else{
    		$($pic[index]).show().siblings().hide();
    	}


    	$(this).addClass("active").siblings().removeClass("active");

    });
    if(index<ld){
    	$($day[index]).bind("click",function(){

            if(index==2 && $($child[2]).attr("class")=="active"){

                $($pic[lp-1]).show().siblings().hide();

            }

    		$($day[index]).addClass("d_active").siblings().removeClass("d_active");

    	});
    }

});
