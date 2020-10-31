import React from 'react';
import {
    SafeAreaView,
    TextInput,
    Text,
    View,
    Button
} from 'react-native';
// 路由跳转
import { Actions } from 'react-native-router-flux';
// css
import styles from '../src/style/index'
// icon
import AntDesign from 'react-native-vector-icons/AntDesign';
function IdCard(props) {
    const [value, onChangeText] = React.useState('110120198001011234');
    return (
        <>
            <SafeAreaView style={
                {
                    flex: 1, backgroundColor: '#fff',alignItems:'center',justifyContent:'center'
                }}>
                <View style={{flexDirection: 'row',alignItems:'center',width:'80%'}}>
                <AntDesign name={'user'} size={23} color="#333"/>
                <TextInput
                placeholder="身份证"
                    style={{ height: 40,flex:1, borderColor: 'gray', borderBottomWidth: 1 ,borderRadius:5,marginLeft:5}}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
                </View>
                <Text
                style={{marginTop:20,...styles.buttonCommal}}
                onPress={() => Actions.movies()}
                >
                    确定
                    </Text>
            </SafeAreaView>
        </>

    );
}

export default IdCard;