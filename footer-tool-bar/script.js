// Ottieni il valore del parametro "opt" dalla query string dell'URL
const urlParams = new URLSearchParams(window.location.search);
const optParam = urlParams.get('opt');

// Aggiungi la classe ".select" al link corrispondente
if (optParam) {
    const links = document.querySelectorAll('.opzioni .footer-link');
    for (let i = 0; i < links.length; i++) {
        const href = links[i].getAttribute('href');
        console.log(href)
        if (href && href.includes(optParam)) {
            links[i].classList.add('footer-select');
            break;
        }
    }
}