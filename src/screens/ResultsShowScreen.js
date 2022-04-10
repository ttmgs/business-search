import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";


const ResultsShowScreen = ({ navigation }) => {

     const [result, setResult] = useState([]);

    //  grabbing id from navigation object
    const id = navigation.getParam("id");

    const getBusiness = async (id) => {
        const response = await yelp.get(`${id}`);
       setResult(response.data)
    };

    useEffect(() => {
        getBusiness(id)
    }, [])


    // error message
    if (!result) {
        return null
    }

    return(
        <View>
            <FlatList 
            data={result.photos}
            keyExtractor={(photo) => { photo.id}}
            renderItem={({ item }) => {
                return(
                    <Image 
                    style={styles.image}
                    source={{ uri: item}}      
                    />
                )
            }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 300
    }
})

export default ResultsShowScreen;