// https://nodejs.org/api/os.html

import os from 'os';
import bytesToSize from './FreeMemory.mjs';

console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`Total Memory: ${bytesToSize(os.totalmem())}`);
console.log(`Free Memory: ${bytesToSize(os.freemem())}`);
console.log(`CPU Cores: ${os.cpus().length} cores`);