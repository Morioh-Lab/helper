
import { randomBytes, scryptSync, createCipheriv } from 'crypto';

export default (input, secret) => {
    let iv = randomBytes(16);
    const key = scryptSync(secret, 'salt', 32);
    let cipher = createCipheriv('aes-256-cbc', key, iv);
    // let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secret), iv);
    let encrypted = cipher.update(input);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}