import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface IFollowing{
  
  id: string;
  login: string;  
  avatar_url: string;
  name: string;
     
}



const Following = () => {
    const [following, setFollowing] = useState<IFollowing[]>([]);

const URL = 'https://api.github.com';

useEffect(() => {
  fetch(`${URL}/users/Vitor-VAR/following`, { 
    method: 'GET',
    headers: {
      Authorization: 'Bearer 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',
    },
  })
    .then(response => response.json())
    .then(json => {
      console.log(`SEGUINDO: ${JSON.stringify(json)}`);
      setFollowing(json);
    });
}, []);

    return (
            <SafeAreaView>
               <FlatList 
               data={following}
               renderItem={({item, index}) => (
                <View key={index}
                style={{backgroundColor: '#FFF', marginTop: 15, padding: 15}} >
                <View style={styles.imageView}>
                 <Image source={{uri:item.avatar_url}}style={styles.image}/>
                <Text>{item.name}</Text>
                <Text>{item.login}</Text>
                </View>
              
              <Text></Text>
                </View>
                



               )}
               keyExtractor={item => item.id}
               ListEmptyComponent={<ActivityIndicator size={'large'} color={'red'} />}
               /> 
            </SafeAreaView>

    );

};

const styles = StyleSheet.create({
  imageView: {
    backgroundColor: '#FFF',
    padding: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderWidth: 3,
    borderColor: 'grey',
    borderRadius: 60,

  },
});


export default Following;