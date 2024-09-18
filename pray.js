let cardd = document.getElementById("cardd");

function renderCard(data) {
    data.data.forEach(item => {
        let container = document.createElement('div');
        container.classList.add('col-md-4', 'mb-4');

        let card = document.createElement('div');
        card.classList.add('card');

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let h = document.createElement('p');
        h.classList.add('card-text');
        h.innerText = item.hijri.date;

        let content = document.createElement('p');
        content.classList.add('card-text');
        content.innerText = item.hijri.day;

        cardBody.appendChild(h);
        cardBody.appendChild(content);
        card.appendChild(cardBody);
        container.appendChild(card);
        cardd.appendChild(container);
    });
}

fetch("https://api.aladhan.com/v1/gToHCalendar/9/2024")
    .then(response => response.json())
    .then(data => renderCard(data))
    .catch(error => console.error('Error fetching data:', error));
