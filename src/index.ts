import { calculateTotal, formatRupees } from './pricing';

const example = ['Apple', 'Banana'];
const total = calculateTotal(example);
console.log('Items:', example);
console.log('Total:', formatRupees(total));
