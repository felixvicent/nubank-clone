import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        marginHorizontal: 30
    },
    code: {
        backgroundColor: '#FFF',
        padding: 10,
        alignSelf: 'center'
    },
    nav: {
        marginTop: 30,
        alignSelf: 'stretch',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(255, 255, 255, 0.8)'
    },
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(255, 255, 255, 0.8)'
    },
    navText: {
        fontSize: 13,
        color: '#FFF',
        marginLeft: 20
    },
    signOutButton: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 15
    },
    signOutButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 13
    }
});