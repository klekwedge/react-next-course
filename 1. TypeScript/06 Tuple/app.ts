const a: [number, string, number] = [0, 'a', 1]

a.push(1);
// a[3] error

a.map(s => {
  switch (typeof s) {
    case 'string':
      break
  }
})

// const [b, c, d] = a
const [b, ...d] = a

a[1].toLowerCase();