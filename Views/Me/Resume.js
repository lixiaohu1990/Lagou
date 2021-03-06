'use strict'
import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

import NavigatorBar from '../NavigatorBar';

export default class Resume extends Component{
    render(){
        return (
            <View style={styles.container}>
                <NavigatorBar title={this.props.title} navigator={this.props.navigator}/>

                <View style={styles.content}>
                    <Text>即将完善...</Text>
                </View>

            </View>




        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }


})
