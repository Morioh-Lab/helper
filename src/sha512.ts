import { createHash } from 'crypto';

export default (s) => createHash('sha512').update(s, 'utf8').digest('hex');