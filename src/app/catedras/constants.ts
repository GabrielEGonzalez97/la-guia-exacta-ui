import { ListItem } from 'carbon-components-angular';
import {
  FIRST_QUARTER_NAME,
  INGENIERIA_DE_SISTEMAS_NAME,
  SECOND_QUARTER_NAME,
  TUDAI_NAME,
} from './interfaces';

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
];

export const QUARTERS_DROPDOWN_ITEMS: ListItem[] = [
  {
    content: 'Todos',
    value: 'Todos',
    selected: true,
  },
  {
    content: FIRST_QUARTER_NAME,
    value: FIRST_QUARTER_NAME,
    selected: false,
  },
  { content: SECOND_QUARTER_NAME, value: SECOND_QUARTER_NAME, selected: false },
];
