import React from 'react'
import { StyleSheet, Platform } from 'react-native' 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    screen: {
        height: 80,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    textInput: {
        flex: 1,
        fontWeight: '700',
        backgroundColor: 'white'
    },
    searchView: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1,
        marginTop: Platform.OS === 'android' ? 30 : null
    },
    categoryView: {
        flex: 1,
        backgroundColor: 'white', 
        paddingTop: 20 
    },
    title: {
        fontSize: 24, 
        fontWeight: '700', 
        paddingHorizontal: 20
    },
    subtitle: {
        fontWeight: '100', 
        marginTop: 10 
    },
    image: { 
        flex: 1, 
        height: null, 
        width: null, 
        resizeMode: 'cover', 
        borderRadius: 5, 
        borderWidth: 1, 
        borderColor: '#dddddd' 
    },
    section: {
        marginTop: 40,
        paddingHorizontal: 20 
    }
})

export default styles