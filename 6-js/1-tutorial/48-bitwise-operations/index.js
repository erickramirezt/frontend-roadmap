// js bitwise operations

// js bitwise operatiors

// operator     name    description
// &            AND     sets each bit to 1 if both bits are 1
// |            OR      sets each bit to 1 if one of two bits is 1
// ^            XOR     sets each bit to 1 if only one of two bits is 1
// ~            NOT     inverts all the bits
// <<           Zero    left shift shifts left by pushing zeros in from the right and let the leftmost bits fall off
// >>           Signed  right shift shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// >>>          Zero    right shift shifts right by pushing zeros in from the left, and let the rightmost bits fall off

// examples

// operation    result      same as     result
// 5 & 1        1           0101 & 0001 0001
// 5 | 1        5           0101 | 0001 0101
// 5 ^ 1        4           0101 ^ 0001 0100
// ~ 5          -6          ~0101       1010
// 5 << 1       10          0101 << 1    1010
// 5 >> 1       2           0101 >> 1    0010
// 5 >>> 1      2           0101 >>> 1   0010

// js uses 32 bits bitwise operands
// js stores numbers as 64 bits floating point numbers, but all bitwise operations are 
// performed on 32 bits binary numbers
// before a bitwise operation is performed, js converts numbers to 32 bits signed integers
// after the bitwise operation is performed, the result is converted back to 64 bits js 
// numbers

// the examples above uses 4 bits unsigned binary numbers. because of this ~ 5 returns 10
// since js uses 32 bit signed integers, it will not return 10. it will return -6
// 00000000000000000000000000000101 (5)
// 11111111111111111111111111111010 (~5 = -6)
// a signed integer uses the leftmost bit as the minus sign

// js bitwise and
// when a bitwise and is performed on a pair of bits, it returns 1 if both bits are 1

// one bit example
// operation
// 0 & 0       0
// 0 & 1       0
// 1 & 0       0
// 1 & 1       1

// 4 bit example
// operation
// 1111 & 0000 0000
// 1111 & 0001 0001
// 1111 & 0010 0010
// 1111 & 0011 0100

// js bitwise or
// when a bitwise or is performed on a pair of bits, it returns 1 if one of the bits are 1:

// one bit example
// operation
// 0 | 0       0
// 0 | 1       1
// 1 | 0       1
// 1 | 1       1

// 4 bit example
// operation
// 1111 | 0000 1111
// 1111 | 0001 1111
// 1111 | 0010 1111
// 1111 | 0011 1111

// js bitwise xor
// when a bitwise xor is performed on a pair of bits, it returns 1 if one of the bits are 1, 
// but not both

// one bit example
// operation
// 0 ^ 0       0
// 0 ^ 1       1
// 1 ^ 0       1
// 1 ^ 1       0

// 4 bit example
// operation
// 1111 ^ 0000 1111
// 1111 ^ 0001 1110
// 1111 ^ 0010 1101
// 1111 ^ 0100 1011

// js bitwise and
// bitwise and returns 1 if both bits are 1

// decimal     binary
// 5           00000000000000000000000000000101
// 1           00000000000000000000000000000001
// 5 & 1       00000000000000000000000000000001 (1)

// example
let x = 5 & 1;

// js bitwise or
// bitwise or returns 1 if one of the bits are 1

// decimal     binary
// 5           00000000000000000000000000000101
// 1           00000000000000000000000000000001
// 5 | 1       00000000000000000000000000000101 (5)

// example
x = 5 | 1;

// js bitwise xor
// bitwise xor returns 1 if one of the bits are 1, but not both

// decimal     binary
// 5           00000000000000000000000000000101
// 1           00000000000000000000000000000001
// 5 ^ 1       00000000000000000000000000000100 (4)

// example
x = 5 ^ 1;

// js bitwise not

// decimal     binary
// 5           00000000000000000000000000000101
// ~ 5         11111111111111111111111111111010 (-6)

// example
x = ~ 5;

// js bitwise left shift
// this a zero fill left shift. one or more zero bits are pushed in from the right, and the
// leftmost bits fall off

// decimal     binary
// 5           00000000000000000000000000000101
// 5 << 1      00000000000000000000000000001010 (10)

// example
x = 5 << 1;

// js bitwise right shift
// this is a signed right shift. copies of the leftmost bit are pushed in from the left, and
// the rightmost bits fall off

// decimal     binary
// -5          11111111111111111111111111111011
// -5 >> 1     11111111111111111111111111111101 (-3)

// example
x = -5 >> 1;

// js bitwise zero fill right shift
// this is a zero fill right shift. one or more zero bits are pushed in from the left, and
// the rightmost bits fall off

// decimal     binary
// 5           00000000000000000000000000000101
// 5 >>> 1     00000000000000000000000000000010 (2)

// example
x = 5 >>> 1;

// binary numbers
// binary numbers with only one bit set are easy set are easy to understand

// binary representation                decimal value
// 00000000000000000000000000000001     1
// 00000000000000000000000000000010     2
// 00000000000000000000000000000100     4
// 00000000000000000000000000001000     8
// 00000000000000000000000000010000     16
// 00000000000000000000000000100000     32
// 00000000000000000000000001000000     64

// setting a few more bits reveals the binary pattern

// binary representation                decimal value
// 00000000000000000000000000000101     5 (1 + 4)
// 00000000000000000000000000001101     13 (1 + 4 + 8)
// 00000000000000000000000000011101     29 (1 + 4 + 8 + 16)

// js binary numbers are stored in two's complement format
// this means that a negative number is the bitwise not of the number plus 1

// binary representation                decimal value
// 00000000000000000000000000000101     5
// 11111111111111111111111111111010     -5
// 00000000000000000000000000000110     6
// 11111111111111111111111111111001     -6
// 00000000000000000000000000101000     40
// 11111111111111111111111111011000     -40

// converting decimal to binary

// example
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

// converting binary to decimal

// example
function bin2dec(bin) {
    return parseInt(bin, 2).toString(10);
}