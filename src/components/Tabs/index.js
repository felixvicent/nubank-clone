import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View, Animated } from 'react-native';

import styles from './styles';

export default function Tabs({ translateY }) {
    return (
        <View style={styles.container}>
            <Animated.ScrollView
                horizontal={true}
                contentContainerStyle={{
                    paddingLeft: 10,
                    paddingRight: 20
                }}
                showsHorizontalScrollIndicator={false}
                style={{
                    transform: [{
                        translateY: translateY.interpolate({
                            inputRange: [0, 380],
                            outputRange: [0, 30],
                            extrapolate: 'clamp'
                        })
                    }],
                    opacity: translateY.interpolate({
                        inputRange: [0, 380],
                        outputRange: [1, 0.3],
                        extrapolate: 'clamp'
                    })
                }}
            >
                <View style={styles.tabItem}>
                    <Icon name="person-add" size={24} color="#FFF"/>
                    <Text style={styles.tabText}>Indicar amigo</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF"/>
                    <Text style={styles.tabText}>Cobrar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="arrow-downward" size={24} color="#FFF"/>
                    <Text style={styles.tabText}>Depositar</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="arrow-upward" size={24} color="#FFF"/>
                    <Text style={styles.tabText}>Transferir</Text>
                </View>
                <View style={styles.tabItem}>
                    <Icon name="lock" size={24} color="#FFF"/>
                    <Text style={styles.tabText}>Bloquear cartão</Text>
                </View>
            </Animated.ScrollView>
        </View>
    );
}