import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  View,
  SafeAreaView,
} from "react-native";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { symbols } from "../symbols";
import * as Speech from "expo-speech";
import SymbolBar from "../components/SymbolBar";
import routes from "../routes";

const DeckDetailScreen = ({ route, navigation }: any) => {
  const { deckCategory } = route.params;
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [deckSymbols, setDeckSymbols] = useState([]);
  const [deckNames, setDeckNames] = useState<string[]>([]);
  const [selectedSymbols, setSelectedSymbols] = useState("");

  useEffect(() => {
    symbols.forEach((sym: any) => {
      const deck = sym[deckCategory];
      setDeckNames(Object.keys(deck));
      setDeckSymbols(Object.values(deck));
    });
  }, []);

  const handleSymbolPressed = (symbol: any, index: number) => {
    setSelectedId(index);
    const symbolName = deckNames[index];
    setSelectedSymbols((name) => name + " " + symbolName.replace("_", " "));
    Speech.speak(symbolName.replace("_", " "));
  };

  const handleSpeak = () => {
    if (selectedSymbols) {
      Speech.speak(selectedSymbols);
    }
  };

  const renderGrid = ({ item, index }: any) => {
    return (
      <TouchableOpacity
        onPress={() => handleSymbolPressed(item, index)}
        style={styles.symbols}
      >
        <View style={{ alignItems: "center" }}>
          {item}
          <Text>{deckNames[index].replace("_", " ")}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header
        leftNode={<Ionicons name="md-chevron-back-outline" size={30} />}
        headerText={deckCategory}
        headerTextStyle={{ fontWeight: "bold" }}
        rightNode={
          <Ionicons
            name="volume-high-outline"
            size={40}
            onPress={handleSpeak}
          />
        }
        handleOnPressLeftNode={() => navigation.goBack()}
      />
      <SymbolBar symbols={selectedSymbols} setSymbols={setSelectedSymbols} />
      <FlatList
        data={deckSymbols}
        renderItem={renderGrid}
        style={styles.grid}
        numColumns={3}
        keyExtractor={(item: any, index: number) => index.toString()}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
        // initialNumToRender={1}
        maxToRenderPerBatch={1}
        updateCellsBatchingPeriod={100}
        windowSize={5}
      />
    </SafeAreaView>
  );
};

export default DeckDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridElement: {
    backgroundColor: "white",
    padding: 20,
    margin: 3,
    elevation: 1,
  },
  grid: {
    width: "98%",
  },
  symbols: {
    backgroundColor: "white",
    margin: 3,
    flex: 1,
    flexDirection: "column",
    elevation: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
