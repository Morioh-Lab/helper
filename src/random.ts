
// const { randomBytes } = require('crypto');

import { randomBytes } from 'crypto';


export default (bytes = 8) => randomBytes(bytes).toString('hex');
