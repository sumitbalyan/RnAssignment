import React from 'react'
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Image, ImageBackground, TextInput, Dimensions, TouchableOpacity, ActivityIndicator, Modal, Platform } from 'react-native';

const {width : WIDTH} = Dimensions.get('window');

const Search = ({setSeachData}) => {
    return (
        <View>
            <TextInput 
                        style = {styles.input}
                        placeholder = {'Search'}
                        placeholderTextColor = {'rgba(255,255,255,0.7)'}
                        underlineColorAndroid = 'transparent'
                        onChangeText = {(text)=> setSeachData(text) }
                        autoCapitalize = 'none'
                        />
        </View>
    )
}
const styles = StyleSheet.create({

    input : {
        width : WIDTH - 100,
        height : 45,
        borderRadius : 25,
        fontSize : 16,
        paddingLeft : 45,
        color : 'rgba(255,255,255,0.7)',
        backgroundColor : 'rgba(0,0,0,0.35)',
        marginHorizontal : 10,
    },

});
export default Search
