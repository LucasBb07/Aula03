import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

  <View style={styles.coluna}>
      <TouchableOpacity style={styles.view1}>
       <Image source={require('./assets/favicon.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.view2}>
      <Image source={require('./assets/favicon.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.view3}>
      <Image source={require('./assets/favicon.png')} />
      </TouchableOpacity>
    
    </View>

    <View style={styles.coluna}>
      <TouchableOpacity style={styles.view1}>
      <Image source={require('./assets/favicon.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.view2}>
      <Image source={require('./assets/favicon.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.view3}>
      <Image source={require('./assets/favicon.png')} />
      </TouchableOpacity>

    </View>



  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff', 
    alignItems: 'center', //alinhamento horizontal
    justifyContent: 'center',  //alinhamento vertical
    padding: 20,
    columnGap: 20
  },
  view1: {
    //flex:1,
    backgroundColor:"#7bd415",
    width:'100%',
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  view2: {
    //flex:1,
    backgroundColor:"#12537a",
    width:'100%',
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view3: {
    //flex:1,
    backgroundColor:"#f20a0a",
    width:'100%',
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coluna: {
    flexDirection: "column",
    width: "50%",
    rowGap: 20
  }
});
