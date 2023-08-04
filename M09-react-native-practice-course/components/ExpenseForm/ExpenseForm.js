import { StyleSheet, Text, View, Pressable } from "react-native";
import Input from "./Input";
import Button from "../Button";
import { colorPallete } from "../../utils/colors";

const ExpenseForm = (
  formMode,
  onCancelHandler,
  onUpdateHandler,
  onAddHandler
) => {
  const [formState, setformState] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const handleInputChange = (inputName, value) => {
    setformState((prev) => ({
      ...prev,
      [inputName]: value,
    }));
  };

  const onSubmitHandler = () => {
    if (formMode) {
      onUpdateHandler({
        description: formState.description,
        amount: +amount,
        date: new Date(formState.date),
      });
    } else {
      onAddHandler({
        description: formState.description,
        amount: +amount,
        date: new Date(formState.date),
      });
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
            onChangeText: handleInputChange.bind("amount"),
            value: formState.amount,
          }}
        />

        <Input
          label={"Date"}
          style={styles.inputRowItem}
          inputConfig={{
            maxLength: 10,
            placeholder: "YYYY-MM-DD",
            onChangeText: handleInputChange.bind("date"),
            value: formState.date,
          }}
        />
      </View>
      <Input
        label={"Description"}
        inputConfig={{
          onChangeText: handleInputChange.bind("description"),
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
