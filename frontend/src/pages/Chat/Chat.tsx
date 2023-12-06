/*import React, { Fragment, useEffect, useState } from "react";
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
import storageService from "../../services/ChatService/storageService";
import { webSocket, socket } from "../../services/webSocket";

const Chat = ({ route }: any) => {
  const [content, setContent] = useState("");
  const [chat, setChat] = useState({ messages: [] });
  const [userData, setUserData] = useState({ name: "" });
  useEffect(() => {
    storageService.getItem("userData").then((userData) => {
      setUserData(userData);
      socket.on("chat", (response: any) => {
        setText("");
        chat.messages.push(response);
        setChat({ messages: chat.messages });
      });
    });
  }, []);
  const sendMessage = () => {
    webSocket.sendMessage({
      content: content,
      sendBy: userData.name,
      date: new Date(),
    });
  };

  return (
    <Fragment>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {chat.messages.length > 0 ? (
          chat.messages.map((m: any, index: number) => (
            <Balloon key={index} message={m} currentUser={userData.name} />
          ))
        ) : (
          <Text style={{ alignSelf: "center", color: "#848484" }}>
            Sem menssagens no momento
          </Text>
        )}
      </ScrollView>
      <SafeAreaView>
        <View style={styles.messageTextInputContainer}>
          <TextInput
            style={styles.messageTextInput}
            placeholder="Digite sua menssagem"
            placeholderTextColor={Colors.light}
            value={content}
            multiline
            onChange={(message: any) => setContent(message)}
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

export default Chat;*/
