// Fungsi Toggle Form
function toggleForm(id) {
  const formElement = document.getElementById(`form-${id}`);
  formElement.style.display = formElement.style.display === "none" ? "block" : "none";
}

// Fungsi Hitung Luas dan Keliling Bangun Datar
// Segitiga
function hitungSegitiga(event) {
  event.preventDefault();
  const alas = parseFloat(document.getElementById("alasSegitiga").value);
  const tinggi = parseFloat(document.getElementById("tinggiSegitiga").value);
  const a = parseFloat(document.getElementById("sisiA").value);
  const b = parseFloat(document.getElementById("sisiB").value);
  const c = parseFloat(document.getElementById("sisiC").value);

  const luas = 0.5 * alas * tinggi;
  const keliling = a + b + c;

  document.getElementById("hasil-segitiga").innerHTML = `
    Luas: ${luas.toFixed(2)}<br>
    Keliling: ${keliling.toFixed(2)}
  `;
}

// Persegi
function hitungPersegi(event) {
  event.preventDefault();
  const sisi = parseFloat(document.getElementById("sisi").value);
  const luas = sisi * sisi;
  const keliling = 4 * sisi;

  document.getElementById("hasil-persegi").innerHTML = `
    Luas: ${luas}<br>
    Keliling: ${keliling}
  `;
}

// Persegi Panjang
function hitungPersegipanjang(event) {
  event.preventDefault();
  const p = parseFloat(document.getElementById("panjang").value);
  const l = parseFloat(document.getElementById("lebar").value);
  const luas = p * l;
  const keliling = 2 * (p + l);

  document.getElementById("hasil-persegiPanjang").innerHTML = `
    Luas: ${luas}<br>
    Keliling: ${keliling}
  `;
}

// Lingkaran
function hitungLingkaran(event) {
  event.preventDefault();
  const r = parseFloat(document.getElementById("jariJari").value);
  const luas = Math.PI * r * r;
  const keliling = 2 * Math.PI * r;

  document.getElementById("hasil-lingkaran").innerHTML = `
    Luas: ${luas.toFixed(2)}<br>
    Keliling: ${keliling.toFixed(2)}
  `;
}

// Trapesium
function hitungTrapesium(event) {
  event.preventDefault();
  const a = parseFloat(document.getElementById("alasA").value);
  const b = parseFloat(document.getElementById("alasB").value);
  const t = parseFloat(document.getElementById("tinggiTrapesium").value);
  const c = parseFloat(document.getElementById("sisiC").value);
  const d = parseFloat(document.getElementById("sisiD").value);

  const luas = 0.5 * (a + b) * t;
  const keliling = a + b + c + d;

  document.getElementById("hasil-trapesium").innerHTML = `
    Luas: ${luas}<br>
    Keliling: ${keliling}
  `;
}

// Jajar Genjang
function hitungJajarGenjang(event) {
  event.preventDefault();
  const a = parseFloat(document.getElementById("alasJG").value);
  const t = parseFloat(document.getElementById("tinggiJG").value);
  const b = parseFloat(document.getElementById("sisiMiringJG").value);

  const luas = a * t;
  const keliling = 2 * (a + b);

  document.getElementById("hasil-jajarGenjang").innerHTML = `
    Luas: ${luas}<br>
    Keliling: ${keliling}
  `;
}

// Belah Ketupat
function hitungBelahKetupat(event) {
  event.preventDefault();
  const d1 = parseFloat(document.getElementById("diagonal1BK").value);
  const d2 = parseFloat(document.getElementById("diagonal2BK").value);
  const sisi = parseFloat(document.getElementById("sisiBK").value);

  const luas = 0.5 * d1 * d2;
  const keliling = 4 * sisi;

  document.getElementById("hasil-belahKetupat").innerHTML = `
    Luas: ${luas}<br>
    Keliling: ${keliling}
  `;
}

// Layang-Layang
function hitungLayangLayang(event) {
  event.preventDefault();
  const d1 = parseFloat(document.getElementById("diagonal1LL").value);
  const d2 = parseFloat(document.getElementById("diagonal2LL").value);
  const a = parseFloat(document.getElementById("sisiA_LL").value);
  const b = parseFloat(document.getElementById("sisiB_LL").value);

  const luas = 0.5 * d1 * d2;
  const keliling = 2 * (a + b);

  document.getElementById("hasil-layangLayang").innerHTML = `
    Luas: ${luas}<br>
    Keliling: ${keliling}
  `;
}

// Fungsi Reset Form Bangun datar
function resetForm(bangun) {
  const form = document.querySelector(`#form-${bangun} form`);
  if (form) {
    form.reset();
    document.getElementById(`hasil-${bangun}`).innerHTML = "";
  }
}
