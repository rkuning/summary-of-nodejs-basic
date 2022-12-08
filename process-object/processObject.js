/*
Anda juga bisa secara manual menyimpan nilai di dalam process.env. Hal ini berguna untuk menentukan alur code seperti if-else dalam program berdasarkan environment yang Anda berikan. Contohnya, ketika Anda ingin nilai variabel host berbeda di kala pengembangan (development) dan produksi (production), Anda bisa membuat properti NODE_ENV pada process.env. Jadi, Anda bisa menentukan nilai host berdasarkan kondisi NODE_ENV.
const server = new Server({
  host: process.env.NODE_ENV !== "production" ? "localhost" : "dicoding.com",
});
*/

// NODE_ENV=production node app.js

/*
Selain untuk menetapkan dan mendapatkan informasi mengenai environment, objek process memiliki kegunaan lain. Salah satunya adalah mendapatkan informasi tentang penggunaan CPU ketika proses berjalan. Anda dapat mengakses informasi tersebut melalui fungsi process.memoryUsage().
const cpuInformation = process.memoryUsage();
console.log(cpuInformation);
*/

/*
Yang terakhir dan tak kalah pentingnya adalah properti process.argv. Properti ini dapat menampung nilai baris perintah dalam bentuk array ketika menjalankan proses. Contoh jika kita menjalankan baris perintah berikut:

Maka array process.argv akan bernilai:

Elemen pertama : Alamat (path) lengkap dari lokasi node yang menjalankan prosesnya. 
Element kedua : Alamat (path) berkas JavaScript yang dieksekusi (app.js)
Element ketiga : “harry”
Element keempat : “potter”

Bila app.js memiliki kode seperti ini:

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);

*/

const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// cara menjalankannya adalah sebagai berikut
// NODE_ENV=development node ./process-object/index.js <Nama Anda>
