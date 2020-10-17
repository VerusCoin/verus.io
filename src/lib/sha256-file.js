import CryptoJS from 'crypto-js';

export const handleFile = async (file) => {
  let sha256 = CryptoJS.algo.SHA256.create();
  const sliceSize = 10_485_760;
  let start = 0;

  while (start < file.size) {
    const slice = await readSlice(file, start, sliceSize);
    const wordArray = CryptoJS.lib.WordArray.create(slice);
    sha256 = sha256.update(wordArray);
  }
  sha256.finalize;
  return sha256._hash.toString();
};

const readSlice = async (file, start, size) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    const slice = file.slice(start, start + size);
    fileReader.onload = () => resolve(new Uint8Array(fileReader.result));
    fileReader.onerror = reject;
    fileReader.readAsArrayBuffer(slice);
  });
};
