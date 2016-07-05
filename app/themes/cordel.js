import {
  yellow500, yellow400, yellow50, blue500, blue400, blue50, fullWhite
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

export default {
  fontFamily: 'Roboto, sans-serif',
  appBar: {
    //height: 50
  },
  toolbar: {
    color: fullWhite
  },
  palette: {
    primary1Color: blue500,
    primary2Color: blue400,
    primary3Color: blue50,
    accent1Color: fullWhite,
    accent2Color: fullWhite,
    accent3Color: fullWhite,
    textColor: fullWhite,
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12)
  }
};
