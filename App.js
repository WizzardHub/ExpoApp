import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Title from "./components/Title";
import TriesCount from "./components/TriesCount";
import {useState} from "react";
import Input from "./components/Input";
import Alert from "./components/Alert";
import Button from "./components/Button";

export default function App() {

  const MAX_NUMBER = 10;

  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * MAX_NUMBER + 1));
  const [attempts, setAttempts] = useState(0);
  const [number, setNumber] = useState("");
  const [status, setStatus] = useState("No attempts were made !");

  /* this function takes care of the even fired when the button is clicked */
  function handleButtonPress() {
    let status = handleProgramLogic();
    if (status !== "End Game") {
      setStatus(`It's ${status}`);
    }
    else {
      /* Setting back the values when the game ended */
      setNumber("");
      setStatus(`Congrats ! The number was ${randomNumber} (took ${attempts} attempts) !`);
      setAttempts(0);
      setRandomNumber(Math.floor(Math.random() * MAX_NUMBER + 1));

      setTimeout(() => {
        setStatus(`No attempts were made !`);
      }, 5000);
    }
  }

  /* Function that returns "plus", "moins" or "ok" depending on the current data */
  function handleProgramLogic() {
    let guessedNumber = parseInt(number) ?? -1; // fallback value in case of a problem

    console.log(randomNumber);

    if (guessedNumber !== randomNumber) {
      setAttempts(attempts + 1); // Adding 1 attempt since the number wasn't guessed properly
    } else {
      return "End Game";
    }

    return guessedNumber === randomNumber ? "Ok" : guessedNumber > randomNumber ? "Less" : "More";
  }

  return (
    <View style={styles.container}>

      <View style={styles.title}>
        <Title text="Guessing Game v1.0"/>
      </View>

      <View style={styles.basicContainer}>
        <TriesCount attempts={attempts}/>
      </View>

      <View style={styles.basicContainer}>
        <Input number={number} setNumber={setNumber} />
      </View>

      <View style={styles.basicContainer}>
        <Button text="Confirm" onPress={handleButtonPress} />
      </View>

      <View style={styles.basicContainer}>
        <Alert text={status} />
      </View>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-start"
  },
  title: {
    width: "100%",
    marginTop: 60,
    alignItems: "center"
  },
  basicContainer: {
    width: "100%",
    marginTop: 10,
    alignItems: "center"
  }
});
