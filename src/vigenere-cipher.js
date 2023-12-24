const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const messageUpperCase = message.toUpperCase();
    const keyUpperCase = key.toUpperCase();
    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const charCode = messageUpperCase.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const shift = keyUpperCase.charCodeAt(keyIndex % key.length) - 65;
        const encryptedCharCode = ((charCode - 65 + shift) % 26) + 65;
        encryptedMessage += String.fromCharCode(encryptedCharCode);
        keyIndex++;
      } else {
        encryptedMessage += message[i];
      }
    }

    return this.isDirect ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    const encryptedMessageUpperCase = encryptedMessage.toUpperCase();
    const keyUpperCase = key.toUpperCase();
    let decryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const charCode = encryptedMessageUpperCase.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const shift = keyUpperCase.charCodeAt(keyIndex % key.length) - 65;
        const decryptedCharCode = ((charCode - 65 - shift + 26) % 26) + 65;
        decryptedMessage += String.fromCharCode(decryptedCharCode);
        keyIndex++;
      } else {
        decryptedMessage += encryptedMessage[i];
      }
    }

    return this.isDirect ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
