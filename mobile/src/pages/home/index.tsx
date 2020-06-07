import React, {useState, useEffect} from 'react';
import {View,ImageBackground, TextInput,KeyboardAvoidingView, Image,Text, StyleSheet, Alert} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import Picker from 'react-native-picker-select';

interface IBGE_UF_response{
  sigla: string;
}
interface IBGE_city_response{
  nome: string;
}
interface UF_Itens {
  key: string
  label: string,
  value: string
}

interface CityItens {
  key: string
  label: string,
  value: string
}

const Home = () =>{
  
  const [ufItens, setUfItens] = useState<UF_Itens[]>([]);
  const [selectedUF, setSelectedUF] = useState('0');

  const [cityItens, setCityItens] = useState<CityItens[]>([]);
  const [selectedCity, setSelectedCity] = useState('0')  ;

  const navigation =  useNavigation();

useEffect(() =>{
    axios.get<IBGE_UF_response[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')//ordenado por nome
    .then(response =>{
        const stateUFs = response.data.map(uf =>({
          key: uf.sigla,
          label: uf.sigla,
          value: uf.sigla
        }));
        setUfItens(stateUFs);
    });
}, []);    
useEffect (() =>{
    if(selectedUF === '0'){
      return;
    }
    axios.get<IBGE_city_response[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios?orderBy=nome`)//ordenado por nome
    .then(response =>{
        const cityNames = response.data.map(city =>({
          key: city.nome,
          label: city.nome,
          value: city.nome
        }));
        setCityItens(cityNames);
    });
}, [selectedUF]);

    function handleNavigateToPoints(){
      if(selectedUF==='0' || selectedCity ==='0'){
        Alert.alert("Campos Vazios!", "Selecione a UF e Cidade que você está!");
        return;
      }
      navigation.navigate('Points', {
        uf: selectedUF,
        city: selectedCity
      })
    }
    
    return (
      <KeyboardAvoidingView style={{flex:1}} >
        <ImageBackground style={styles.container} source={require('../../assets/home-background.png')} imageStyle={{width: 274, height: 368}}>
          <View style={styles.main}>
          
            <Image source={require('../../assets/logo.png')}/>
        
              <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
              <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>
        
          </View>

          <View style={styles.footer}>

            <RNPickerSelect
              onValueChange={(value) => setSelectedUF(value)}
              useNativeAndroidPickerStyle={false}
              style={pickerStyle}
              value={selectedUF}
              items={ufItens}
              placeholder={{label: 'Selecione um Estado', value: 'placeholder',}}
              Icon={() => {
                return <Icon name="chevron-down" size={30} color="#DCDCDC" />
              }}
            />
            <RNPickerSelect
              onValueChange={(value) => setSelectedCity(value)}
              useNativeAndroidPickerStyle={false}  
              style={pickerStyle}
              value={selectedCity}
              items={cityItens}
              onDonePress={() => {return console.log("s")}}
              placeholder={{ label: 'Selecione uma Cidade', value: 's' }}
              Icon={() => {
                return <Icon name="chevron-down" size={30} color="#DCDCDC" />
              }}
            />

            
            <RectButton style={styles.button} onPress={handleNavigateToPoints}>
              <View style={styles.buttonIcon}>
                <Text>
                  <Icon name="log-in" color="#322153" size={24}/>
                </Text>
              </View>
              <Text style={styles.buttonText}>
                Entrar
              </Text>
            </RectButton>
          </View>
        </ImageBackground>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },

    select:{},

    footer:{},

    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 55,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 55,
      width: 65,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#322153',
      borderTopLeftRadius:10,
      borderBottomLeftRadius:10
      
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#322153',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
});

const pickerStyle = {
  inputIOS: styles.input,
  inputAndroid: styles.input,
  iconContainer: {
    top: 15,
    right: 15,
  }
}

export default Home;