window.onload = function() {
    const message = "💛 Hola, mi amor 💛 🌻 No puedo esperar a verte y llenarte de abrazos. ¡Te extraño tanto! 💕...hasta Gargantua, te amo hermosita";
    let i = 0;
    const speed = 50;

    function typeWriter() {
        if (i < message.length) {
            document.getElementById("message").innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    document.querySelector('.flowers').addEventListener('click', () => {
        document.getElementById("message").style.display = "block";
        typeWriter();
    });
};
