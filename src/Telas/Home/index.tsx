import React, { useState }from "react";
import { View, FlatList, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import { Profile } from "../../components/Profile";
import { ButtonAdd } from "../../components/ButtonAdd"; 
import { styles } from './styles'
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';



export function Home() {
    const [category, setCategory] = useState('');
    const navigation = useNavigation();
    const appoinments = [
        {
            id:'1',
            guild:{
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 as 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
        },
        {
            id:'2',
            guild:{
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true,
            },
            category: '1',
            date: '22/06 as 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida na md10'
        }
]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails')
    }
    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate')
    }

    return (
    <Background>  
            <View >
                <View style={styles.header}>
                    <Profile/>
                    <ButtonAdd onPress={handleAppointmentCreate}/>
                </View>

                <View>
                    <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                    />
                </View>

                <View style={styles.content}>
                    <ListHeader
                    title="Partidas Agendadas"
                    subtitle="total 6"
                    />

                    <FlatList 
                        data={appoinments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment 
                                data={item} 
                                onPress={handleAppointmentDetails}
                                />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                    />

                </View>

            </View>
        </Background>                
    );
}