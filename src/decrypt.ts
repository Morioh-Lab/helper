
import { scryptSync, createDecipheriv } from 'crypto';

export default (input, secret) => {
    let a = input.split(':');
    let iv = Buffer.from(a[0], 'hex');
    const key = scryptSync(secret, 'salt', 32);
    let decipher = createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(Buffer.from(a[1], 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}