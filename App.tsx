import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

function FirstFont() {
  // alert('FirstFont component rendered!');
  let isReady = useFont({ ExampleOne: require("./assets/example.ttf") });

  if (!isReady) {
    return <Text />;
  } else {
    return (
      <Text style={{ fontFamily: "ExampleOne", fontSize: 40, color: "green" }}>
        Example one!
      </Text>
    );
  }
}

function SecondFont() {
  let isReady = useFont({ ExampleTwo: require("./assets/example2.ttf") });

  if (!isReady) {
    return <Text />;
  } else {
    return (
      <Text style={{ fontFamily: "ExampleTwo", fontSize: 40, color: "red" }}>
        Example two
      </Text>
    );
  }
}

function MaybeSecondFont() {
  const [showSecondFont, setShowSecondFont] = React.useState(false);

  return showSecondFont ? (
    <SecondFont />
  ) : (
    <Button title="Show second font" onPress={() => setShowSecondFont(true)} />
  );
}

export default function App() {
  // alert('App component rendered!');
  return (
    <View style={styles.container}>
      <FirstFont />
      <MaybeSecondFont />
    </View>
  );
}

function useFont(font: any) {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    async function loadMyFontAsync() {
      await Font.loadAsync(font);
      setIsReady(true);
    }

    loadMyFontAsync();
  }, []);

  return isReady;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
