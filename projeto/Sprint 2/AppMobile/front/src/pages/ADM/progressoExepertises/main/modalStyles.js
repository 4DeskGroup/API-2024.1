import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // cor de fundo semi-transparente
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: '80%', // largura do modal
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#C84734',
    textAlign: 'center',
  },
  modalText: {
    color: "black",
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  modalButton: {
    backgroundColor: "#C61900", // cor de fundo do botão
    padding: 10,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
    alignSelf: "center", // alinhar o botão à direita
    marginTop: 10,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});
