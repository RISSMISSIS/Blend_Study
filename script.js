document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    // Получаем данные из полей
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Имитация отправки данных на сервер
    if (name && email) {
        // Скрываем форму
        this.classList.add('hidden');
        
        // Показываем сообщение об успехе
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.remove('hidden');
        
        // Вывод в консоль для проверки
        console.log(`Заявка получена! Имя: ${name}, Email: ${email}`);
    }
});
