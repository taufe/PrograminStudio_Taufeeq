import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MovieItemComponent } from '../../screens/movieItemList/component';
import { width } from 'react-native-dimension';

export const MovieList = ({ movies, navigation, isGridView, isHorizontal = false }) => {
  console.log('moive------', movies)
  const renderGridView = () => {
    const gridItems = [];
    for (let i = 0; i < movies.length; i += 2) {
      gridItems.push(
        <View style={styles.gridRow} key={i}>
          <TouchableOpacity onPress={() => navigation.navigate('MovieItemView', { movieId: movies[i].trackId })}>
            <MovieItemComponent movie={movies[i]} style={styles.gridItem} />
          </TouchableOpacity>
          {movies[i + 1] && (
            <TouchableOpacity onPress={() => navigation.navigate('MovieItemView', { movieId: movies[i + 1].trackId })}>
              <MovieItemComponent movie={movies[i + 1]} style={styles.gridItem} />
            </TouchableOpacity>
          )}
        </View>
      );
    }
    return gridItems;
  };

  return isGridView ? (
    <View>
      {renderGridView()}
    </View>
  ) : (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.trackId.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('MovieItemView', { movieId: item.trackId })}>
          <MovieItemComponent movie={item} isHorizontal={isHorizontal} isGridView={isGridView} />
        </TouchableOpacity>
      )}
      horizontal={isHorizontal}
      ListEmptyComponent={<Text>No results found</Text>}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={isHorizontal ? styles.horizontalListContainer : null}
    />
  );
};

const styles = StyleSheet.create({
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: width(48),
  },
  horizontalListContainer: {
    paddingLeft: 5,
  },
});


