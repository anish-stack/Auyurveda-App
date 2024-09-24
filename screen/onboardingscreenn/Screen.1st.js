import React, { useEffect, useRef } from 'react';
import { View, SafeAreaView, Image, Animated } from 'react-native';
import logo from '../../images/logo.webp';

export default function ScreenIst() {
  // Animation setup using Animated API
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Trigger the animation on component mount
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000, // Fade in over 1 second
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000, // Fade out over 1 second
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [fadeAnim]);

  return (
    <SafeAreaView className="flex-1 flex-row">
      <View className="flex-1 items-center justify-center border h-screen px-2 py-2">
        {/* Logo with blink/fade animation */}
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image source={logo} style={{width:40,height:40}}  />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
