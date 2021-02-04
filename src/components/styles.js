import {StyleSheet} from 'react-native';
import scale, {verticalScale} from './../utils/Scale';
import * as CONST from './../utils/Constants';

const styles = StyleSheet.create({
  headerContainer: {
    height: verticalScale(40),
    alignSelf: 'stretch',
    justifyContent:'center',
    alignItems: 'center',
    paddingHorizontal: scale(30),
    backgroundColor: CONST.HEADER_COLOR,
  },
  backIconContainer: {
    position:'absolute',
    left: 0,
    height: verticalScale(40),
    justifyContent:'center',
    alignItems: 'center',
    width: scale(30),
  },
  backIconStyle: {
    resizeMode: 'cover',
    tintColor: CONST.GREY,
    height: scale(12),
    width: scale(10),
  },
  headerText: {
    fontSize: scale(20),
    fontWeight: 'bold',
    color: CONST.HEADER_TITLE_COLOR,
  },
  searchBar: {
    height: scale(50),
    alignSelf:'stretch',
    margin: scale(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'white'
  },
  input: {
    width: "100%",
    height: "100%",
    fontSize: 18,
    color: 'grey',
    paddingHorizontal: 20
  },
});

export default styles;
