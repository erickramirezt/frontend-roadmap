// ts keyof

// keyof is a keyword in ts which is used to extract the key type from an object type

// keyof with explicit keys
// when used on an object type with explicit ekys, keyof creates a union type with those
// keys

// example
interface Person {
  name: string;
  age: number;
}
// keyof person here creates a union type of name and age, other strings will not be allowed
function printPersonProperty(person: Person, prop: keyof Person) {
  console.log(`${prop}: ${person[prop]}`);
}

const person5: Person = {
  name: "John Doe",
  age: 25,
};

printPersonProperty(person5, "name"); // name: John Doe

// keyof with index signatures
// keyof can also be used with index signatures to extract the index type

type StringMap = { [key: string]: unknown };
// keyof StringMap here creates a union type of string
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}
