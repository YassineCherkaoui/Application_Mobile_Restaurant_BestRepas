import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, SafeAreaView, ScrollView, Modal , ImageBackground } from 'react-native';
import { Avatar, Card, Image, Button } from 'react-native-elements'

import AsyncStorage from '@react-native-async-storage/async-storage';
import image from '../assets/bg.jpg';
function ShowItems() {
  const [modalVisible, setModalVisible] = useState(false);

  const [title, setTitle] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [prix, setPrix] = useState(null)

  const [titleIng, setTitleIng] = useState(null)
  const [avatarIng, setAvatarIng] = useState(null)
  const [prixIng, setPrixIng] = useState(null)

  const [currency, setCurrency] = useState("MAD")

  const [language, setLanguage] = useState("ENGLISH")

  const getData = async () => {
    try {
      const title = await AsyncStorage.getItem('title')
      const avatar = await AsyncStorage.getItem('avatar')
      const prix = await AsyncStorage.getItem('prix')
  
      const titleIng = await AsyncStorage.getItem('titleIng')
      const avatarIng = await AsyncStorage.getItem('avatarIng')
      const prixIng = await AsyncStorage.getItem('prixIng')

      const Currency = await AsyncStorage.getItem('Currency')
      setCurrency(Currency)

      const Language = await AsyncStorage.getItem('Language')
      setLanguage(Language)
  
      setTitle(title)
      setAvatar(avatar)
      setPrix(parseInt(prix))
      setTitleIng(titleIng)
      setAvatarIng(avatarIng)
      setPrixIng(parseInt(prixIng))
    } catch(e) {
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
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{language === "ENGLISH" ? 'Order Added Successfully'  : 'تمت إضافة الطلب بنجاح'}</Text>
              <Text style={styles.modalText2}> {prixIng + prix > 300 ? "You Bought More than 300 MAD you have 5 point added" : ""}</Text>
            </View>
          </View>
        </Modal>

          <Card style={styles.box}>
            <Card.Title style={styles.cardTitle}>Plat Du jour</Card.Title>
            <Card.Title>{title}</Card.Title>
            <View style={styles.avatar}>
            <Avatar
              source={{
                uri: avatar,
              }}
              size="xlarge"
            />
            </View>
            <Card.Title>{ currency==='USD' ? (prix * 0.1).toFixed(2) + " USD" : prix + " MAD" }</Card.Title>
          </Card>

          <Card style={styles.box}>
            <Card.Title style={styles.cardTitle}>Extra</Card.Title>
            <Card.Title>{titleIng}</Card.Title>
            <View style={styles.avatar}>
            <Avatar
              source={{
                uri: avatarIng,
              }}
              size="xlarge"
            />
            </View>
            <Card.Title>{currency==='USD' ? (prixIng * 0.1).toFixed(2) + " USD" : prixIng + " MAD"}</Card.Title>
          </Card>
              <View style={styles.validbtn}>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() =>{ setModalVisible(true) }}>
              <Text style={styles.textStyle}>Commander</Text>
            </Pressable>
            </View>
        </View>

      </ScrollView>
      </SafeAreaView>
      </ImageBackground>
    )
  }

const styles = StyleSheet.create({
    image : {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },
      avatar : {
        marginLeft : 70,
        padding : 20,
      },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    validbtn : {

    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    button: {
      padding: 10,
      elevation: 2,
      width : 300,
      marginLeft : 45,
      marginTop : 20
    },
    buttonOpen: {
      backgroundColor: "red",
    },
    buttonClose: {
      backgroundColor: "#8b0000",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontWeight: 'bold',
      fontSize: 20,
      color : "red"
    }
  });

export default ShowItems

