import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Details = ({route, navigation}) => {
    const { item } = route.params;
    console.log(item)
    const {artistName, collectionName, trackName, releaseDate, primaryGenreName, shortDescription} = item;
    return (
        <View style={styles.container}>
             <View style={styles.containerResult}>
                <Text style={styles.text}>Atist Name</Text>
                <Text style={styles.textResult}>{artistName}</Text>
            </View>
            <View style={styles.containerResult}>
                <Text style={styles.text}>Collection Name</Text>
                <Text style={styles.textResult}>{collectionName}</Text>
            </View>
            <View style={styles.containerResult}>
                <Text style={styles.text}>Track Name</Text>
                <Text style={styles.textResult}>{trackName}</Text>
            </View>
            <View style={styles.containerResult}>
                <Text style={styles.text}>Release Date</Text>
                <Text style={styles.textResult}>{releaseDate}</Text>
            </View>
            <View style={styles.containerResult}>
                <Text style={styles.text}>Primary Genre Name</Text>
                <Text style={styles.textResult}>{primaryGenreName}</Text>
            </View>
            {shortDescription && <><View style={styles.containerResult}>
                <Text style={styles.text}>ShortDescription</Text>
            </View>
            <Text style={styles.textResult}>{shortDescription}</Text>
            </>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop : 10,
    },
    containerResult: {
        justifyContent:'space-between',
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 20,
    },
    text: {
        padding: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    textResult: {
        padding: 5,
        fontSize: 14,
    },
});

export default Details
