import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground, TextInput, Button, Alert,Image, StyleSheet  } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      Alert.alert(
        'Thông tin đăng nhập',
        `Username: ${username}\nPassword: ${password}`,
        [{ text: 'OK' }]
      );
    } else {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ Username và Password');
    }
  };
  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bia.webp')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Image source={require('./assets/logopokemon.png')} style={styles.logo} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            value={password}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  logo: {
    width: 500, // Điều chỉnh kích thước của khung ảnh
    height: 250, // Điều chỉnh kích thước của khung ảnh
    marginBottom: 20, // Có thể điều chỉnh khoảng cách giữa khung ảnh và các phần tử khác
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
}); 