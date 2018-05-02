import React, { Component } from 'react';
import {FlatList, View, Image, Text, Dimensions, ActivityIndicator, StyleSheet} from 'react-native';

/* Screen where the Gallery with photos is presented */
export default class GalleryScreen extends Component {

    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;

        return {
            title: params.title,
            headerStyle: {
                backgroundColor: '#0145CD'
            },
            headerTintColor: 'white'
        }
    };

    constructor() {
        super();

        this.state = {
            data: [],
            loading: true,
            error: null,
            columns: 2
        }
    }

    componentDidMount() {
        const {params} = this.props.navigation.state;
        const id = params ? params.id : null;

        this.setState({
            loading: true
        });

        return fetch('https://graduates-mindera.herokuapp.com/gallery/' + id)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    loading: false,
                    data: res,
                }, function () {
                });
            })
            .catch((error) => {
                this.setState({
                    loading: false
                });

                console.log(error);
            });
    }

    _renderItem = ({item}) => (
        <View style={{margin: 10}}>
            <Image
                style={{width: Dimensions.get('window').width / 2 - 30, height: 170, marginBottom: 4}}
                source={{uri: item.image}}
            />
            <Text>{item.description}</Text>
        </View>
    );

    _keyExtractor = (item) => item.id;

    render() {
        return (
            <View style={{marginBottom: 20}}>
                {this.state.loading && <View style={styles.indicator}><ActivityIndicator size="large" /></View>}
                <FlatList
                    style={{padding: 10}}
                    numColumns={this.state.columns}
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});