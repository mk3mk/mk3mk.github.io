$(document).ready(function() {

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
	$('#buttonSliderOne').click(function() {
		if(document.querySelector(".sliderOne").classList.contains("displayNone")) {
			$('.sliderOne').removeClass('displayNone');
			$('.sliderTwo').addClass('displayNone');
			$(this).removeClass('bg_blue');
			$(this).addClass('bg_white');
			$(this).blur();
			$('#buttonSliderTwo').removeClass('bg_white');
			$('#buttonSliderTwo').addClass('bg_blue');
			$('.sliderWrapOne').removeClass('isHover');
			$('.sliderWrapOne').addClass('isNotHover');
		} else {
			$(this).blur();
		}
	});
	// кнопка Что попробовать включает соответствующий слайдер   
	$('#buttonSliderTwo').click(function() {
		if(document.querySelector(".sliderTwo").classList.contains("displayNone")) {
			$('.sliderTwo').removeClass('displayNone');
			$('.sliderOne').addClass('displayNone');
			$(this).removeClass('bg_blue');
			$(this).addClass('bg_white');
			$(this).blur();
			$('#buttonSliderOne').removeClass('bg_white');
			$('#buttonSliderOne').addClass('bg_blue');
			$('.sliderWrapTwo').removeClass('isHover');
			$('.sliderWrapTwo').addClass('isNotHover');
		} else {
			$(this).blur();
		}
	});
	// при наведении на слайдер присваиваем ему класс isHover 
	// для остановки автолистания слайдера
	$('.sliderWrapOne, .sliderPaginationOne, .sliderNavPrevOne, .sliderNavNextOne').mouseenter(function() {
		//  $(this).addClass('bg092a5e');
		$('.sliderWrapOne').addClass('isHover');
		$('.sliderWrapOne').removeClass('isNotHover');
		//alert(' Навели мышь, остановили слайдер!');
	});
	$('.sliderWrapTwo, .sliderPaginationTwo, .sliderNavPrevTwo, .sliderNavNextTwo').mouseenter(function() {
		//  $(this).addClass('bg092a5e');
		$('.sliderWrapTwo').addClass('isHover');
		$('.sliderWrapTwo').removeClass('isNotHover');
		//alert(' Навели мышь, остановили слайдер!');
	});
	$('.sliderWrapOne, .sliderPaginationOne, .sliderNavPrevOne, .sliderNavNextOne').mouseleave(function() {
		//  $(this).removeClass('bg092a5e');
		$('.sliderWrapOne').removeClass('isHover');
		$('.sliderWrapOne').addClass('isNotHover');
		//alert(' убрали мышь, запустили слайдер!');
	});
	$('.sliderWrapTwo, .sliderPaginationTwo, .sliderNavPrevTwo, .sliderNavNextTwo').mouseleave(function() {
		//  $(this).removeClass('bg092a5e');
		$('.sliderWrapTwo').removeClass('isHover');
		$('.sliderWrapTwo').addClass('isNotHover');
		//alert(' убрали мышь, запустили слайдер!');
	});
	autoSliderBring();
	// автослайдер  - Что привезти   
	function autoSliderBring() {
		var i = 0; // индекс 
		var x = 0; // перемещение слайдера
		var dot = $('.sliderPagOne');
		$(dot[0]).addClass('bg092a5e');
		//   $('.sliderPolosaOne').css({'margin-left': '0px'});       
		setInterval(function() {
			if($('.sliderWrapOne').hasClass('isHover')) {} else
			if($('.sliderWrapOne').hasClass('isNotHover')) {
				$(dot).removeClass('bg092a5e');
				$(dot[i]).addClass('bg092a5e');
				$('.sliderPolosaOne').animate({
					'margin-left': x + 'px'
				}, 500, "swing", function() {});
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
		var dot = $('.sliderPagTwo');
		$(dot[0]).addClass('bg092a5e');
		//   $('.sliderPolosaTwo').css({'margin-left': '0px'});       
		setInterval(function() {
			if($('.sliderWrapTwo').hasClass('isHover')) {} else
			if($('.sliderWrapTwo').hasClass('isNotHover')) {
				$(dot).removeClass('bg092a5e');
				$(dot[i]).addClass('bg092a5e');
				$('.sliderPolosaTwo').animate({
					'margin-left': x + 'px'
				}, 500, "swing", function() {});
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
	$('.sliderNavPrevOne').click(function() {
			var marginLeft = $('.sliderPolosaOne').css("margin-left");
			var left = parseInt(marginLeft);
			console.log(left);
			left = left - 290;
			if(left < -1450) {
				left = 0
			};
			$('.sliderPolosaOne').animate({
				'margin-left': left + 'px'
			}, 500, "swing", function() {});
			var index = [...document.querySelectorAll('.sliderPagOne')].findIndex(n => n.classList.contains('bg092a5e'));
			//var index = $('.bg092a5e').index();
			++index;
			if(index > 5) {
				index = 0
			};
			$('.bg092a5e').removeClass('bg092a5e');
			var dot = $('.sliderPagOne');
			$(dot[index]).addClass('bg092a5e');
		})
		// нажатие на кнопку вправо - передвигает слайдер вправо на 1 слайд
	$('.sliderNavNextOne').click(function() {
			var marginLeft = $('.sliderPolosaOne').css("margin-left");
			var left = parseInt(marginLeft);
			console.log(left);
			left = left + 290;
			if(left > 0) {
				left = -1450
			};
			$('.sliderPolosaOne').animate({
				'margin-left': left + 'px'
			}, 500, "swing", function() {});
			var index = [...document.querySelectorAll('.sliderPagOne')].findIndex(n => n.classList.contains('bg092a5e'));
			//var index = $('.bg092a5e').index();
			--index;
			if(index < 0) {
				index = 5
			};
			$('.bg092a5e').removeClass('bg092a5e');
			var dot = $('.sliderPagOne');
			$(dot[index]).addClass('bg092a5e');
		})
		// нажатие на кнопку влево - передвигает слайдер влево на 1 слайд
	$('.sliderNavPrevTwo').click(function() {
			var marginLeft = $('.sliderPolosaTwo').css("margin-left");
			var left = parseInt(marginLeft);
			console.log(left);
			left = left - 290;
			if(left < -1450) {
				left = 0
			};
			$('.sliderPolosaTwo').animate({
				'margin-left': left + 'px'
			}, 500, "swing", function() {});
			var index = [...document.querySelectorAll('.sliderPagTwo')].findIndex(n => n.classList.contains('bg092a5e'));
			//var index = $('.bg092a5e').index();
			++index;
			if(index > 5) {
				index = 0
			};
			$('.bg092a5e').removeClass('bg092a5e');
			var dot = $('.sliderPagTwo');
			$(dot[index]).addClass('bg092a5e');
		})
		// нажатие на кнопку вправо - передвигает слайдер вправо на 1 слайд
	$('.sliderNavNextTwo').click(function() {
			var marginLeft = $('.sliderPolosaTwo').css("margin-left");
			var left = parseInt(marginLeft);
			console.log(left);
			left = left + 290;
			if(left > 0) {
				left = -1450
			};
			$('.sliderPolosaTwo').animate({
				'margin-left': left + 'px'
			}, 500, "swing", function() {});
			var index = [...document.querySelectorAll('.sliderPagTwo')].findIndex(n => n.classList.contains('bg092a5e'));
			//var index = $('.bg092a5e').index();
			--index;
			if(index < 0) {
				index = 5
			};
			$('.bg092a5e').removeClass('bg092a5e');
			var dot = $('.sliderPagTwo');
			$(dot[index]).addClass('bg092a5e');
		})
		// слайдер WhatToBring
		// нажатие на кнопки пагинации сдвигает слайдер на соответствующую позицию 
	$('.sliderPagOne').click(function() {
			var dot = $('.sliderPagOne');
			var index = ($(this).index());
			// alert('нажали на кнопку ' + index );
			if(index === 0) {
				//  $('.slide:eq(0)').css({"background" : "red"});
				$('.sliderPolosaOne').animate({
					'margin-left': 0 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 1) {
				//  $('.slide:eq(1)').css({"background" : "red"});
				$('.sliderPolosaOne').animate({
					'margin-left': -290 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 2) {
				//  $('.slide:eq(2)').css({"background" : "red"});
				$('.sliderPolosaOne').animate({
					'margin-left': -580 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 3) {
				// $('.slide:eq(3)').css({"background" : "red"});
				$('.sliderPolosaOne').animate({
					'margin-left': -870 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 4) {
				// $('.slide:eq(3)').css({"background" : "red"});
				$('.sliderPolosaOne').animate({
					'margin-left': -1160 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 5) {
				// $('.slide:eq(3)').css({"background" : "red"});
				$('.sliderPolosaOne').animate({
					'margin-left': -1450 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			}
		})
		// слайдер WhatToTry
		// нажатие на кнопки пагинации сдвигает слайдер на соответствующую позицию 
	$('.sliderPagTwo').click(function() {
			var dot = $('.sliderPagTwo');
			var index = ($(this).index());
			// alert('нажали на кнопку ' + index );
			if(index === 0) {
				//  $('.slide:eq(0)').css({"background" : "red"});
				$('.sliderPolosaTwo').animate({
					'margin-left': 0 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 1) {
				//  $('.slide:eq(1)').css({"background" : "red"});
				$('.sliderPolosaTwo').animate({
					'margin-left': -290 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 2) {
				//  $('.slide:eq(2)').css({"background" : "red"});
				$('.sliderPolosaTwo').animate({
					'margin-left': -580 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 3) {
				// $('.slide:eq(3)').css({"background" : "red"});
				$('.sliderPolosaTwo').animate({
					'margin-left': -870 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 4) {
				// $('.slide:eq(3)').css({"background" : "red"});
				$('.sliderPolosaTwo').animate({
					'margin-left': -1160 + 'px'
				}, 400);
				$('.bg092a5e').removeClass('bg092a5e');
				$(dot[index]).addClass('bg092a5e');
			} else
			if(index === 5) {
				// $('.slide:eq(3)').css({"background" : "red"});
				$('.sliderPolosaTwo').animate({
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