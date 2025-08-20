import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image } from "react-native"

const windowWidth = Dimensions.get("window").width;

export default function Inicial({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/imagens/casual_dog.png")}
            style={{width: 300, height:250}}
            />
        <View style>
            
            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtitle}> Escolha uma opção </Text>
            
        </View>

        <View style={styles.buttons}>
            <TouchableOpacity style={styles.button1}>
           
                <Image
                style={styles.iconCircle}
                source={require("../../assets/imagens/Google.png")}
                resizeMode="contain"
                />
                <Text style={styles.button1text}>Entrar com Google</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.button2}
           onPress={() => navigation.navigate("Login")}
           >
            <Text style={styles.button2text}>Entrar com Login</Text>
            
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:10,
        padding: 25,
        backgroundColor: "#F3F3F3",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 20,
        marginLeft:18,
    },
    buttons: {
        
        alignItems: "center",
        padding: 10,
        marginHorizontal: 40,
        gap: 10,
    },
    button1: {
        backgroundColor: "#2cb859",
        borderRadius: 6,
        padding: 20,
        marginHorizontal: 40,
        borderWidth: 1,
        borderColor: "#CCC",
        alignItems: "center",
        width: 380,
        gap: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    button1text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    button2 : {
        backgroundColor: "#fff",
        borderRadius: 6,
        padding: 20,
        marginHorizontal: 40,
        borderWidth: 1,
        borderColor: "#CCC",
        alignItems: "center",
        width: 380,
        flexDirection: "row",
        justifyContent: "center",
        borderColor: "#2cb859",
        borderWidth: 2,
    },
    button2text: {
        color: "#2cb859",
        fontWeight: "bold",
        marginLeft: 16,
        fontSize: 16,
    },
    iconCircle: {
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        width: 25,
        height: 20,
    },
});