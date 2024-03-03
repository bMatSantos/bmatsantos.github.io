// Ativar o Include HTML
$(function() {
	$("div[html-include]").each(function () {                
    	$(this).load($(this).attr("html-include"));
    });

    // rolouEscondeu();

    //Esconder botão do topo se estiver... no topo
	// $(document).scroll(function(){
	// 	rolouEscondeu();
	// });
});
