import { ListItem } from 'carbon-components-angular';
import {
    INGENIERIA_DE_SISTEMAS_NAME,
    LTA_NAME,
    TUDAI_NAME,
} from '../catedras/interfaces';

export const CAREERS_DROPDOWN_ITEMS: ListItem[] = [
  {
    content: 'Todas',
    value: 'Todas',
    selected: true,
  },
  {
    content: INGENIERIA_DE_SISTEMAS_NAME,
    value: INGENIERIA_DE_SISTEMAS_NAME,
    selected: false,
  },
  { content: TUDAI_NAME, value: TUDAI_NAME, selected: false },
  { content: LTA_NAME, value: LTA_NAME, selected: false },
];
