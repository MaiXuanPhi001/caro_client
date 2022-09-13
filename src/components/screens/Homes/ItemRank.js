import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ItemRank = ({ item, index }) => {
    return (
        <View style={styles.container}>
            <View style={styles.infomation}>
                <Image
                    style={styles.avatar}
                    source={{ uri: item.img }} />
                <View>
                    <Text style={styles.username}>{item.username}</Text>
                    <Text style={styles.elo}>Elo: {item.elo}</Text>
                </View>
            </View>
            {(index + 1) === 1 ?
                <Image
                    style={styles.imgRank}
                    resizeMode='contain'
                    source={require('../../../assets/images/rank/gold-medal.png')}
                /> : (index + 1) === 2 ?
                    <Image
                        style={styles.imgRank}
                        resizeMode='contain'
                        source={require('../../../assets/images/rank/silver-medal.png')}
                    /> : (index + 1) === 3 ?
                        <Image
                            style={styles.imgRank}
                            resizeMode='contain'
                            source={require('../../../assets/images/rank/bronze-medal.png')}
                        /> :
                        <Text
                            style={[
                                styles.username,
                                {marginRight: 30}
                            ]}
                        >
                            {(index + 1)}
                        </Text>
            }
        </View>
    )
}

export default ItemRank

const styles = StyleSheet.create({
    elo: {
        color: '#B8BDC2'
    },
    username: {
        color: '#091E42',
        fontWeight: 'bold',
    },
    infomation: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 10
    },
    imgRank: {
        width: 30,
        height: 30,
        marginRight: 15
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#B8BDC2',
        borderBottomWidth: 1,
        height: 60,
        alignItems: 'center'
    }
})