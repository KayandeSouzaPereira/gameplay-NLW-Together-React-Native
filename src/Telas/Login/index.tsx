import React, { useState, useContext } from 'react';
import {View, Image, Text, Alert, ActivityIndicator} from 'react-native';

import { useAuth } from '../../hooks/auth';

import IllustrationImg from '../../assets/illustration.png'
import { styles } from "./styles"
import { ButtonIcon } from "../../components/ButtomIcon";
import { Background } from '../../components/Background';
import { theme } from '../../global/styles/theme';



export function SignIn(){
  const { loading, signIn } = useAuth();



  async function handleSignIn() {
    try {
      await signIn();
    }catch (error) {
      Alert.alert(error)
    }
  }

  const [text, setText] = useState('');

  return(
  <Background>
    <View style={styles.container}>
        <Image 
        source={IllustrationImg} 
        style={styles.image}
        resizeMode="stretch" 
        />
  

    <View style={styles.content}>
      <Text style={styles.title}>
        Conecte-se {'\n'} 
        e organize suas {'\n'} 
        Jogatinas
      </Text>

      <Text style={styles.subtitle}>
        Crie grupos para jogar seus games {'\n'} 
        favoritos com seus amigos
      </Text>
      
      {
        loading? <ActivityIndicator color={theme.colors.primary}/>:
        <ButtonIcon 
        title="Entrar com Discord" 
        onPress={handleSignIn}
      />}
    </View>
  </View>
</Background>
  );
}
  

