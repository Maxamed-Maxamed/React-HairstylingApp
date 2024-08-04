import React from 'react';
import { Text, ImageBackground, TouchableOpacity } from 'react-native';
import { tailwind } from 'nativewind';
import { useSharedValue, withSpring, useAnimatedStyle, Animated } from 'react-native-reanimated';

// HeroSection component for the main landing area of the hairstyling app
const HeroSection = () => {
  // Initialize animated values for opacity and scale
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  // Define animated styles using useAnimatedStyle
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withSpring(opacity.value, { damping: 2 }), // Animate opacity with spring effect
      transform: [{ scale: withSpring(scale.value, { damping: 2 }) }], // Animate scale with spring effect
    };
  });

  return (
    // Background image for the hero section
    <ImageBackground source={{ uri: 'hero-image-url' }} style={tailwind('w-full h-64 bg-gray-400')}>
      {/* Animated container for content */}
      <Animated.View style={[tailwind('flex-1 justify-center items-center'), animatedStyles]}>
        {/* Main headline */}
        <Text style={tailwind('text-white text-3xl font-bold')}>Transform Your Look</Text>
        {/* Call-to-action button */}
        <TouchableOpacity style={tailwind('bg-pink-500 p-3 mt-4 rounded')}>
          <Text style={tailwind('text-white text-lg')}>Book Now</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
};

export default HeroSection;
