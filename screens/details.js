import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

export default function Details({navigation, route}) {
  return (
    <View>
      <Button
        color="#666"
        title="Go back"
        onPress={() => navigation.popToTop()}
      />
      <Text style={styles.sectionText}> </Text>
      <Image source={{uri: route.params.small}} style={styles.userAvaImgPw} />
      <View style={styles.section}>
        <Text style={styles.sectionText}>{route.params.name}</Text>
        <Text style={styles.sectionText}>
          <Text style={styles.sectionStartText}>Description: </Text>
          {route.params.description}
        </Text>
        <Text style={styles.sectionText}>
          <Text style={styles.sectionStartText}>Likes: </Text>
          {route.params.likes} 🖤️
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 16,
    marginVertical: 15,
  },
  userAvaImgPw: {
    width: 362,
    height: 362,
    borderRadius: 4,
    resizeMode: 'contain',
    marginLeft: 15,
    marginRight: 10,
  },
  sectionText: {
    fontSize: 15,
    color: '#4d4d4d',
  },
  sectionStartText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#363636',
  },
});
