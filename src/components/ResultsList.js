import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import ResultsShow from "./ResultsShow";
import {withNavigation} from "react-navigation";

const ResultsList = ({ title, result, navigation }) => {
    return(
        <View>

            <Text>{title}</Text>

            
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={result}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return(
                    <TouchableOpacity onPress={() => {
                        // giving navigation object information (id)
                        navigation.navigate("Show", { id: item.id})
                    }}>
                    <ResultsShow 
                    result={item}
                    />
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}


export default withNavigation(ResultsList);