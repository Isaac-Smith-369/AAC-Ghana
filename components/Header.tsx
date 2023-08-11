import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

type HeaderProps = {
  leftNode?: any | null;
  rightNode?: any | null;
  headerText?: string | null;
  handleOnPressLeftNode?: any | null | undefined;
  handleOnPressRightNode?: any | null | undefined;
  headerTextStyle?: any | null;
  rightNodeStyle?: any | null;
  leftNodeStyle?: any | null;
};

const Header = ({
  leftNode = null,
  rightNode = null,
  headerText = "",
  handleOnPressLeftNode = null,
  handleOnPressRightNode = null,
  headerTextStyle = null,
  rightNodeStyle = null,
  leftNodeStyle = null,
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleOnPressLeftNode}
        style={leftNodeStyle || styles.leftElement}
      >
        {leftNode}
      </Pressable>
      <View style={styles.centerElement}>
        <Text style={[{ textAlign: "center" }, headerTextStyle]}>
          {headerText}
        </Text>
      </View>
      <Pressable
        onPress={handleOnPressRightNode}
        style={rightNodeStyle || styles.rightElement}
      >
        {rightNode}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: "10%",
    height: "13%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  centerElement: {
    flex: 1,
    paddingVertical: 4,
  },
  leftElement: {
    flex: 1,
    paddingLeft: 4,
    paddingVertical: 4,
  },
  rightElement: {
    flex: 1,
    paddingRight: 4,
    alignItems: "flex-end",
    paddingVertical: 4,
  },
});

export default Header;
