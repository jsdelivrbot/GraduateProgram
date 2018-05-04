import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

/* Horizontal list presenting each day of an event */
export default class EventCardList extends Component {

    _renderItem = ({item}) => (
        <TouchableOpacity style={styles.card}
            onPress={() => {
                this.props.navigation.navigate('Day', {
                    id: item._id,
                    title: this.props.name+'_'+item.name
                });
            }}
        >
            <ImageBackground style={styles.cardBackground} source={{uri: item.image}}>
                <View style={styles.cardFooter}>
                    <Text style={styles.textFooter}>{item.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );

    _keyExtractor = (item) => item._id;

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.props.days}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 175,
        paddingLeft:20,
        paddingRight: 20
    },
    card: {
        marginRight:15
    },
    cardBackground: {
        width: 140,
        height: 175,
        flexDirection: 'row',
        alignItems: 'flex-end',

    },
    cardFooter: {
        width: '100%',
        height: 40,
        backgroundColor: 'rgba(191,191,191,.8)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textFooter: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    }
});

