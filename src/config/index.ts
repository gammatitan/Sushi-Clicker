import PointerIcon from '../assets/pointer.png';
import FlameIcon from '../assets/flame.png';

export enum ShopItem {
  AutoClicker = 'AutoClicker',
  ScoreDoubler = 'ScoreDoubler',
}

export type PurchasesLookup = Record<ShopItem, number>;

export const SHOP_ITEMS = [
  {
    id: ShopItem.AutoClicker,
    name: 'Auto-clicker',
    pointsRequired: 10,
    image: PointerIcon,
  },
  {
    id: ShopItem.ScoreDoubler,
    name: 'x2 Score',
    pointsRequired: 50,
    image: FlameIcon,
  },
];
