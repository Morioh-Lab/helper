import sha256 from './sha256';
import sha512 from './sha512';
export default (s) => sha256(sha512(s));