import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import Input from "./Input";
import Button from "../Button";
import { colorPallete } from "../../utils/colors";
import { useExpenseContext } from "../../store/expenseContext";
import { useState } from "react";
import { formatDateInput, getFormattedDate } from "../../utils/date";

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
    amount: {
      value: formMode ? expense?.amount.toString() : "",
      validity: true,
    },
    date: {
      value: formMode ? getFormattedDate(expense?.date) : "",
      validity: true,
    },
    description: {
      value: formMode ? expense?.description : "",
      validity: true,
    },
  });

  const handleInputChange = (inputName, value) => {
    setformState((prev) => {
      return {
        ...prev,
        [inputName]: {
          ...prev[inputName],
          value: value,
        },
      };
    });
  };

  const onSubmitHandler = () => {
    const formData = {
      description: formState.description.value,
      amount: +formState.amount.value,
      date: new Date(formatDateInput(formState.date.value)),
    };

    const isDateValid = new Date(formData.date).toString() !== "Invalid Date";
    const isDescriptionValid = formData.description.trim().length > 0;
    const isAmountValid = !isNaN(formData.amount) && formData.amount > 0;
    console.log(formState);
    if (!isDateValid || !isDescriptionValid || !isAmountValid) {
      setformState((prev) => ({
        ...prev,
        ["description"]: {
          ...prev["description"],
          validity: isDescriptionValid,
        },
        ["amount"]: {
          ...prev["amount"],
          validity: isAmountValid,
        },
        ["date"]: {
          ...prev["date"],
          validity: isDateValid,
        },
      }));

      Alert.alert("Invalid Input", "Pls check your input and try again");
      return;
    }
    console.log(formState);
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
            value: formState.amount.value,
          }}
        />
        <Input
          label={"Date"}
          style={styles.inputRowItem}
          inputConfig={{
            keyboardType: "numeric",
            maxLength: 10,
            placeholder: "YYYY-MM-DD",
            onChangeText: handleInputChange.bind(this, "date"),
            value: formState.date.value,
          }}
        />
      </View>

      <Input
        label={"Description"}
        inputConfig={{
          onChangeText: handleInputChange.bind(this, "description"),
          value: formState.description.value,
          multiline: true,
          placeholder: "What did you spend money on😑",

          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
        }}
      />
      {!formState.amount?.validity && <Text> Invalid amount Input</Text>}
      {!formState.date?.validity && <Text> Invalid date Input</Text>}
      {!formState.description?.validity && (
        <Text> Invalid description Input</Text>
      )}
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
