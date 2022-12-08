/*
Filesystem
Seluruh data di komputer dikelola dan diakses melalui filesystem. Ketika menjalankan kode JavaScript pada browser, sangat penting untuk melimitasi JavaScript dalam mengakses filesystem. Teknik ini dinamakan dengan sandboxing. Sandboxing melindungi kita dari program jahat serta tindakan pencurian yang dapat merampas privasi penggunanya.

Bagaimana dengan JavaScript yang dijalankan di back-end? Limitasi tentu tetap ada, namun tidak seketat ketika JavaScript dieksekusi pada browser. Di back-end malah filesystem menjadi fitur esensial karena dalam pengembangan back-end akan sering sekali mengakses atau menulis sebuah berkas di dalam komputer. 

Node.js menyediakan core modules fs yang dapat mempermudah kita dalam mengakses filesystem. Setiap method yang ada di module fs tersedia dalam dua versi, yakni versi asynchronous (default) dan versi synchronous. 

Tentu Anda sudah tahu apa itu asynchronous dan synchronous kan? Jika belum, pelajari kedua hal tersebut pada kelas Belajar Dasar Pemrograman JavaScript.

Untuk mengakses berkas pada komputer kita dapat menggunakan method fs.readFile(). Method ini menerima tiga argumen yakni: lokasi berkas, encoding, dan callback function yang akan terpanggil bila berkas berhasil/gagal diakses.


const fs = require("fs");

const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal membaca berkas");
    return;
  }
  console.log(data);
};

fs.readFile("todo.txt", "UTF-8", fileReadCallback);

atau pakai cara syncronous

const data = fs.readFileSync("todo.txt", "UTF-8");
console.log(data);

*/

const fs = require("fs");

fs.readFile("./notes.txt", "utf-8", (error, data) => {
  if (error) {
    throw { msg: "Gagal membaca berkas" };
  } else {
    console.log(data);
  }
});

// or

fs.readFileSync("./notes.txt", "utf8");

// Tips: Anda bisa gunakan method
// path.resolve(__dirname, 'notes.txt');
// Dari core modules path dalam menetapkan alamat berkas secara lengkap dan dinamis.
