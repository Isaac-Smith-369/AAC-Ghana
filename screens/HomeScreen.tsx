import {
  StyleSheet,
  SafeAreaView,
  Button,
  Text,
  View,
  FlatList,
  StatusBar as Sb,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { symbols, categories } from "../symbols";

const HomeScreen = ({ navigation }: any) => {
  const [selectedId, setSelectedId] = useState(null);
  for (const [key, value] of Object.entries(symbols)) {
    // console.log(`${key}: ${value}`);
  }

  const handleCategoryPress = (item: any) => {
    setSelectedId(item);
  };

  const List = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={() => handleCategoryPress(item)}>
        <Text style={styles.listElement}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Five width={120} height={80} /> */}
      <FlatList
        data={categories}
        renderItem={List}
        numColumns={3}
        style={styles.list}
        keyExtractor={(item) => item}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "lightgrey",
    // marginTop: Sb.currentHeight || 0,
  },
  listElement: {
    backgroundColor: "white",
    padding: 20,
    margin: 3,
    elevation: 1,
  },
  list: {
    // backgroundColor: "lightgrey",
    width: "95%",
  },
});
