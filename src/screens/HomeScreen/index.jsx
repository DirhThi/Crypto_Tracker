import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View, Text, TextInput } from "react-native";
import CoinItem from "../../components/CoinItem";
import { getMarketData } from "../../services/requests";

const HomeScreen = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchCoins = async (pageNumber) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(pageNumber);
    setCoins( [...coinsData]);
    setLoading(false);
  };

  const refetchCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setLoading(false);
  };

  const handleSearchQueryChange = async (query) => {
    setSearchQuery(query);
    if (query.trim() !== "") {
      // const results = await searchCoins(query);
      const results =coins.filter((coin) => coin.name.toLowerCase().includes(query.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{ fontFamily: 'DroidSans', color: "white", fontSize: 25, letterSpacing: 1, paddingHorizontal: 20, paddingBottom: 5 }}>Cryptoassets</Text>
      </View>
      <View  style={{width:'100%',padding:10,paddingHorizontal:15}}>
          <TextInput
            style={{width:'100%',height:40,borderRadius:15,backgroundColor:'white',color:'black',paddingHorizontal:10}}
            placeholder="Search coin"
            placeholderTextColor={'black'}
            value={searchQuery}
            onChangeText={handleSearchQueryChange}
            require
          />
        </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={ searchQuery !== "" ? searchResults : coins}
        renderItem={({ item }) => <CoinItem marketCoin={item} />}
        onEndReached={() => fetchCoins(coins.length / 50 + 1)}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            tintColor="white"
            onRefresh={refetchCoins}
          />
        }
      />
    </View>
  );
};

export default HomeScreen;
