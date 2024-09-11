console.log("kurcalama çok")


window.addEventListener('load', () => {
    // 5 saniyelik gecikme
    setTimeout(() => {
        const loading = document.getElementById('loading');
        const content = document.getElementById('content');

        // Yükleme sayfasını gizle ve içerikleri göster
        loading.style.display = 'none';
        content.style.display = 'block';
    }, 20); // 5000 milisaniye = 5 saniye
});

// Sayfa yüklendiğinde çalışacak kod
window.onload = function() {
    // localStorage'da 'pageRefreshed' adında bir anahtar olup olmadığını kontrol et
    if (!localStorage.getItem('pageRefreshed')) {
        // Eğer anahtar yoksa, sayfayı yenile
        localStorage.setItem('pageRefreshed', 'true');
        location.reload();
    } else {            
        // Anahtar varsa, anahtarı kaldır ve sayfayı yenileme
        localStorage.removeItem('pageRefreshed');
    }
};




