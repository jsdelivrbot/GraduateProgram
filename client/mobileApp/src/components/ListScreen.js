import React, { Component } from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

export default class ListScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;

        return {
            title: params.title,
            headerStyle: {
                backgroundColor: '#788691',
                elevation: 0, // Removes bottom shadow of the nav bar
                borderBottomWidth: 1,
                borderBottomColor: '#67758b',
            },
            headerTintColor: 'white'
        }
    };

    constructor(props){
        super(props);

        this.state = {
            data: [],
            loading: true,
            error: null,
            columns: 2
        }
    }

    /* TODO - ALTERA URL */
    componentDidMount(){
        const { params } = this.props.navigation.state;
        const id = params ? params.id : null;

        return fetch('' + id)
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
        <View style={{margin: 10}}>
            <Image
                style={{width: Dimensions.get('window').width/2 - 30, height: 170, marginBottom: 4}}
                source={{uri: item.image }}
            />
            <Text>{item.name}</Text>
        </View>
    );

    _keyExtractor = (item) => item.id;

    render() {
        return (
            <View>
                <FlatList
                    style={{ padding: 10 }}
                    numColumns={this.state.columns}
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }
}