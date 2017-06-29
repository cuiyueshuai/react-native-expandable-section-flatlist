/**
 * Created by cui on 12/2/16.
 */

import { Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const _colorSet = {
  mainColor: '#38568d',
  normalFontColor: '#222',
  weakFontColor: '#AEAEAE',
  pageBackground: '#E7E7E7',
  lineColor: '#E4E4E4',
  grayColor: '#c7d2da',
  tabInacColor: '#929292',
  tabBGColor: '#F9F9F9',
  orangeColor: '#f59c1b',
  greenColor: '#86c036',
  weakBlueColor: '#5bc0de',
  redColor: '#d9534f'
};

const _fontSet = {
  bSize: 16,
  fsize: 15,
  mSize: 13,
  xSize: 11
};

const StyleDict = {
  colorSet: _colorSet,
  fontSet: _fontSet,
  windowW: WINDOW_WIDTH,
  windowH: WINDOW_HEIGHT
};

export default StyleDict;
