const shout = str => str.toUpperCase()
const exclamation = excl => str => str + excl
const html = tag => str => `<${tag}>${str}</${tag}>`

// (f o g)(x) = f(g(x))
// (f o g o h)(x) = f(g(h(x)))
// compose(f, g, h)(x) = f(g(h(x)))

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)

module.exports = { shout, exclamation, html, compose }

// h, g, f x
// h(x)
// g(h(x))
// f(g(h(x)))

function composition(str) {
  // const oneExclamation = exclamation('!')
  // const h1 = html('h1')
  // return h1(oneExclamation(shout(str)))

  // let result = str
  // result = shout(result)
  // result = exclamation('!')(result)
  // result = html('h1')(result)
  // return result

  return compose(
    html('h1'),
    exclamation('!'),
    shout,
  )(str)
}
