import React, {useEffect, useState, useCallback} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import CustomHeader from './../../components/CustomHeader';
import SearchBar from './../../components/SearchBar';

const CategoryDetailScreen = (props) => {
  const {bookData, navigation} = props;
  const {category} = navigation.state.params;
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  const filterByCategory = () => {
    setIsLoading(true);
    let filteredData = [];
    for(let i=0;i<bookData.length;i++){
      let item = bookData[i];
      if(item.author_country ==category || item.author_name ==category || item.genre ==category){
        filteredData.push(item);
      }
    }
    setFilteredData(filteredData);
    setSearchedData(filteredData)
    setIsLoading(false);
  };

  const filterSearchData = (text) => {
    if (text == '') {
      setSearchedData(filteredData);
      return;
    }
    let searchedFilteredData = [];
    for (let i = 0; i < filteredData.length; i++) {
      let item = filteredData[i];
      if (item.author_country.includes(text) || item.author_name.includes(text) || item.genre.includes(text)) {
        searchedFilteredData.push(item);
      }
    }
    setSearchedData(searchedFilteredData);
  };

  useEffect(() => {
    filterByCategory(bookData, category);
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.categoryStyle}>
        <Image style={styles.imageStyle} source={{uri: item.image_url}} resizeMode={'contain'} />
        <Text style={styles.categoryNameTextStyle}>{item.book_title}</Text>
        <Text style={styles.categoryTextStyle}>{item.author_name}</Text>
        <Text style={styles.categoryTextStyle}>{item.publisher}</Text>
        <Text style={styles.categoryTextStyle}>Genre: {item.genre}</Text>
        <Text style={styles.categoryTextStyle}>Sold: {item.sold_count}</Text>
      </View>
    );
  };
  const keyExtractor = useCallback((item) => item.id.toString());

  return (
    <View style={styles.container}>
      <CustomHeader
        showBackIcon
        onBackIconPress={() => {
          navigation.goBack();
        }}
        numberOfLines={1}
        titleText={category}
      />
      <View style={styles.bodyContainer}>
        {isLoading ? (
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
            <View style={styles.categoryBodyContainer}>
              {searchedData && searchedData.length>0 ? (<FlatList
                bounces={false}
                showsVerticalScrollIndicator={false}
                extraData={searchedData}
                data={searchedData}
                keyExtractor={keyExtractor}
                renderItem={(item) => renderItem(item)}
                contentContainerStyle={styles.categoryContainerStyle}
              />):(
                <View style={styles.bodyContainer}>
                  <Text style={styles.noDataText}>
                    {'No data available.'}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    bookData: state.CategoryReducer.bookData,
  };
};

export default connect(mapStateToProps, null)(CategoryDetailScreen);
