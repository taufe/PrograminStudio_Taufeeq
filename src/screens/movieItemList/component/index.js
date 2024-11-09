import React, {useContext} from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {AppContext} from '../../../context/AppContext';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {totalSize, width, height} from 'react-native-dimension';
import {Spacer} from '../../../components/spacer';
import {fontFamily} from '../../../constants';

export const MovieItemComponent = ({movie, isHorizontal, isGridView}) => {
  const {favorites, addFavorite, removeFavorite} = useContext(AppContext);
  const isFavorite = favorites.includes(movie.trackId);

  return (
    <View style={{margin: 10, alignItems: 'center'}}>
      {isHorizontal && (
        <Image
          source={{uri: movie.artworkUrl100}}
          style={styles.imageHorizontal}
          defaultSource={require('./../../../assets/images/mainImage.png')}
        />
      )}
      {!isHorizontal && (
        <View
          style={[
            styles.card,
            {width: isGridView === false ? width(88) : width(41)},
            {height: isGridView === false ? height(35) : height(33)},
          ]}>
          {isGridView === false ? (
            <Image
              source={{uri: movie.artworkUrl100}}
              style={{
                width: width(80),
                height: height(20),
                borderRadius: totalSize(1.2),
              }}
              defaultSource={require('./../../../assets/images/mainImage.png')}
            />
          ) : (
            <Image
              source={{uri: movie.artworkUrl100}}
              style={styles.image}
              defaultSource={require('./../../../assets/images/mainImage.png')}
            />
          )}
          <Spacer isSmall />
          <Text style={styles.cardTitle}>{movie.trackName}</Text>
          <Text style={styles.cardText}>{movie.primaryGenreName}</Text>
          <Text style={styles.price}>{movie.collectionPrice}</Text>
          <TouchableOpacity
            style={styles.favoriteIcon}
            onPress={() =>
              isFavorite
                ? removeFavorite(movie.trackId)
                : addFavorite(movie.trackId)
            }>
            <AntDesign
              name={isFavorite ? 'heart' : 'hearto'}
              size={totalSize(2.6)}
              style={{color: isFavorite ? 'red' : 'gray'}}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: width(80),
  },
  cardTitle: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: totalSize(1.5),
  },
  favoriteIcon: {
    position: 'absolute',
    right: 25,
    top: 25,
  },
  cardText: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: totalSize(1.5),
  },
  price: {
    fontFamily: fontFamily.appTextBold,
    fontSize: totalSize(1.3),
    color: '#000',
  },
  imageHorizontal: {
    width: 70,
    height: 70,
    borderRadius: totalSize(10),
  },
  image:{
    width: width(32),
    height: 100,
    borderRadius: totalSize(1.2),
  }
});
