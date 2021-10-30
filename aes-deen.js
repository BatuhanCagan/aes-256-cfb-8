'use strict';

const { Console } = require('console');
const crypto = require('crypto');

const algorithm = 'aes-256-cfb8';


function encryptText(keyStr, text) {
  const hash = crypto.createHash('sha256');
  hash.update(keyStr);
  const keyBytes = hash.digest();

  const iv = 'YsiebTh0Sjr8dZKo'; //IV ADRESİ YAZ
  const cipher = crypto.createCipheriv(algorithm, keyBytes, iv);
  console.log('IV Değeri:', iv);
  let enc = [iv, cipher.update(text, 'utf8')];
  enc.push(cipher.final());
  return enc;  //METİN
}

function decryptText(keyStr, text) {
  const hash = crypto.createHash('sha256');
  hash.update(keyStr);
  const keyBytes = hash.digest();

  const contents = Buffer.from(text, 'base64');
  const iv = 'YsiebTh0Sjr8dZKo'; //IV ADRESİ YAZ
  const textBytes = contents.slice();
  const decipher = crypto.createDecipheriv(algorithm, 'rnop3TnHwJ7P9zzLb0Z3qUjfhu1Cx9bW', iv);  //KEY YAZ
  let res = decipher.update(textBytes, '', 'utf8');
  res += decipher.final('utf8');
  return res;
} 

const Key = 'rnop3TnHwJ7P9zzLb0Z3qUjfhu1Cx9bW';
console.log('Key:', Key)

const encrypted = encryptText(' KEY ', ' SİFRELENECEK '); // KEY VE ŞİFRELENECEK YAZ
console.log('Şifrelenmiş: ', encrypted);

const sifrelen = 'p4psltayVQ7eTjVEfXVhJh2KMl3BCeHj8eJz7OvWjpNVLbwsqDeIp492KHNqlD54w/FTTFLIYxb4ABTEZfCj3r7uT4PDWWZMjhQ='; //METİN YAZ

const decrypted = decryptText('rnop3TnHwJ7P9zzLb0Z3qUjfhu1Cx9bW', sifrelen);  //KEY YAZ
console.log('Şifresi Çözülmüş: ', decrypted);