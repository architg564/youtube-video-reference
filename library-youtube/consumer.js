// Test 1: Root import (should work with both main and exports)
import { greet } from '@architg564/first';

// Test 2: Subpath import (only works with exports)
import { capitalize } from '@architg564/first/utils';

console.log(greet('world'));
console.log(capitalize('hello'));