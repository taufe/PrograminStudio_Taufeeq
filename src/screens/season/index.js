import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {SeasonMainSection} from './components/seasonMainSection';
import {SeasonHeader} from '../../components/headers';
import {SeasonGoldenPointsComponent} from './components/seasonGoldenPoints';
import {ScrollView} from '../../components/scrollView';
import {SeasonButtonsComponent} from './components/seasonButtons';
import {SeasonVansComponent} from './components/seasonVan';
import {SeasonLeaderBoard} from './components/seasonLeaderBoard';
import {
  SeasonCreatorsList,
  SeasonProgressList,
  SeasonUserRankingList,
} from '../../components/listComponent';
import {Spacer} from '../../components/spacer';
import {height} from 'react-native-dimension';
import {FragamerButton} from './components/seasonUserRanking';

const Season = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.mainWrapper}>
        <SeasonHeader />
        <SeasonMainSection
          onPressContact={() => navigation.navigate('UsersContactList')}
        />
        <SeasonProgressList />
        <Spacer isBasic />
        <SeasonGoldenPointsComponent />
        <Spacer isDoubleBase />
        <SeasonVansComponent />
        <Spacer height={height(4.5)} />
        <SeasonCreatorsList />
        <SeasonButtonsComponent />
        <SeasonLeaderBoard />
        <Spacer height={height(8)} />
        <SeasonUserRankingList />
        <FragamerButton
          onPressFraGame={() => navigation.navigate('UsersContactList')}
        />
        <Spacer />
      </View>
    </ScrollView>
  );
};

export default Season;
