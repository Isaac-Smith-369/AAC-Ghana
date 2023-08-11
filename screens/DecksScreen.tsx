import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { categories, thumbnailMap } from "../symbols";
import React from "react";
import routes from "../routes";
import Header from "../components/Header";
import SymbolBar from "../components/SymbolBar";

const DecksScreen = ({ route, navigation }: any) => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedSymols, setSelectedSymbols] = useState("");

  useEffect(() => {
    if (route.params?.selectedSymbols) {
      setSelectedSymbols(route.params?.selectedSymbols);
    }
  }, [route.params?.selectedSymbols]);

  const handleCategoryPress = (category: any) => {
    setSelectedId(category);
    navigation.navigate(routes.DECK_DETAIL, {
      deckCategory: category,
      symbolsParam: selectedSymols,
    });
  };

  const List = ({ item }: any) => {
    const Logo = thumbnailMap.get(item);
    return (
      <TouchableOpacity onPress={() => handleCategoryPress(item)}>
        <View style={styles.listElement}>
          {Logo}
          <Text style={{ fontWeight: "bold" }}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header
        leftNode={<Text style={{ fontWeight: "bold", fontSize: 20 }}>CT</Text>}
        headerText="Decks"
        headerTextStyle={{ fontWeight: "bold" }}
        rightNode={<Ionicons name="add-outline" size={30} />}
      />
      <SymbolBar symbols={selectedSymols} setSymbols={setSelectedSymbols} />
      <FlatList
        data={categories}
        renderItem={List}
        style={styles.list}
        keyExtractor={(item) => item}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default DecksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listElement: {
    backgroundColor: "white",
    padding: 20,
    margin: 3,
    flexDirection: "row",
    alignItems: "center",
    elevation: 1,
  },
  list: {
    width: "95%",
  },
});
