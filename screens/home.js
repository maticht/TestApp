import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPostsFetch} from '../actions';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.myFirstReducer.posts);
  dispatch(getPostsFetch());

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {posts.map(pos => (
          <>
            <TouchableHighlight
              activeOpacity={0.5}
              underlayColor="#ddd"
              onPress={() =>
                navigation.navigate('Details', {
                  small: pos.urls.regular,
                  name: pos.user.name,
                  description: pos.alt_description,
                  likes: pos.likes,
                })
              }>
              <View style={styles.postBlock}>
                <Image
                  source={{uri: pos.urls.small}}
                  style={styles.userAvaImgPw}
                />
                <View style={styles.postTextBlock}>
                  <Text style={styles.sectionText}>{pos.user.name}</Text>
                  <Text style={styles.sectionText}>
                    <Text style={styles.sectionStartText}>Description: </Text>
                    {pos.alt_description}
                  </Text>
                  <Text style={styles.sectionText}>
                    <Text style={styles.sectionStartText}>Likes: </Text>
                    {pos.likes} 🖤️
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  postTextBlock: {
    display: 'flex',
    flexDirection: 'column',
    paddingRight: 150,
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
  userAvaImgPw: {
    width: 90,
    height: 90,
    borderRadius: 4,
    resizeMode: 'contain',
    marginLeft: 15,
    marginRight: 10,
  },
});
