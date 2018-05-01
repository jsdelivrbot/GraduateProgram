import React, { Component } from 'react';
import { ScrollView, FlatList, View, Image, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import EventCardList from './EventCardList';

export default class EventsTab extends Component {
    static navigationOptions = {
        tabBarLabel: 'Events'
    };

    constructor(){
        super();
        this.state = {
            data: [],
            loading: true,
            error: null
        }
    }

    componentDidMount(){
        this.setState({
            loading: true
        });

        return fetch('https://graduates-mindera.herokuapp.com/events')
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    data: res,
                    loading: false
                }, function(){
                });
            })
            .catch((error) =>{
                this.setState({
                    loading: false
                });

                console.log(error);
            });
    }

    _renderItem = ({item}) => (
        <View>
            <Text style={styles.event}>{item.name}</Text>
            <EventCardList id={item._id} name={item.name} days={item.days} navigation={this.props.navigation} />
        </View>
    );

    _keyExtractor = (item) => item._id;

    render() {
        return (
            <ScrollView style={styles.wrapper}>
                <Image
                    source={require('../static/img/banner.png')}
                    style={styles.banner}
                />
                {this.state.loading && <View style={styles.indicator}><ActivityIndicator size="large" /></View>}
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    banner: {
        height:180,
        width:'100%'
    },
    wrapper: {
        flex: 1
    },
    event: {
        color: '#494949',
        fontSize: 15,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 10
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});