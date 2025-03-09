document.addEventListener("DOMContentLoaded", function() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show(); // Modal'ı göster

    // "Daha Fazla Bilgi" butonlarına tıklama olayı ekle
    var buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.open('https://example.com', '_blank'); // Yeni sekmede açılacak URL
        });
    });

    // İletişim formunu gönderme
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Formun varsayılan gönderimini engelle
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Form verilerini kontrol et
        if (name && email && message) {
            alert('Mesajınız gönderildi!'); // Mesaj gönderildi uyarısı
            form.reset(); // Formu sıfırla
        } else {
            alert('Lütfen tüm alanları doldurun.'); // Hata mesajı
        }
    });
});
