function heightDetect(){
	$("#bord").css("height", $(window).height());
};
heightDetect()
$(window).resize(function(){
	heightDetect()
});
/*Сортировка по нажатию на пункты меню "Продукция"*/
function sort(){
	$(".mnuProd > li").on('click',function(){
		if($(this).attr("class") == "value_f activMnu" || $(this).attr("class") == "value_d activMnu" || $(this).attr("class") == "value_t activMnu" || $(this).attr("class") == "value_mo activMnu"){
			return;
		}
		else{
			$(".itemProd[class*=value_f]").addClass("hideH");
			$(".itemProd[class*=value_d]").addClass("hideH");
			$(".itemProd[class*=value_t]").addClass("hideH");
			$(".itemProd[class*=value_mo]").addClass("hideH");
			$(".itemProd[class*=value_ut]").addClass("hideH");
			if( $(this).attr("class") == 'value_f'){
				$(".mnuProd li").removeClass("activMnu");
				$(this).addClass("activMnu");
				setTimeout(function (){
					$(".itemProd[class*=value_f]").removeClass("dis_n");
					$(".itemProd[class*=value_d]").removeClass("dis_n");
					$(".itemProd[class*=value_t]").removeClass("dis_n");
					$(".itemProd[class*=value_mo]").removeClass("dis_n");
					$(".itemProd[class*=value_ut]").removeClass("dis_n");
				}, 500);
				setTimeout(function (){
					$(".itemProd[class*=value_f]").removeClass("hideH");
					$(".itemProd[class*=value_d]").removeClass("hideH");
					$(".itemProd[class*=value_t]").removeClass("hideH");
					$(".itemProd[class*=value_mo]").removeClass("hideH");
					$(".itemProd[class*=value_ut]").removeClass("hideH");
				}, 550);
			}
			else if($(this).attr("class") == 'value_d'){
				$(".mnuProd li").removeClass("activMnu");
				$(this).addClass("activMnu");
				setTimeout(function (){
					$(".itemProd[class*=value_d]").removeClass("dis_n");
				}, 500);
				setTimeout(function (){
					$(".itemProd[class*=value_f]").addClass("dis_n");
					$(".itemProd[class*=value_d]").removeClass("hideH");
					$(".itemProd[class*=value_t]").addClass("dis_n");
					$(".itemProd[class*=value_mo]").addClass("dis_n");
					$(".itemProd[class*=value_ut]").addClass("dis_n");
				}, 550);
			}
			else if($(this).attr("class") == 'value_t'){
				$(".mnuProd li").removeClass("activMnu");
				$(this).addClass("activMnu");
				setTimeout(function (){
					$(".itemProd[class*=value_t]").removeClass("dis_n");
				}, 500);
				setTimeout(function (){
					$(".itemProd[class*=value_f]").addClass("dis_n");
					$(".itemProd[class*=value_d]").addClass("dis_n");
					$(".itemProd[class*=value_t]").removeClass("hideH");
					$(".itemProd[class*=value_mo]").addClass("dis_n");
					$(".itemProd[class*=value_ut]").addClass("dis_n");
				}, 550);
			}
			else if($(this).attr("class") == 'value_mo'){
				$(".mnuProd li").removeClass("activMnu");
				$(this).addClass("activMnu");
				setTimeout(function (){
					$(".itemProd[class*=value_mo]").removeClass("dis_n");
				}, 500);
				setTimeout(function (){
					$(".itemProd[class*=value_f]").addClass("dis_n");
					$(".itemProd[class*=value_d]").addClass("dis_n");
					$(".itemProd[class*=value_t]").addClass("dis_n");
					$(".itemProd[class*=value_mo]").removeClass("hideH");
					$(".itemProd[class*=value_ut]").addClass("dis_n");
				}, 550);
			}
			/*else if($(this).attr("class") == 'value_ut'){
				$(".mnuProd li").removeClass("activMnu");
				$(this).addClass("activMnu");
				setTimeout(function (){
					$(".mnuProd li[class*=value_ut]").removeClass("dis_n");
				}, 500);
				setTimeout(function (){
					$(".itemProd[class*=value_f]").addClass("dis_n");
					$(".itemProd[class*=value_d]").addClass("dis_n");
					$(".itemProd[class*=value_t]").addClass("dis_n");
					$(".itemProd[class*=value_mo]").addClass("dis_n");
					$(".itemProd[class*=value_ut]").removeClass("hideH");
				}, 550);
			}*/

		}

	});
}
sort();