import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import imageOne from './logo.png';
import imageTwo from './image2.png';
import imageThree from './image3.png';
import imageFour from './Refer.png'; // Ensure this is the correct image path
import { useNavigation } from '@react-navigation/native';
export default function OnBoard() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#F6F7F8',
                        image: <Image resizeMode='cover' resizeMethod='resize' source={imageOne} style={styles.image} />,
                        title: (
                            <Text style={styles.title}>
                                Welcome to <Text style={styles.highlight}>Om Sri Sale Solutions</Text>
                            </Text>
                        ),
                        subtitle: (
                            <Text style={styles.subtitle}>
                                Embrace the healing power of Ayurveda for a balanced and healthier life!
                            </Text>

                        ),
                    },
                    {
                        backgroundColor: '#F6F7F8',
                        image: <Image resizeMode='cover' resizeMethod='resize' source={imageTwo} style={styles.image} />,
                        title: (
                            <Text style={styles.title}>
                                Powering Your Health with <Text style={styles.highlight}>Our Natural  Products</Text>

                            </Text>
                        ),
                        subtitle: (
                            <Text style={styles.subtitle}>
                                Discover the essence of nature with our carefully crafted Ayurvedic solutions, designed to revitalize your body and mind.
                            </Text>

                        ),
                    },
                    {
                        backgroundColor: '#F6F7F8',
                        image: <Image resizeMode='cover' resizeMethod='resize' source={imageThree} style={styles.image} />,
                        title: (
                            <Text style={styles.title}>
                                Fortify Your Health 💪  <Text style={styles.highlight}>With Veda Vita</Text>
                            </Text>
                        ),
                        subtitle: (
                            <Text style={styles.subtitle}>
                                Comprehensive support for immunity, energy, and overall wellness through essential vitamins and antioxidants.
                            </Text>
                        ),
                    },
                    {
                        backgroundColor: '#F6F7F8',
                        image: <Image resizeMode='cover' resizeMethod='resize' source={imageFour} style={styles.image} />,
                        title: (
                            <Text style={styles.title}>
                                Join the Revolution with <Text style={styles.highlight}>Health and Earn Through Referrals</Text>
                            </Text>

                        ),
                        subtitle: (
                            <Text style={styles.subtitle}>
                                Let us support your journey to success.
                            </Text>

                        ),
                    }
                ]}
                SkipButtonComponent={(props) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}  {...props} style={{ paddingHorizontal: 32, paddingVertical: 8, backgroundColor: '#A7CF44', borderRadius: 9999 }}>
                        <Text style={{ color: '#fff', fontWeight: '600' }}>Skip</Text>
                    </TouchableOpacity>
                )}
                NextButtonComponent={(props) => (
                    <TouchableOpacity {...props} style={{ paddingHorizontal: 32, paddingVertical: 8, backgroundColor: '#28834C', borderRadius: 9999 }}>
                        <Text style={{ color: '#FFFFFF', fontWeight: '600' }}>Next</Text>
                    </TouchableOpacity>
                )}
                DoneButtonComponent={(props) => (
                    <TouchableOpacity {...props} onPress={() => navigation.navigate('Register')} style={{ paddingHorizontal: 32, paddingVertical: 8, backgroundColor: '#28834C', borderRadius: 9999 }}>
                        <Text style={{ color: '#FFFFFF', fontWeight: '600' }}>Register Now</Text>
                    </TouchableOpacity>
                )}
                transitionAnimationDuration={100}
                bottomBarHighlight={false}
                showSkip={true}
                showDone={true}
                containerStyles={{ paddingVertical: 16 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7F8'
    },
    image: {
        width: 250,
        objectFit: 'contain',
        height: 250
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333'
    },
    highlight: {
        color: '#A7CF44'
    },
    subtitle: {
        fontSize: 14,
        textAlign: 'center',
        color: '#555',
        marginTop: 10
    }
});
