import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../useResults';
import ResultsList from '../components/ResultsList';


const HomeScreen = () => {
  const [getAPI, term, results, errMessage, setTerm] = useResults();
    

  const FilterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price
    })
  }
  
  return (
    <View>
      <SearchBar 
      term={term}
      onTermChange={setTerm}
      onTermSubmit={getAPI}
      />
      {errMessage ? <Text>{errMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>


      <ResultsList title="Cost Effective" result={FilterByPrice("$")}/>
      <ResultsList title="Bit Pricer" result={FilterByPrice("$$")}/>
      <ResultsList title="Expensive" result={FilterByPrice("$$$")}/>

    </View>
  )
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  }
});

export default HomeScreen;
