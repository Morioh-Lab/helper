import { createHash } from 'crypto';

export default (s: string) => createHash('sha256').update(s, 'utf8').digest('hex');