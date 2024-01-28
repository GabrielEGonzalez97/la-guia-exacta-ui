import {
  COS_TYPE,
  DETERMINANT_2_x_2_TYPE,
  DETERMINANT_FIFTH_COLUMN_TYPE,
  DETERMINANT_FIFTH_ROW_TYPE,
  DETERMINANT_FIRST_COLUMN_TYPE,
  DETERMINANT_FIRST_ROW_TYPE,
  DETERMINANT_FOURTH_COLUMN_TYPE,
  DETERMINANT_FOURTH_ROW_TYPE,
  DETERMINANT_SARRUS_TYPE,
  DETERMINANT_SECOND_COLUMN_TYPE,
  DETERMINANT_SECOND_ROW_TYPE,
  DETERMINANT_THIRD_COLUMN_TYPE,
  DETERMINANT_THIRD_ROW_TYPE,
  MATRIZ_DIAGONAL,
  MATRIZ_TRIANGULAR_INFERIOR,
  MATRIZ_TRIANGULAR_SUPERIOR,
  SIN_TYPE,
  TAN_TYPE,
} from '../Parser/constants';
import { IDropdownWithFunctionToCall } from './interfaces';

export const DETERMINANTS_ITEMS: IDropdownWithFunctionToCall[] = [
  {
    content: '2x2',
    selected: false,
    functionToCall: `${DETERMINANT_2_x_2_TYPE}(`,
  },
  {
    content: 'Sarrus',
    selected: false,
    functionToCall: `${DETERMINANT_SARRUS_TYPE}(`,
  },
  {
    content: '1ra columna',
    selected: false,
    functionToCall: `${DETERMINANT_FIRST_COLUMN_TYPE}(`,
  },
  {
    content: '2da columna',
    selected: false,
    functionToCall: `${DETERMINANT_SECOND_COLUMN_TYPE}(`,
  },
  {
    content: '3ra columna',
    selected: false,
    functionToCall: `${DETERMINANT_THIRD_COLUMN_TYPE}(`,
  },
  {
    content: '4ta columna',
    selected: false,
    functionToCall: `${DETERMINANT_FOURTH_COLUMN_TYPE}(`,
  },
  {
    content: '5ta columna',
    selected: false,
    functionToCall: `${DETERMINANT_FIFTH_COLUMN_TYPE}(`,
  },
  {
    content: '1ra fila',
    selected: false,
    functionToCall: `${DETERMINANT_FIRST_ROW_TYPE}(`,
  },
  {
    content: '2da fila',
    selected: false,
    functionToCall: `${DETERMINANT_SECOND_ROW_TYPE}(`,
  },
  {
    content: '3ra fila',
    selected: false,
    functionToCall: `${DETERMINANT_THIRD_ROW_TYPE}(`,
  },
  {
    content: '4ta fila',
    selected: false,
    functionToCall: `${DETERMINANT_FOURTH_ROW_TYPE}(`,
  },
  {
    content: '5ta fila',
    selected: false,
    functionToCall: `${DETERMINANT_FIFTH_ROW_TYPE}(`,
  },
];

export const REDUCE_MATRIX_ITEMS: IDropdownWithFunctionToCall[] = [
  {
    content: 'Triangular superior',
    selected: false,
    functionToCall: `${MATRIZ_TRIANGULAR_SUPERIOR}(`,
  },
  {
    content: 'Triangular inferior',
    selected: false,
    functionToCall: `${MATRIZ_TRIANGULAR_INFERIOR}(`,
  },
  {
    content: 'Matriz diagonal',
    selected: false,
    functionToCall: `${MATRIZ_DIAGONAL}(`,
  },
];

export const TRIGONOMETRIC_FUNCTIONS_ITEMS: IDropdownWithFunctionToCall[] = [
  {
    content: 'Coseno',
    selected: false,
    functionToCall: `${COS_TYPE}(`,
  },
  {
    content: 'Seno',
    selected: false,
    functionToCall: `${SIN_TYPE}(`,
  },
  {
    content: 'Tangente',
    selected: false,
    functionToCall: `${TAN_TYPE}(`,
  },
];

export const LETTERS_TO_USE_AS_UNKNOWNS: string[] = ['a', 'b'];
