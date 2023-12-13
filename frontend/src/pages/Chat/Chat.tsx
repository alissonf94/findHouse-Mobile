import React, { Fragment, useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./ChatStyle";
import Balloon from "./Baloon";
import { Colors } from "react-native/Libraries/NewAppScreen";
import storageService from "../../services/chatService/StorageService";
import io  from "socket.io-client";


const socket = io("http://10.5.3.11:3333"); //isso eh o ip da tua maquina 

const Chat = ({ route }: any) => {
  const [content, setContent] = useState("");
  const options: any = { messages: [] };
  const [chat, setChat] = useState(options);
  const [userData, setUserData] = useState("");
  useEffect(() => {
    storageService.getItem("name").then((userData:any) => {
      socket.on("chat", (messagem: any) => {
        chat.messages.push(messagem);
        setChat({ messages: chat.messages});
        setContent("");
      });
      setUserData(userData);
    });
  }, []);
  const sendMessage = () => {
    socket.emit("chat", {
      content: content,
      sentBy: userData,
      date: new Date(),
    });

  };

  return (
    <Fragment>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {chat.messages.length > 0 ? (
          chat.messages.map((m: any, index: number) => (
            <Balloon key={index} message={m} currentUser={userData} />
          ))
        ) : (
          <Text style={{ alignSelf: "center", color: "#848484" }}>
            Sem mensagens no momento
          </Text>
        )}
      </ScrollView>
      <SafeAreaView>
        <View style={styles.messageTextInputContainer}>
          <TextInput
            style={styles.messageTextInput}
            placeholder="Digite sua mensagem"
            placeholderTextColor={Colors.light}
            value={content}
            multiline
            onChangeText={(message) => setContent(message)}
          />
          <TouchableOpacity
            style={styles.sendButton}
            disabled={!content}
            onPress={() => sendMessage()}
          >
            <Text style={{ color: Colors.white }}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default Chat;