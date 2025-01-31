// Service Details Modal
function showServiceDetails(service) {
    const modal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    if (service === 'wedding') {
        modalTitle.textContent = 'Wedding DJ';
        modalDescription.textContent = 'Make your special day unforgettable with our curated playlists and seamless transitions.';
    } else if (service === 'corporate') {
        modalTitle.textContent = 'Corporate Events';
        modalDescription.textContent = 'Elevate your corporate events with professional sound and lighting solutions.';
    } else if (service === 'private') {
        modalTitle.textContent = 'Private Parties';
        modalDescription.textContent = 'From birthdays to anniversaries, we bring the party to life.';
    }

    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
}

// Close Modal on Click Outside
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
