import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import styles from './styles'

function Category({ imageUri, name }) {

    return (
        <View style={styles.category}>
            <View style={{ flex: 2 }}>
                <Image source={imageUri} style={styles.image} />
            </View>
            <View style={styles.text}>
                <Text>{name}</Text>
            </View>
        </View>
    )
}

export default Category