import React, {useContext} from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {AppContext} from '../../context/AppContext';
import {TouchableOpacity} from 'react-native';
import {width, totalSize, height} from 'react-native-dimension';
import {fontFamily} from '../../constants';
import {Spacer} from '../../components/spacer';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MovieItemView = ({route, navigation}) => {
  const {movieId} = route.params;
  const {movies, favorites, addFavorite, removeFavorite} =
    useContext(AppContext);
  const movie = movies.find(item => item.trackId === movieId);
  const isFavorite = favorites.includes(movieId);

  return (
    <ScrollView>
      <View style={styles.heading}>
        <AntDesign
          color={'#000'}
          style={{paddingLeft: width(5)}}
          name="arrowleft"
          size={totalSize(2.7)}
          onPress={() => navigation.goBack()}
        />
      </View>
      {movie && (
        <View style={styles.card}>
          <Image source={{uri: movie.artworkUrl100}} style={styles.image} />
          <Spacer isSmall />
          <Text style={styles.cardTitle}>{movie.trackName}</Text>
          <Text style={styles.cardText}>{movie.primaryGenreName}</Text>
          <Text style={styles.price}>{movie.trackPrice}</Text>
          <Text style={styles.cardText}>{movie.longDescription}</Text>

          <TouchableOpacity
            onPress={() =>
              isFavorite
                ? removeFavorite(movie.trackId)
                : addFavorite(movie.trackId)
            }></TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default MovieItemView;

const styles = StyleSheet.create({
  heading: {
    backgroundColor: '#fff',
    paddingVertical: height(2),
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    width: width(92),
    marginHorizontal: width(4),
  },
  cardTitle: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: totalSize(1.5),
    color:'#312F37'
  },
  favoriteIcon: {
    position: 'absolute',
    right: 25,
    top: 25,
  },
  cardText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: totalSize(1.5),
    color:'#605D66'
  },
  price: {
    fontFamily: fontFamily.appTextBold,
    fontSize: totalSize(1.3),
    color: '#000',
  },
  image: {
    borderRadius: totalSize(1.2),
    width: 300,
    height: 300,
  },
});
