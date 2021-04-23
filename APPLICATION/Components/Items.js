import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground, Modal, Pressable, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Avatar, Card, Image, Button } from 'react-native-elements'

import AsyncStorage from '@react-native-async-storage/async-storage';

// import plat1 from '../assets/Plat/Plat_1.jpg'
import image from '../assets/bg.jpg';


const storeData = async (value, value2, value3) => {
  try {
    await AsyncStorage.setItem('title', value)
    await AsyncStorage.setItem('avatar', value2)
    await AsyncStorage.setItem('prix', value3)
  } catch (e) {
  }
}


const items = [
  {
     title: 'Breakfast for 1 personne',
     titleArabic: 'فطور لشخص واحد',
     avatar : "https://www.welovebuzz.com/wp-content/uploads/2016/06/PAUL_Ramadan_.jpg",
     prix: 79,
     description: "Argana, Cafe Clock, Harira, Chorba aux légumes, Tmer and Soupe de courgette au basilic"
   },
   {
    title: 'Breakfast for 1 personne',
    titleArabic: 'فطور لشخص واحد',
    avatar : "https://www.welovebuzz.com/wp-content/uploads/2016/06/PAUL_Ramadan_.jpg",
    prix: 145,
    description: "Argana, Cafe Clock, Harira, Chorba aux légumes, Tmer and Soupe de courgette au basilic"
  }
 ]


function Items({navigation}) {  
  const [Modaldisplay, setModaldisplay] = useState(false);

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null)

  const [currency, setCurrency] = useState("MAD")

  const [language, setLanguage] = useState("ENGLISH")

    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('Currency')
        setCurrency(value)

        const value2 = await AsyncStorage.getItem('Language')
        setLanguage(value2)

      } catch(e) {
        // error reading value
      }
    }
    getData()



    return (
      <ImageBackground source={image} style={styles.image}>
      <SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={Modaldisplay}
        onRequestClose={() => {
          setModaldisplay(!Modaldisplay);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image
            source={{
              uri: 'https://curlytales.com/wp-content/uploads/2021/03/Iftarfeature.jpg',
        }}
      />
            <Text style={styles.modalText}>{title}</Text>
            <Text style={styles.modalText}>{description}</Text>
          </View>
        </View>
      </Modal>
        {
          items.map((item, i) => {
            return (
          <Card key={i} style={styles.box}>
          <Card.Title>{language === 'ENGLISH' ? item.title : item.titleA}</Card.Title>

          <View style={styles.imgcard}>
          <Avatar
            source={{
              uri: item.avatar,
            }}
            size="xlarge"
          />
          </View>
          <Card.Title>{ currency==='USD' ? item.prix * 0.1 + " $" : item.prix + " MAD" }</Card.Title>
          <View style={styles.btn_flix}>
          <Pressable style={[styles.button, styles.buttonOpen]} onPress={() =>{ setModaldisplay(true), setTitle(item.title), setDescription(item.description) }}>
           <Text style={styles.textStyle}>{language === 'ENGLISH' ? 'Details' : 'معلومات اضافية'}</Text>
          </Pressable>

          <Pressable style={[styles.button, styles.buttonOpen]} onPress={() =>{ storeData(item.title, item.avatar, `${item.prix}`), navigation.navigate('Extra') }}>
           <Text style={styles.textStyle}>{language === 'ENGLISH' ? 'Select' :  'اختيار'}</Text>
          </Pressable>
          </View>
          </Card>
            )
          })
        }

      </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
    )
  }

const styles = StyleSheet.create({
  imgcard : {
      marginLeft : 70,
      padding : 20,
  },
  image : {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 10,
      backgroundColor: "gold",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      margin : 10
    },
    buttonOpen: {
      backgroundColor: "black",
    },
    buttonClose: {
      backgroundColor: "black"
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontWeight : "bold",
      fontSize : 20
    },
  });

export default Items
