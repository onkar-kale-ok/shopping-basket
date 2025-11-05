export type ItemName = 'apple' | 'banana' | 'melon' | 'lime';

const PRODUCT_PRICES: Record<ItemName, number> = {
  apple: 1,
  banana: 2,
  melon: 3,
  lime: 4,
};

export function calculateTotal(items: string[]): number {
  if (!items || items.length === 0) return 0;

  const counts = items.reduce<Record<string, number>>((acc, it) => {
    const name = (it || '').toString().trim().toLowerCase();
    if (!name) return acc;
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  // calculate using paise internally for integer accuracy
  let totalPaise = 0;

  const apples = counts['apple'] || 0;
  totalPaise += apples * Math.round(PRODUCT_PRICES.apple * 100);

  const bananas = counts['banana'] || 0;
  totalPaise += bananas * Math.round(PRODUCT_PRICES.banana * 100);

  const melons = counts['melon'] || 0;
  const melonsToPay = Math.ceil(melons / 2);
  totalPaise += melonsToPay * Math.round(PRODUCT_PRICES.melon * 100);

  const limes = counts['lime'] || 0;
  const limeGroups = Math.floor(limes / 3);
  const limesToPay = limes - limeGroups;
  totalPaise += limesToPay * Math.round(PRODUCT_PRICES.lime * 100);

  return totalPaise / 100;
}

export function formatRupees(value: number): string {
  const rupees = Math.floor(value);
  const paise = Math.round((value - rupees) * 100);
  const paiseStr = paise.toString().padStart(2, '0');
  return `Rs${rupees}.${paiseStr}`;
}
