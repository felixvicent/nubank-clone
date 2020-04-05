import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View,Image } from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={logoImg} />
                <Text style={styles.title}>Felps</Text>
            </View>

            <Icon name="keyboard-arrow-down" size={20} color="#FFF"/> 
        </View>
    );
}