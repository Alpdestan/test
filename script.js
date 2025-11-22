const button = document.getElementById('magicButton');
const message = document.getElementById('message');

button.addEventListener('click', () => {
    // Rastgele renk oluştur
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    document.body.style.background = `rgb(${r},${g},${b})`;

    // Rastgele mesaj göster
    const messages = ["Merhaba!", "Test başarılı!", "Sayfa çalışıyor!", "Harika!"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;
});
