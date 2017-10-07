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
/*Функция POPUP. На блок который надо увеличивать необходимо установить name="box"*/
function popup(){
	$(".box").on('click', function(){
		var copy = $(this).clone();
		console.log($(this).parent().append('<div class="popup"></div>'));
		$(copy).appendTo(".popup");
		$(".popup").append('<i class="fa fa-times"></i>');
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".box");
			var cl = $(".popup i[class=fa-times]"); // тут указываем ID элемента
			if (!div.is(e.target) && div.has(e.target).length === 0){ // и не по его дочерним элементам
				$("div.popup").remove(); // скрываем его
			}
			if(cl.is(e.target) && cl.has(e.target).length ===0){
				$("div.popup").remove();
			}
		});
	});
	$(document).bind('keydown', function(eventObject){
		if(eventObject.keyCode == 27){
			$("div.popup").remove();
		}
	});
}
popup();
/* Слайдер */
function Slider(){
	$(".next").on('click', function(){
		$(".opas:first").removeClass("opas").addClass("opasN");
		setTimeout(function (){
					$(".vis:first").removeClass("vis").addClass("hid");
					$(".hid:last").removeClass("hid").addClass("vis");
				}, 500);
		setTimeout(function (){
					$(".opasN:last").removeClass("opasN").addClass("opas");
				}, 550);
	});
	$(".prev").on('click', function(){
		$(".opas:last").removeClass("opas").addClass("opasN");
		setTimeout(function (){
					$(".vis:last").removeClass("vis").addClass("hid");
					$(".hid:first").removeClass("hid").addClass("vis");
				}, 500);
		setTimeout(function (){
					$(".opasN:first").removeClass("opasN").addClass("opas");
				}, 550);
	});
}
Slider();