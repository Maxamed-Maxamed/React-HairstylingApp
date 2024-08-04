import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { tailwind } from 'nativewind';

const Footer = () => (
  <View style={tailwind('bg-gray-800 p-4')}>
    <Text style={tailwind('text-white text-center')}>© 2024 HairstylingApp</Text>
    <View style={tailwind('flex-row justify-center mt-2')}>
      <TouchableOpacity style={tailwind('mx-2')}>
        <Text style={tailwind('text-white')}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tailwind('mx-2')}>
        <Text style={tailwind('text-white')}>Instagram</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Footer;