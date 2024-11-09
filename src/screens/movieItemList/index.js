import React, {useContext, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {fetchMovies} from '../../utilities/AppApi';
import {ScrollView} from '../../components/scrollView';
import {MovieList} from '../../components/listComponent';
import {fontFamily} from '../../constants';
import {width, height, totalSize} from 'react-native-dimension';
import {Spacer} from '../../components/spacer';

const MovieItemList = ({navigation}) => {
  const {
    movies,
    setMovies,
    searchTerm,
    setSearchTerm,
    isGridView,
    setIsGridView,
  } = useContext(AppContext);

  useEffect(() => {
    const loadMovies = async () => {
      const movieData = await fetchMovies(searchTerm || 'star');
      setMovies(movieData);
    };
    loadMovies();
  }, [searchTerm]);

  const hasMovies = movies && movies.length > 0;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Movies"
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
        style={styles.searchInput}
        placeholderTextColor={'#777'}
      />
      <Spacer isSmall />
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => setIsGridView(!isGridView)}>
        <Text style={styles.buttonText}>
          {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
        </Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.favoriteListWrapper}>
          <Spacer />
          <Text style={styles.favoriteListTitle}>All Movies</Text>
          <Spacer isTiny />
          <MovieList movies={movies} navigation={navigation} isHorizontal />
        </View>
        {hasMovies ? (
          <MovieList
            movies={movies}
            navigation={navigation}
            isGridView={isGridView}
          />
        ) : (
          <Text style={styles.loadingText}>Loading movies...</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    borderBottomWidth: 1,
    marginBottom: height(1),
    paddingLeft: width(3),
    paddingRight: width(3),
    fontFamily: fontFamily.appTextRegular,
  },
  loadingText: {
    marginTop: height(2),
    textAlign: 'center',
    fontSize: totalSize(1.7),
    color: '#777',
    fontFamily: fontFamily.appTextMedium,
  },
  favoriteListWrapper: {
    marginBottom: height(1),
  },
  favoriteListTitle: {
    fontSize: totalSize(2),
    fontFamily: fontFamily.appTextBold,
    color: '#000',
    marginHorizontal: width(4),
  },
  buttonWrapper: {
    backgroundColor: '#0066b2',
    paddingVertical: height(1.2),
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: fontFamily.appTextSemiBold,
  },
});

export default MovieItemList;
