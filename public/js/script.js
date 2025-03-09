document.addEventListener("DOMContentLoaded", function() {
    // Tablolar için örnek bir etkileşim
    const rows = document.querySelectorAll('.table tbody tr');
    rows.forEach(row => {
        row.addEventListener('click', function() {
            alert('Seçilen satır: ' + this.cells[0].innerText); // İlk hücredeki değeri göster
        });
    });

    // İletişim formunu gönderme
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Formun varsayılan gönderimini engelle
        alert('Mesajınız gönderildi!'); // Mesaj gönderildi uyarısı
        contactForm.reset(); // Formu sıfırla
    });
});
