$(document).ready(function() {
  $('.nav-link-collapse').on('click', function() {
    $('.nav-link-collapse').not(this).removeClass('nav-link-show');
    $(this).toggleClass('nav-link-show');
  });
});



var map;

        // Функция initMap которая отрисует карту на странице
        function initMap() {

            // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
            map = new google.maps.Map(document.getElementById('map'), {
                // При создании объекта карты необходимо указать его свойства
                // center - определяем точку на которой карта будет центрироваться
                center: {lat: -34.397, lng: 150.644},
                // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
                zoom: 8
            });
        }

// Создаем маркер на карте
var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: {lat: 52.441059, lng: 30.990512},

    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,

    // Пишем название маркера - появится если навести на него курсор и немного подождать
    title: 'Наш маркер: Большой театр'
});






function initMap() {
    var coordinates = {lat: 52.441059, lng: 30.990512},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        }),
    
        marker = new google.maps.Marker({
            position: coordinates,
            map: map
        });
}