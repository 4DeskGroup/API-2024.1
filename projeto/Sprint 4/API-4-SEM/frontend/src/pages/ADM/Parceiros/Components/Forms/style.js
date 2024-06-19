import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: '#f3f1f1',
    alignItems: 'center',
    borderTopLeftRadius:30,
    borderTopRightRadius: 30,
 },
 form:{
    width: '100%',
    height: '100%',
    marginTop: 30,
    padding: 10,
 },

 formText: {
    color: '#C84734',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 10, 
 },

 buttonMenu: {
    borderRadius:10,
    //borderColor:'#B5AEAE',
    //borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '91.5%',
    height: 55,
    backgroundColor: '#FFFFFF',
    paddingTop: '5%',
    paddingBottom: '5%',
    marginLeft: '4%',
    margin: '1.3%',
    elevation: 1
 },

 buttonContainer: {
   flexDirection: 'row',
   alignContent: 'center',
   justifyContent: 'center',
   alignItems: 'center'
 },
 
 buttonImage: {
   flex:1,
 },

 buttonText: {
   flex:6,
   marginBottom: 3,
   justifyContent:'center',
 },

 titleButtonMenu: {
    fontSize: 16,
    color: '#2F2A4E',
    fontWeight: 'bold',
    marginLeft: '10%',
    marginBottom: -2
 },

icon: {
   width:20,
   height:15,
}
})
export default styles