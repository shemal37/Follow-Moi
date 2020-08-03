import React, { useState } from "react";
import { Text, Input, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "../components/Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer />
      <Button
        title={submitButtonText}
        onPress={() => onSubmit({ email, password })}
      />
      <Spacer />
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  link: {
    color: "blue",
  },
});

export default AuthForm;
