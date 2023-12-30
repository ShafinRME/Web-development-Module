5 > 3; // true
5 < 3; // false
5 == '5'; // true (due to type coercion)
5 != '5'; // false (due to type coercion)
5 <= 5; // true
5 >= 3; // true
5 === '5'; // false (strict comparison)
5 !== '5'; // true (strict comparison)
(5 > 3) && (10 < 20); // true
(5 > 10) || (10 < 20); // true