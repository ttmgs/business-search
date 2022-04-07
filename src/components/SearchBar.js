import React from "react";
import { View, StyleSheet, TextInput} from "react-native";


const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return(
        <View style={styles.container}>
            <TextInput 
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            style={styles.input}
            placeholder="Search"           
            />

        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        width: 200,
        height: 50,
        borderColor: 'black'
    },
    container: {
        textAlign: 'center'
    }
})

export default SearchBar;