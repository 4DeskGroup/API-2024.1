import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    marginTop: 0,
    borderTopLeftRadius:30,
    borderTopRightRadius: 30,
 },
 form:{
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 10,
 },
 formText: {
    color: '#2F2A4E',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 10, 
 },
 titleButtonMenu: {
    fontSize: 16,
    color: '#2F2A4E',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingBottom: 20,
    paddingTop: 10, 
 },
 expertisesContainer: {
   marginLeft: 30,
 flexDirection:'row',
 alignItems:'center',
 },
  titleMenu: {
    fontSize: 18,
    color: '#2F2A4E',
 },
 buttonText: {
   marginEnd: 10,
   marginBottom: 3,
   justifyContent:'center'
 },
 buttonMenu: {
   borderRadius:10,
   back:'#B5AEAE',
   alignItems: 'center',
   justifyContent: 'center',
   width: '82%',
   height: '5.5%',
   backgroundColor: '#C84734',
   paddingTop: 14,
   paddingBottom: 14,
   marginLeft: 32,
   margin: 5,
   marginTop: 40
},
titleButtonMenu: {
   color: '#ffffff',
   fontWeight: 'bold'
},
checkBoxForm: {
    borderWidth: 1,
    borderColor: '#C84734',
    borderRadius: 5,
    marginLeft: 35,
    backgroundColor: 'white',
    width: 20, 
   height: 20,
},
checkBoxSelected: {
   backgroundColor: '#C84734'
},
checkBox: {
   width: 20, 
   height: 20,
 },
})


export default styles