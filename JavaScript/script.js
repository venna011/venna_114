let nama = "";
let jumlah = 0;
let teksPilihan = [];

function buatInputPilihan() {
  nama = document.getElementById("nama").value;
  jumlah = parseInt(document.getElementById("jumlah").value);

  if (!nama || isNaN(jumlah) || jumlah < 1) {
    alert("Masukkan nama dan jumlah pilihan dengan benar!");
    return;
  }

  let formPilihan = document.getElementById("formPilihan");
  formPilihan.innerHTML = "<h4>Masukkan Teks Pilihan:</h4>";

  for (let i = 1; i <= jumlah; i++) {
    formPilihan.innerHTML += `
      Pilihan ${i}: <input type="text" id="pilihan${i}"><br><br>
    `;
  }

  formPilihan.innerHTML += `<button onclick="buatRadio()">OK</button>`;
}

function buatRadio() {
  teksPilihan = [];
  for (let i = 1; i <= jumlah; i++) {
    let val = document.getElementById(`pilihan${i}`).value;
    if (!val) {
      alert(`Pilihan ${i} belum diisi!`);
      return;
    }
    teksPilihan.push(val);
  }

  let formRadio = document.getElementById("formRadio");
  formRadio.innerHTML = "<h4>Pilih salah satu:</h4>";

  teksPilihan.forEach((item, index) => {
    formRadio.innerHTML += `
      <input type="radio" name="pilihan" value="${item}"> ${item}<br>
    `;
  });

  formRadio.innerHTML += `<button onclick="mintaEmail()">OK</button>`;
}

function mintaEmail() {
  let formEmail = document.getElementById("formEmail");
  formEmail.innerHTML = `
    <h4>Masukkan Email:</h4>
    <input type="email" id="email" placeholder="contoh@email.com"><br><br>
    <button onclick="tampilkanHasil()">OK</button>
  `;
}

function tampilkanHasil() {
  const email = document.getElementById("email").value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(email)) {
    alert("Format email tidak valid!");
    return;
  }

  const pilihanDipilih = document.querySelector("input[name='pilihan']:checked");
  if (!pilihanDipilih) {
    alert("Silakan pilih salah satu opsi!");
    return;
  }

  const hasil = document.getElementById("hasil");
  hasil.innerHTML = `
    <h4>Hasil:</h4>
    Halo, nama saya <b>${nama}</b>, email <b>${email}</b>.
    Saya mempunyai sejumlah ${jumlah} pilihan yaitu ${teksPilihan.join(", ")},
    dan saya memilih <b>${pilihanDipilih.value}</b>.
  `;
}
