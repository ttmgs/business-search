import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";


const ResultsShow = ({ result }) => {
    return(
        <View>
            <Image style={style.image} source={{ uri: result.image_url}} />
             <Text>{result.name}</Text>
             <Text>Reviews: {result.review_count}</Text>
             <Text>Phone: {result.display_phone}</Text>
             <Text>City: {result.location.city}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 18
    },
    image: {
        width: 200,
        height: 120,
        margin: 5
    },
    container: {
        marginLeft: 10
    }
})

export default ResultsShow;