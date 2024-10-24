// initMap();
//
// async function initMap() {
//     // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
//     await ymaps3.ready;
//
//     const {YMap, YMapDefaultSchemeLayer} = ymaps3;
//
//     // Иницилиазируем карту
//     const map = new YMap(
//         // Передаём ссылку на HTMLElement контейнера
//         document.getElementById('map'),
//
//         // Передаём параметры инициализации карты
//         {
//             location: {
//                 // Координаты центра карты
//                 center: [37.588144, 55.733842],
//
//                 // Уровень масштабирования
//                 zoom: 10
//             }
//         }
//     );
//
//     // Добавляем слой для отображения схематической карты
//     map.addChild(new YMapDefaultSchemeLayer());
// }


let center = [48.8866527839977,2.34310679732974];

function init() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 17
    });

    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);
