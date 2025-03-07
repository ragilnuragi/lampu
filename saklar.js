function saklar() {
  // Grup saklar utama
  let toggleKeluarga1 = document.getElementById("toggle-keluarga1");
  let toggleKeluarga3 = document.getElementById("toggle-keluarga3");
  let toggleKeluarga4 = document.getElementById("toggle-keluarga4");

  // Saklar individual untuk masing-masing lampu
  let toggles = [
    document.getElementById("default-toggle1"),
    document.getElementById("default-toggle2"),
    document.getElementById("default-toggle3"),
    document.getElementById("default-toggle4"),
    document.getElementById("default-toggle5"),
    document.getElementById("default-toggle6"),
    document.getElementById("default-toggle7"),
    document.getElementById("default-toggle8"),
    document.getElementById("default-toggle9"),
  ];

  let toggleLampu10 = document.getElementById("default-toggle10"); // Saklar lampu ke-10

  // Gambar lampu
  let lampus = [
    document.getElementById("lampu1"),
    document.getElementById("lampu2"),
    document.getElementById("lampu3"),
    document.getElementById("lampu4"),
    document.getElementById("lampu5"),
    document.getElementById("lampu6"),
    document.getElementById("lampu7"),
    document.getElementById("lampu8"),
    document.getElementById("lampu9"),
  ];

  let lampu10 = document.getElementById("lampu10"); // Lampu ke-10

  // Fungsi untuk menyalakan dan mematikan lampu individu
  function kontrolLampu(toggle, lampu) {
    if (toggle.checked) {
      lampu.src = "assets/images/on.gif";
    } else {
      lampu.src = "assets/images/off.gif";
    }
  }

  // Update setiap lampu berdasarkan toggle masing-masing
  for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("change", function () {
      kontrolLampu(toggles[i], lampus[i]);
      updateSaklarUtama();
    });
  }

  // Event listener untuk lampu ke-10 agar tetap independen
  if (toggleLampu10) {
    toggleLampu10.addEventListener("change", function () {
      kontrolLampu(toggleLampu10, lampu10);
    });
  }

  // Fungsi untuk mengontrol saklar utama agar tetap sinkron dengan status saklar individu
  function updateSaklarUtama() {
    if (toggleKeluarga1) {
      toggleKeluarga1.checked = toggles[0].checked && toggles[1].checked && toggles[2].checked;
    }
    if (toggleKeluarga3) {
      toggleKeluarga3.checked = toggles[3].checked && toggles[4].checked;
    }
    if (toggleKeluarga4) {
      toggleKeluarga4.checked = toggles[5].checked && toggles[6].checked && toggles[7].checked && toggles[8].checked;
    }
  }

  // Fungsi untuk mengontrol lampu berdasarkan saklar utama
  function kontrolSaklarUtama(toggleUtama, indices) {
    let status = toggleUtama.checked;
    indices.forEach((index) => {
      toggles[index].checked = status;
      kontrolLampu(toggles[index], lampus[index]);
    });
  }

  // Event listener untuk saklar utama
  if (toggleKeluarga1) {
    toggleKeluarga1.addEventListener("change", function () {
      kontrolSaklarUtama(toggleKeluarga1, [0, 1, 2]);
    });
  }

  if (toggleKeluarga3) {
    toggleKeluarga3.addEventListener("change", function () {
      kontrolSaklarUtama(toggleKeluarga3, [3, 4]);
    });
  }

  if (toggleKeluarga4) {
    toggleKeluarga4.addEventListener("change", function () {
      kontrolSaklarUtama(toggleKeluarga4, [5, 6, 7, 8]);
    });
  }
}
