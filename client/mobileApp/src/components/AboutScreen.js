import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, WebView, TouchableOpacity, Linking } from 'react-native';
import {StackNavigator} from "react-navigation";
import Icons from 'react-native-vector-icons/Ionicons';

/* About Screen */
class AboutScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'About',
            headerStyle: {
                backgroundColor: '#0145CD'
            },
            headerTintColor: 'white',
            headerLeft: (
                <TouchableOpacity style={{paddingLeft:20}} onPress={() => navigation.navigate('Home')}>
                    <Icons name="md-arrow-back" size={25} color="#ffff" />
                </TouchableOpacity>
            )
        }
    };

    handleClickLinkedin = () => {
        Linking.canOpenURL('https://www.linkedin.com/in/manuelggomes/').then(supported => {
            if (supported) {
                Linking.openURL('https://www.linkedin.com/in/manuelggomes/');
            } else {
                console.log("Don't know how to open URI: " + 'https://www.linkedin.com/in/manuelggomes/');
            }
        });
    };

    handleClickGitHub = () => {
        Linking.canOpenURL('https://github.com/MaggGomes').then(supported => {
            if (supported) {
                Linking.openURL('https://github.com/MaggGomes');
            } else {
                console.log("Don't know how to open URI: " + 'https://github.com/MaggGomes');
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#01308d"
                    barStyle="light-content"
                />
                <Text style={styles.author}>Manuel Gomes</Text>
                <View style={styles.social}>
                    <TouchableOpacity style={styles.socialButton} onPress={this.handleClickLinkedin}>
                        <Icons name="logo-linkedin" size={60} color="#494949" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton} onPress={this.handleClickGitHub}>
                        <Icons name="logo-github" size={60} color="#494949" />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    author: {
      fontSize: 30,
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialButton: {
        padding: 20
    }
});

const AboutStackNav = StackNavigator (
    {
        About: {
            screen: AboutScreen
        }
    },
    {
        initialRouteName: 'About'
    });

export default AboutStackNav;