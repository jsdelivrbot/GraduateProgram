import React, { Component } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity, ActivityIndicator, Text, Image, StatusBar} from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import {connect} from 'react-redux';
import {fetchDay} from '../actions/daysActions'

/* Screen presenting the photos galleries of a day from a selected event */
class DayScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            title: params.title,
            headerStyle: {
                backgroundColor: '#0145CD'
            },
            headerTintColor: 'white'
        }
    };

    componentDidMount(){
        const { params } = this.props.navigation.state;
        const id = params ? params.id : null;

        this.props.dispatch(fetchDay(id));
    }

    _renderItem = ({item}) => (
        <TouchableOpacity
            onPress={() => {
                this.props.navigation.navigate('Gallery', {
                    id: item._id,
                    title: item.name
                });
            }}
        >
            <ListItem
                title={item.name}
                rightIcon={{ style: { opacity: 0 } }}
                containerStyle={{ borderBottomWidth: 0 }}
            />
            <Divider style={{ backgroundColor: '#C0C0C0', marginLeft:20, marginRight:20}} />
        </TouchableOpacity>
    );

    _keyExtractor = (item) => item._id;

    /*{this.props.day.loading && <View style={styles.container}><ActivityIndicator style={styles.indicator} size="large" color="#0145CD" /></View>}
                {!this.props.day.loading && this.props.day.error !== null && <Text>{this.props.day.error.message}</Text>}
                {!this.props.day.loading && this.props.day.error === null &&
                <FlatList
                    data={this.props.day.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />}*/

    render() {
        return (
            <View style={styles.container}>
                {this.props.day.loading && <View style={styles.indicator}><ActivityIndicator size="large" color="#0145CD" /></View>}
                {!this.props.day.loading && this.props.day.error !== null && <Text>{this.props.day.error.message}</Text>}
                {!this.props.day.loading && this.props.day.error === null &&
                <FlatList
                    data={this.props.day.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
});

export default connect(store => ({day: store.days}))(DayScreen);