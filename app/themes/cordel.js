import {
  brown50, grey50, grey600, blue500, blue400, blue100, fullWhite
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';

export default {
  fontFamily: 'Roboto, sans-serif',
  appBar: {
    //height: 50
  },
  toolbar: {
    color: brown50
  },
  palette: {
    primary1Color: fullWhite,
    primary2Color: brown50,
    primary3Color: grey600,
    accent1Color: blue500,
    accent2Color: blue400,
    accent3Color: blue100,
    textColor: fullWhite,
    alternateTextColor: '#303030',
    canvasColor: '#303030',
    borderColor: fade(fullWhite, 0.3),
    disabledColor: fade(fullWhite, 0.3),
    pickerHeaderColor: fade(fullWhite, 0.12),
    clockCircleColor: fade(fullWhite, 0.12)
  }
};
