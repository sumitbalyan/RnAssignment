import React from 'react'
import { Image, TouchableNativeFeedback } from 'react-native';

const Items = ({ item, onPress, numColumns}) => {
    let imageURL = item.artworkUrl60;
    return(
        <TouchableNativeFeedback onPress={onPress}>
            <Image key={item.trackId}
                        source={{ uri:  imageURL}}
                        style={{ aspectRatio: 1, flex: 1 / numColumns, margin: 5 }}
                />
        </TouchableNativeFeedback>
  )}

export default Items