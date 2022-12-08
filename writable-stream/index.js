/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require("fs");

const readableStream = fs.createReadStream("./input.txt", { highWaterMark: 15 });

const writableStream = fs.createWriteStream("output.txt");

readableStream.on("readable", () => {
  writableStream.write(`${readableStream.read()}\n`);
});

readableStream.on("end", () => {
  writableStream.end("Stop");
});
