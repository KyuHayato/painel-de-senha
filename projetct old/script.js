

let passwords = {
    naturalSciences: 0,
    mathematics: 0,
    languages: 0,
    itineraries: 0,
    humanities: 0
};

// Get stored passwords from Web Storage API
if (localStorage.getItem('passwords')) {
    passwords = JSON.parse(localStorage.getItem('passwords'));
    console.log( "dentro do if",passwords)
}

// Update password display
function updatePasswordDisplay() {
    document.getElementById('natural-sciences-password-value').textContent = passwords.naturalSciences;
    document.getElementById('mathematics-password-value').textContent = passwords.mathematics;
    document.getElementById('languages-password-value').textContent = passwords.languages;
    document.getElementById('itineraries-password-value').textContent = passwords.itineraries;
    document.getElementById('humanities-password-value').textContent = passwords.humanities;
}

updatePasswordDisplay();

// Add event listener to document
document.addEventListener('keydown', (event) => {
    if (event.key === '1' || event.key === 'NumPad1') {
        passwords.naturalSciences++;
    } else if (event.key === '2' || event.key === 'NumPad2') {
        passwords.mathematics++;
    } else if (event.key === '3' || event.key === 'NumPad3') {
        passwords.languages++;
    } else if (event.key === '4' || event.key === 'NumPad4') {
        passwords.itineraries++;
    } else if (event.key === '5' || event.key === 'NumPad5') {
        passwords.humanities++;
    } else if (event.key === '-') {
        let lastKey = '';
        document.addEventListener('keydown', (event) => {
            lastKey = event.key;
            document.removeEventListener('keydown', arguments.callee);
        }, { once: true });
        setTimeout(() => {
            if (lastKey === '1' || lastKey === 'NumPad1') {
                passwords.naturalSciences--;
                console.log("menor", passwords.naturalSciences)
            } else if (lastKey === '2' || lastKey === 'NumPad2') {
                passwords.mathematics--;
            } else if (lastKey === '3' || lastKey === 'NumPad3') {
                passwords.languages--;
            } else if (lastKey === '4' || lastKey === 'NumPad4') {
                passwords.itineraries--;
            } else if (lastKey === '5' || lastKey === 'NumPad5') {
                passwords.humanities--;
            }
            updatePasswordDisplay();
            localStorage.setItem('passwords', JSON.stringify(passwords));
        }, 0);
    } else if (event.key === 'Delete') {
        passwords = {
            naturalSciences: 0,
            mathematics: 0,
            languages: 0,
            itineraries: 0,
            humanities: 0
        };
        updatePasswordDisplay();
        localStorage.setItem('passwords', JSON.stringify(passwords));
    }
    updatePasswordDisplay();
    localStorage.setItem('passwords', JSON.stringify(passwords));
});