$( window ).load( cargar );
// VARIABLES
var $actual = 1;
var $anterior =0 ;
var $intervalo = null;
var $contador = 1;
var $total = 10;
// var v = document.getElementsByTagName("video1")[0];

// ASIGNA EVENTOS
$$("li").on("tap", cambiar);
$$(".seccion").swipeLeft(cambiar2);
$$(".seccion").swipeRight(cambiar3);

function inicio(e){
	clearInterval($intervalo);
	ocultartodos();
	$('#btn-1').addClass('btnActivo');
	// v.play();
}


function cargar(){
	$('#porcentajeCarga').append({statusTextEl: '#textStatus', statusBarEl: '#status'});
	$.preloadCssImages();

				$('#cargando').addClass('animated fadeOut');
				setTimeout("$('#cargando').addClass('oculto')",600)
				$('nav').removeClass('oculto');
				inicio();

}



// function cargar(){

// 	$.preloadCssImages();
// 	$intervalo = setInterval(
// 		function(){
// 			$('#porcentajeCarga').html(++$contador+'%');

// 			switch($contador){
// 				case 30:
// 					clearInterval($intervalo);
// 					setTimeout("cargar()",500);
// 					break;
// 				case 55:
// 					clearInterval($intervalo);
// 					setTimeout("cargar()",500);
// 					break;
// 				case 88:
// 					clearInterval($intervalo);
// 					setTimeout("cargar()",500);
// 					break;
// 			};
			
// 			if ($contador==100) {
// 				$('#cargando').addClass('animated fadeOut');
// 				setTimeout("$('#cargando').addClass('oculto')",600)
// 				$('nav').removeClass('oculto');
// 				inicio();

// 			};
// 		},50
// 	);
// }

function ocultartodos(e){
	$$('.bg').removeClass('animated').removeClass('fadeInDown');
	$$('.seccion').removeClass('activo').addClass('oculto');
	$('.seccion').css('z-index','0');
	$$('#img-'+($actual)).addClass('activo').removeClass('oculto');
	$('ul li').removeClass('btnActivo');
}


function cambiar(e){
	ocultartodos();
	
	var btnActual = "#" + e.target.id;
	$(btnActual).addClass("btnActivo");

	var id= $$(this)[0].id.split('-')[1];
	$actual=id;
	$$('#img-'+(id)).addClass('activo').removeClass('oculto');
	$('#img-'+(id)).css('z-index','1');
	$$('#img-' +(id) + ' > .bg').addClass('animated fadeInDown');
}


function cambiar2(e){
	ocultartodos();
	
	
	//var id= $$(this)[0].id.split('-')[1];

	if ($actual!=10) {
		++$actual;
	} else{
		$actual=1;
	};

	$$('#img-'+($actual)).addClass('activo').removeClass('oculto');
	$('#img-'+($actual)).css('z-index','1');
	$$('#img-' +($actual) + ' > .bg').addClass('animated fadeInDown');
		$$('.container').addClass('animated fadeInLeft');
}

function cambiar3(e){
	//var id= $$(this)[0].id.split('-')[1];
	ocultartodos();
	//$$('#img-'+($actual)).addClass('activo').removeClass('oculto');
	--$actual;
	if ($actual<1) {
		$actual=1;
	}
	$$('#img-'+($actual)).addClass('activo').removeClass('oculto');
	$('#img-'+($actual)).css('z-index','1');
	$$('#img-' +($actual) + ' > .bg').addClass('animated fadeInDown');
		$$('.container').addClass('animated fadeInLeft');
}

// function preloader() {
// 	if (document.getElementById) {
// 		$("#img-2 > .bg").css('background-image','url(img/nivel1.jpg)');
// 		$("#img-3 > .bg").css('background-image','url(img/estacionamientolg.jpg)');
// 		$("#img-4 > .bg").css('background-image','url(img/asian.jpg)');
// 		$("#img-5 > .bg").css('background-image','url(img/cabannabg.jpg)');
// 		$("#img-6 > .bg").css('background-image','url(img/nivel8bg.jpg)');
// 		$("#img-7 > .bg").css('background-image','url(img/nivel8DOSbg.jpg)');
// 		$("#img-8 > .bg").css('background-image','url(img/torre2bg.jpg)');
// 		$("#img-9 > .bg").css('background-image','url(img/salaEsperabg.jpg)');
// 		$("#img-10 > .bg").css('background-image','url(img/salaJuntasbg.jpg)');
// 	}
// }
// function addLoadEvent(func) {
// 	var oldonload = window.onload;
// 	if (typeof window.onload != 'function') {
// 		window.onload = func;
// 	} else {
// 		window.onload = function() {
// 			if (oldonload) {
// 				oldonload();
// 			}
// 			func();
// 		}
// 	}
// }
// addLoadEvent(preloader);