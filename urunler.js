document.addEventListener('DOMContentLoaded', () => {
    // --- 1. SEPET SİSTEMİ ---
    let basketCount = 0;
    const cartDisplay = document.getElementById('cart-count');
    const addButtons = document.querySelectorAll('.add-btn');

    addButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Butonun yanındaki inputu bul ve içindeki değeri sayıya çevir
            const input = btn.parentElement.querySelector('.qty-input');
            const quantity = parseInt(input.value);

            if (!isNaN(quantity) && quantity > 0) {
                basketCount += quantity;
                cartDisplay.innerText = basketCount;

                // Küçük bir animasyon geri bildirimi
                btn.style.background = "#27ae60";
                btn.innerText = "Eklendi!";
                
                setTimeout(() => {
                    btn.style.background = ""; // Orijinal CSS rengine döner
                    btn.innerText = "Sepete Ekle";
                }, 800);
            }
        });
    });

    // --- 2. KARANLIK MOD SİSTEMİ ---
    const darkToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const icon = darkToggle.querySelector('i');

    // Kullanıcı daha önce seçmiş mi kontrol et
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    darkToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
});