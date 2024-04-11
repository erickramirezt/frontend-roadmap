// ts classes

// ts adds types and visibility modifiers to js classes

// members: types
// the member of a class (properties & methods) are typed using type annotations,
// similar to variables

// example
class Person {
  name: string;
}

const person = new Person();
person.name = "John Doe";

// members: visibility
// class members also be given special modifiers which affect visibility

// there are three main visibility modifiers in ts:
// - public: the default modifier, public members are accessible from anywhere
// - private: private members are only accessible from within the class
// - protected: protected members are only accessible from within the class and subclasses

// example
class Person1 {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person1 = new Person1("John Doe");
console.log(person1.getName()); // person1.name is not accessible

// parameter properties
// ts provides a convenient way to define class members in the constructor, by adding a
// visibility modifier to the constructor parameter

// example
class Person2 {
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person2 = new Person2("John Doe");
console.log(person2.getName());

// readonly
// similar to arrays, the readonly keyword can prevent class members from being modified

// example
class Person3 {
  public constructor(private readonly name: string) {}

  public getName(): string {
    return this.name;
  }
}

const person3 = new Person3("John Doe");
console.log(person3.getName());

// inheritance: implements
// interfaces can be used to define the type a class must follow through the implements
// keyword

// example
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

// a class can implement multiple interfaces by listing each one after implements,
// separated by comma like so: class Rectangle implements Shape, Colored {}

// inheritance: extends
// classes can extend other classes using the extends keyword. a class can only extends
// one other class

// example
interface Shape1 {
  getArea: () => number;
}

class Rectangle1 implements Shape1 {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle1 {
  public constructor(side: number) {
    super(side, side);
  }

  // getArea() is inherited from Rectangle1
}

// override when a class extends another class, it can replace the members of the parent
// class with its own using the override keyword
// new versions of ts allow explicitly marking this with the override keyword

// example
interface Shape2 {
  getArea: () => number;
}

class Rectangle2 implements Shape2 {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return `Rectangle: ${this.width}x${this.height}`;
  }
}

class Square1 extends Rectangle2 {
  public constructor(side: number) {
    super(side, side);
  }

  // this toString() overrides the one from Rectangle2
  public override toString(): string {
    return `Square: ${this.width}x${this.height}`;
  }
}

// By default the override keyword is optional when overriding a method, and only helps
// to prevent accidentally overriding a method that does not exist. use the setting
// "noImplicitOverride": true in tsconfig.json to make it mandatory

// abstract classes
// classes can be written in a way that allows them to be used as a base class for other
// classes without having to implement all the members. this is done by using the abstract
// keyword. members that are left unimplemented also use the abstract keyword

// example
abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangle3 extends Polygon {
  public constructor(
    protected readonly width: number,
    protected readonly height: number
  ) {
    super();
  }

  public override getArea(): number {
    return this.width * this.height;
  }
}

// abstract classes cannot be directly instantiated, as they do not have all their members
// implemented