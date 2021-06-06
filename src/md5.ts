import { createHash } from 'crypto';

export default (...args: string[]) => createHash('md5').update(args.join(''), 'utf8').digest('hex');