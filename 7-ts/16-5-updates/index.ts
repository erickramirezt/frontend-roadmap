// ts 5.x updates

// ts is actively maintained and updated by microsoft. in version 5.x a lot of utility and
// quality of life updates were made

// template literal types
// template literal types now allows us to create more precise types using template
// literals. we can define custom types that depend on the actual values of strings at
// compile time

// example
type Color = "red" | "green" | "blue";
type HexColor<T extends Color> = `#${string}`;

let myColor: HexColor<"blue"> = "#ff0000";

// index signature labels
// index signatures labels allows us to label index signatures using computed property
// names. it helps in providing more descriptive type information when working with
// dynamic objects

// example
type DynamicObject = { [key: `dynamic_${string}`]: string };

let dynamicObject: DynamicObject = {
  dynamic_key: "foo",
};
