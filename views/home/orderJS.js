import React from 'react';
import {
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    FlatList,
    StatusBar,
} from 'react-native';
// 路由跳转
import { Actions } from 'react-native-router-flux';
// icon
import AntDesign from 'react-native-vector-icons/AntDesign';
function orderJS(props) {
    return (
        <>
            <SafeAreaView style={
                {
                    flex: 1, backgroundColor: '#fff',
                }}>
                <ImageBackground source={require('../../resource/images/bgTop.png')} style={{
                    height: 50, display: 'flex',
                }}>
                    <View style={styles.topBar}>
                        <View style={{ flex: 1, paddingLeft: 10, }}>
                            <AntDesign name={'left'} size={20} color="#fff" onPress={() => Actions.pop()} />
                        </View>
                        <Text style={{ flex: 3, textAlign: 'center', color: '#fff', fontSize: 18 }}>提交</Text>
                        <Text style={{ flex: 1 }}></Text>
                    </View>
                </ImageBackground>
                <ScrollView>
                   <View style={{borderWidth:1,borderColor:'#ccc',marginLeft:10,marginRight:10,marginTop:10,paddingLeft:20,paddingRight:20}}>
                       <Text style={{marginTop:10,marginBottom:10}}>预约人:华白秋</Text>
                       <Text style={{marginTop:20,marginBottom:10}}>房号:1-1-1</Text>
                    </View>
                </ScrollView>
                <View  style={{width:'80%',marginLeft:'10%'}}>
                
                    </View>
            </SafeAreaView>
        </>
    );
}
const styles = StyleSheet.create({
    topBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',


        // backgroundColor: '#ccc',
    },
    imagePadding: {
        marginTop: 30,
        marginBottom: 15
    }
})
export default orderJS;