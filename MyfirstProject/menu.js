 
 	$(".user").bind('click',function(){
 		if($(".hidden").val()== 0){
 			$(".user_hide").slideDown(function(){
 				$(".hidden").val(1);
 			});
 		}
 		else{
 			$(".user_hide").slideUp(function(){
 				$(".hidden").val(0);
 			});
 		}
 	});
