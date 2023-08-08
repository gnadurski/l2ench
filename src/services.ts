export interface EnchantingParameters {
  itemType: string;
  itemCost: number;
  desiredEnchant: string;
  scrollsPrices: {
    normalPrice: number;
    blessedPrice: number;
    destructionPrice: number;
    l2esPrice: number;
  };
  crystalsValue: number;
}
export interface EnchantmentResults {
  enchantmentCost: number;
  enchantmentPath: string;
}
const probabilityArmor = [
  1,
  1,
  1,
  1,
  2 / 3,
  1 / 3,
  0.25,
  0.2,
  0.166,
  0.143,
  0.125,
  0.112,
  0.1,
  0.091,
  0.083,
  0.077,
  0.071,
  0.066,
  0.0625,
  0.0588,
  0.055,
];

export function calculateEnchant({
  itemType,
  itemCost,
  desiredEnchant,
  scrollsPrices,
  crystalsValue,
}: EnchantingParameters): EnchantmentResults {
  const desired = parseInt(desiredEnchant);
  let cost = itemCost;
  let probability = 0.2;
  let path = "";

  for (let i = 0; i < desired; i++) {
    if (i < 3) cost = cost + scrollsPrices.normalPrice;
    else {
      switch (itemType) {
        case "100":
          if (i < 15) probability = 0.7;
          else probability = 0.35;
          break;
        case "101":
          if (i < 15) probability = 0.4;
          else probability = 0.2;
          break;
        case "102":
          probability = probabilityArmor[i + 1];
          break;
        case "103":
          probability = probabilityArmor[i];
          break;
        default:
          probability = 0.2;
          break;
      }
      let cheapestEnchant = Math.min(
        (cost + scrollsPrices.normalPrice) / probability -
          crystalsValue * (1 - probability),
        (cost + scrollsPrices.blessedPrice) / probability -
          itemCost * (1 - probability),
        cost + scrollsPrices.destructionPrice / probability,
        cost + scrollsPrices.l2esPrice
      );

      if (
        cheapestEnchant ===
        (cost + scrollsPrices.normalPrice) / probability -
          crystalsValue * (1 - probability)
      ) {
        path = `${path} ${i} to ${i + 1} use normal,`;
      } else if (
        cheapestEnchant ===
        (cost + scrollsPrices.blessedPrice) / probability -
          itemCost * (1 - probability)
      ) {
        path = `${path} ${i} to ${i + 1} use blessed,`;
      } else if (
        cheapestEnchant ===
        cost + scrollsPrices.destructionPrice / probability
      ) {
        path = `${path} ${i} to ${i + 1} use destruction,`;
      } else if (cheapestEnchant === cost + scrollsPrices.l2esPrice) {
        path = `${path} ${i} to ${i + 1} use L2es,`;
      }
      cost = cheapestEnchant;
    }
  }
  return { enchantmentCost: cost, enchantmentPath: path };
}
