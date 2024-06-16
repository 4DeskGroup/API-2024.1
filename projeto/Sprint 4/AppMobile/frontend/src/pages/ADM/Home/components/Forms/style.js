import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
 formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: '#F3F1F1',
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
    color: '#C84734',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 10, 
 },
 buttonMenu: {
    borderRadius:10,
    borderColor:'#8A8585',
    alignItems: 'center',
    justifyContent: 'center',
    width: '91.5%',
    height: '15%',
    backgroundColor: '#FFFFFF',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 5,
    elevation: 4,
    marginTop: 10
 },
 buttonContainer: {
   flexDirection: 'row',
   alignContent: 'center',
   justifyContent: 'center',
   //backgroundColor: 'black'
 },
 buttonImage: {
   marginLeft:26,
   flex:1
 },
 buttonText: {
   flex:3,
   marginEnd: 10,
   marginBottom: 3,
   justifyContent:'center',
   //backgroundColor: 'black',
   marginLeft: -20
 },
 titleButtonMenu: {
    fontSize: 16,
    color: '#2F2A4E',
    fontWeight: 'bold'
 },
 subtitleButtonMenu: {
   fontSize: 14,
   color: '#B5AEAE',
},
icon: {
   top:10,
   width: 40,
   height:40,
   borderRadius: 8
},
icon2: {
   top:10,
   width: 36,
   height:40,
},
icon3: {
   top:10,
   width: 38,
   height:33,
   
}
})


export default styles