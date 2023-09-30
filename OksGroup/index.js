const Green_mort = document.querySelector('.Green_mort');
const green_img = document.querySelector('.green_img');

green_img.addEventListener('click', () => {
    Green_mort.style.display = 'none';

    // Запустить интервал, который покажет Green_mort через 5 секунд
    const interval = setInterval(() => {
        Green_mort.style.display = 'block'; // Показать элемент
        clearInterval(interval); // Остановить интервал после показа
    }, 5000); // 5000 миллисекунд = 5 секунд
});
    