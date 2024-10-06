import LinearGradient from 'react-native-linear-gradient';
import {colors, fontFamily} from '../../constants';
import {
  FlatList,
  Image,
  LayoutAnimation,
  StyleSheet,
  Text,
  UIManager,
} from 'react-native';
import {ConstactListData, creatorsData, ProgressLevelData, userRankingData} from '../../utilities/dummyData';
import {SeasonProgressComponent} from '../../screens/season/components/seasonProgressLevel';
import {height, width, totalSize} from 'react-native-dimension';
import {View} from 'react-native';
import {SeasonCreatorComponent} from '../../screens/season/components/seasonCreators';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Spacer} from '../spacer';
import {Icon} from 'react-native-elements';
import { UserRankingComponent } from '../../screens/season/components/seasonUserRanking';
import pointImg from './../../assets/images/forziereImg1.png'
import { ContactListComponent } from '../../screens/usersContactList/component';

export const SeasonProgressList = () => {
  return (
    <LinearGradient
      colors={colors.gradientProgressLevelBg}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.gradientContainer}>
      <FlatList
        data={ProgressLevelData}
        ListFooterComponent={<View style={{width: width(2)}}></View>}
        showsHorizontalScrollIndicator={false}
        decelerationRate={'fast'}
        horizontal
        renderItem={({item, index}) => (
          <SeasonProgressComponent
            progressImage={item?.progressImage}
            priceTitle={item?.priceTitle}
            progressLevel={item?.progressLevel}
            target={item?.target}
            imageWith={item?.imageWidth}
            imageHight={item?.imageHeight}
            imageStyle={index === 1 ? {marginRight: width(2)} : {}}
          />
        )}
        keyExtractor={item => item?.id.toString()}
      />
    </LinearGradient>
  );
};

export const SeasonCreatorsList = () => {
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const [expanded, setExpanded] = useState(false);
  const flatListData = expanded ? creatorsData : creatorsData.slice(0, 6);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View>
      <Text style={styles.creators}>Creators</Text>
      <Spacer height={height(1.6)} />
      <FlatList
        data={flatListData}
        ItemSeparatorComponent={<Spacer />}
        numColumns={3}
        renderItem={({item, index}) => (
          <SeasonCreatorComponent
            creatorImages={item?.creatorImages}
            creatorName={item?.creatorName}
            status={item?.status}
            bulletStatus={index}
          />
        )}
        keyExtractor={item => item.id}
        extraData={expanded}
        ListFooterComponent={
          <TouchableOpacity
            onPress={toggleExpanded}
            style={styles.expandButton}>
            <View style={styles.chevronWithText}>
              <Text style={styles.discoverText}>
                {expanded ? 'Discover less' : 'Discover more'}
              </Text>
              {expanded && (
                <Icon
                  name='chevron-small-left'
                  type="entypo"
                  size={totalSize(3)}
                  color={colors.appIconColor17}
                />
              )}
              {!expanded && (
                <Icon
                  name='chevron-small-right'
                  type="entypo"
                  size={totalSize(3)}
                  color={colors.appIconColor17}
                />
              )}
  
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  );
};


export const SeasonUserRankingList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tableHeading}>
        <Text style={styles.headingText}>POS</Text>
        <Text style={styles.headingText}>UTENTE</Text>
        <Image source={pointImg} style={styles.pointImage} />
      </View>
      <FlatList
        data={userRankingData}
        renderItem={({ item, index }) => (
          <UserRankingComponent
            position={index + 1}
            userIcon={item?.userIcon}
            name={item.name}
            points={item.points}
            index={index}
            dataLength={userRankingData.length}  
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export const UsersContactDataList = ({  onPressContact }) => {
  return (
   <View>
    <Spacer />
    <Text style={styles.contactList}>Contact List Data</Text>
     <FlatList
      data={ConstactListData}
      keyExtractor={item => item.id}
      ListHeaderComponent={<View style={{ height:height(1) }} />} 
      ListFooterComponent={<View style={{ height: height(10) }} />} 
      renderItem={({ item }) => (
        <ContactListComponent
          image={item?.image}
          name={item?.name}
          phone={item?.phone}
          onPressContact={() =>onPressContact(item)}
        />
      )}
    />
   </View>
  );
};


export const styles = StyleSheet.create({
  gradientContainer: {
    height: height(27),
  },
  expandButton: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  discoverText: {
    color: colors.appTextColor17,
    fontFamily:fontFamily.appTextSemiBold,
    fontSize:totalSize(1.4)
  },
  creators: {
    color: colors.appTextColor6,
    fontFamily: fontFamily.appTextBold,
    fontSize: totalSize(3.1),
    textAlign: 'center',
    marginBottom:height(.5)
  },
  ceatorContainer: {
    flex: 1,
    padding: 10,
  },
  chevronWithText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointImage:{
    width:25, 
    height:25
  },
  tableHeading:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:width(2),
    backgroundColor:colors.appBgColor4,
    alignItems:'center',
    paddingVertical:height(.9),
    borderTopLeftRadius:totalSize(.8),
    borderTopRightRadius:totalSize(.8)

  },
  container: {
    flex: 1,
    padding: totalSize(1.6),
  },
  headingText:{
    color:colors.appTextColor6,
    fontFamily:fontFamily.appTextSemiBold,
    fontSize:totalSize(1.55)
  },
  contactList:{
    fontFamily:fontFamily.appTextBold,
    fontSize:totalSize(2.4),
    color:colors.appTextColor6,
    textAlign:'center',
  }
});
