import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux';
import moment from 'moment'
import { getMenuByAppId } from '../../src/api/user'
const ScarletScreen = () => {
    const getTableData = async () => {
        let result = await getMenuByAppId().then(res => res.data.data)
        // getMenuByAppId().then((res)=>{
        //     console.log(res)
        // }).catch(function (err) {
        //     console.log(err);
        //   })
        // console.log(result)
        // setsearchForm(result)
    }
    let nameRef = useRef()
    const image = { uri: "../../resource/images/home/service.png" };

    const [searchForm, setsearchForm] = useState('')
    const Images = [{ src: require('../../resource/images/home/tab1.png') }, { src: require('../../resource/images/home/tab2.png') }, { src: require('../../resource/images/home/tab3.png') }]
    useEffect(() => {
        // 判断是否登录
        // 跳转登录
        // Actions.idCard()
        console.log(moment(new Date().valueOf()).format('yyyyMMDDHHmmss'))
        // getTableData()
        // console.log(nameRef)
        // nameRef.current.scrollTo({ y: 200 })
    }, [])
    const _renderSwiper = () => {

        return (


            <Swiper
                style={styles.swiperStyle}
                height={200}
                horizontal={true}
                autolay={true}
                loop={true}
                showsPagination={false}
                paginationStyle={{ bottom: 10 }}
                dotStyle={{ backgroundColor: 'rgba(0,0,0,1)', width: 6, height: 6 }}
                activeDotStyle={{ backgroundColor: 'rgba(0,0,0,1)', width: 6, height: 6 }}>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[0].src}></Image>
                </View>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[1].src}></Image>
                </View>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[2].src}></Image>
                </View>
            </Swiper>
        )
    }
    return (
        <SafeAreaView  style={
            {
                flex: 1,
            }}>
            <ImageBackground source={require('../../resource/images/bgTop.png')} style={{
                height:50,display:'flex',
            }}>
                <View style={styles.topBar}>
                    <View style={{flex:1,paddingLeft:10}}>
                        <Text style={{color:'#fff',}}>无锡</Text>
                        <Text style={{color:'#fff',}}>多云 25℃</Text>
                    </View>
                    <Text style={{flex:3,textAlign:'center',color:'#fff',fontSize:18}}>颐康</Text>
                    <Text style={{flex:1}}></Text>
                </View>

            </ImageBackground>
            <ScrollView
                ref={nameRef}
                style={styles.scrollView}>
                {_renderSwiper()}
                <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity activeOpacity={0.7} onPress={()=>Actions.GeneralServiceList()} style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}  
                            source={require('../../resource/images/home/service.png')}
                        />
                        <Text onPress={() => Actions.GeneralService()}>一般服务</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>Actions.GeneralServiceList()} style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}
                            source={require('../../resource/images/home/weixiu.png')}
                        />
                        <Text>修缮服务</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>Actions.order()} style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}
                            source={require('../../resource/images/home/order.png')}
                        />
                        <Text>订餐服务</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>Actions.order()} style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}


                            source={require('../../resource/images/home/DIY.png')}
                        />
                        <Text>增值服务</Text>
                    </TouchableOpacity>

                </View>
                {/* 通知 */}
                <View style={styles.notice}>
                    <View style={{ width: '18%', display: 'flex', }}>
                        <View style={styles.noticeBox}>
                            <Text style={{ paddingBottom: 2, paddingTop: 2, paddingLeft: 4, paddingRight: 4, color: '#FF9800' }}>通</Text>
                            <Text style={{ paddingBottom: 2, paddingTop: 2, paddingLeft: 4, paddingRight: 4, color: '#FF9800' }}>知</Text>
                        </View>
                    </View>
                    <View style={styles.line}>
                    </View>
                    <View style={styles.news}>
                        <Text style={styles.newsT}>明天早上十点半出发，紧急集合，去杭州...</Text>
                        <Text style={styles.newsT}>明天早上十点半出发，紧急集合，去杭州...</Text>
                    </View>
                </View>
                {/* 豆腐块 */}
                <View style={styles.showInfo}>
                    <View style={styles.imageBox}>
                        <ImageBackground source={require('../../resource/images/home/showInfo.png')} style={{
                            flex: 1, resizeMode: 'contain',
                            justifyContent: "center"
                        }}>
                        </ImageBackground>
                    </View>
                    <View style={styles.right}>
                        <View style={styles.imageBox}>
                            <ImageBackground source={require('../../resource/images/home/showInfo.png')} style={{
                                flex: 1, resizeMode: 'contain',
                                justifyContent: "center"
                            }}>
                            </ImageBackground>
                        </View>
                        <View style={styles.imageBox}>
                            <ImageBackground source={require('../../resource/images/home/showInfo.png')} style={{
                                flex: 1, resizeMode: 'contain',
                                justifyContent: "center"
                            }}>
                            </ImageBackground>
                        </View>


                    </View>
                </View>
                {/* 最新活动 */}
                <View style={{ flex: 1, flexDirection: 'column', width: '60%', height: 40, marginLeft: '20%' }}>
                    <ImageBackground source={require('../../resource/images/home/topActive.png')} style={{
                        flex: 1, resizeMode: 'center',
                        justifyContent: "center"
                    }}>
                    </ImageBackground>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}
                            source={require('../../resource/images/home/tab1.png')}
                        />
                        <Text>颐康养老活动...</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}
                            source={require('../../resource/images/home/tab2.png')}
                        />
                        <Text>护工与老人的...</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={styles.imagePadding}
                            source={require('../../resource/images/home/tab3.png')}
                        />
                        <Text>老人联谊活动...</Text>
                    </View>


                </View>

            </ScrollView>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    swiperStyle: {
        width: '100%',
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    scrollView: {
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        

        // backgroundColor: '#ccc',
    }
    ,
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    notice: {
        width: '90%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        shadowColor: '#eaeaea',
        shadowOffset: { h: 2, w: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.8,
        borderRadius: 10,
    },
    noticeBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '42%',
        marginLeft: '29%',
        borderColor: '#FF9800',
        borderWidth: 1,
        borderRadius: 5,
        padding: 2,
    },
    line: {
        width: 1,
        height: '90%',
        backgroundColor: '#ccc'
    },
    news: {
        paddingLeft: 15,
        flex: 1,
    },
    newsT: {
        color: '#666666',
        paddingBottom: 5,
    },
    showInfo: {
        flex: 1,
        flexDirection: 'row',
        height: 200,
    },
    left: {
        flex: 1,
        backgroundColor: '#000',

    },
    right: {
        flex: 1,
        flexDirection: 'column',
    },
    imageBox: {
        flex: 1,
        flexDirection: "column",
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    imagePadding: {
        marginTop: 10,
        marginBottom: 10
    }
});

export default ScarletScreen;