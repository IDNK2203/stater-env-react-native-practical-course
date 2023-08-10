import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  Platform,
} from "react-native";
import Input from "./Input";
import Button from "../Button";
import { colorPallete } from "../../utils/colors";
import { useExpenseContext } from "../../store/expenseContext";
import { useState } from "react";
import { formatDateInput, getFormattedDate } from "../../utils/date";
import DateTimePicker from "@react-native-community/datetimepicker";

const ExpenseForm = ({
  formMode,
  expenseId,
  onCancelHandler,
  onUpdateHandler,
  onAddHandler,
}) => {
  const { state } = useExpenseContext();
  const expense = state.expenses.find((el) => el.id === expenseId);
  const [isPickerShow, setIsPickerShow] = useState(false);
  const present = Date.now();

  const [formState, setformState] = useState({
    amount: {
      value: formMode ? expense?.amount.toString() : "",
      validity: true,
    },
    date: {
      value: formMode ? expense?.date : new Date(present),
      validity: true,
    },
    description: {
      value: formMode ? expense?.description : "",
      validity: true,
    },
  });

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const handleInputChange = (inputName, value) => {
    if (Platform.OS === "android") {
      setIsPickerShow(false);
    }

    if (inputName === "date") {
      value = new Date(value.nativeEvent.timestamp);
    }
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
      date: new Date(formState.date.value),
    };

    const isDateValid = new Date(formData.date).toString() !== "Invalid Date";
    const isDescriptionValid = formData.description.trim().length > 0;
    const isAmountValid = !isNaN(formData.amount) && formData.amount > 0;
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

      // Alert.alert("Invalid Input", "Pls check your input and try again");
      return;
    }
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
      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          testID='expense_date'
          value={formState.date.value}
          mode={"date"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={true}
          onChange={handleInputChange.bind(this, "date")}
          style={styles.datePicker}
        />
      )}
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
        >
          {!formState.amount?.validity && (
            <View style={styles.errorMsgBox}>
              <Text style={styles.errorMsg}> Invalid Amount</Text>
            </View>
          )}
        </Input>

        <Pressable style={styles.inputRowItem} onPress={showPicker}>
          <Input
            label={"Date"}
            style={styles.inputRowItem}
            inputConfig={{
              keyboardType: "numeric",
              maxLength: 10,
              placeholder: "YYYY-MM-DD",
              onFocus: showPicker,
              editable: false,
              // onChangeText: handleInputChange.bind(this, "date"),
              value: getFormattedDate(formState.date.value),
            }}
          >
            {!formState.date?.validity && (
              <View style={styles.errorMsgBox}>
                <Text style={styles.errorMsg}> Invalid Date</Text>
              </View>
            )}
          </Input>
        </Pressable>
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
      >
        {!formState.description?.validity && (
          <View style={styles.errorMsgBox}>
            <Text style={styles.errorMsg}> Invalid Description</Text>
          </View>
        )}
      </Input>
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
  container: {
    flex: 1,
  },
  expenseFormBox: {
    paddingVertical: 8,
    // width: "100%",
  },
  errorMsgBox: {
    borderLeftWidth: 2,
    paddingLeft: 2,
    borderColor: colorPallete.Claret,
  },
  errorMsg: {
    fontSize: 12,
    color: colorPallete.Claret,
    fontWeight: "900",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 8,
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
  datePicker: {
    width: 320,
    height: 260,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
