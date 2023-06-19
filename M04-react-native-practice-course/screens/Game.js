import { StyleSheet, Text, View } from "react-native";

const Game = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Opponent's Guesses </Text>
      </View>
      <View>
        <Text>Higher or Lower</Text>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 16,
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    margin: 16,
    marginTop: 24,
    marginBottom: 0,
    color: "#2E4052",
  },
  headingContainer: {
    margin: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#412234",
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "#412234",
    marginVertical: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    alignItems: "center",
  },
  numberInput: {
    borderColor: "#FFC857",
    borderWidth: 2,
    borderRadius: 30,
    marginHorizontal: "auto",
    height: 50,
    width: 150,
    margin: 20,
    color: "#FFC857",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
  },
  btnWidth: {
    flex: 1,
  },
});
