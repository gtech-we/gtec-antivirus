document.getElementById('connectButton').addEventListener('click', function() {
    const status = document.getElementById('status');
    status.textContent = 'Connecting to VPN...';

    setTimeout(() => {
        // Simulate connection success or failure
        const isConnected = Math.random() < 0.7; // 70% chance to connect successfully
        if (isConnected) {
            status.textContent = 'Connected to VPN!';
        } else {
            status.textContent = 'Failed to connect. Please try again.';
        }
    }, 2000); // Simulate a 2-second connection attempt
});
