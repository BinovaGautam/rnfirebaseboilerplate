import {StyleSheet, Platform,Dimensions} from 'react-native';
import {strings} from '../assets'

const {width} = Dimensions.get('screen')
const {dColor} = strings
export const CELL_SIZE = width/7;
export const CELL_BORDER_RADIUS = 5;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = dColor;
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const styles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 3,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: dColor,
    backgroundColor: '#fff',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    minHeight: 800,
    padding: 20,
  },
  title: {
    paddingTop: 50,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 30,
    borderRadius: 5,
    height: 50,
    backgroundColor: dColor,
    elevation:6,
    justifyContent: 'center',
    margin:0,
    marginBottom: 100,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 14,
    letterSpacing:1,
    color: '#fff',
    fontWeight: '700',
  },
});

export default styles;
