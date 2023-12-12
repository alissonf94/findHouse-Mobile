// necessario fazer instalacao pois nao funcionou quando eu instalei o arquivo
// para instalar tem que dar o comando na raiz DO FRONTEND: npx expo install @react-native-async-storage/async-storage

import AsyncStorage from "@react-native-async-storage/async-storage";
// isso aqui cria uma constante de armazenamento:
// uso para funcionalidade de chat!

const storageService = {
  save: async (key: any, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  getItem: async (key: string) => {
    try {
      const item: any = await AsyncStorage.getItem(key);
      return item;
    } catch (e) {
      return null;
    }
  },
};
/* OBS: 
 - PRECISA TER UM TRATAMENTO DE EXCECOES NESTA FUNCAO, MAS ISSO FICA PARA QUEM FOR CHAMAR A MESMA!
 - ISSO FOI O QUE FOI FEITO ATE A AULA 1 SOBRE O CHAT
 - ESSE ARQUIVO TRABALHA JUNTAMENTE COM O HTTPSERVICE PARA FAZER TODA A CONEXAO COM O BACKEND, POREM COMO ALISSON ESTA MEXENDO NO BACKEND EU SO COLOQUEI O STORAGESERVICE
*/
export default storageService;