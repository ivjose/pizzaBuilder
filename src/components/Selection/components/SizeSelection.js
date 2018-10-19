import React from "react";
import { Text, View, CheckBox, StyleSheet, Picker } from "react-native";

const SizeSelection = props => {
  return (
    <View style={styles.checkboxWrap}>
      <Text style={styles.title}>{props.title}</Text>

      <Picker
        style={styles.selectionGroup}
        itemStyle={styles.selectionGroup}
        selectedValue={props.selectedSize}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => props.handleSelectSize(itemValue)}>
        <Picker.Item  label="Select Size" value={null}/>
        {
          props.sizeList.map(item => (
            <Picker.Item key={item.value} label={item.inches} value={item.value} />
          ))
        }
      </Picker> 
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxWrap: {
    flex: 1,
    flexDirection: "column", 
    width: "100%",
  },
  selectionGroup: { 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  }
});

export default SizeSelection;
