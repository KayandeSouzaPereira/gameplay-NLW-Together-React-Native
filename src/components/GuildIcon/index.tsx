import React, { useState }from "react";
import { Image } from 'react-native'
import { styles } from './styles'


export function GuildIcon() {
    const uri = 'https://naoseinada.com.br/wp-content/uploads/2020/05/minecraft-logo-naoseinada.jpg'

    return (
        <Image
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"
        />
    
    );
}