import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';

const services = [
  { id: '1', title: 'Haircut', description: 'Trendy and stylish cuts.', image: 'image-url' },
  { id: '2', title: 'Makeup', description: 'Professional makeup services.', image: 'image-url' },
  // Add more services here
];

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <Header navigation={navigation} />
    <ScrollView>
      <HeroSection />
      <View style={tailwind('p-4')}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </View>
    </ScrollView>
    <Footer />
  </View>
);

export default HomeScreen;