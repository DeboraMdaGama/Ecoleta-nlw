import React, {useEffect, useState} from 'react';
import {View, StyleSheet,Image,Linking, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {Feather as Icon, FontAwesome} from '@expo/vector-icons';
import { useNavigation, useRoute} from "@react-navigation/native"
import Constants from 'expo-constants';
import {RectButton} from 'react-native-gesture-handler';
import api from '../../services/api';
import * as MailComposer from 'expo-mail-composer';

interface Params{
  point_id:number;
}
interface Data{
  point: {
    image: string;
    image_url:string;
    name: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  itens: {
    title: string;
  }[];
}

const Detail = () =>{
    const[data, setData] = useState<Data>({} as Data);
    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params as Params;

    useEffect(() => {
      api.get(`points/${routeParams.point_id}`).then(response =>{
        setData(response.data);
      });
    }, []);

    function handleNavigateBack(){
        navigation.goBack();
    }

    if(!data.point){
      return null;
    }

    function handleComposeMail (){
      MailComposer.composeAsync({
        subject: 'Interesse na coleta de resídios',
        recipients:[ data.point.email],
      });
    }
    function handleWhatsapp (){
      Linking.openURL(`whatsapp://send?${data.point.whatsapp}&textEstou interessado na coleta de resíduos`);
    }

    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigateBack}>
                <Text style={styles.description}>
                    <Icon name="arrow-left" color="#322153" size={18}></Icon>
                    {'  '}Voltar
                </Text>
            </TouchableOpacity>
            <Image style={styles.pointImage} source={{uri: data.point.image_url}}/>
            <Text style={styles.pointName}>{data.point.name}</Text>
            <Text style={styles.pointItems}>{data.itens.map(item => item.title).join(', ')}</Text>

            <View style={styles.address}>
                <Text style={styles.addressTitle}>Endereço</Text>
                <Text style={styles.addressContent}>{data.point.city}, {data.point.uf}</Text>
            </View>
        </View>

        <View style={styles.footer}>
            <RectButton style={styles.button} onPress={handleWhatsapp}>
                <FontAwesome name="whatsapp" size={20} color="#322153"/>
                <Text style={styles.buttonText}>Whatsapp</Text>
            </RectButton>
            <RectButton style={styles.button} onPress={handleComposeMail}>
                <Icon name="mail" size={20} color="#322153"/>
                <Text style={styles.buttonText}>Email</Text>
            </RectButton>
        </View>
        </SafeAreaView>
    );
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
  },

  pointImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 32,
  },

  pointName: {
    color: '#322153',
    fontSize: 28,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 24,
  },

  pointItems: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  address: {
    marginTop: 32,
  },
  
  addressTitle: {
    color: '#322153',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  addressContent: {
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  button: {
    width: '48%',
    backgroundColor: '#34CB79',
    borderRadius: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    marginLeft: 8,
    color: '#322153',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },
});

export default Detail;