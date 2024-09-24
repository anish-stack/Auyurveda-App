import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import logo from './logo.png'
import SideHeader from './SideHeader';
export default function TopHeader() {
    const [open,setOpen] = useState(false)

    const handleOpen = ()=>{
        setOpen(!open)
    }

    return (
        <>
        
            <View style={styles.headerContainer}>
               {open ? (
                 <FontAwesome onPress={handleOpen} name="close" size={24} color="#A7CF44" style={styles.icon} />
               ):(
                <FontAwesome onPress={handleOpen} name="bars" size={24} color="#A7CF44" style={styles.icon} />
               )}
                <Image source={logo} style={{ width: 40, height: 40, objectFit: 'contain' }} />
                <FontAwesome name="bell" size={24} color="#A7CF44" style={styles.icon} />
            </View>

            <SideHeader isOpen={open} />
            </>

    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 0,
    },
    headerContainer: {
        width: '100%',

        paddingVertical: 15,
        backgroundColor: '#f8f8ff', // Tomato color for a fresh look
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    icon: {
        padding: 5,
    },
});
