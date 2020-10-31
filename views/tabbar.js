import React, { Component } from 'react';
import { View, Image, Text, StyleSheet,Dimensions } from 'react-native';
class TabIcon extends Component {
    constructor(props){
        super(props);       
    }

    render(){
        let selected=this.props.focused;
        let data={
            home:{
                title:"首页",
                icon:selected?require("../resource/images/homeActive.png"):require("../resource/images/home.png")
            },
            activity:{
                title:"活动",
                icon:selected?require("../resource/images/activityActive.png"):require("../resource/images/activity.png")
            },
            message:{
                title:"消息",
                icon:selected?require("../resource/images/messageActive.png"):require("../resource/images/message.png")
            },
            setting:{
                title:"设置",
                icon:selected?require("../resource/images/mineActive.png"):require("../resource/images/mine.png")
            },
      }
      let param=data[this.props.navigation.state.key];
      return  <View style={styles.tabbarContainer}>
                <Image style={{ width: 25, height: 25,resizeMode:'contain' }} source={param.icon} />
                {/* <Text style={[styles.tabbarItem,selected&&{color:'#F08519'}]}>{param.title}</Text> */}
              </View>
    }
}

const styles = StyleSheet.create({
    tabbarContainer:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      width:Dimensions.get('window').width/4
    },
    tabbarItem:{  
      marginTop:5,    
      textAlign:"center"
    }
});

module.exports = TabIcon