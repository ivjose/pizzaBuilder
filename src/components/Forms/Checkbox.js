import React from "react";
import { Text, View, CheckBox, StyleSheet } from "react-native";

const Checkbox = props => {
  return (
    <View style={styles.checkboxWrap}>
      <CheckBox value={props.checked} onValueChange={props.selectedSize} />
      <Text>Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxWrap: {
      flexDirection: 'row'
  }
});


export default Checkbox