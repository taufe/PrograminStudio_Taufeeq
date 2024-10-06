
import forziereImg1 from './../assets/images/forziereImg1.png'
import forziereImg2 from './../assets/images/forziereImg2.png'
import coscuImg from './../assets/images/coscuImg.png'
import rubiusImg from './../assets/images/rubiusImg.png'
import slakunImg from './../assets/images/slakunImg.png'

export const ProgressLevelData = [
    { id: 1, progressLevel: 2000, target: 2000, progressImage: forziereImg2, priceTitle: "", imageWidth:60, imageHeight:60 },
    { id: 2, progressLevel: 2000, target: 3000, progressImage: forziereImg1, priceTitle: "1650/2000",imageWidth:85, imageHeight:85 },
    { id: 3, progressLevel: 0, target: 5000, progressImage: forziereImg2, priceTitle: "3000", imageWidth:60, imageHeight:60 },
    { id: 4, progressLevel: 0, target: 5000, progressImage: forziereImg2, priceTitle: "",imageWidth:60, imageHeight:60 },
  ];

  export const creatorsData = [
    { id: '1', creatorName: 'Coscu', status: 'Live', creatorImages: coscuImg },
    { id: '2', creatorName: 'Rubius', status: 'Live', creatorImages: rubiusImg },
    { id: '3', creatorName: 'SLAKUN10', status: 'Live', creatorImages: slakunImg },
    { id: '4', creatorName: 'Coscu', status: 'Offline', creatorImages: slakunImg },
    { id: '5', creatorName: 'SLAKUN10', status: 'Offline', creatorImages: coscuImg },
    { id: '6', creatorName: 'SLAKUN10', status: 'Live', creatorImages: rubiusImg },
    { id: '7', creatorName: 'SLAKUN10', status: 'Offline', creatorImages: coscuImg },
    { id: '8', creatorName: 'SLAKUN10', status: 'Offline', creatorImages: rubiusImg },
    { id: '8', creatorName: 'SLAKUN10', status: 'Offline', creatorImages: slakunImg },
  ];

  export const userRankingData = [
    {
      id: '1',
      userIcon: require('./../assets/images/avatar1.png'),
      name: 'IronPatt',
      points: 28,
    },
    {
      id: '2',
      userIcon: require('./../assets/images/avatar2.png'),
      name: 'RonRemain',
      points: 26,
    },
    {
      id: '3',
      userIcon: require('./../assets/images/avatar3.png'),
      name: 'rudy92sale',
      points: 20,
    },
    {
      id: '4',
      userIcon: require('./../assets/images/avatar4.png'),
      name: 'eliodea76',
      points: 18,
    },
    {
      id: '5',
      userIcon: require('./../assets/images/avatar5.png'),
      name: 'Conisama',
      points: 15,
    },
    {
      id: '6',
      userIcon: require('./../assets/images/avatar6.png'),
      name: 'SoberUnicorn',
      points: 10,
    },
    {
      id: '7',
      userIcon: require('./../assets/images/avatar7.png'),
      name: 'Deeku3',
      points: 7,
    },
    {
      id: '8',
      userIcon: require('./../assets/images/avatar8.png'),
      name: 'Anonymous',
      points: 5,
    },
    {
      id: '9',
      userIcon: require('./../assets/images/avatar9.png'),
      name: 'Londral156',
      points: 5,
    },
    {
      id: '10',
      userIcon: require('./../assets/images/avatar10.png'),
      name: 'Coscu5',
      points: 2,
    },
  ];


  export const ConstactListData = [
    { id: '1', name: 'John Doe', phone: '123-456-7890', image: require('./../assets/images/profile1.png') },
    { id: '2', name: 'Jane Smith', phone: '987-654-3210', image: require('./../assets/images/profile2.png') },
    { id: '3', name: 'Jane Smith', phone: '987-654-3210', image: require('./../assets/images/profile3.png') },
    { id: '4', name: 'Jane Smith', phone: '987-654-3210', image: require('./../assets/images/profile4.png') },
    { id: '5', name: 'Jane Smith', phone: '987-654-3210', image: require('./../assets/images/profile5.png') },
    { id: '6', name: 'Jane Smith', phone: '987-654-3210', image: require('./../assets/images/profile6.png') },
    { id: '7', name: 'Jane Smith', phone: '987-654-3210', image: require('./../assets/images/profile7.png') },
    { id: '8', name: 'Jane Smith', phone: '987-654-3210', image: require('./../assets/images/profile8.png') },
  ];
