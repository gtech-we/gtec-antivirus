document.getElementById('scanButton').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.textContent = 'Scanning for viruses...';

    setTimeout(() => {
        const foundViruses = Math.random() < 0.5; 
        if (foundViruses) {
            output.textContent = 'Warning: Virus detected! Please take action.';
        } else {
            output.textContent = 'No viruses found. Your system is clean!';
        }
    }, 2000);
});
