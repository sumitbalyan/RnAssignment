import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, Button, FlatList } from 'react-native'
import Items from './Items';
import Loader from './Loader';
import Search from './Search';
import { getData } from './services.js';

const numColumns = 4;

const App = ({navigation}) => {
    const [state, setstate] = useState({
        indicator: false,
        data: [],
        search: '',
    });
    
    const setSeachData = (search)=> {
        setstate({...state, search});
    }
    const onSearch = async ()=> {
        const {search} = state;
        if(search != ''){
        setstate({...state, indicator: true});
        const resultData = await getData(search); 
        const data = resultData.results;
        setstate({...state, indicator: false, data});
        }
    }
    const showDetails = (item)=> {
        navigation.navigate('Details', {item})
    }
    const renderItems = ({ item }) => {
        return(
            <Items
                item={item}
                onPress={() => showDetails(item)}
                numColumns={numColumns}
          />
      )
    }

    return (
        <View style={styles.container}>
             <SafeAreaView>
                <Loader loading = {state.indicator} />
                <View style={styles.searchContainer}>
                    <Search setSeachData = {setSeachData} />
                    <Button title='GO' onPress={onSearch} />
                </View>
                <FlatList
                    numColumns={numColumns}
                    data={state.data}
                    renderItem={renderItems}
                    keyExtractor={(item)=> item.trackId}
            />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop : 10,
    },
    searchContainer: {
        flexDirection: 'row',
        marginLeft: 5,
    },
    item: {
        backgroundColor: 'red',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
})
export default App
