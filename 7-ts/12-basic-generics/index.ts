// ts basic generics

// generics allow creating 'type-variables' which can be used to create classes, functions
// and type aliases that don't need to explicitly specify the type when used
// generics makes it easier to write reusable code

// functions
// generics with functions help make more generalized methods which more accurately
// represent the types used and returned

// example
function craetePair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(craetePair<string, number>("hello", 42));

// ts can also infer the type of the generic parameter from the function parameters

// classes
// generics can be used to create generalized classes, like map

// example
class NamedValue<T> {
  private _value: T | undefined;

  public constructor(private _name: string) {}

  public setValue(value: T): void {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this._name}: ${this._value}`;
  }
}

let value = new NamedValue<string>("my value");
value.setValue("hello");
console.log(value.toString()); // my value: hello

// ts can also infer the type of the generic parameter if it's used in a constructor
// parameter

// type aliases
// generics in type aliases allow creating types that are more reusable

// example
type Wrapped<T> = { value: T };
const wrapped: Wrapped<string> = { value: "hello" };

// this also works with interfaces with the following syntax: interface Wrapped<T> { ... }

// default value
// generics can be assigned default values which apply if no other value is specified or
// inferred

// example
class NamedValue1<T = string> {
  private _value: T | undefined;

  public constructor(private _name: string) {}

  public setValue(value: T): void {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this._name}: ${this._value}`;
  }
}

let value1 = new NamedValue1("my value");
value1.setValue("hello");
console.log(value1.toString()); // my value: hello

// extends
// constraints can be added to generics to limit what's allowed. the constraint make it
// possible to rely on a more specific type when using the generic type

// example
function createLoggedPair<S extends string | number, T extends string | number>(
  v1: S,
  v2: T
): [S, T] {
  console.log(`created pair: ${v1}, ${v2}`);
  return [v1, v2];
}

// this can be combined with default values