  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
  import {setTotal, useState} from 'react';

  export default function App() { 
    const [total,setTotal] = useState(0);

    const adicionarTotal = (preco) => {
      setTotal(total + preco);
    }

    const zerar = () => {
      alert("Seu pedido deu: R$" + total.toFixed(2))
      setTotal(0);
    };

    return (
      
      <View style={styles.container}>
          
          <Image source={require('./assets/mcdonalds1.png')}  style={styles.image}/>
        <Text style={styles.thText}>Podrão do Lucas</Text>

        <View style={styles.lanches}>
          <View style={styles.coluna}> 
            <TouchableOpacity style={styles.view1} onPress={() => adicionarTotal(28.00)}>
              <Text>Xis Alcatra</Text>
              <Image source={require('./assets/xisalcatra.png')}  style={styles.image}/>
              <Text>R$28,00</Text>
            </TouchableOpacity>

          
            <TouchableOpacity style={styles.view1}onPress={() => adicionarTotal(40.00)}>
              <Text>Big Mac</Text>
              <Image source={require('./assets/bigmac.png')}  style={styles.image}/>
              <Text>R$40,00</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.coluna} onPress={() => adicionarTotal(30.00)}>
            <TouchableOpacity style={styles.view1}>
            <Text>Xis Gaúcho</Text>
            <Image source={require('./assets/xisgaucho.png')}  style={styles.image}/>
            <Text>R$30,00</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.view1} onPress={() => adicionarTotal(35.00)}>
            <Text>Big Arch</Text>
            <Image source={require('./assets/mcarch.png')}  style={styles.image}/>
            <Text>R$35,00</Text>
            </TouchableOpacity>

          </View>

        </View>

        <TouchableOpacity style= {styles.botao} onPress={zerar}>
        <Text style={styles.botaoTexto}>Finalizar Pedido - Total: R$ {total.toFixed(2)}  </Text>
        </TouchableOpacity>

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f20a0a', 
      alignItems: 'center', //alinhamento horizontal
      justifyContent: 'center',  //alinhamento vertical
      padding: 20,
      rowGap: 20
    },
    lanches: {
      flexDirection: 'row',
      backgroundColor: '#f20a0a', 
      alignItems: 'center', //alinhamento horizontal
      justifyContent: 'center',  //alinhamento vertical
      columnGap: 10
    },
    coluna: {
      width:'40%',
      flexDirection: 'column',
      backgroundColor: '#f20a0a', 
      alignItems: 'center', //alinhamento horizontal
      justifyContent: 'center',  //alinhamento vertical
      rowGap: 10
    },
    view1: {
      //flex:1,
      backgroundColor:"#ffef0a",
      width:'100%',
      height: 200,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    
    },
    view2: {
      //flex:1,
      backgroundColor:"#12537a",
      width:'100%',
      height: 200,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    /*view3: {
      //flex:1,
      backgroundColor:"#f20a0a",
      width:'10%',
      height: 200,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    */

    image: {
      width: 100,
      height: 110,
    },
    thText: {
      fontSize: 30,
      color: "yellow",

    },
    botao: {
      position: 'absolute',
      bottom: 20,
      backgroundColor: "#ffef0a",
      paading: 15,
      borderRadius:5,
      width:'90%',
      alignItems:'center'

    },
    botaoTexto: {
      color:"black",
      fontSize:18,
      fontWeight:"bold"
    }
  });
