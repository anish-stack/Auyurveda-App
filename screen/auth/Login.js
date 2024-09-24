import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import InputBox from '../../components/Forms/InputBox';
import Toast from 'react-native-toast-message';
import { FontAwesome } from '@expo/vector-icons'; // Ensure you have installed expo/vector-icons
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState('1234567890'); // Default phone number
    const [password, setPassword] = useState('password123'); // Default password
    const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
    const navigation = useNavigation()
    const handleLogin = () => {
        if (phoneNumber.length !== 10) {
            Toast.show({
                text1: 'Error',
                text2: 'Please enter a valid 10-digit phone number.',
                type: 'error',
            });
            return;
        }
        
        Toast.show({
            text1: 'Success',
            text2: 'Logged in successfully!',
            type: 'success',
        });
        navigation.navigate('Home')
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Welcome Back!</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Contact Number</Text>
                    <InputBox
                        placeholder="Enter your phone number"
                        value={phoneNumber}
                        setValue={setPhoneNumber}
                        keyboardType="phone-pad"
                        maxLength={10} // Limit to 10 digits
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordContainer}>
                        <InputBox
                            placeholder="Create a password"
                            style={{ width: width - 38 }}
                            value={password}
                            setValue={setPassword}
                            secureTextEntry={!passwordVisible}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                            <FontAwesome name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="#555" />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={handleLogin} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Log In</Text>
                </TouchableOpacity>
                
                <Text style={styles.footerText}>
                    Don't have an account?{' '}
                    <Text onPress={() => navigation.navigate('Register')} style={styles.linkText}>Register here!</Text>
                </Text>

                <Toast />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7F8',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1F2937', 
        marginBottom: 20,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#4B5563', 
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    passwordContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    submitButton: {
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 30,
        backgroundColor: '#A7CF44', 
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerText: {
        marginTop: 20,
        fontSize: 14,
        color: '#6B7280', // Gray color
        textAlign: 'center',
    },
    linkText: {
        color: '#3B82F6', // Blue for the link
        fontWeight: 'bold',
    },
    eyeIcon: {
        position: 'absolute',
        padding: 10,
        width: 40,
        right: 0
    },
});
