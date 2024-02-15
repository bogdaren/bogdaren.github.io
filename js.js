// Функция для открытия модального окна
function openResumeModal() {
    document.getElementById('resumeModal').style.display = 'block';
}

// Функция для закрытия модального окна
function closeResumeModal() {
    document.getElementById('resumeModal').style.display = 'none';
}

// Закрыть модальное окно, если пользователь кликает вне его
window.onclick = function(event) {
    var modal = document.getElementById('resumeModal');
    if (event.target == modal) {
        closeResumeModal();
    }
}