const messages = [
    "Кой е точнама??",
    "Реально жоқпа не?",
    "Тағы бір рет ойланшы... Жақсылап 😌",
    "Сен шынымен «жоқ» деп отырсың ба? 🤨",
    "Сен менсіз қалай өмір сүресің?..",
    "Жоқ десем өлем...",
    "Жылаймғой түнде...",
    "Мені таңдамасаң по девочкам шығарсың...",
    "Соңғы рет сұрап тұрмын... ИӘ де ...",
    "JET әперем! ❤️"
];

const gifUrls = [
    "images/image2.gif",
    "images/image3.gif",
    "images/image4.gif",
    "images/image5.gif",
    "images/image6.gif",
    "images/image7.gif"
];

let messageIndex = 0;
let gifIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImg = document.querySelector('.gif-img');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    gifIndex = (gifIndex + 1) % gifUrls.length;
    gifImg.src = gifUrls[gifIndex];
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
