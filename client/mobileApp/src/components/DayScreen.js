import React, { Component } from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements';

export default class DayScreen extends Component {

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
            error: null
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
        <TouchableOpacity
            onPress={() => {
                this.props.navigation.navigate('List', {
                    id: item.id,
                    title: item.name
                });
            }}

        >
            <ListItem
                title={item.name}
                rightIcon={{ style: { opacity: 0 } }}
            />
        </TouchableOpacity>
    );

    _keyExtractor = (item) => item.id;

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }
}