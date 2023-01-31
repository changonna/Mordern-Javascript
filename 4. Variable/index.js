const n = null;

const u = undefined;

const c = n ?? 'c';
console.log(c);

const d = u ?? 'd';
console.log(d);

const e = '' ?? 'e';
console.log(`e: ${e}`);

const f = 'node' ?? 'f';
console.log(`f: ${f}`);



