import React from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCode from 'react-native-qrcode-svg';

import styles from './styles';

export default function Menu({ translateY }) {
    return(
        <Animated.ScrollView 
            style={[styles.container, {
                opacity: translateY.interpolate({
                    inputRange: [0., 150],
                    outputRange: [0, 1]
                })
            }]}
        >
            <View style={styles.code}>
                <QRCode
                    value="http://rocketseat.com.br"
                    size={80} 
                    backgroundColor="#FFF"
                    color="#8B10AE"
                />
            </View>

            <View style={styles.nav}>
                <View style={styles.navItem}>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <Text style={styles.navText}>Me ajuda</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <Text style={styles.navText}>Perfil</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <Text style={styles.navText}>Configurar cartão</Text>
                </View>
                <View style={styles.navItem}>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <Text style={styles.navText}>Configuração do app</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.signOutButton} onPress={() =>{}}>
                <Text style={styles.signOutButtonText}>SAIR DO APP</Text>
            </TouchableOpacity>
        </Animated.ScrollView>
    );
}