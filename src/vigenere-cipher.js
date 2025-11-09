const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
  this.direct = direct;
}
  encrypt(message, key) {

  if (message === undefined || key === undefined){
      throw new Error('Incorrect arguments!');
  }

  message = message.toUpperCase();
  key = key.toUpperCase();
  
  let res = '';
  let keyPos = 0;
  
  for (let i = 0; i < message.length; i++){
    const char = message[i];
    
    if (char >= 'A' && char <= 'Z'){
      const keyChar = key[keyPos % key.length];
      const shift = keyChar.charCodeAt(0) - 65;
      const newChar = String.fromCharCode(
        ((char.charCodeAt(0) - 65 + shift) % 26) + 65
      );
      res += newChar;
      keyPos++;
    } else {
      res += char;
    }
  }
  
  return this.direct ? res : res.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {

  if (encryptedMessage === undefined || key === undefined){
      throw new Error('Incorrect arguments!');
  }  

  encryptedMessage = encryptedMessage.toUpperCase();
  key = key.toUpperCase();
  
  let res = '';
  let keyPos = 0;
  
  for (let i = 0; i < encryptedMessage.length; i++){
    const char = encryptedMessage[i];
    
    if (char >= 'A' && char <= 'Z'){
      const keyChar = key[keyPos % key.length];
      const shift = keyChar.charCodeAt(0) - 65;
      const newChar = String.fromCharCode(
        ((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65
      );
      res += newChar;
      keyPos++;
    } else {
      res += char;
    }
  }
  
  return this.direct ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
