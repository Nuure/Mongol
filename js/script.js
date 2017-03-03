$(document).ready(function(){ 
  // $('.list').hide();
  // $('.item-2').prev().hide();
  // $('li').append('<b>qwerty</b> ');

  // $('li').on('click', function(){
  //   console.log( $(this).text() );
  // });

   $('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    nav: true,
    // freeDrag: true,
    // autoWidth: true,
    margin:10,
    navText:"",
    // center: true,
    // autoplay: true
   });

$('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false; 
});
    // $("#menu").on("click","a", function (event) {
    //     //отменяем стандартную обработку нажатия по ссылке
    //     event.preventDefault();
    //     //забираем идентификатор бока с атрибута href
    //     var id  = $(this).attr('href'),
    //     //узнаем высоту от начала страницы до блока на который ссылается якорь
    //         top = $(id).offset().top;
    //     //анимируем переход на расстояние - top за 1500 мс
    //     $('body,html').animate({scrollTop: top}, 1000);
    // });

   function updater(d, h, m, s) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2017, 8, 27);
  // Период сброса — 3 дня
  var period = 3*24*60*60*1000;

  function update() {
    var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;
  
    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
  }
  setTimeout(update, 0);
}

updater(document.getElementById("days"),
 document.getElementById("hours"), document.getElementById("minutes"),
 document.getElementById("seconds"));
});