// js operator precedence

// operator precedence describes the order in which operations are performed in an 
// arithmetic expression
// multilplication and division have a higher precedence than addition and subtraction

// as in traditional mathematics, multiplication is done first
let x = 100 + 50 * 3;

// when using parentheses, the operations inside the parentheses are computed first
x = (100 + 50) * 3;

// operations with the same precedence are executed from left to right
x = 100 / 50 * 3;

// operator precedence values

// expressions in parentheses are computed before the rest of the expression function are
// executed before the result is used in the rest of the expression

// val      operator        description             example
// 18       ()              expression grouping     (3 + 4)
// 17       .               member access           person.name
// 17       []              member access           person["name"]
// 17       ?.              optional chaining       person?.name
// 17       ()              function call           myFunction()
// 16       new             create instance         new Date()

// increment operators
// postfix increments are executed before prefix increments

// 15       ++              postfix increment       i++
// 15       --              postfix decrement       i--
// 14       ++              prefix increment        ++i
// 14       --              prefix decrement        --i

// not operators

// 14       !               logical not             !(x==y)
// 14       ~               bitwise not             ~(5)

// unary operators

// 14       +               unary plus              +x
// 14       -               unary minus             -x
// 14       typeof          type                    typeof x
// 14       void            void                    void (0)
// 14       delete          delete                  delete x

// arithmetic operators

// 13       **              exponentiation          10 ** 2
// 12       *               multiplication          10 * 5
// 12       /               division                10 / 5
// 12       %               modulus                 10 % 5
// 11       +               addition                10 + 5
// 11       -               subtraction             10 - 5
// 11       +               string concatenation    "10" + "5"

// shift operators

// 10      <<              left shift              x << 2
// 10      >>              right shift             x >> 2
// 10      >>>             unsigned right shift    x >>> 2

// relational operators

// 9        in            property in object      "PI" in Math
// 9        instanceof    instance of object      instanceof Array

// comparison operators

// 9        <             less than               x < y
// 9        <=            less than or equal      x <= y
// 9        >             greater than            x > y
// 9        >=            greater than or equal   x >= y
// 8        ==            equal                   x == y
// 8        ===           strict equal            x === y
// 8        !=            not equal               x != y
// 8        !==           strict not equal        x !== y

// bitwise operators

// 7        &             bitwise and             x & y
// 6        ^             bitwise xor             x ^ y
// 5        |             bitwise or              x | y

// logical operators

// 4        &&            logical and             x && y
// 3        ||            logical or              x || y
// 3        ??            nullish coalescing      x ?? y

// conditional operator

// 2        ?:            ternary operator        ? "yes" : "no"

// assignment operators

// 2        =             assignment              x = y
// 2        :               colon                   {x:1}
// 2        +=            addition assignment     x += y
// 2        -=            subtraction assignment  x -= y
// 2        *=            multiplication assign   x *= y
// 2        **=           exponentiation assign   x **= y
// 2        /=            division assignment     x /= y
// 2        %=            modulus assignment      x %= y
// 2        <<=           left shift assignment   x <<= y
// 2        >>=           right shift assignment  x >>= y
// 2        >>>=          unsigned right shift    x >>>= y
// 2        &=            bitwise and assignment  x &= y
// 2        |=            bitwise or assignment   x |= y
// 2        ^=            bitwise xor assignment  x ^= y
// 2        &&=           logical and assignment  x &&= y
// 2        ||=           logical or assignment   x ||= y
// 2        =>            arrow function          x => y
// 2        yield         yield                   yield x
// 2        yield*        yield*                  yield* x
// 2        ...           spread                  ...x
// 1        ,             comma                   5, 6