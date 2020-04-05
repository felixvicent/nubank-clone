import React from 'react';
import { View, Text, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import styles from './styles';

export default function Main() {
    let offset = 0;

    const translateY = new Animated.Value(0);
    const anumatedEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationY: translateY,
                }
            }
        ],
        { useNativeDriver: true },
    );

    function onHandlerStateChanged(event) {
        if(event.nativeEvent.oldState === State.ACTIVE){
            let opened = false;
            const { translationY } = event.nativeEvent;

            offset += translationY;

            if(translationY >= 100){
                opened = true;
            }
            else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? 430 : 0,
                duration: 200,
                useNativeDriver: true,
            }).start(() => {
                offset = opened ? 430 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
            
        }
    }

    return(
        <View style={styles.container} >
            <Header />
                <View style={styles.content}>
                    <Menu translateY={translateY} />
                    <PanGestureHandler
                        onGestureEvent={anumatedEvent}
                        onHandlerStateChange={onHandlerStateChanged}
                    >
                        <Animated.View 
                            style={[styles.card, { 
                                transform: [{
                                    translateY: translateY.interpolate({
                                        inputRange: [-350 , 0, 430],
                                        outputRange: [-50, 0, 430],
                                        extrapolate: 'clamp',
                                    }),
                                }]
                            }]}
                        >
                            <View style={styles.cardHeader}>
                                <Icon name="attach-money" size={28} color="#666" />
                                <Icon name="visibility-off" size={28} color="#666" />
                            </View>
                            <View style={styles.cardContent}>
                                <Text style={styles.title}>Saldo disponível</Text>
                                <Text style={styles.description}>R$ 45.694,13</Text>
                            </View>
                            <View style={styles.cardFooter}>
                                <Text style={styles.annotation}>Transferência de R$ 45.674,00 recebida hoje de Volim Habar hoje às 10:00h</Text>
                            </View>
                        </Animated.View>
                    </PanGestureHandler>
                </View>
            <Tabs translateY={translateY}/>
        </View>
    );
}