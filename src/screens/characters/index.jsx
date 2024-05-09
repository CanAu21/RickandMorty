import {View, FlatList, Text} from 'react-native';
import React, {useEffect} from 'react';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacterList} from '../../store/actions/charactersActions';

const Characters = () => {
  const dispatch = useDispatch();
  const {characterList} = useSelector(state => state.characters);

  useEffect(() => {
    dispatch(getCharacterList());
  }, []);

  return (
    <View style={screensStyle.container}>
      <FlatList
        data={characterList}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default Characters;
