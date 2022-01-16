import { IThemes } from '../global.model';

const themeConfiguration: Array<IThemes> = [
  {
    backgroundColor: '#fff',
    buttonColor: '#ffc107',
    headingColor: '#673ab7',
    label: 'Deep Purple & Amber',
    value: 'deeppurple-amber',
    type: 'light'
  },
  {
    backgroundColor: '#fff',
    buttonColor: '#ff4081',
    headingColor: '#3f51b5',
    label: 'Indigo & Pink',
    value: 'indigo-pink',
    type: 'light'
  },
  {
    backgroundColor: '#303030',
    buttonColor: '#607d8b',
    headingColor: '#e91e63',
    label: 'Pink & Blue Grey',
    value: 'pink-bluegrey',
    type: 'dark'
  },
  {
    backgroundColor: '#303030',
    buttonColor: '#4caf50',
    headingColor: '#9c27b0',
    label: 'Purple & Green',
    value: 'purple-green',
    type: 'dark'
  }
];

export default themeConfiguration;
