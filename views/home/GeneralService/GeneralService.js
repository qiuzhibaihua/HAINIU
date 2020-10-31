import React from 'react';
import {
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StatusBar,
} from 'react-native';
// 路由跳转
import { Actions } from 'react-native-router-flux';
// icon
import AntDesign from 'react-native-vector-icons/AntDesign';
function GeneralService(props) {
    return (
        <>
            <SafeAreaView style={
                {
                    flex: 1, backgroundColor: '#fff',
                }}>
                   <ImageBackground source={require('../../../resource/images/bgTop.png')} style={{
                height:50,display:'flex',
            }}>
                 <View style={styles.topBar}>
                    <View style={{flex:1,paddingLeft:10,}}>
                    <AntDesign  name={'left'} size={20} color="#fff" onPress={() => Actions.pop()}/>
                    </View>
                    <Text style={{flex:3,textAlign:'center',color:'#fff',fontSize:18}}>一般服务</Text>
                    <Text style={{flex:1}}></Text>
                </View>
                </ImageBackground>
                <ScrollView>
                <View style={{ flex: 1, flexDirection: 'row',flexWrap:'wrap',marginTop:20 }}>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>Actions.GeneralServiceList()} style={{ width: '33.333%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}  
                            source={require('../../../resource/images/home/YBservice/zxfw.png')}
                        />
                              <Text >专项服务</Text>
                        </TouchableOpacity>
                  
                    <View style={{ width: '33.333%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}
                            source={require('../../../resource/images/home/YBservice/rgbj.png')}
                        />
                        <Text>专项保洁</Text>
                    </View>
                    <View style={{ width: '33.333%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}
                            source={require('../../../resource/images/home/YBservice/zxqx.png')}
                        />
                        <Text>专项清洗</Text>
                    </View>
                    <View style={{ width: '33.333%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}
                            source={require('../../../resource/images/home/YBservice/zcpt.png')}
                        />
                        <Text>专车陪同</Text>
                    </View>

                </View>
                    </ScrollView>
                </SafeAreaView>
        </>
    );
}
const styles = StyleSheet.create({
    topBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        

        // backgroundColor: '#ccc',
    },
    imagePadding: {
        marginTop: 30,
        marginBottom: 15
    }
})
export default GeneralService;