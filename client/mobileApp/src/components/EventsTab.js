import React, { Component } from 'react';
import { ScrollView, FlatList, View, Image, Text, StyleSheet,  ActivityIndicator, StatusBar } from 'react-native';
import EventCardList from './EventCardList';
import {connect} from 'react-redux';
import {fetchEvents} from '../actions/eventsActions'

/* Events Tab */
export class EventsTab extends Component {
    componentDidMount(){
        this.props.dispatch(fetchEvents());
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
                {this.props.events.loading && <View style={styles.indicator}><ActivityIndicator size="large" color="#0145CD" /></View>}
                {!this.props.events.loading && this.props.events.error !== null && <Text>{this.props.events.error.message}</Text>}
                {!this.props.events.loading && this.props.events.error === null &&
                <FlatList
                    data={this.props.events.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />}
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

export default connect(store => ({events: store.events}))(EventsTab);
