import {StyleSheet, Dimensions} from 'react-native';
import scale, {verticalScale} from './../../utils/Scale';
import * as CONST from './../../utils/Constants';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyContainer: {
    flex: 1,
    justifyContent:'center'
  },
  categoryBodyContainer: {
    flex: 1,
    justifyContent:'center'
  },
  noDataText: {
    fontSize: scale(18),
    textAlign: 'center',
  },
  categoryStyle: {
    marginBottom: verticalScale(20),
    backgroundColor: CONST.WHITE_COLOR,
    borderRadius: scale(10),
    justifyContent:'center',
    alignItems: 'center',
    paddingVertical: scale(10)
  },
  imageStyle: {
    width: width-scale(100),
    height: height/2.5,
  },
  categoryNameTextStyle: {
    fontSize: scale(16),
    fontWeight: 'bold',
    marginTop:scale(5)
  },
  categoryTextStyle: {
    fontSize: scale(14),
    marginTop:scale(5)
  },
  categoryContainerStyle: {
    paddingVertical: 5
  }
});
