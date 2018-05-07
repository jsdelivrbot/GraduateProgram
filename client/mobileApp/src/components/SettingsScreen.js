import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Linking } from 'react-native';
import { Container, Content, Header, Title, Body, Left, Icon} from 'native-base';

/* About Screen */
export default class SettingsScreen extends Component {
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
            <Container>
                <Header style={styles.headerContainer}>
                    <Left>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name="arrow-back" style={{fontSize:25, color:'white', paddingLeft: 10}} />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                    <Title style={{left: -35, fontWeight: 'bold'}}>
                        Settings
                    </Title>
                    </Body>
                </Header>
                <Content contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View>
                        <StatusBar
                            backgroundColor="#01308d"
                            barStyle="light-content"
                        />
                        <Text>This is a Settings Screen</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#0145CD'
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
    },
    socialIcon: {
        fontSize: 60,
        color: '#494949'
    }
});
