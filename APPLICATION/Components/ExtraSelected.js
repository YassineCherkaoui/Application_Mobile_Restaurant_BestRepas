import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView, Pressable, Text, ImageBackground} from 'react-native';
import { Avatar, Button } from "react-native-elements";
import image from '../assets/bg.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value, value2, value3) => {
  try {
    await AsyncStorage.setItem('titleIng', value)
    await AsyncStorage.setItem('avatarIng', value2)
    await AsyncStorage.setItem('prixIng', value3)
  } catch (e) {
  }
}

const Ingridients = [
    {
       title: 'Eau',
       titleArabic: 'ماء',
       avatar: 'https://mdinashop.com/wp-content/uploads/2020/11/Eau-de-Table-33cl-CIEL.jpg',
       prix: 10,
       description: 'eau'
    },
    {
      title: 'Limonade',
      titleArabic: 'عصير الليمون',
      avatar: 'https://img.freepik.com/free-photo/orange-juce-orange-old-wooden-table_38820-118.jpg?size=626&ext=jpg',
      prix: 10,
      description: 'eau'
   },
   {
     title: 'jus',
     titleArabic: 'عصير',
     avatar: 'https://www.simplyrecipes.com/thmb/Y8Z2PJCAih6vZwAot8pqNz2XNiY=/640x441/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__06__lemonade-640-dm-845dfef55a6b4d039458926a6ca40d5b.jpg',
     prix: 10,
     description: 'eau'
  }
   ]

function SelectIngidient({navigation}) {  
  const [language, setLanguage] = useState("ENGLISH")

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Language')
      setLanguage(value)
    } catch(e) {
    }
  }
  getData()
    return (
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <View>
                        <View style={styles.box}>
                            {
                                Ingridients.map((ingridient, i) => {
                                    return (
                                        // ShowItems
                                        <Pressable key={i} onPress={() =>{ storeData(ingridient.title, ingridient.avatar, `${ingridient.prix}`), navigation.navigate('DisplayItems') }}>
                                          <View style={styles.avatar}>
                                            <Avatar 
                                                size="xlarge"
                                                source={{
                                                    uri: ingridient.avatar,
                                                }}
                                            />
                                            </View>

                                            <Text style={styles.textStyle}>{language === "ENGLISH" ? ingridient.title : ingridient.titleArabic }</Text>
                                        </Pressable>
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
  image : {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
    box: {
        textAlign: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 40
    },
    textStyle: {
      color: '#FFF',
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 15
    },
    avatar : {
      padding : 20,
      backgroundColor : 'black',
    },

  });

export default SelectIngidient

