import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image: { 
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    textView: { 
        flex: 1,
        alignItems: 'flex-start', 
        justifyContent: 'space-evenly', 
        paddingLeft: 10 
    },
    title:{
        fontSize: 10,
        color: '#b63838'
    },
    description: {
        fontSize: 12,
        fontWeight: 'bold' 
    }
})

export default styles