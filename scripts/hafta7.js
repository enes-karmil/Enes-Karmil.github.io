// ===== TEMA DEĞİŞTİRME =====
const temaButonu = document.getElementById("temaButonu");

temaButonu.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    temaButonu.textContent = "☀️ Tema Değiştir";
  } else {
    temaButonu.textContent = "🌙 Tema Değiştir";
  }
});

// ===== FORM ÖZETİ =====
const form = document.getElementById("basvuruFormu");
const sonucAlani = document.getElementById("sonucAlani");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Alan değerleri
  const adSoyad = document.getElementById("adSoyad").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefon = document.getElementById("telefon").value.trim();
  const model = document.getElementById("model").value;
  const tarih = document.getElementById("tarih").value;
  const kvkk = document.getElementById("kvkk").checked;

  // Eksik alan kontrolü
  if (!adSoyad || !email || !telefon || !model || !tarih) {
    sonucAlani.innerHTML = `
      <div class="alert alert-danger">
        ⚠️ Lütfen tüm zorunlu alanları doldurunuz.
      </div>
    `;
    return;
  }

  if (!kvkk) {
    sonucAlani.innerHTML = `
      <div class="alert alert-warning">
        ⚠️ Devam edebilmek için KVKK onayını vermeniz gerekmektedir.
      </div>
    `;
    return;
  }

  // Tarihi okunabilir formata çevir
  const tarihObj = new Date(tarih);
  const tarihStr = tarihObj.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  // Başarılı özet kartı
  sonucAlani.innerHTML = `
    <div class="alert alert-success">
      <h5 class="alert-heading">✅ Başvurunuz Alındı!</h5>
      <hr>
      <p><strong>Ad Soyad:</strong> ${adSoyad}</p>
      <p><strong>E-posta:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${telefon}</p>
      <p><strong>Seçilen Model:</strong> ${model}</p>
      <p class="mb-0"><strong>Test Tarihi:</strong> ${tarihStr}</p>
    </div>
  `;

  // Formu temizle
  form.reset();
});
