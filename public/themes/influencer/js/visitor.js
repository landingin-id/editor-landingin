function recordVisitor() {

    const domainName = window.location.hostname;
    const pageName = window.location.pathname;
    const eventName = 'viewpage';

    // Kirim data ke server
    fetch('https://app.landingin.id/api/visitor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ domain: domainName, event: eventName, page: pageName })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Data berhasil dikirim:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Panggil fungsi saat halaman dimuat
window.onload = recordVisitor;

