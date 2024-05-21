import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
navbarContainer: {
    width: '100%',
    height: '10%',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    position: 'absolute'
 },
 navbarBar: {
    width: '100%',
    height: '30%',
    bottom: 0,
    backgroundColor: '#C61900',
    alignItems: 'flex-start',
    position: 'absolute'
 },
 navbarSquare: {
    width: '18%',
    height: '65%',
    zIndex:11111,
    bottom: 24,
    backgroundColor: '#C61900',
    alignItems: 'flex-start',
    position: 'absolute',
    marginLeft: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignContent:"center",
    alignItems:'center',
    justifyContent: 'center'
 },
 navbarIconHome: {
    width: '45%',
    height: '50%',
    top: 5
    
   
 }
})


export default styles