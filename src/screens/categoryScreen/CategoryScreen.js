import React, {useEffect, useState, useCallback} from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import CustomHeader from './../../components/CustomHeader';
import * as CategoryActions from './../../actions/CategoryActions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SearchBar from './../../components/SearchBar';

const CategoryScreen = (props) => {
  useEffect(() => {
    // Fetch categories
    props.fetchCategories();
  }, []);
  const {categories, isFetching} = props;
  const [searchedCategory, setSearchedCategory] = useState(categories);

  const filterSearchData = (text) => {
    if (text == '') {
      setSearchedCategory(categories);
      return;
    }
    let filteredData = [];
    for (let i = 0; i < categories.length; i++) {
      let item = categories[i];
      if (item.includes(text)) {
        filteredData.push(item);
      }
    }
    setSearchedCategory(filteredData);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.categoryStyle}
        onPress={() => {
          props.navigation.navigate('CategoryDetailScreen', {
            category: item,
          });
        }}>
        <Text style={styles.categoryTextStyle} numberOfLines={1}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  const keyExtractor = useCallback((item) => item);

  return (
    <View style={styles.container}>
      <CustomHeader titleText={'Category'} />
      <View style={styles.bodyContainer}>
        {isFetching ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <View style={styles.bodyContainer}>
            <SearchBar
              searchText={''}
              _search={(text) => {
                filterSearchData(text);
              }}
              backgroundColor={'white'}
              color={'grey'}
            />
            {searchedCategory && searchedCategory.length>0 ? (
              <FlatList
                bounces={false}
                extraData={searchedCategory}
                data={searchedCategory}
                keyExtractor={keyExtractor}
                renderItem={(item) => renderItem(item)}
                contentContainerStyle={styles.categoryContainerStyle}
              />
            ) : (
              <View style={styles.bodyContainer}>
                <Text style={styles.noDataText}>
                  {'No category available.'}
                </Text>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.CategoryReducer.categories,
    isFetching: state.CategoryReducer.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(CategoryActions.fetchCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
