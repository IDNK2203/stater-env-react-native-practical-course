import { Pressable, StyleSheet, Text, View } from "react-native";
import { colorPallete } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ amount, description, date, id }) => {
  const navigate = useNavigation();
  const expenseOnPresshandler = () => {
    navigate.navigate("ManageExpense", { expenseId: id });
  };

  return (
    <Pressable
      onPress={expenseOnPresshandler}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.container}>
        <View style={styles.dets}>
          <Text style={[styles.text, styles.textadded]}> {description}</Text>
          <Text style={[styles.text, styles.date]}> {date.toDateString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={[styles.text, styles.amount]}>
            {" "}
            ${amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
    backgroundColor: colorPallete.Darkpurple2,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  dets: {
    height: 45,
    justifyContent: "space-between",
  },
  amount: {
    fontSize: 20,
  },
  date: {
    color: colorPallete.Tyrianpurple2,
  },
  amountContainer: {
    borderColor: colorPallete.accent500,
    borderLeftWidth: 2,
    padding: 5,
    justifyContent: "center",
    alignItems: "flex-end",
    height: 40,
    marginLeft: 5,
    width: 125,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  textadded: {
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
