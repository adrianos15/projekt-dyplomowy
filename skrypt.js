$(function(){
	function sprawdzWidocznosc(el, el_val){
		el_val = el_val || "visible";
		var vpH = $(window).height();
		var st = $(window).scrollTop();
		var y = $(el).offset().top;
		var elementHeight = $(el).height();
    
		if (el_val == "visible") return ((y < ((vpH * (2/3)) + st)) && (y > (st - elementHeight)));
	}

	function sprawdzWidocznoscStopki(el, el_val){
		el_val = el_val || "visible";
		var vpH = $(window).height();
		var st = $(window).scrollTop();
		var y = $(el).offset().top;
		var elementHeight = $(el).height();
    
		if (el_val == "visible") return (y < vpH + st - elementHeight - 50);
	}

	var button = document.getElementById('btn');
	var stan1 = 0;
	var stan2 = 0;
	var stan3 = 0;
	var stan4 = 0;

	button.addEventListener('click', () =>{
    		var imie = document.getElementById('imie');
		var nazwisko = document.getElementById('nazwisko');
		var email = document.getElementById('email');
		var wiadomosc = document.getElementById('wiadomosc');

    		if(imie.value.match(/^[a-zA-Z]{1,}$/) == null){
        		$('#imie').css("border", "2px solid red");
			$('#imie').addClass("animate__animated animate__shakeX");
			stan1 = 0;
    		} else{
			$('#imie').css("border", "none");
			$('#imie').removeClass("animate__animated animate__shakeX");
			stan1 = 1;
    		}

		if(nazwisko.value.match(/^[a-zA-Z]{1,}$/) == null){
        		$('#nazwisko').css("border", "2px solid red");
			$('#nazwisko').addClass("animate__animated animate__shakeX");
			stan2 = 0;
    		} else{
			$('#nazwisko').css("border", "none");
			$('#nazwisko').removeClass("animate__animated animate__shakeX");
			stan2 = 1;
			}

		if(email.value.match(/@{1}/)){
			$('#email').css("border", "none");
			$('#email').removeClass("animate__animated animate__shakeX");
			stan3 = 1;
    		} else{
			$('#email').css("border", "2px solid red");
			$('#email').addClass("animate__animated animate__shakeX");
			stan3 = 0;
		}

		if(wiadomosc.value.match(/^./) == null){
        		$('#wiadomosc').css("border", "2px solid red");
			$('#wiadomosc').addClass("animate__animated animate__shakeX");
			stan4 = 0;
    		} else{
			$('#wiadomosc').css("border", "none");
			$('#wiadomosc').removeClass("animate__animated animate__shakeX");
			stan4 = 1;
		}

		if((stan1 && stan2 && stan3 && stan4) && 1){
			$('#koperta').css({"background-image": "url('koperta.jpg')", "background-repeat": "no-repeat", "background-position": "center"});
			$('#koperta').addClass("animate__animated animate__fadeOutRightBig animate__slower");
			$('#message').addClass("animate__animated animate__fadeIn animate__delay-1s");
			setTimeout(() => {
				$('#message').removeClass("animate__animated animate__fadeIn animate__delay-1s");
				$('#message').addClass("animate__animated animate__fadeOut animate__delay-2s");
			}, 2000);
			setTimeout(() => {
				$('#koperta').removeClass("animate__animated animate__fadeOutRightBig animate__slower");
				$('#message').removeClass("animate__animated animate__fadeOut animate__delay-2s");
			}, 5000);
		}
	});

	$('#imie').focus(function(){
		$('#imie').css("border", "none");
		$('#imie').removeClass("animate__animated animate__shakeX");
	});

	$('#nazwisko').focus(function(){
		$('#nazwisko').css("border", "none");
		$('#nazwisko').removeClass("animate__animated animate__shakeX");
	});

	$('#email').focus(function(){
		$('#email').css("border", "none");
		$('#email').removeClass("animate__animated animate__shakeX");
	});

	$('#wiadomosc').focus(function(){
		$('#wiadomosc').css("border", "none");
		$('#wiadomosc').removeClass("animate__animated animate__shakeX");
	});

	var stanPrzycisku = 0;

	$('#div_przycisk_motyw').click(function(){
		if(stanPrzycisku == 0){
			$('body').css({"background-color": "#36454F", "color": "#00B7EB"});
			$('.m').css("background-color", "#36454F");
			$('#menu').css({"background-color": "#36454F", "color": "#00B7EB"});
			$('#przycisk_motyw').css("background-image", "url('color_button2.png')");
			$('a:link, a:visited').css("color", "#00B7EB");
			$('#statystyka1a').css("border-color", "#00B7EB");
			$('#statystyka2a').css("border-color", "#00B7EB");
			$('#statystyka3a').css("border-color", "#00B7EB");
			$('#statystyka4a').css("border-color", "#00B7EB");
			$('#statystyka5a').css("border-color", "#00B7EB");
			$('a').mouseover(function(){
				$(this).css("color", "#FFEF00");
			})
			.mouseout(function(){
				$(this).css("color", "#00B7EB");
			});
			$('#btn').css({"background-color": "#36454F", "color": "#00B7EB", "border-color": "#00B7EB"});
			$('#btn').mouseover(function(){
				$(this).css({"background-color": "#00B7EB", "color": "#36454F", "border-color": "#36454F"});
			})
			.mouseout(function(){
				$(this).css({"background-color": "#36454F", "color": "#00B7EB", "border-color": "#00B7EB"});
			});
			stanPrzycisku = 1;
		}
		else if(stanPrzycisku == 1){
			$('body').css({"background-color": "white", "color": "black"});
			$('.m').css("background-color", "white");
			$('#menu').css({"background-color": "white", "color": "black"});
			$('#przycisk_motyw').css("background-image", "url('color_button1.png')");
			$('a:link, a:visited').css("color", "black");
			$('#statystyka1a').css("border-color", "black");
			$('#statystyka2a').css("border-color", "black");
			$('#statystyka3a').css("border-color", "black");
			$('#statystyka4a').css("border-color", "black");
			$('#statystyka5a').css("border-color", "black");
			$('a').mouseover(function(){
				$(this).css("color", "red");
			})
			.mouseout(function(){
				$(this).css("color", "black");
			});
			$('#btn').css({"background-color": "white", "color": "black", "border-color": "black"});
			$('#btn').mouseover(function(){
				$(this).css({"background-color": "black", "color": "white", "border-color": "white"});
			})
			.mouseout(function(){
				$(this).css({"background-color": "white", "color": "black", "border-color": "black"});
			});
			stanPrzycisku = 0;
		}
	});

	$('#m_onas').click(function(){
		if(!$('html').is(":animated")){
			$('html').animate({
				scrollTop: $('#onas').offset().top - 80
			}, 1000);
		}
	});

	$('#m_oferta').click(function(){
		if(!$('html').is(":animated")){
			$('html').animate({
				scrollTop: $('#oferta').offset().top - $('#menu').height() - 80
			}, 1000);
		}
	});

	$('#m_kontakt').click(function(){
		if(!$('html').is(":animated")){
			$('html').animate({
				scrollTop: $('#kontakt').offset().top - $('#menu').height() - 80
			}, 1000);
		}
	});

	$('#okno').css("animation", "cookies1 1s");
	$('#okno').css("left", "50px");

	$('#x').click(function(){
		$('#okno').css("animation", "cookies2 1s");
		$('#okno').css("left", "-350px");
	});

	$('#info_przycisk2').click(function(){
		$('#okno').css("animation", "cookies2 1s");
		$('#okno').css("left", "-350px");
	});

	$('#info_przycisk1').mouseover(function(){
		$(this).css("color", "yellow");
	})
	.mouseout(function(){
		$(this).css("color", "orange");
	});

	$('#info_przycisk2').mouseover(function(){
		$(this).css("color", "yellow");
	})
	.mouseout(function(){
		$(this).css("color", "orange");
	});

	$(window).scroll(function(){
		if(pageYOffset > 0)
			$('#kwadrat').css("right", "5%");
		else if(pageYOffset == 0)
			$('#kwadrat').css("right", "-5%");
		
		if(screen.width <= 1080){
			if(pageYOffset > 0)
				$('#kwadrat').css("right", "5%");
			else if(pageYOffset == 0)
				$('#kwadrat').css("right", "-12%");
		}
	});

	$(window).scroll(function(){
		if(pageYOffset > 0){
			$('#div_logo').css({"height": "80px", "margin": "17px 60px 17px 0px"});
			$('#logo').css({"width": "80px", "height": "80px"});
			$('#logo img').css({"width": "80px", "height": "80px"});
			$('#div_przycisk_motyw').css("margin", "42px 0");
			$('#menu_onas').css({"height": "64px", "font-size": "19px", "padding": "25px 23px"});
			$('#menu_oferta').css({"height": "64px", "font-size": "19px", "padding": "25px 23px"});
			$('#menu_kontakt').css({"height": "64px", "font-size": "19px", "padding": "25px 0px 25px 23px"});
		}
		else if(pageYOffset == 0){
			$('#div_logo').css({"height": "120px", "margin": "25px 80px 25px 0px"});
			$('#logo').css({"width": "120px", "height": "120px"});
			$('#logo img').css({"width": "120px", "height": "120px"});
			$('#div_przycisk_motyw').css("margin", "70px 0");
			$('#menu_onas').css({"height": "120px", "font-size": "28px", "padding": "25px 30px"});
			$('#menu_oferta').css({"height": "120px", "font-size": "28px", "padding": "25px 30px"});
			$('#menu_kontakt').css({"height": "120px", "font-size": "28px", "padding": "25px 0px 25px 30px"});
		}

		if(screen.width <= 1080){
			if(pageYOffset == 0){
				$('#div_logo').css({"width": "100%", "margin": "25px 0px", "display": "flex", "justify-content": "center", "align-items": "center"});
				$('#logo').css({"width": "120px", "height": "120px", "vertical-align": "middle"});
				$('#div_przycisk_motyw').css("margin", "20px 0");
				$('.linki').css("width", "100%");
				$('#menu_kontakt').css({"display": "block", "width": "100%", "font-size": "56px", "height": "auto", "padding": "25px 0px", "float": "none"});
				$('#menu_oferta').css({"display": "block", "width": "100%", "font-size": "56px", "height": "auto", "padding": "25px 0px", "float": "none"});
				$('#menu_onas').css({"display": "block", "width": "100%", "font-size": "56px", "height": "auto", "padding": "25px 0px", "float": "none"});
				$('#oferta').css("font-size", "44px");
				$('.oferta_lewo').css({"height": "900px", "margin-bottom": "150px"});
				$('.oferta_lewo2').css("height", "900px");
				$('.oferta_prawo').css({"height": "900px", "margin-bottom": "150px"});
				$('.zdjecie_lewo').css({"width": "100%", "display": "flex", "justify-content": "center", "align-items": "center"});
				$('.zdjecie_lewo2').css({"width": "100%", "display": "flex", "justify-content": "center", "align-items": "center"});
				$('.zdjecie_prawo').css({"width": "100%", "display": "flex", "justify-content": "center", "align-items": "center"});
				$('.oferta_tekst1').css({"width": "100%", "height": "auto", "display": "block", "margin-top": "50px"});
				$('.oferta_tekst2').css({"width": "100%", "height": "auto", "display": "block", "margin-top": "50px"});
				$('#kwadrat').css({"width": "80px", "height": "80px", "font-size": "64px"});
			}
			else if(pageYOffset > 0){
				$('#div_logo').css({"width": "100%", "margin": "17px 0px"});
				$('#logo').css({"width": "80px", "height": "80px", "vertical-align": "middle"});
				$('#div_przycisk_motyw').css("margin", "20px 0");
				$('#menu_kontakt').css({"font-size": "42px", "padding": "17px 0px", "display": "flex", "justify-content": "center", "align-items": "center"});
				$('#menu_oferta').css({"font-size": "42px", "padding": "17px 0px", "display": "flex", "justify-content": "center", "align-items": "center"});
				$('#menu_onas').css({"font-size": "42px", "padding": "17px 0px", "display": "flex", "justify-content": "center", "align-items": "center"});
			}
		}

	});

	$('#onas_tekst').addClass("animate__animated animate__fadeIn animate__faster");

	var prawda1 = 0;
	var prawda2 = 0;
	var prawda3 = 0;
	var prawda4 = 0;
	var prawda5 = 0;
	var prawda6 = 0;

	$(window).scroll(function(){
		if(sprawdzWidocznosc($('#p-oferta'))){
			$('#p-oferta').addClass("animate__animated animate__zoomIn animate__faster");
			$('#p-oferta').css("opacity", "1");
		}
		if(sprawdzWidocznosc($('#mapa'))){
			$('#p-kontakt').addClass("animate__animated animate__zoomIn animate__faster");
			$('#p-kontakt').css("opacity", "1");
			$('#mapa').addClass("animate__animated animate__fadeIn animate__faster");
		}
		if(sprawdzWidocznosc($('#kontakt_tekst')))
			$('#kontakt_tekst').addClass("animate__animated animate__fadeIn animate__faster");
		if(sprawdzWidocznosc($('#kontakt_tekst2'))){
			$('#kontakt_tekst2').addClass("animate__animated animate__fadeIn animate__faster");
			$('#formularz').addClass("animate__animated animate__fadeIn animate__faster");
		}
		if(sprawdzWidocznosc($('#a1')) && (prawda1 == 0)){
			$('#a1').css({"position": "relative", "animation": "animacja1 1.5s"});
			$('#a1').css({"opacity": "1", "display": "block", "left": "0"});
			prawda1 = 1;
		}
		if(sprawdzWidocznosc($('#a2')) && (prawda2 == 0)){
			$('#a2').css({"position": "relative", "animation": "animacja2 1.5s"});
			$('#a2').css({"opacity": "1", "display": "block", "right": "0"});
			prawda2 = 1;
		}
		if(sprawdzWidocznosc($('#a3')) && (prawda3 == 0)){
			$('#a3').css({"position": "relative", "animation": "animacja1 1.5s"});
			$('#a3').css({"opacity": "1", "display": "block", "left": "0"});
			prawda3 = 1;
		}
		if(sprawdzWidocznosc($('#a4')) && (prawda4 == 0)){
			$('#a4').css({"position": "relative", "animation": "animacja2 1.5s"});
			$('#a4').css({"opacity": "1", "display": "block", "right": "0"});
			prawda4 = 1;
		}
		if(sprawdzWidocznosc($('#a5')) && (prawda5 == 0)){
			$('#a5').css({"position": "relative", "animation": "animacja1 1.5s"});
			$('#a5').css({"opacity": "1", "display": "block", "left": "0"});
			prawda5 = 1;
		}
		if(sprawdzWidocznosc($('#statystyki')) && (prawda6 == 0)){
			$('#statystyki').addClass("animate__animated animate__fadeInRightBig animate__slow");
			$('#statystyki1').css("opacity", "1");
			$('.count').countTo();
			prawda6 = 1;
		}
		if(sprawdzWidocznoscStopki($('#stopka')))
			$('#stopka').addClass("animate__animated animate__fadeInUpBig");
	});	

	$('#kwadrat').click(function(){
		$('html').animate({scrollTop: 0}, 1000);
	});
});