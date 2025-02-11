function generateMessage() {
    const messages = [
        "Hallo sayang selamat hari Valentine semoga kamu senang dengan pemberian hadiah ini walaupun tidak seberapa, yang jelas aku sudah berusaha agar kamu senang walaupun dengan begini cara nya mungkin, maaf sslama ini selalu menyusahkan kamu dalam hal apapun, Terimakasih sudah hadir di dalam hidupku loveee youu💝",
    ];

    let randomIndex = Math.floor(Math.random() * messages.length);
    let message = messages[randomIndex];
    let messageElement = document.getElementById("loveMessage");
    let button = document.querySelector(".btn-animate");
    let whatsappButton = document.getElementById("whatsappButton");

    // Sembunyikan tombol dengan animasi
    button.style.opacity = "0";
    setTimeout(() => {
        button.style.display = "none";
    }, 500);

    // Efek mengetik (satu per satu)
    messageElement.textContent = ""; 
    let i = 0;
    function typeWriter() {
        if (i < message.length) {
            messageElement.textContent += message[i];
            i++;
            setTimeout(typeWriter, 100); // Kecepatan mengetik
        } else {
            // Setelah teks selesai, munculkan tombol WhatsApp
            setTimeout(() => {
                whatsappButton.style.opacity = "1";
                whatsappButton.style.transform = "scale(1)";
            }, 500);
        }
    }

    typeWriter();
}

function redirectToWhatsApp() {
    window.location.href = "https://wa.me/6285770612185?text=©Snaky"
}