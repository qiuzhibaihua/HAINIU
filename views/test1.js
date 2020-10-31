import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux';
import moment from 'moment'
import {getMenuByAppId} from '../src/api/user'
const ScarletScreen = () => {
    const getTableData = async ()=>{
        let result = await getMenuByAppId().then(res=>res.data.data)
        // getMenuByAppId().then((res)=>{
        //     console.log(res)
        // }).catch(function (err) {
        //     console.log(err);
        //   })
        // console.log(result)
        // setsearchForm(result)
    }

    const [searchForm, setsearchForm] = useState('')
    const Images = [{src:require('../resource/images/home.png')},{src:require('../resource/images/list.png')},]
    useEffect(()=>{
        // 判断是否登录
        // 跳转登录
        // Actions.idCard()
        console.log(moment(new Date().valueOf()).format('yyyyMMDDHHmmss'))
        getTableData()
    },[])
    const _renderSwiper= ()=>{
       
        return (
            <Swiper
                style={styles.swiperStyle}
                height={200}
                horizontal={true}
                autolay={true}
                loop={true}
                paginationStyle={{bottom:10}}
                dotStyle={{backgroundColor:'rgba(0,0,0,.2)', width: 6, height: 6}}
                activeDotStyle={{backgroundColor:'rgba(0,0,0,.5)', width: 6, height: 6}}>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[0].src}></Image>
                </View>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[1].src}></Image>
                </View>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[2].src}></Image>
                </View>
                <View style={styles.swiperItem}>
                    <Image style={styles.imageStyle} source={Images[3].src}></Image>
                </View>
            </Swiper>
        )
    }
    return (
        <SafeAreaView style={
            {
            flex: 1, backgroundColor: 'yellow'}}>
            <ScrollView
                style={styles.scrollView}>
                    {_renderSwiper}
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#bb0000',
    },
    container: {
        flex: 1,
        backgroundColor: '#bb0000',
    },
    topBar: {
        display: 'flex',
        // backgroundColor: '#ccc',
    }
    ,
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
});

export default ScarletScreen;