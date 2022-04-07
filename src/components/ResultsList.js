import React from "react";
import { FlatList, Text, View } from "react-native";
import ResultsShow from "./ResultsShow";

const ResultsList = ({ title, result }) => {
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
                    <ResultsShow 
                    result={item}
                    />
                )
            }}
            />
        </View>
    )
}


export default ResultsList;