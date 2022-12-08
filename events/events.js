/*
Events
Aplikasi Node.js biasanya dikenal memiliki pola event-driven atau memiliki alur berdasarkan suatu kejadian. Apa maksudnya itu? Mari kita jelajahi lebih dalam lagi.

Dunia nyata penuh dengan kejadian. Alarm berbunyi, ponsel berdering, turun hujan, ataupun kejadian lainnya. Sebagai manusia, kita membuat keputusan lantas bertindak  berdasarkan kejadian yang ada. Contohnya ketika berjalan dan tiba-tiba turun hujan, kita bergegas menggunakan payung; ketika ponsel berdering, kita bereaksi dengan mengangkat panggilan; ketika merasa lapar, kita makan. Seperti inilah pola yang terjadi di kehidupan nyata, sudah sejak lama kita bertahan hidup dengan pola seperti ini. Inilah yang dimaksud dengan pola event-driven.

Kita kembali ke dunia komputer. Tradisionalnya, programming dilakukan dengan cara yang imperatif. Agar komputer dapat melakukan sesuatu hal, kita perlu banyak menuliskan instruksi secara runtut beserta langkah-langkahnya. Komputer akan membaca kode dari atas ke bawah sesuai dengan urutan yang kita definisikan.

Dengan pola yang kaku seperti itu, kita akan sulit membangun program yang dapat menangani suatu kejadian. Karena kita saja tidak tahu kapan suatu kejadian akan terjadi, lantas bagaimana cara memberikan instruksi pada komputer? Lalu bagaimana solusinya? Berkaca dari dunia nyata, program komputer juga harus bekerja dengan pola event-driven. Syukurlah dengan Node.js kita dapat menerapkan pola tersebut dengan mudah.

Node.js menyediakan EventEmitter class yang merupakan member events core module:

const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();

Setiap instance dari EventEmitter akan memiliki fungsi on. Pada fungsi tersebut, kita dapat menentukan aksi berdasarkan sebuah kejadian. Contohnya seperti ini:
*/

const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

// fungsi yang akan dijalankan ketika event coffee-order terjadi
const makeCoffee = ({ name }) => {
  console.log(`Kopi ${name} telah dibuat!`);
};

const makeBill = ({ price }) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

// mendaftarkan fungsi makeCoffee sebagai listener event coffee-order
myEventEmitter.on("coffee-order", makeCoffee);
myEventEmitter.on("coffee-order", makeBill);

/* cara memberikan listener bisa dengan cara di atas, atau dengan cara dibawah ini : (sama saja)
const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
};

myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

*/

/*
Fungsi on menerima dua buah argumen, yang pertama adalah nama event dan yang kedua adalah listener atau fungsi yang akan dieksekusi ketika event terjadi. Dari kode di atas, jika terjadi event ‘coffee-order’, maka fungsi makeCoffee akan dijalankan.

Anda bebas menentukan nama event yang diberikan pada argumen fungsi on. Jika nama event lebih dari dua kata, latihan terbaiknya adalah memisahkannya dengan tanda garis (-) bukan menggunakan spasi.

Lantas bagaimana cara membangkitkan suatu event? Setiap instance dari EventEmitter juga memiliki fungsi emit() yang berguna untuk membangkitkan event.

*/

// Memicu event 'coffee-order' terjadi.
// jika hanya 1 function yang ada pada event "coffee-order", maka parameternya hanya 1
myEventEmitter.emit("coffee-order", { name: "Tubruk" });

// jika ada 2 listener/function yang ada pada event coffe-order (yaitu makeCoffee & makeBill)
myEventEmitter.emit("coffee-order", { name: "Tubruk", price: 15000 });
/**
 * output:
 * Kopi Tubruk telah dibuat!
 */
