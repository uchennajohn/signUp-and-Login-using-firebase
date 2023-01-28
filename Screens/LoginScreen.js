import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

const LoginScreen = () => {

const [email, setEmail] = useState('');
const [password, setPassword]= useState('');
const navigation = useNavigation()




useEffect(()=>{
  const unsubsribe = auth.onAuthStateChanged(user =>{
    if(user) {
      navigation.replace("Home")
    }
  })

  return unsubsribe
}, [])


const handleSignUp= ()=> {
  auth
  .createUserWithEmailAndPassword(email, password)
  .then(userCredentials =>{
    const user = userCredentials.user;
    console.log('Registered in with',user.email)
  })
  .catch(error =>alert(error.message) )
}

const handleLogin=()=>{
  auth
  .signInWithEmailAndPassword(email, password)
  .then(userCredentials =>{
    const user = userCredentials.user;
    console.log('logged in with',user.email)
  })
  .catch(error =>alert(error.message) )
}
 


  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior="padding "
    >


    <View style={styles.inputContainer}>
      <TextInput 
      placeholder='email'
      value={email}
       onChangeText={text=> setEmail(text)}
      style={styles.input} 
      />

<TextInput 
      placeholder='password'
      value={password}
      onChangeText={text=> setPassword(text) }
      style={styles.input} 
      secureTextEntry 
      />
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity
      onPress={handleLogin }
      style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>

      </TouchableOpacity>

      <TouchableOpacity
      onPress={handleSignUp}
      style={[styles.button, styles.buttonOutline ]}
      >
        <Text style={styles.buttonText1}>Register</Text>

      </TouchableOpacity>
    </View>

    

    
 

    
    
     
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  input:{
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius:10
  },
  inputContainer:{
      width:"80%",
  } ,
  buttonContainer:{
    width:"60%",
    justifyContent:"center",
    alignItems:"center",
    marginTop:40
  } ,
  button:{
    backgroundColor:"#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonOutline:{
    backgroundColor: "white",
    marginTop: 10 ,
    borderColor:'#0782F9',
    borderWidth:2
  },
  buttonText:{
    fontSize: 15,
    fontWeight:'bold',
    color:"white"
  },
  buttonText1:{
    fontSize: 15,
    fontWeight:'bold',
    color:'#0782F9'
  }
  
})