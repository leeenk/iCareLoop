import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Box, Input } from 'native-base';

const Header = () => {
  return (
  <>
  {/* <Text> hey </Text> */}
  {/* <Text>Test!</Text> */}
  <View style={styles.header}>
    <Image source={require('../assets/icareloop_logo.png')} style={styles.image}/>
    <Text> TEST! </Text>
  </View>
  </>
  )
}

const styles = StyleSheet.create({
  header: {
    // Add some height and alignment styles to ensure the header is visible
    height: 60,
    paddingTop: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 600, // Set the width of the image
    height: 250, // Set the height of the image
  },
});

export default Header;