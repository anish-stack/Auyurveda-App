import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import register from './register.png';
import InputBox from '../../components/Forms/InputBox';
import { FontAwesome } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function Register() {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        name: '',
        number: '1234567890', // Default phone number
        password: 'password123', // Default password
        referralCode: '',
    });

    const [passwordVisible, setPasswordVisible] = useState(false);

    // Handle input changes
    const handleChange = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = () => {
        const { name, number, password } = formData;

        // Basic validation
        if (!name || !number || !password) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'All fields are required!',
            });
            return;
        }

        if (number.length !== 10) {
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Phone number must be exactly 10 digits!',
            });
            return;
        }

        // If validation passes
        Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Registration Successful!',
        });

        // Reset the form after successful registration
        setFormData({
            name: '',
            number: '1234567890', // Reset to default phone number
            password: 'password123', // Reset to default password
            referralCode: '',
        });
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
            style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image source={register} style={styles.image} />

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name</Text>
                    <InputBox
                        placeholder="Enter your name"
                        value={formData.name}
                        setValue={(value) => handleChange('name', value)}
                        autoFocus={true}
                        keyboardType="default"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Contact Number</Text>
                    <InputBox
                        placeholder="Enter your phone number"
                        value={formData.number}
                        setValue={(value) => handleChange('number', value)}
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
                            value={formData.password}
                            setValue={(value) => handleChange('password', value)}
                            secureTextEntry={!passwordVisible}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                            <FontAwesome name={passwordVisible ? 'eye' : 'eye-slash'} size={20} color="#555" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Referral Code (if any)</Text>
                    <InputBox
                        placeholder="Enter referral code"
                        value={formData.referralCode}
                        setValue={(value) => handleChange('referralCode', value)}
                    />
                </View>

                <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Sign Up & Enjoy Exclusive Perks!</Text>
                </TouchableOpacity>
                <Text style={styles.footerText}>
                    Already have an account? <Text onPress={() => navigation.navigate('Login')} style={styles.linkText}>Log in here!</Text>
                </Text>

                <Toast />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    },
    image: {
        width: width * 0.5,
        height: width * 0.5,
        resizeMode: 'contain',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#555',
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
    eyeIcon: {
        position: 'absolute',
        padding: 10,
        width: 40,
        right: 0,
    },
    submitButton: {
        backgroundColor: '#A7CF44',
        paddingVertical: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    submitButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footerText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
        textAlign: 'center',
    },
    linkText: {
        color: '#007bff',
        marginBottom: 12,
        fontWeight: 'bold',
    },
});
