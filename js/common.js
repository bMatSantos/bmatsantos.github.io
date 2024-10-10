// Ativar o Include HTML
$(function() {
	$("div[html-include]").each(function () {                
    	$(this).load($(this).attr("html-include"));
    });

	$("#hero .paralelograma").removeClass("onscreen");
	setInterval(function(){
    	$("#logo").removeClass("offscreen");
	}, 250);

    // rolouEscondeu();

    //Esconder botão do topo se estiver... no topo
	// $(document).scroll(function(){
	// 	rolouEscondeu();
	// });
});
