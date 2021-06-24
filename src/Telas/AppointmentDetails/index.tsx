import React from 'react'
import { View, Text, ImageBackground, FlatList } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

import Bannerimg from '../../assets/banner.png'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { ListDivider } from '../../components/ListDivider'
import { ButtonIcon } from '../../components/ButtomIcon'





export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Goku',
            avatar_url: 'https://avatarfiles.alphacoders.com/782/78200.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Vegeta',
            avatar_url: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2017/12/Dragon-Ball-Super-Vegeta.jpg',
            status: 'offline'
        }
    ]
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground 
                source={Bannerimg}
                style={styles.banner}
            >
                <View
                    style={styles.bannerContent}
                >
                    <Text style={styles.title}> 
                        Lendários 
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da MD10
                    </Text>
                </View>
            </ImageBackground>     
            <ListHeader 
                title='Jogadores'
                subtitle='Total 3'
            />   

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.members}

            />
            <View style={styles.footer}>
                <ButtonIcon
                    title="Entrar em Partida"
                />
            </View>

        </Background>
    )
}
