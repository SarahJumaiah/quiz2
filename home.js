window.addEventListener('DOMContentLoaded', () => { 
    let userId = sessionStorage.getItem('userId'); 
    fetch(`https://66e7e68bb17821a9d9da6e50.mockapi.io/login/${userId}`) 
    .then(response => response.json()) 
    .then(data => { 
        nameElement.innerText = data.name; 
     }) });