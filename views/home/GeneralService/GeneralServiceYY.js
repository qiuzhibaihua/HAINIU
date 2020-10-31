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
// css
import comstyles from '../../../src/style/index'
// icon
import AntDesign from 'react-native-vector-icons/AntDesign';
function GeneralServiceYY(props) {
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
                        <Text style={{ flex: 3, textAlign: 'center', color: '#fff', fontSize: 18 }}>预约</Text>
                        <Text style={{ flex: 1 }}></Text>
                    </View>
                </ImageBackground>
                <ScrollView>
                    <View style={{ flex: 1, }}>
                        <View style={{ width: '100%', backgroundColor: '#000' }}>
                            <Image
                                style={{ width: '100%' }}
                                source={require('../../../resource/images/home/YBservice/zxbjDetail.png')}
                            />
                        </View>
                        <View style={{
                            flex: 1, paddingLeft: 10,
                            paddingTop: 10,
                            paddingBottom: 10,
                            paddingRight: 10,
                            borderBottomColor: '#eaeaea',
                            borderWidth: 1,
                            flexDirection: 'row', alignItems: 'center', color: '#000', justifyContent: 'space-between'
                        }}>
                            <Text>
                                12
                                </Text>
                            <Text style={{ color: 'orange' }}>
                                ￥50.00
                                </Text>
                        </View>
                        <View style={{ paddingTop: 15, paddingLeft: 10, paddingBottom: 10, paddingRight: 10, }}>
                            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
                                介绍
                                </Text>
                            <Text>
                                介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
                                介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
                                介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
                                </Text>
                        </View>
                    </View>
                </ScrollView>
                <View  style={{width:'80%',marginLeft:'10%'}}>
                <Text
                style={{width:'100%',backgroundColor:'#FEB15F',...comstyles.buttonCommal}}
                onPress={() => Actions.movies()}
                >
                    确定
                    </Text>
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
export default GeneralServiceYY;