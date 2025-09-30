import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white',
    padding: 10
  },

  titulo_container: {
    display: "flex",
    paddingTop: 50,
    paddingBottom: 10,
  },

  contener_person: {
    display: 'flex',
    flex: 1,
    width: "100%",
  },

  contener_input: {
    display: 'flex',
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    marginBottom: 15,
  },

  contener_resultado: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    gap: 10,
    padding: 10,
    marginBottom: "20%"
  },

  contener_salve: {
    display: "flex",
    width: "60%"
  },

  text_titul: {
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
    paddingBottom: 20,
  },

  sub_titul: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 20,
  },

  text_legend: {
    fontSize: 17,
    textAlign: 'left',
    color: "#159A9C",
    paddingBottom: 10,
  },

  input: {
    flex: 1,
    textAlign: 'left',
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 8,
    backgroundColor: 'black'
  },

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    borderRadius: 8,
    width: 45,
    height: 45,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 17,
    color: "white",
  },

  area: {
    display: 'flex',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    height: '90%'
  }
});
