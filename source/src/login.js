import React, { useState } from "react";

import { View, TextInput, Text, StyleSheet, Button, TouchableOpacity, Alert, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

import CustomButton from "./button";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailvalidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    const passwordvalidation = /^[A-Z](?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;

    const handleLogin = () => {
        if (!emailvalidation.test(email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }

        if (!passwordvalidation.test(password)) {
            Alert.alert('Invalid Password', 'Password must start with a capital letter, contain at least one number and one special character, and be at least 8 characters long.');
            return;
        }

        navigation.navigate('HomeScreen', { email: email, password: password })
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            
                <View>
                    <Text style={styles.welcomeText}>
                        Welcome!{'\n'}Glad to See You,</Text>
                    <View style={{ rowGap: 10 }}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your email"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                       
                        <Text style={styles.forgrotText}>Forgot Password?</Text>
                    
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={handleLogin}>
                            <CustomButton tittle={'Login'} />
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Don't have account?
                            <Text style={[styles.forgrotText, { color: '#324F40', fontWeight: 'bold' }]} onPress={() => navigation.navigate('SignUpScreen')}> Sign up</Text>
                        </Text>
                    </View>
                </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#ececea',
        padding: 10,
    },
    welcomeText: {
        fontSize: 40,
        fontWeight: 'bold',
        bottom: 60,
    },
    textInput: {
        height: 60,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 15
    },
    forgrotText: {
        fontWeight: 'bold',
        textAlign: 'right',
    },
    buttonContainer: {
        top: 15, 
        gap: 4
    }

})