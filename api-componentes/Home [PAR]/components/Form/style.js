import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
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
 buttonMenu: {
    borderRadius:10,
    borderColor:'#B5AEAE',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '91.5%',
    height: '19%',
    backgroundColor: '#FFFFFF',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 5,
 },
 buttonContainer: {
   flexDirection: 'row',
   alignContent: 'center',
   justifyContent: 'center',
 },
 buttonImage: {
   marginTop: 3,
   marginLeft:26,
   flex:1
 },
 buttonText: {
   flex:3,
   marginEnd: 10,
   marginBottom: 3,
   justifyContent:'center'
 },
 titleButtonMenu: {
    fontSize: 20,
    color: '#2F2A4E',
    fontWeight: 'bold'
 },
 subtitleButtonMenu: {
   fontSize: 16,
   color: '#B5AEAE',
},
icon: {
   width:'75%',
   height:'92%',
   borderRadius: 8
}
})


export default styles