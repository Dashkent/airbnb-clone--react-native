import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import StarRating from 'react-native-star-rating'
import styles from './styles'

function Home({ imageUri, width, rating, name, price, type }) {
    return (
        <View style={{ width: width / 2 - 30, height: width / 2 - 30, borderEndWidth: 0.5, borderColor: '#dddddd' }}>
            <View style={{ flex: 1 }}>
                <Image style={styles.image}
                    source={imageUri} />
            </View>
            <View style={styles.textView}>
                <Text style={styles.title}>{type}</Text>
                <Text style={styles.description}>{name}</Text>
                <Text style={{ fontSize: 10 }}> {price} $</Text>
                <StarRating 
                    disabled={true}
                    maxStars={5}
                    rating={rating}
                    starSize={10}
                />
            </View>
        </View>
    )
}

export default Home