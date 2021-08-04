$(document).ready(function() {

  $('.hidden__close').on('click', function() {
    $(this).parent().parent().parent().hide('slow');
    console.log('1');
  });

  $('.header__location-now').on('click', function() {
    $(this).parent().find('.header__location-hidden').show('slow');
    console.log('20');
  })

  $('.hidden__cities-link').on('click', function() {
    $(this).parent().parent().parent().find('.hidden__cities-link--active').removeClass('hidden__cities-link--active')
    $(this).addClass('hidden__cities-link--active');
    t = $(this).text();
    console.log(t);

    $('.header__location-now').text($(this).text());
  })


  $('.reviews__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });


  $('.answers__list-title').on('click', function() {
    $(this).parent().find('.answers__text').slideToggle('slow');
    $(this).parent().find('.answers__chevron').toggleClass('answers__chevron--opened');
  })

  $('.aside__double-list').on('click', function() {
    $(this).addClass('active');
    $(this).next().removeClass('active');
    $('.left-block__map').hide();
    $('.left-block__hide').show();

  })
  $('.aside__double-map').on('click', function() {
    $(this).addClass('active');
    $(this).prev().removeClass('active');

    $('.left-block__map').show();
    $('.left-block__hide').hide();

  })
  //----------------------------------------calendar--------------------------------------//
  const i18n = {
    previousMonth: 'предыдущий месяц',
    nextMonth: 'следующий месяц',
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль ', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь '],
    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  }

  var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    // bound: false,
    // container: document.getElementById('container'),    
    format: 'D.M.YYYY',
    i18n: i18n,
    firstDay: 1,
    toString(date, format) {
      // you should do formatting based on the passed format,
      // but we will just return 'D/M/YYYY' for simplicity
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    },
    parse(dateString, format) {
      // dateString is the result of `toString` method
      const parts = dateString.split('.');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }

  });
  //----------------------------------------calendar--------------------------------------//
  //----------------------------------------chart--------------------------------------//
  var period = $('.chart-data__period');
  var labels = [];
  for (var i = period.length - 1; i >= 0; i--) {
    labels.push($(period[i]).text());
  }

  var mybuy = $('.chart-data__buy');
  var buy = [];
  for (var i = mybuy.length - 1; i >= 0; i--) {
    buy.push(parseFloat($(mybuy[i]).text().replace(/,/, '.')));
  }

  var mysell = $('.chart-data__sell');
  var sell = [];
  for (var i = mysell.length - 1; i >= 0; i--) {
    sell.push(parseFloat($(mysell[i]).text().replace(/,/, '.')));
  }

  const data = {
    labels: labels,
    datasets: [{
        label: 'Покупка',
        data: buy,
        fill: false,
        borderColor: '#FE7F0B',
        tension: 0.1
      },
      {
        label: 'Продажа',
        data: sell,
        fill: false,
        borderColor: '#1F78B4',
        tension: 0.1
      }
    ]
  };


  const myconfig = {
    type: 'line',
    data: data,
    options: {
      responsive: true
    }
  };
  var myChart = new Chart(
    document.getElementById('myChart'),
    config = myconfig
  );




  //----------------------------------------chart--------------------------------------//
  //----------------------------------------header-burger--------------------------------------//
  $('.header__burger').on('click', function() {
    $('.services__wrapper').fadeToggle();
  })
  $('.services__toggle').on('click', function() {
    $('.services__wrapper').slideToggle();
  })

  $(window).on('resize', function() {
    var win = $(this);
    if (win.width() >= 1200) {
      console.log('show');
      $('.services__wrapper').show().css('display', 'flex');
    } else {
      console.log('hide');
      $('.services__wrapper').hide();
    }
  });
  //----------------------------------------header-burger--------------------------------------//

  //----------------------------------------aside__double-replace--------------------------------------//

  if ($(window).width() < 768) {
    $('.aside__double').appendTo('#aside-double-mobile');
  }
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.aside__double').appendTo('#aside-double-mobile');
    } else {
      $('.aside__double').appendTo('#aside-double');
    }
  });

  //----------------------------------------aside__double-replace--------------------------------------//

  //----------------------------------------aside-replace--------------------------------------//

  if ($(window).width() < 768) {
    $('#aside-bank .aside').appendTo('#aside-bank-mobile');
  }
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('#aside-bank .aside').appendTo('#aside-bank-mobile');
    } else {
      $('#aside-bank-mobile .aside').appendTo('#aside-bank');
    }
  });

  //----------------------------------------aside-replace--------------------------------------//
});