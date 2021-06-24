import React, { useState }from "react";
import { Image } from 'react-native'
import { styles } from './styles'


export function GuildIcon() {
    const uri = 'data:image/jpeg;base64,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'

    return (
        <Image
        source={{ uri }}
        style={styles.image}
        resizeMode="cover"
        />
    
    );
}