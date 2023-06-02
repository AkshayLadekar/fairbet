import aes from "crypto-js/aes";
import encHex from "crypto-js/enc-hex";
import padZeroPadding from "crypto-js/pad-zeropadding";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Encryption: (string) => {
    // the key and iv should be 32 hex digits each, any hex digits you want, but it needs to be 32 on length each
    let key = encHex.parse("0123456789abcdef0123456789abcdef");
    let iv = encHex.parse("abcdef9876543210abcdef9876543210");

    // encrypt the message
    let encrypted = aes
      .encrypt(string, key, { iv: iv, padding: padZeroPadding })
      .toString();

    return encrypted;

    //Encrypted string
  },
  Decryption: (encriptedsString) => {
    const CryptoJS = require("crypto-js");
const AES = require("crypto-js/aes");
const Hex = require("crypto-js/enc-hex");
const ZeroPadding = require("crypto-js/pad-zeropadding");
    //console.log("========>1", encriptedsString);
    // Encrypted string
    let encrypted = encriptedsString;

    // Key and IV
    let key = Hex.parse("0123456789abcdef0123456789abcdef");
    let iv = Hex.parse("abcdef9876543210abcdef9876543210");

    // Decrypt the message
    let decrypted = AES.decrypt(encrypted, key, {
      iv: iv,
      padding: ZeroPadding,
    }).toString(CryptoJS.enc.Utf8);
    return decrypted;
  },
};
