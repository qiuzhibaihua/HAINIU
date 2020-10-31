import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    ImageBackground,
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import moment from 'moment'
// 路由跳转
import { Actions } from 'react-native-router-flux';
// icon
import AntDesign from 'react-native-vector-icons/AntDesign';

function Order(props) {
    let nameRef = useRef()
    let date = [0, 1, 2, 3, 4, 5, 6].map(i => moment().day(i).date())

    // 顶部数据
    const [topData, setTopData] = useState([
        {
            name: '周日',
            date: date[0]
        },
        {
            name: '周一',
            date: date[1]
        },
        {
            name: '周二',
            date: date[2]
        },
        {
            name: '周三',
            date: date[3]
        },
        {
            name: '周四',
            date: date[4]
        },
        {
            name: '周五',
            date: date[5]
        },
        {
            name: '周六',
            date: date[6]
        }
    ])
    // 左侧数据
    const [leftData, setleftData] = useState([{
        type: 1,
        name: '早餐',
        layout: 0,
    }, {
        type: 2,
        name: '午餐',
        layout: 0,
    }, {
        type: 1,
        name: '晚餐',
        layout: 0,
    }])
    // 早餐数据
    const [zcFood, setzcFood] = useState([
        {
            img: '',
            name: '套餐A',
            des: '龙虾 牛蛙',
            price: '30',
            number: 0,
        },
        {
            img: '',
            name: '套餐A',
            des: '龙虾 牛蛙',
            price: '30',
            number: 0,
        },
        {
            img: '',
            name: '套餐A',
            des: '龙虾 牛蛙',
            price: '30',
            number: 0,
        },
        {
            img: '',
            name: '套餐A',
            des: '龙虾 牛蛙',
            price: '30',
            number: 0,
        },
        {
            img: '',
            name: '套餐A',
            des: '龙虾 牛蛙',
            price: '30',
            number: 0,
        }
    ])
    // 设置layout
    const settingLayout = (index, layout) => {
        let self = leftData
        self[index].layout = layout
        setleftData(self)
    }
    const [selected, setselected] = useState(0)
    const selectIndex = (index) => {
        setselected(index)
    }
    // 添加
    const addFood = (index) => {
        setzcFood((oldData) => {
            oldData[index].number = oldData[index].number + 1
            return [...oldData]
        })
    }
    // 减少
    const delFood = (index) => {
        setzcFood((oldData) => {
            oldData[index].number = oldData[index].number - 1
            return [...oldData]
        })
    }
    return (
        <>
            <SafeAreaView style={
                {
                    flex: 1,
                }}>
                <ImageBackground source={require('../../resource/images/bgTop.png')} style={{
                    height: 50, display: 'flex',
                }}>
                    <View style={styles.topBar}>
                        <View style={{ flex: 1, paddingLeft: 10, }}>
                            <AntDesign name={'left'} size={20} color="#fff" onPress={() => Actions.pop()} />
                        </View>
                        <Text style={{ flex: 3, textAlign: 'center', color: '#fff', fontSize: 18 }}>订餐服务</Text>
                        <Text style={{ flex: 1 }}></Text>
                    </View>
                </ImageBackground>
                <ImageBackground style={{
                    display: 'flex', flexDirection: 'row'
                }}>

                    {
                        topData.map((item, index) => {

                            return (<View key={index} style={{ flex: 1, paddingTop: 10, paddingBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ paddingTop: 2, paddingBottom: 2, }}>{item.name}</Text>
                                <Text >{item.date}</Text>
                            </View>)
                        })
                    }
                </ImageBackground>
                <View style={
                    {
                        flex: 1, backgroundColor: '#F7F7F7', flexDirection: 'row'
                    }}>
                    <View style={
                        {
                            flexDirection: 'column',
                        }}>
                        {
                            leftData.map((element, index) => {
                                return (
                                    <View key={index} style={{ borderLeftWidth: 4, borderColor: (index == selected ? '#FEB15F' : '#fff') }}>
                                        <Text style={{ width: '100%', paddingLeft: 30, paddingRight: 30, paddingTop: 20, paddingBottom: 20, textAlign: 'center', backgroundColor: (index == selected ? '#fff' : '#F7F7F7') }} onPress={() => { nameRef.current.scrollTo({ y: leftData[index].layout }); selectIndex(index) }}>{element.name}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>

                    <ScrollView
                        ref={nameRef}
                        style={styles.scrollView}>
                        <View>
                            <View onLayout={event => { settingLayout(0, event.nativeEvent.layout.y) }}>
                                {
                                    zcFood.map((item, index) => {
                                        return (
                                            <View key={index} style={{ flex: 1, flexDirection: 'row', width: '100%', paddingLeft: 15, paddingTop: 10, marginBottom: 10, }}>
                                                <View style={{ width: '35%', height: 0, paddingBottom: '35%', borderRadius: 10, backgroundColor: '#eaeaea' }}>
                                                </View>
                                                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 4, paddingBottom: 4 }}>
                                                    <Text style={{ fontSize: 16, paddingBottom: 10, }}>{item.name}</Text>
                                                    <Text style={{ flex: 1 }}>{item.des}</Text>
                                                    <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                        <Text style={{ fontSize: 16, color: '#FAAC06' }}>{item.name}</Text>
                                                        <View style={{ display: 'flex', paddingRight: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                                                            {
                                                                item.number > 0 ? <TouchableOpacity activeOpacity={1} onPress={() => { delFood(index) }}>
                                                                    <Image style={styles.imagePadding}
                                                                        source={require('../../resource/images/home/Order/delete.png')}
                                                                    />
                                                                </TouchableOpacity> : <></>
                                                            }

                                                            <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{item.number}</Text>
                                                            <TouchableOpacity activeOpacity={1} onPress={() => { addFood(index) }}>
                                                                <Image style={styles.imagePadding}
                                                                    source={require('../../resource/images/home/Order/add.png')}
                                                                />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>

                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                           
                        </View>
                    </ScrollView>
                </View>
                <View style={{ position: 'relative' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.8)', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 80, }}>
                            <Text style={{ fontSize: 17, color: '#fff' }}>￥35.8</Text>
                        </View>
                        <View style={{ backgroundColor: '#FEB15F', height: '100%', paddingTop: 18, paddingBottom: 18, paddingLeft: 20, paddingRight: 20 }}>
                            <Text style={{ fontSize: 16, color: '#fff' }} onPress={()=>{Actions.orderJS()}}>去结算</Text>
                        </View>
                    </View>
                    <Image style={{ ...styles.imagePadding, position: 'absolute', bottom: 4, left: 14, }}
                        source={require('../../resource/images/home/Order/cart.png')}
                    />
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
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
        alignItems: 'center',
        justifyContent: 'center',
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
export default Order;