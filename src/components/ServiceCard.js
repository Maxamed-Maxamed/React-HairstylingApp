import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { tailwind } from 'nativewind';

const ServiceCard = ({ service }) => (
  <View style={tailwind('bg-white shadow-md rounded p-4 m-2')}>
    <Image source={{ uri: service.image }} style={tailwind('w-full h-32 rounded')} />
    <Text style={tailwind('text-xl font-semibold mt-2')}>{service.title}</Text>
    <Text style={tailwind('text-gray-600')}>{service.description}</Text>
    <TouchableOpacity style={tailwind('bg-pink-500 p-2 rounded mt-2')}>
      <Text style={tailwind('text-white text-center')}>Book Now</Text>
    </TouchableOpacity>
  </View>
);

export default ServiceCard;