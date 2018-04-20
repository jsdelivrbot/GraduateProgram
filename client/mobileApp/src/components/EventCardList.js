import React, { Component } from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default class EventCardList extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            loading: true,
            error: null
        }
    }

    /* TODO - ALTERA URL */
    componentDidMount(){
        return fetch('' + this.props.id)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    loading: false,
                    data: res,
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
        <TouchableOpacity style={styles.card}
            onPress={() => {
                this.props.navigation.navigate('Day', {
                    id: item.id,
                    title: this.props.name+'_'+item.name
                });
            }}
        >
            <ImageBackground style={styles.cardBackground} source={{uri: item.cover_img }}>
                <View style={styles.cardFooter}>
                    <Text style={styles.textFooter}>{item.name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );

    _keyExtractor = (item) => item.id;

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
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
        paddingLeft:10,
        paddingRight: 10
    },
    card: {
        marginLeft:10,
        marginRight:10
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
        fontSize: 15
    }
});

