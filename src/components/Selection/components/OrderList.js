import React from "react";
import { Text, View, CheckBox, StyleSheet, FlatList } from "react-native";

const OrderList = props => {
  return (
    <View style={styles.Wrap}>
      <Text style={styles.Title}>{props.title}</Text>
      <View style={styles.ListWrap}>
        <Text style={styles.SubTitle}>Size</Text>
        <Text style={styles.ListItem}>{props.selectedSize}</Text>
      </View>
      <View style={styles.ListWrap}>
        <Text style={styles.SubTitle}>Vegetable Toppings</Text>
        {props.selectedVegetableToppings.length > 0 &&
          props.selectedVegetableToppings.map((view, i) => (
            <View key={i} style={styles.ListItem}>
                <Text>{view.toppings}</Text>
                <Text style={styles.PriceItem}>{view.value.toFixed(2)}</Text>
            </View>
          ))}
          {/* {
            props.vegSubTotal && <View style={styles.ListItem}>
              <Text {styles.subTotal}>Sub Total</Text>
              <Text {styles.subTotal}>{props.vegSubTotal}</Text>
          </View>
          } */}
          
      </View>

      <View style={styles.ListWrap}>
        <Text style={styles.SubTitle}>Non Vegetable Toppings</Text>
        {props.selectedMeatToppings.length > 0 &&
          props.selectedMeatToppings.map((view, i) => (
            <View key={i} style={styles.ListItem}>
              <Text>{view.toppings}</Text>
              <Text style={styles.PriceItem}>{view.value.toFixed(2)}</Text>
            </View>
          ))}
      </View>

      <View style={styles.ListWrap}>
        <Text style={styles.SubTitle}>Cheese</Text>
        {props.selectedCheese.length > 0 &&
          props.selectedCheese.map((view, i) => (
            <View key={i} style={styles.ListItem}>
              <Text>{view.name}</Text>
              <Text style={styles.PriceItem}>{view.value.toFixed(2)}</Text>
            </View>
          ))}
      </View>
      <View style={styles.Total}>
          <Text style={styles.TotalLabel}>Total</Text>
          <Text style={styles.TotalValue}>{props.total.toFixed(2)}</Text> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrap: {
    flexDirection: "column",
  
    marginBottom: 30,
    paddingTop: 30
  },
  Title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  SubTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "#ddd",
    padding: 5
  },
  ListWrap: {
    marginBottom: 10, 
  },
  ListItem: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  PriceItem: {
    width: 50,
    textAlign: "right",
    fontWeight: "bold",
  },
  Total: {
    borderTopWidth: 2,
    paddingTop: 10,
    borderTopColor: "black",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  TotalLabel: {
    fontSize: 24,
     fontWeight: "bold",
     width: "50%"
  },
  TotalValue: {
    fontSize: 24,
  fontWeight: "bold",
  width: "50%",
  textAlign: "right"
  }
});

export default OrderList;
