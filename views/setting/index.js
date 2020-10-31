import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    FlatList,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
// 路由跳转
import { Actions } from 'react-native-router-flux';
// icon
import AntDesign from 'react-native-vector-icons/AntDesign';
function SettingIndex(props) {
    const [list, setList] = useState([{
        image: require('../../resource/images/setting/yygl.png'),
        name: '用药管理',
        url: 'MedicationManage'
    }, {
        image: require('../../resource/images/setting/ydxc.png'),
        name: '云端相册',
        url: 'CloudAlbum'
    }, {
        image: require('../../resource/images/setting/zdcx.png'),
        name: '账单查询',
        url: 'Bill'
    }, {
        image: require('../../resource/images/setting/wdhd.png'),
        name: '我的活动',
        url: 'Activity'
    }, {
        image: require('../../resource/images/setting/myddc.png'),
        name: '满意度调查',
        url: 'Satisfaction'
    }, {
        image: require('../../resource/images/setting/jkgl.png'),
        name: '健康管理',
        url: 'HealthManage'
    }, {
        image: require('../../resource/images/setting/tc.png'),
        name: '退出',
        url: 'DropOut'
    },])

    const Item = ({ item }) => {
        return (
            
            <View style={styles.itemList}>
                <Image
                    source={item.image}
                />
                <Text onPress={()=>Actions[item.url].call()} style={{ flex: 1, marginLeft: 10 }}>{item.name}</Text>
                <AntDesign name={'right'} size={17} color="#868686" />
            </View>
        );
    }
    const renderItem = ({ item }) => (
        <Item item={item} />
    );
    return (
        <>
            <SafeAreaView style={
                {

                    flex: 1, backgroundColor: '#fff',
                }}>
                <View style={{ flexDirection: 'row', height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <Text>我的</Text>
                </View>
                <ScrollView
                    style={styles.scrollView}>
                    <ImageBackground source={require('../../resource/images/bgTop.png')} style={{
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 10, overflow: 'hidden'
                    }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 30, paddingBottom: 30, paddingLeft: 30 }}>
                            <Image style={styles.imagePadding}
                                source={require('../../resource/images/setting/tx.png')}
                            />
                            <View style={{ paddingLeft: 5 }}>
                                <Text style={{ marginBottom: 20, color: '#fff', fontSize: 18 }}>王生</Text>
                                <Text style={{ color: '#fff', fontSize: 16 }}>75岁</Text>
                            </View>
                        </View>

                    </ImageBackground>
                    {/* 我的订单 */}
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 18, marginBottom: 24, justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 3, height: 15, backgroundColor: '#FF9457', marginRight: 8, }}></View>
                            <Text>我的订单</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Text style={{ color: '#ccc' }}>全部</Text>
                            <View style={{ width: 3, height: 10, backgroundColor: '#000', marginLeft: 10, }}></View>

                        </View>
                    </View>
                    {/* tabList */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity activeOpacity={0.7}  style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}  
                            source={require('../../resource/images/setting/wpg.png')}
                        />
                        <Text onPress={() => Actions.GeneralService()}>未派工</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}
                            source={require('../../resource/images/setting/ypg.png')}
                        />
                        <Text>已派工</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}
                            source={require('../../resource/images/setting/dys.png')}
                        />
                        <Text>待验收</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}


                            source={require('../../resource/images/setting/dpj.png')}
                        />
                        <Text>待评价</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}
                            source={require('../../resource/images/setting/ywc.png')}
                        />
                        <Text>已完成</Text>
                    </TouchableOpacity>

                </View>
                    <FlatList
                   
                    style={{marginTop:15}}
                        data={list}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
const styles = StyleSheet.create({
    scrollView: {
        // alignItems:'flex-start',
        backgroundColor: '#fff',
        marginRight: 16,
        marginLeft: 16,
    },
    container: {
        flex: 1,
        // backgroundColor: '#000',
    },
    topBar: {
        // display: 'flex',
        // backgroundColor: '#ccc',
    }
    ,
    itemList: {
        backgroundColor: '#fff',
        display: 'flex',
        paddingTop: 6,
        paddingBottom: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    imagePadding:{
        marginBottom:10,
    }
});

export default SettingIndex;