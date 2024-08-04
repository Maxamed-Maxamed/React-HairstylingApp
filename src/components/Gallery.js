import React from 'react';
import { View, Image, FlatList } from 'react-native';
import { tailwind } from 'nativewind';

const Gallery = ({ photos }) => (
  <FlatList
    data={photos}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <Image source={{ uri: item.url }} style={tailwind('w-full h-32 mb-2')} />
    )}
    numColumns={2}
  />
);

export default Gallery;