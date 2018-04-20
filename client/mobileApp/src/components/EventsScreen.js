import React, { Component } from 'react';
import { ScrollView, FlatList, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import EventCardList from './EventCardList';
import Icons from 'react-native-vector-icons/Ionicons';

export default class EventsScreen extends Component {


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

        /* TODO - ALTERAR O LINK DO FETCH */
        return fetch('')
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
        /* TODO - ALTERAR ESTA PARTE DA CONDIÇÃO PARA FICAR DIFERNETE */
        <View>
            <Text style={styles.event}>{item.name}</Text>
            {!this.state.loading && <EventCardList id={item.id} name={item.name} navigation={this.props.navigation} />}
        </View>
    );

    _keyExtractor = (item) => item.id;

    render() {
        return (
            <ScrollView style={styles.wrapper}>
                <Image
                    source={require('../static/img/banner.png')}
                    style={styles.banner}
                />
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
});