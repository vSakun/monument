function heightDetect(){
	$("#bord").css("height", $(window).height());
};
heightDetect()
$(window).resize(function(){
	heightDetect()
});