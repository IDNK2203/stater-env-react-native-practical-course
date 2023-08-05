import { StyleSheet, Text, View, Pressable } from "react-native";
import Input from "./Input";
import Button from "../Button";
import { colorPallete } from "../../utils/colors";
import { useExpenseContext } from "../../store/expenseContext";
import { useState } from "react";
import { getFormattedDate } from "../../utils/date";

const ExpenseForm = ({
  formMode,
  expenseId,
  onCancelHandler,
  onUpdateHandler,
  onAddHandler,
}) => {
  const { state } = useExpenseContext();
  const expense = state.expenses.find((el) => el.id === expenseId);

  const [formState, setformState] = useState({
    amount: formMode ? expense?.amount.toString() : "",
    date: formMode ? getFormattedDate(expense?.date) : "",
    description: formMode ? expense?.description : "",
  });

  const handleInputChange = (inputName, value) => {
    setformState((prev) => {
      return {
        ...prev,
        [inputName]: value,
      };
    });
  };

  const onSubmitHandler = () => {
    const formData = {
      description: formState.description,
      amount: +formState.amount,
      date: new Date(formState.date),
    };
    if (formMode) {
      onUpdateHandler({ ...formData, id: expenseId });
    } else {
      onAddHandler(formData);
    }
  };

  return (
    <View style={styles.expenseFormBox}>
      <Text style={styles.expenseTitle}>
        {formMode ? "Edit This Expense" : "Create A New Expense"}
      </Text>
      <View style={styles.inputRow}>
        <Input
          label={"Amount"}
          style={styles.inputRowItem}
          inputConfig={{
            placeholder: "00.00",
            keyboardType: "number-pad",
            onChangeText: handleInputChange.bind(this, "amount"),
            value: formState.amount,
          }}
        />

        <Input
          label={"Date"}
          style={styles.inputRowItem}
          inputConfig={{
            maxLength: 10,
            placeholder: "YYYY-MM-DD",
            onChangeText: handleInputChange.bind(this, "date"),
            value: formState.date,
          }}
        />
      </View>
      <Input
        label={"Description"}
        inputConfig={{
          onChangeText: handleInputChange.bind(this, "description"),
          value: formState.description,
          multiline: true,
          placeholder: "What did you spend money on😑",

          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
        }}
      />
      <View style={styles.btnContainer}>
        <Button
          mode={"flat"}
          style={styles.btnContainerIn}
          onPresshandler={onCancelHandler}
        >
          Cancel
        </Button>
        <Button style={styles.btnContainerIn} onPresshandler={onSubmitHandler}>
          {formMode ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  expenseFormBox: {
    paddingVertical: 8,
    // width: "100%",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  inputRowItem: {
    flex: 1,
  },
  expenseTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: "white",
    textAlign: "center",
    marginVertical: 8,
  },
  btnContainerIn: {
    borderRadius: 6,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    // width: "100%",
    height: 175,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  deleteBtnContainer: {
    height: 75,
    width: "100%",
    borderColor: colorPallete.accent500,
    borderTopWidth: 2,
    alignItems: "center",
  },
});
