// script.js
document.getElementById('showModalBtn').addEventListener('click', function() {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const feedback = document.getElementById('feedback').value;
    

    if (!name || !email || !age || !feedback) {
        alert("Пожалуйста, заполните все поля.");
        return; // Прерываем выполнение функции
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Пожалуйста, введите корректный email.");
        return; // Прерываем выполнение функции
    }

    if (isNaN(age) || age <= 0 || age > 120 || age.trim() === "") {
        alert("Пожалуйста, введите корректный возраст.");
        return; // Прерываем выполнение функции
    }

    if (feedback.length < 10) {
        alert("Пожалуйста, введите отзыв длиной хотя бы 10 символов.");
        return; // Прерываем выполнение функции
    }

    const modalContent = `
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Возраст:</strong> ${age}</p>
        <p><strong>Отзыв:</strong> ${feedback}</p>
    `;
    document.getElementById('modalContent').innerHTML = modalContent;

 
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
