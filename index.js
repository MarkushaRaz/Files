let Random;
let Valid;
let MMessage;
let MSpam;
let SpamInterval;

// const tokens = [
// ];
const tokens = '7274628231:AAEW7Y_Yg3SDU4mgfxEMcp_hknll5MTfsU4';
// MinecraftHelper: 7700607463:AAFxFAVW8XlAUjMCxPeF7hsctttcfIkZEpw
// Voice: 7274628231:AAEW7Y_Yg3SDU4mgfxEMcp_hknll5MTfsU4

const chatId = '-1002377329022';

function Message() {
    const url = `https://api.telegram.org/bot${tokens}/sendMessage`;

    MMessage = document.getElementById('Message').value;

    fetch(url, {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            chat_id:chatId,
            text:MMessage
        })
    })
}

function Spam() {
    // Random = Math.floor(Math.random() * (max - min + 1)) + min;

    const url = `https://api.telegram.org/bot${tokens}/sendMessage`;

    MSpam = document.getElementById('MessageSpam').value;

    fetch(url, {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            chat_id:chatId,
            text:MSpam
        })
    })

    console.clear();
}

document.getElementById('SendMessage').addEventListener('click', function() {
    Message();
});

document.getElementById('Start').addEventListener('click', function() {
    Valid = confirm('Подтвердите действие');

    if (Valid === true) {
        SpamInterval = setInterval(Spam, 400);

        document.getElementById('Status').innerHTML = '<H1 class="center Yes" id="Status">Спам активен</H1>'
    }
});

document.getElementById('Pause').addEventListener('click', function() {
    clearInterval(SpamInterval);

    document.getElementById('Status').innerHTML = '<H1 class="center No">Спам неактивен</H1>';
});
