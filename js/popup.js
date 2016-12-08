$(document).ready(function () {
    // вешаем на каждую ссылку обработчик
$(".switch").click(function(){
  // удаляем у старого элемента, класс   activeClass    
  $("body").removeClass("white");

  // добавляем к ссылки по которой щёлкнули класс activeClass
  $("body").addClass("grey darken-3");
 
});

    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://weather.i.ua/", true);
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) 
        {
            if (xhr.responseText) 
            {
                var data = xhr.responseText;

                var last_video = $('.title', data);
               
                $('#title').html(last_video);
              

            }
        }
    }
    //
    xh = new XMLHttpRequest();
    xh.open("GET", "https://vk.com/tsnua", true);
    xh.send(null);
    xh.onreadystatechange = function() {
        if (xh.readyState == 4) 
        {
            if (xh.responseText) 
            {
                var dat = xh.responseText;

                var last = $('.wall_post_text:first', dat);
               
                 $( "a" ).addClass( "white" );
                $('#tsn').html(last);
              

            }
        }
    }
});
  