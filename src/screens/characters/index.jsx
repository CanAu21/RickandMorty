import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {screensStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacterList} from '../../store/actions/charactersActions';
import Spinner from '../../components/ui/spinner';
import CharacterCard from '../../components/characters/characterCard';

const Characters = () => {
  const dispatch = useDispatch();
  const {characterList, pending} = useSelector(state => state.characters);

  useEffect(() => {
    dispatch(getCharacterList());
  }, []);

  return (
    <View style={screensStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={characterList}
          renderItem={({item}) => <CharacterCard item={item} />}
        />
      )}
    </View>
  );
};

export default Characters;
