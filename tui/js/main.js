$(document).ready(function() {
	// раскрывающийся список  
	$('.listItemHeader').click(function() {
		//   $(this).toggleClass('bg092a5e');
		$(this).parent().find($('.listOfCities')).toggleClass('displayNone');
		$(this).parent().find($('.fa-caret-down')).hide();
		$(this).parent().find($('.fa-caret-down')).toggleClass('rotate90deg');
		$(this).parent().find($('.fa-caret-down')).show();
	});
	// кнопка Меню появляется при уменьшении ширины окна меньее 420
	$(window).resize(function() {
		var widScr = document.body.clientWidth;
		if(widScr < 420) {
			$('#menu').removeClass('displayNone');
			$('#ul').addClass('displayNone');
			$('#menui').removeClass('rotate90');
		} else {
			$('#menu').addClass('displayNone');
			$('#ul').removeClass('displayNone');
		}
	});
	// кнопка Меню открывает и закрывает меню
	$('#menu').click(function() {
		$('#ul').toggleClass('displayNone');
		$('#menui').toggleClass('rotate90');
	});
	// при ширине меньше 420 появляется кнопка Меню при загрузке страницы
	var widScr = document.body.clientWidth;
	if(widScr < 420) {
		$('#menu').removeClass('displayNone');
		$('#ul').addClass('displayNone');
	}
	// кнопка Что привезти включает соответствующий слайдер
	$('#buttonWhatToBring').click(function() {
		if(document.querySelector(".sliderWhatToBring").classList.contains("displayNone")) {
			$('.sliderWhatToBring').removeClass('displayNone');
			$('.sliderWhatToTry').addClass('displayNone');
			$(this).removeClass('bg_tui_blue');
			$(this).addClass('bg_white');
			$(this).blur();
			$('#buttonWhatToTry').removeClass('bg_white');
			$('#buttonWhatToTry').addClass('bg_tui_blue');
			$('.sliderWrapBring').removeClass('isHover');
			$('.sliderWrapBring').addClass('isNotHover');
		} else {
			$(this).blur();
		}
	});
	// кнопка Что попробовать включает соответствующий слайдер   
	$('#buttonWhatToTry').click(function() {
		if(document.querySelector(".sliderWhatToTry").classList.contains("displayNone")) {
			$('.sliderWhatToTry').removeClass('displayNone');
			$('.sliderWhatToBring').addClass('displayNone');
			$(this).removeClass('bg_tui_blue');
			$(this).addClass('bg_white');
			$(this).blur();
			$('#buttonWhatToBring').removeClass('bg_white');
			$('#buttonWhatToBring').addClass('bg_tui_blue');
			$('.sliderWrapTry').removeClass('isHover');
			$('.sliderWrapTry').addClass('isNotHover');
		} else {
			$(this).blur();
		}
	});
	// при наведении на слайдер присваиваем ему класс isHover 
	// для остановки автолистания слайдера
	$('.sliderWrapBring, .sliderPaginationBring, .sliderNavPrevBring, .sliderNavNextBring').mouseenter(function() {
		//  $(this).addClass('bg092a5e');
		$('.sliderWrapBring').addClass('isHover');
		$('.sliderWrapBring').removeClass('isNotHover');
		//alert(' Навели мышь, остановили слайдер!');
	});
	$('.sliderWrapTry, .sliderPaginationTry, .sliderNavPrevTry, .sliderNavNextTry').mouseenter(function() {
		//  $(this).addClass('bg092a5e');
		$('.sliderWrapTry').addClass('isHover');
		$('.sliderWrapTry').removeClass('isNotHover');
		//alert(' Навели мышь, остановили слайдер!');
	});
	$('.sliderWrapBring, .sliderPaginationBring, .sliderNavPrevBring, .sliderNavNextBring').mouseleave(function() {
		//  $(this).removeClass('bg092a5e');
		$('.sliderWrapBring').removeClass('isHover');
		$('.sliderWrapBring').addClass('isNotHover');
		//alert(' убрали мышь, запустили слайдер!');
	});
	$('.sliderWrapTry, .sliderPaginationTry, .sliderNavPrevTry, .sliderNavNextTry').mouseleave(function() {
		//  $(this).removeClass('bg092a5e');
		$('.sliderWrapTry').removeClass('isHover');
		$('.sliderWrapTry').addClass('isNotHover');
		//alert(' убрали мышь, запустили слайдер!');
	});
	autoSliderBring();
	// автослайдер  - Что привезти   
	function autoSliderBring() {
		var i = 0; // индекс 
		var x = 0; // перемещение слайдера
		var dot = $('.sliderNavPagBring');
		$(dot[0]).addClass('bg092a5e');
		//   $('.sliderPolosaWhatToBring').css({'margin-left': '0px'});       
		setInterval(function() {
			if($('.sliderWrapBring').hasClass('isHover')) {} else
			if($('.sliderWrapBring').hasClass('isNotHover')) {
				$(dot).removeClass('bg092a5e');
				$(dot[i]).addClass('bg092a5e');
				$('.sliderPolosaWhatToBring').animate({
					'margin-left': x + 'px'
				}, 1000, "swing", function() {});
				x = x - 290;
				i++;
				if(x < -1450) {
					x = 0;
					i = 0
				};
			}
		}, 3000);
	};
	autoSliderTry();
	// автослайдер  - Что попробовать   
	function autoSliderTry() {
		var i = 0; // индекс 
		var x = 0; // перемещение слайдера
		var dot = $('.sliderNavPagTry');
		$(dot[0]).addClass('bg092a5e');
		//   $('.sliderPolosaWhatToTry').css({'margin-left': '0px'});       
		setInterval(function() {
			if($('.sliderWrapTry').hasClass('isHover')) {} else
			if($('.sliderWrapTry').hasClass('isNotHover')) {
				$(dot).removeClass('bg092a5e');
				$(dot[i]).addClass('bg092a5e');
				$('.sliderPolosaWhatToTry').animate({
					'margin-left': x + 'px'
				}, 1000, "swing", function() {});
				x = x - 290;
				i++;
				if(x < -1450) {
					x = 0;
					i = 0
				};
			}
		}, 3000);
	};
	// нажатие на кнопку влево - передвигает слайдер влево на 1 слайд
	$('.sliderNavPrevBring').click(function() {
			var marginLeft = $('.sliderPolosaWhatToBring').css("margin-left");
			var left = parseInt(marginLeft);
			console.log(left);
			left = left - 290;
			if(left < -1450) {
				left = 0
			};
			$('.sliderPolosaWhatToBring').animate({
				'margin-left': left + 'px'
			}, 1000, "swing", function() {});
			var index = [...document.querySelectorAll('.sliderNavPagBring')].findIndex(n => n.classList.contains('bg092a5e'));
			//var index = $('.bg092a5e').index();
			++index;
			if(index > 5) {
				index = 0
			};
			$('.bg092a5e').removeClass('bg092a5e');
			var dot = $('.sliderNavPagBring');
			$(dot[index]).addClass('bg092a5e');
		})
		// нажатие на кнопку вправо - передвигает слайдер вправо на 1 слайд
	$('.sliderNavNextBring').click(function() {
			var marginLeft = $('.sliderPolosaWhatToBring').css("margin-left");
			var left = parseInt(marginLeft);
			console.log(left);
			left = left + 290;
			if(left > 0) {
				left = -1450
			};
			$('.sliderPolosaWhatToBring').animate({
				'margin-left': left + 'px'
			}, 1000, "swing", function() {});
			var index = [...document.querySelectorAll('.sliderNavPagBring')].findIndex(n => n.classList.contains('bg092a5e'));
			//var index = $('.bg092a5e').index();
			--index;
			if(index < 0) {
				index = 5
			};
			$('.bg092a5e').removeClass('bg092a5e');
			var dot = $('.sliderNavPagBring');
			$(dot[index]).addClass('bg092a5e');
		})
		// нажатие на кнопку влево - передвигает слайдер влево на 1 слайд
	$('.sliderNavPrevTry').click(function() {
			var marginLeft = $('.sliderPolosaWhatToTry').css("margin-left");
			var left = parseInt(marginLeft);
			console.log(left);
			left = left - 290;
			if(left < -1450) {
				left = 0
			};
			$('.sliderPolosaWhatToTry').animate({
				'margin-left': left + 'px'
			}, 1000, "swing", function() {});
			var index = [...document.querySelectorAll('.sliderNavPagTry')].findIndex(n => n.classList.contains('bg092a5e'));
			//var index = $('.bg092a5e').index();
			++index;
			if(index > 5) {
				index = 0
			};
			$('.bg092a5e').removeClass('bg092a5e');
			var dot = $('.sliderNavPagTry');
			$(dot[index]).addClass('bg092a5e');
		})
		// нажатие на кнопку вправо - передвигает слайдер вправо на 1 слайд
	$('.sliderNavNextTry').click(function() {
			var marginLeft = $('.sliderPolosaWhatToTry').css("margin-left");
			var left = parseInt(marginLeft);
			console.log(left);
			left = left + 290;
			if(left > 0) {
				left = -1450
			};
			$('.sliderPolosaWhatToTry').animate({
				'margin-left': left + 'px'
			}, 1000, "swing", function() {});
			var index = [...document.querySelectorAll('.sliderNavPagTry')].findIndex(n => n.classList.contains('bg092a5e'));
			//var index = $('.bg092a5e').index();
			--index;
			if(index < 0) {
				index = 5
			};
			$('.bg092a5e').removeClass('bg092a5e');
			var dot = $('.sliderNavPagTry');
			$(dot[index]).addClass('bg092a5e');
		})
		// слайдер WhatToBring
		// нажатие на кнопки пагинации сдвигает слайдер на соответствующую позицию 
	$('.sliderNavPagBring').click(function() {
			var dot = $('.sliderNavPagBring');
			var index = ($(this).index());
			// alert('нажали на кнопку ' + index );
			if(index === 0) {
				//  $('.slide:eq(0)').css({"background" : "red"});
				$('.sliderPolosaWhatToBring').animate({
					'margin-left': 0 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 1) {
				//  $('.slide:eq(1)').css({"background" : "red"});
				$('.sliderPolosaWhatToBring').animate({
					'margin-left': -290 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 2) {
				//  $('.slide:eq(2)').css({"background" : "red"});
				$('.sliderPolosaWhatToBring').animate({
					'margin-left': -580 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 3) {
				// $('.slide:eq(3)').css({"background" : "red"});
				$('.sliderPolosaWhatToBring').animate({
					'margin-left': -870 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 4) {
				// $('.slide:eq(3)').css({"background" : "red"});
				$('.sliderPolosaWhatToBring').animate({
					'margin-left': -1160 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 5) {
				// $('.slide:eq(3)').css({"background" : "red"});
				$('.sliderPolosaWhatToBring').animate({
					'margin-left': -1450 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			}
		})
		// слайдер WhatToTry
		// нажатие на кнопки пагинации сдвигает слайдер на соответствующую позицию 
	$('.sliderNavPagTry').click(function() {
			var dot = $('.sliderNavPagTry');
			var index = ($(this).index());
			// alert('нажали на кнопку ' + index );
			if(index === 0) {
				//  $('.slide:eq(0)').css({"background" : "red"});
				$('.sliderPolosaWhatToTry').animate({
					'margin-left': 0 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 1) {
				//  $('.slide:eq(1)').css({"background" : "red"});
				$('.sliderPolosaWhatToTry').animate({
					'margin-left': -290 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 2) {
				//  $('.slide:eq(2)').css({"background" : "red"});
				$('.sliderPolosaWhatToTry').animate({
					'margin-left': -580 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 3) {
				// $('.slide:eq(3)').css({"background" : "red"});
				$('.sliderPolosaWhatToTry').animate({
					'margin-left': -870 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 4) {
				// $('.slide:eq(3)').css({"background" : "red"});
				$('.sliderPolosaWhatToTry').animate({
					'margin-left': -1160 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 5) {
				// $('.slide:eq(3)').css({"background" : "red"});
				$('.sliderPolosaWhatToTry').animate({
					'margin-left': -1450 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			}
		})
		///////////////////////   
		/// конец программы ///
		///////////////////////
}); ///////////////////
///////////////////////
///////////////////////