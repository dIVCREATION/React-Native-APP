import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import SPACING from "../config/SPACING";

const Welcome = () => {
    return (

        <>
        <ImageBackground style={{ flex: 1 }} source={require("../assets/welscrn.jpg")}>
            <View style={{ flex:1,
                backgroundColor: colors.black, 
                opacity:0.2              
            }}></View>
                <View style={{
                    position : 'absolute',
                    height : '100%',
                    width : '100%',
                    paddingHorizontal : SPACING * 2,
                    paddingBottom : SPACING * 5,
                    justifyContent :'flex-end',
                    zIndex : 2
                }}>
                    <View>
 <Text style={{
               color : colors.white,
               fontSize : SPACING*4.2,
               fontWeight: '800',
               textTransform : "capitalize"
               }}>
                Let your favourite food find you..
            </Text>
            <Text style={{
                color : colors.white,
                fontWeight: '600',
                fontSize : SPACING * 1.7           
            }}           
            >
                India's Best Dishes are here..
            </Text>
            <TouchableOpacity style ={{
                backgroundColor : colors.white,
                borderRadius :SPACING * 2,
                marginTop : SPACING * 3,
                padding : SPACING * 2,
                alignItems : 'center'
            }}>
                <Text style = {{
                    color : colors.black,
                    fontWeight : '700',
                    fontSize : SPACING*2,
                    
                }}>
                Explore Here..</Text>
                
            </TouchableOpacity>
                </View>

            </View>
           
        </ImageBackground>
        </>
    );
};
export default Welcome;

const styles = StyleSheet.create({});


