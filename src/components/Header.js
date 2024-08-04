// Import necessary components from React and React Native
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// Import tailwind for styling
import { tailwind } from 'nativewind';

// Define the Header component, which receives navigation as a prop
const Header = ({ navigation }) => (
  // Main container for the header
  <View style={tailwind('bg-gray-800 p-4 flex-row justify-between')}>
    {/* App title */}
    <Text style={tailwind('text-white text-xl')}>HairstylingApp</Text>
    
    {/* Navigation links container */}
    <View style={tailwind('flex-row')}>
      {/* Home navigation button */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={tailwind('text-white mx-2')}>Home</Text>
      </TouchableOpacity>
      
      {/* Services navigation button */}
      <TouchableOpacity onPress={() => navigation.navigate('Services')}>
        <Text style={tailwind('text-white mx-2')}>Services</Text>
      </TouchableOpacity>
      
      {/* Gallery navigation button */}
      <TouchableOpacity onPress={() => navigation.navigate('Gallery')}>
        <Text style={tailwind('text-white mx-2')}>Gallery</Text>
      </TouchableOpacity>
      
      {/* Contact navigation button */}
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Text style={tailwind('text-white mx-2')}>Contact</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Export the Header component for use in other parts of the app
export default Header;
