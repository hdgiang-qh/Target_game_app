import { Text, StyleSheet } from "react-native";
import Color from "../../constants/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Color.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Color.accent500,
    padding: 12,
  },
});
