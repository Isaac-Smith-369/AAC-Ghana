import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SymbolBar = ({ symbols, setSymbols }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.symbolBar}>
        <TextInput
          style={styles.input}
          value={symbols}
          onChangeText={setSymbols}
          caretHidden={true}
          showSoftInputOnFocus={false}
        />
        <Ionicons
          name="backspace-outline"
          size={30}
          style={{ marginRight: 5 }}
          onPress={() => {
            const li = symbols.lastIndexOf(" ");
            setSymbols(symbols.substring(0, li));
          }}
          onLongPress={() => {
            setSymbols("");
          }}
        />
      </View>
    </View>
  );
};

export default SymbolBar;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
  },
  symbolBar: {
    padding: 5,
    flexDirection: "row",
    width: "100%",
    height: 80,
    backgroundColor: "#d9dbda",
    borderRadius: 8,
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    marginLeft: 5,
    width: "90%",
    fontWeight: "bold",
  },
});
