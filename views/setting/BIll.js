import React, { useState, useRef, useEffect } from 'react';
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
import {AppTpr} from '../../src/api/main'
import {Net} from '../../src/util/request';
function Bill(props) {
    const OpcBillDetailCheck = async ()=>{
        Net('scapi_hctest/api/App/Tpr?StartDate=&EndDate=&ResidentId=10000&Type=5')
      .then(res => {
          console.log('11122')
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
//         fetch("http://47.100.251.89/scapi_hctest/api/App/Tpr?StartDate=&EndDate=&ResidentId=10000&Type=5",{
//             method:'get'
//         })
// .then(function(res){
//    console.log(1234)
//    console.log(res.json())
// })
        // let result = await AppTpr({
        //     residentId:'10000',
        //     StartDate:'',
        //     EndDate:'',
        //     type:'5'
        // }).then(res=>res.data.data)
        // // let result = await AppTpr({
        // //     residentId:'10000',
        // //     StartDate:'',
        // //     EndDate:'',
        // //     type:'5'
        // // }).then((res)=>res.data)
        console.log(result)
    }
    useEffect(()=>{
        OpcBillDetailCheck()
    },[])
    return (
        <>
            <SafeAreaView style={
                {

                    flex: 1, backgroundColor: '#fff',
                }}>
                <View>
                    <Text>1</Text>
                </View>
            </SafeAreaView>
        </>
    );
}

export default Bill;