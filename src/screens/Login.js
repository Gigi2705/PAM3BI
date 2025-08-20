import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";


const windowWidth = Dimensions.get("window").width;

export default function Login({ navigation }) {

  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Acesse</Text>
      <Text style={styles.subtitle}>Entre com seu email e senha</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          placeholder="Digite seu email"
          keyboardType="email-address"
          value={Email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry
          value={Senha}
          onChangeText={setSenha}
          style={styles.input}
        />
      </View>

      <View style={styles.checkboxRow}>
  <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
  </View>
  <TouchableOpacity style={styles.forgotContainer}>
    <Text style={styles.forgotText}>Esqueceu a senha?</Text>
  </TouchableOpacity>
</View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOutline} 
          onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.buttonOutlineText}>Cadastro</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separatorRow}>
      <View style={styles.separatorLinha} />
      </View>

    
      <View style={styles.redesocial}>
        <TouchableOpacity style={styles.redesocialButton}>
          <Image
            source={require("../../assets/imagens/Google.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.redesocialButton}>
          <Image
            source={require("../../assets/imagens/Facebook.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#F3F3F3",
    justifyContent: "flex-start", 
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#222",
    alignSelf: "flex-start", 
    marginBottom: 5,
    marginTop: 30, 
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    alignSelf: "flex-start", 
    marginBottom: 25,
  },
  label: {
    fontSize: 15,
    color: "#444",
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    backgroundColor: "#FFF",
  },
  checkboxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 25,
  },
  forgotText: {
    color: "#2cb859",
    fontSize: 14,
    fontWeight: "500",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  button: {
    flex: 1,
    backgroundColor: "#2cb859",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonOutline: {
    flex: 1,
    borderColor: "#2cb859",
    borderWidth: 2,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 16,
    backgroundColor: "#FFF",
  },
  buttonOutlineText: {
    color: "#2cb859",
    fontSize: 16,
    fontWeight: "bold",
  },
  separatorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  separatorLinha: {
    flex: 1,
    height: 1,
    backgroundColor: "#CCC",
  },
  orText: {
    marginHorizontal: 10,
    color: "#888",
    fontSize: 14,
  },
  redesocial: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  redesocialButton: {
    backgroundColor: "#FFF",
    borderRadius: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    alignItems: "center",
    justifyContent: "center",
  },
});