import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {ArrowRight} from 'iconsax-react-native';
import Colors from '../../theme/colors';
import GenderIcon from './genderIcon';

const CharacterCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <View style={styles.statusContainer}>
          <View>
            <Text style={styles.status}>{item.status}</Text>
          </View>
          <View style={styles.genderContainer}>
            <GenderIcon size={16} gender={item.gender} />
            <Text style={styles.gender}>{item.gender}</Text>
          </View>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <ArrowRight size={17} color={Colors.BLACK} />
      </View>
    </View>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#e4dccf',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'space-around',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  species: {
    color: '#7f7558',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  status: {
    color: '#7f7558',
  },
  gender: {
    color: '#7f7558',
    marginLeft: 5,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
