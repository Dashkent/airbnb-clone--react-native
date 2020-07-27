import React from 'react'
import { StyleSheet, NativeModules } from 'react-native'

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    category: {
        width: 130,
        height: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd'
    },
    text: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10
    }
})

export default styles