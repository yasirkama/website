/************************************************************
  Tek-Sayfa Geçişi (Home, Servis Talep, Randevularım, Ürünlerim)
************************************************************/
const homeLink = document.getElementById("link-home");
const servisTalepLink = document.getElementById("link-servis-talep");
const randevularimLink = document.getElementById("link-randevularim");
const urunlerimLink = document.getElementById("link-urunlerim");

const homeSection = document.getElementById("section-home");
const servisTalepSection = document.getElementById("section-servis-talep");
const randevularimSection = document.getElementById("section-randevularim");
const urunlerimSection = document.getElementById("section-urunlerim");

function showSection(sectionId) {
  // Tüm bölümleri gizle
  [homeSection, servisTalepSection, randevularimSection, urunlerimSection].forEach(
    (section) => section.classList.add("hidden")
  );

  // İstenilen bölümü göster
  document.getElementById(sectionId).classList.remove("hidden");
}

// Navbar linklerine tıklanınca ilgili bölümü göster
homeLink.addEventListener("click", () => showSection("section-home"));
servisTalepLink.addEventListener("click", () => showSection("section-servis-talep"));
randevularimLink.addEventListener("click", () => showSection("section-randevularim"));
urunlerimLink.addEventListener("click", () => showSection("section-urunlerim"));

/************************************************************
  SERVİS TALEP FORMU
************************************************************/
const servisTalepForm = document.getElementById("servisTalepForm");
const tahminiFiyatBox = document.getElementById("tahminiFiyatBox");
const fiyatMetni = document.getElementById("fiyatMetni");
const btnOnayla = document.getElementById("btnOnayla");
const talepOnayMesaji = document.getElementById("talepOnayMesaji");

// Randevu listesi
let randevular = [
  {
    id: 1,
    baslik: "Bulaşık Makinesi Servisi",
    tarih: "12 Mayıs 10:00",
    durum: "Parça Bekleniyor",
    teknisyen: {
      ad: "Ali Çelik",
      telefon: "0543 987 6543",
      uzmanlik: "Bulaşık Makinesi Teknik Servisi",
    },
  },
  {
    id: 2,
    baslik: "Araba Bakım Randevusu",
    tarih: "22 Mayıs 14:00",
    durum: "Onaylandı",
    teknisyen: {
      ad: "Ahmet Kaya",
      telefon: "0554 123 7890",
      uzmanlik: "Araç Teknik Servisi",
    },
  },
  {
    id: 3,
    baslik: "Çamaşır Makinesi Servisi",
    tarih: "15 Haziran 11:00",
    durum: "Ürün Teslim Edilmeye Hazır",
    teknisyen: {
      ad: "Mehmet Yılmaz",
      telefon: "0555 123 4567",
      uzmanlik: "Beyaz Eşya Teknik Servisi",
    },
  },
];

// Randevuları listeleme fonksiyonu
function displayRandevular() {
  randevularList.innerHTML = "";

  randevular.forEach((ran, index) => {
    const card = document.createElement("div");
    card.classList.add("randevu-card");

    card.innerHTML = `
      <h3>${ran.baslik}</h3>
      <p>Tarih: ${ran.tarih}</p>
      <p>Durum: ${ran.durum}</p>

      <!-- Teknisyen Bilgileri -->
      <div class="teknisyen-info">
        <h4>Teknisyen Bilgileri:</h4>
        <p><strong>Ad:</strong> ${ran.teknisyen.ad}</p>
        <p><strong>Telefon:</strong> ${ran.teknisyen.telefon}</p>
        <p><strong>Uzmanlık:</strong> ${ran.teknisyen.uzmanlik}</p>
      </div>
    `;


    randevularList.appendChild(card);
  });
}
// Her bir bar için yüzdeleri tanımlayın
const progressValues = [
  { id: "progress-bar-1", percentage: 70 }, // İlk bar (%40)
  { id: "progress-bar-2", percentage: 10 }, // İkinci bar (%60)
  { id: "progress-bar-3", percentage: 100 }  // Üçüncü bar (%80)
];

// Progress barları güncelleyen fonksiyon
function updateAllProgressBars() {
  progressValues.forEach((progress) => {
    const progressBar = document.getElementById(progress.id);
    progressBar.style.width = progress.percentage + "%";
  });
}

// Sayfa yüklendiğinde barları güncelle
updateAllProgressBars();

// Sayfa yüklendiğinde randevuları göster
displayRandevular();


// Form gönderme
servisTalepForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Rastgele fiyat üretimi
  const randomMin = 1000;
  const randomMax = 3000;
  const randomPrice = Math.floor(Math.random() * (randomMax - randomMin + 1)) + randomMin;

  fiyatMetni.textContent = "Tahmini Servis Ücreti: " + randomPrice + " TL";

  // Tahmini fiyat kutusunu göster
  tahminiFiyatBox.classList.remove("hidden");

  // Onay mesajını gizli tut
  talepOnayMesaji.classList.add("hidden");
});

  // Onay butonuna basılınca
  btnOnayla.addEventListener("click", function () {
  // Form verilerini al
  const urunKategori = document.getElementById("urunKategori").value;
  const sorunAciklama = document.getElementById("sorunAciklama").value;

  // Yeni randevu oluştur
  const newRandevuId = randevular.length + 1;
  const newRandevu = {
    id: newRandevuId,
    baslik: `${urunKategori} Servisi`,
    tarih: "Tarih: Otomatik Planlanacak",
    durum: "Onaylandı - Detaylar İçin Aranacak",
  };
  randevular.push(newRandevu);

  // Onay mesajını göster
  talepOnayMesaji.classList.remove("hidden");
  tahminiFiyatBox.classList.add("hidden");

  // Formu temizle
  servisTalepForm.reset();
});

/************************************************************
  RANDEVULARIM
************************************************************/
const randevularList = document.getElementById("randevularList");
const progressBar = document.getElementById("progress-bar");
const randevuDurum = document.getElementById("randevu-durum");
const progressButton = document.getElementById("progress-button");

// Durumlar
const progressSteps = [
  "Ürün Teslim Alındı",
  "Teknisyen Atandı",
  "Parça Bekleniyor",
  "Son Testler Yapılıyor",
  "Ürün Teslim Edilmeye Hazır",
];

// Randevuları listeleme fonksiyonu
function displayRandevular() {
  randevularList.innerHTML = "";

  randevular.forEach((ran, index) => {
    const card = document.createElement("div");
    card.classList.add("randevu-card");

    card.innerHTML = `
      <h3>${ran.baslik}</h3>
      <p>Tarih: ${ran.tarih}</p>
      <p>Durum: ${ran.durum}</p>
    `;



    randevularList.appendChild(card);
  });
}

// Sayfa yüklendiğinde randevuları göster
displayRandevular();

// Randevularım sekmesine her geçişte listeyi yenile
randevularimLink.addEventListener("click", () => {
  displayRandevular();
});


