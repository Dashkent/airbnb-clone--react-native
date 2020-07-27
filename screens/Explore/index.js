import React, { useRef } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    Animated
} from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import Category from '../../components/Explore/Category'
import Home from '../../components/Explore/Home'
import Tag from '../../components/Explore/Tag'

const { width } = Dimensions.get('window')

function Explore() {
    const startHeaderHeight = 90
    const endHeaderHeight = 50

    if (Platform.OS === 'android') {
        startHeaderHeight = 100 + StatusBar.currentHeight
        endHeaderHeight = 70 + StatusBar.currentHeight
    }

    const scrollY = useRef(new Animated.Value(0)).current

    let animatedHeaderHeight = scrollY.interpolate({
        inputRange: [0, 50],
        outputRange: [startHeaderHeight, endHeaderHeight],
        extrapolate: 'clamp'
    })

    let animatedOpacity = animatedHeaderHeight.interpolate({
        inputRange: [endHeaderHeight, startHeaderHeight],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })

    let animatedTagTop = animatedHeaderHeight.interpolate({
        inputRange: [endHeaderHeight, startHeaderHeight],
        outputRange: [-30, 10],
        extrapolate: 'clamp'
    })


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
                <Animated.View style={{
                    height: animatedHeaderHeight,
                    backgroundColor: 'white',
                    borderBottomWidth: 1,
                    borderBottomColor: '#dddddd'
                }}>
                    <View style={styles.searchView}>
                        <Ionicons name="ios-search" size={20} style={{ marginRight: 10 }} />
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder="Try New Delhi"
                            placeholderTextColor="grey"
                            style={styles.textInput}
                        />
                    </View>
                    <Animated.View style={{ flexDirection: 'row', marginHorizontal: 20, postion: 'relative', top: animatedTagTop, opacity: animatedOpacity }}>
                        <Tag name='Guests' />
                        <Tag name='Dates' />
                    </Animated.View>
                </Animated.View>
                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [
                            { nativeEvent: { contentOffset: { y: scrollY } } }
                        ]
                    )}
                >
                    <View style={styles.categoryView}>
                        <Text style={styles.title}>
                            What can we help you find, Varun?
                    </Text>
                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <Category imageUri={require('../../assets/brown-building.jpg')} name="Home" />
                                <Category imageUri={require('../../assets/landscape-photo-of-mountains-under-gray-sky.jpg')} name="Expiriences" />
                                <Category imageUri={require('../../assets/macbook-on-brown-wooden-dining-table-and-chairs.jpg')} name="Restaurants" />
                            </ScrollView>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.title}>
                                Introducing Airbnb Plus
                            </Text>
                            <Text style={styles.subtitle}>
                                A new selection of homes verified for quality & comfort
                            </Text>
                            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                <Image
                                    style={styles.image}
                                    source={require('../../assets/white-blue-and-yellow-house.jpg')}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <Text style={styles.title}>
                            Homes around the world
                        </Text>
                        <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <Home width={width} name='The cozy place' type='PRIVATE ROOM - 1 BED' price={50} rating={3} imageUri={require('../../assets/brown-and-beige-living-room-interior.jpg')} />
                            <Home width={width} name='The cozy place' type='PRIVATE ROOM - 2 BEDS' price={90} rating={5} imageUri={require('../../assets/photo-of-green-cactus-plant-beside-clear-drinking-glass.jpg')} />
                            <Home width={width} name='The cozy place' type='PRIVATE ROOM - 2 BEDS' price={82} rating={4} imageUri={require('../../assets/macbook-pro-and-a-cup-of-coffee-on-table.jpg')} />
                            <Home width={width} name='The cozy place' type='PRIVATE ROOM - 2 BEDS' price={77} rating={4} imageUri={require('../../assets/woman-and-man-standing-on-stairs.jpg')} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default Explore