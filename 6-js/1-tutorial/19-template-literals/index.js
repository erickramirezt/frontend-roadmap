// js template literals

// synonyms
// template literals
// template strings
// string templates
// back-tics syntax

// back-tics syntax
// template literals use back-tics (``) rather than the quotes ("") to define a string

// example
let text = `hello world`

// quotes inside strings

// with template literals, you can use quotes inside strings

// example
text = `He's often called "Johnny"`

// multiline strings
// template literals allows multiline strings

// example
text =
    `The quick
brown fox
jumps over
the lazy dog`

// interpolation
// template literals providean easy way to interpolate variables and expressions into 
// strings
// the method is called interpolation
// the syntax is 
// ${...}

// variable substitutions
// template literals allow variables in strings

// example
let firstName = `John`
let lastName = `Doe`

text = `Welcome ${firstName}, ${lastName}`

// automatic substitution
// template literal allow expressions in strings

// example
let price = 10
let VAT = 0.25

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`

// html templates

// example
let header = "Templates Literals"
let tags = ["template literals", "javascript", "es6"]

let html = `<h2>${header}</h2><ul>`
for (const x of tags) {
    html += `<li>${x}</li>`
}
html += `</ul>`

// browser support
// template literals is an es6 feature
// it is supported in all modern browsers