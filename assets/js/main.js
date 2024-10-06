document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    var audio = document.getElementById('background-music');
    var playButton = document.getElementById('play-music');

    // Обработчик нажатия на кнопку
    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Получаем элемент video
    var video = document.getElementById('background-video');

    // Проверяем, поддерживает ли браузер autoplay
    if (video.paused) {
        video.play().catch(function(error) {
            console.log('Автовоспроизведение заблокировано. Пользователь должен взаимодействовать с сайтом.');
        });
    }
});