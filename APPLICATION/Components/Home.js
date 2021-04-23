import React,{useState} from 'react';
import { View, ImageBackground, StyleSheet, Text, Button, Modal, Pressable } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import image from '../assets/bg.jpg';

function Home({navigation}){
    const [Modaldisplay, setModaldisplay] = useState(false);
    const [Modaldisplay_2, setModaldisplay_2] = useState(false);

    const [currency, setCurrency] = useState('MAD');
    const [language, setLanguage] = useState('ENGLISH');

    const Data = async () => {
        try {
          await AsyncStorage.setItem('Currency', currency)
          await AsyncStorage.setItem('Language', language)
        } catch (e) {
         
        }
      }
      Data();

      return (
          <View  style={styles.container}>
               <ImageBackground source={image} style={styles.image}>
               <Text style={styles.titel}>Welcome to BestRepas</Text>
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
            <Text style={styles.modalText}>Select Currency : </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModaldisplay(!Modaldisplay), setCurrency("MAD")}}
            >
              <Text style={styles.textStyle}>MAD</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModaldisplay(!Modaldisplay), setCurrency("USD")}}
            >
              <Text style={styles.textStyle}>$USD</Text>
            </Pressable>

          </View>
        </View>
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={Modaldisplay_2}
        onRequestClose={() => {
          setModaldisplay_2(!Modaldisplay_2);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>select your language</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModaldisplay_2(!Modaldisplay_2), setLanguage("ARABIC")}}
            >
              <Text style={styles.textStyle}>ARABIC</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModaldisplay_2(!Modaldisplay_2), setLanguage("ENGLISH")}}
            >
              <Text style={styles.textStyle}>ENGLISH</Text>
            </Pressable>

          </View>
        </View>
      </Modal>

      <View style={styles.btn_shop}>
      <Button title="Shop Now" onPress={()=> navigation.navigate('Items')} />
      </View>
      <View style={styles.btn}>

<Button
onPress={() => setModaldisplay(true)}
color="#000000"
//   />
title={`currency: (${currency})`}
>
</Button>
<Button
onPress={() => setModaldisplay_2(true)}
// title="{`language: (${language})`}"
color="#000000"
//   />
title={`language: (${language})`}
>
</Button>

</View>

      </ImageBackground>

          </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    titel : {
        color : '#fff',
        marginBottom : 600,
        fontSize : 25,
        textAlign : 'center',
        fontWeight:'bold',
        backgroundColor : 'black',
        padding : 20
    },
    btn : {
      display : 'flex',
      width : 200,
      flexDirection: 'row',
      margin : 10,
      marginLeft : 20
    },

    modalText: {
      fontSize: 20
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    modalView: {
      margin: 70,
      backgroundColor: "gold",
      padding: 35,
      alignItems: "center",
      elevation: 5
    },
    button: {
      marginTop: 20,
      padding: 20,
      elevation: 2,
      borderRadius : 10,
      backgroundColor : 'black'
    },
    buttonOpen: {
      backgroundColor: "black",
    },
    buttonClose: {
      backgroundColor: "black",
      marginBottom: 10
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    btn_shop : {
      backgroundColor : '#fff',
      width : 200,
      marginLeft : 90,
      borderRadius : 20
      // position : 'center'


    },

  });

export default Home;