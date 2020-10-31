/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// 组件路由
import { Router, Scene, Tabs } from 'react-native-router-flux';

// 页面
import homePage from './views/home/homePage'
// 活动页面
import activity from './views/activity/Activity'
import test2 from './views/test2'
import setting from './views/setting/index'
import idCard from './views/idCard'
import TabIcon from './views/tabbar';

// 一般服务
import GeneralService from './views/home/GeneralService/GeneralService';
// 一般服务列表
import GeneralServiceList from './views/home/GeneralService/GeneralServiceList'
// 一般服务预约
import GeneralServiceYY from './views/home/GeneralService/GeneralServiceYY'

// 订餐
import order from './views/home/Order'
// 订餐结算
import orderJS from './views/home/orderJS'

// 长者订单
// import Bill from './views/setting/Bill'
import Bill from './views/setting/BIll.js'
const App: () => React$Node = () => {
  return (
    <>
      <Router>
        <Scene key="root" >
          <Tabs
            swipeEnabled={true}
            wrap={false}
            hideNavBar
            upperCaseLabel={true}
            showLabel={true}
            tabBarStyle={{ backgroundColor: "#fff", borderTopWidth: 1, borderTopColor: '#ddd' }}
            tabStyle={{ backgroundColor: "#fff" }}
            labelStyle={{ fontSize: 14 }}
            activeBackgroundColor="#2aabe4"
            inactiveBackgroundColor="#999"
            activeTintColor='#FEB15F'
            inactiveTintColor='#9BA0B5'
          >
            <Scene key="home"
              component={homePage}
              icon={TabIcon}
              title="首页"
              initial
            />
            <Scene
              key="activity"
              component={activity}
              icon={TabIcon}
              title="活动"
            />
            <Scene
              key="message"
              component={test2}
              icon={TabIcon}
              title="消息"
            />
             <Scene
              key="setting"
              component={setting}
              icon={TabIcon}
              title="设置"
              back={true}
            />
          </Tabs>
        <Scene hideNavBar key="idCard" component={idCard} title="idCard" />
        {/* 一般服务 */}
        <Scene hideNavBar key="GeneralService" component={GeneralService} title="GeneralService" />
        <Scene hideNavBar key="GeneralServiceList" component={GeneralServiceList} title="GeneralServiceList" />
        <Scene hideNavBar key="GeneralServiceYY" component={GeneralServiceYY} title="GeneralServiceYY" />

        {/* 订餐 */}
        <Scene hideNavBar key="order" component={order} title="order" />
        <Scene hideNavBar key="orderJS" component={orderJS} title="orderJS" />

        {/* 设置 */}
        {/* 长者订单 */}
        
        <Scene hideNavBar key="Bill" component={Bill} title="Bill" />
        </Scene>
        

      </Router>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
