import {writable} from 'svelte/store';
import themes from '../../themes.json';
import type {Theme} from '../interfaces/theme';

if (!themes[0]) {
  throw new Error('No theme available in themes configuration');
}

const defaultColorscheme: Theme = themes.find((t) => t.name === 'GruvboxDark') || themes[0];

export const theme = writable<Theme>(
  JSON.parse(localStorage.getItem('colorscheme') || JSON.stringify(defaultColorscheme)),
);

theme.subscribe((value) => {
  localStorage.setItem('colorscheme', JSON.stringify(value));
});
