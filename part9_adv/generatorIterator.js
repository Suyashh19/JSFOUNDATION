function* numbergenerator
() {
  yield 1
  yield 2
  yield 3  
}
let gen = numbergenerator();
let genTwo = numbergenerator();

console.log(numbergenerator());
console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);
//Generator function doesnt execute things at all at once ,but it actually creates the things on resume basis..