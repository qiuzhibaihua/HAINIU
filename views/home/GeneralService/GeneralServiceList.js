import React, { useState } from 'react';
import {
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    StatusBar,
} from 'react-native';
// 路由跳转
import { Actions } from 'react-native-router-flux';
// icon
import AntDesign from 'react-native-vector-icons/AntDesign';
function GeneralServiceList(props) {
    let [listData, setlistData] = useState([{
        name: '日常保洁',
        icon: require('../../../resource/images/home/YBservice/rcbj_icon.png'),
        url: require('../../../resource/images/home/YBservice/rcbj.png')
    }, {
        name: '床铺除尘除螨',
        icon: require('../../../resource/images/home/YBservice/cccm_icon.png'),
        url: require('../../../resource/images/home/YBservice/cccm.png')
    }, {
        name: '挂式空调清洗',
        icon: require('../../../resource/images/home/YBservice/ktqx_icon.png'),
        url: require('../../../resource/images/home/YBservice/ktqx.png')
    }, {
        name: '波轮洗衣机清洗',
        icon: require('../../../resource/images/home/YBservice/xyj_icon.png'),
        url: require('../../../resource/images/home/YBservice/xyj.png')
    }])
    return (
        <>
            <SafeAreaView style={
                {
                    flex: 1, backgroundColor: '#fff',
                }}>
                <ImageBackground source={require('../../../resource/images/bgTop.png')} style={{
                    height: 50, display: 'flex',
                }}>
                    <View style={styles.topBar}>
                        <View style={{ flex: 1, paddingLeft: 10, }}>
                            <AntDesign name={'left'} size={20} color="#fff" onPress={() => Actions.pop()} />
                        </View>
                        <Text style={{ flex: 3, textAlign: 'center', color: '#fff', fontSize: 18 }}>专项保洁</Text>
                        <Text style={{ flex: 1 }}></Text>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <View style={{ flex: 1,marginLeft:20,
                                            marginRight:20,}}>
                        {
                            listData.map((item, index) => {
                                return (
                                    <View key={index} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                                        <TouchableOpacity activeOpacity={0.7} onPress={()=>Actions.GeneralServiceYY()} style={{width:'100%'}}>
                                        <ImageBackground source={item.url} style={{
                                            display: 'flex',width:'100%',
                                            resizeMode:'stretch',
                                            overflow:'hidden',
                                            marginTop:30,
                                         borderRadius:10,
                                        }} >
                                            <View style={{...styles.topBar,paddingBottom:10,paddingTop:10,paddingLeft:10}}>

                                                <View style={{ flex: 1 }}>
                                                    <Image source={item.icon}></Image>
                                                </View>
                                                <Text style={{ flex: 3, textAlign: 'left', color: '#fff', fontSize: 18 }}>{item.name}</Text>

                                            </View>
                                        </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }



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
        alignItems: 'center',
        justifyContent: 'center',


        // backgroundColor: '#ccc',
    },
    imagePadding: {
        marginTop: 30,
        marginBottom: 15
    }
})
export default GeneralServiceList;