import React, { Component } from 'react';
import { ScrollView, FlatList, View, Image, Text, StyleSheet,  ActivityIndicator, StatusBar, TouchableOpacity, Button } from 'react-native';
import EventCardList from './EventCardList';
import Icons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchEvents} from '../actions/actions'

/* Events Tab */
class EventsTab extends Component {
        static navigationOptions = {
        tabBarLabel: 'Events',
            headerLeft: (
                <TouchableOpacity style={{paddingLeft:20}} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                    <Icons name="md-menu" size={30} color="#ffff" />
                </TouchableOpacity>
            ),
            headerRight: (
                <TouchableOpacity style={{paddingRight:20}} onPress={() => alert('search something')}>
                    <Icons name="md-search" size={30} color="#ffff" />
                </TouchableOpacity>
            ),
    };

    /*constructor(){
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

        axios.get('https://graduates-mindera.herokuapp.com/events')
            .then((res) => {
                this.setState({
                    data: res.data,
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
    }*/

    componentDidMount(){
        this.props.fetchEvents();
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
                <StatusBar
                    backgroundColor="#01308d"
                    barStyle="light-content"
                />
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
        flex: 1,
        marginBottom: 20
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

export default connect(null, {fetchEvents})(EventsTab);