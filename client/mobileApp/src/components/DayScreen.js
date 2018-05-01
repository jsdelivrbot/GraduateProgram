import React, { Component } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
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

    constructor(){
        super();

        this.state = {
            data: [],
            loading: true,
            error: null
        }
    }

    componentDidMount(){
        const { params } = this.props.navigation.state;
        const id = params ? params.id : null;

        this.setState({
            loading: true
        });

        return fetch('https://graduates-mindera.herokuapp.com/day/' + id)
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
                this.props.navigation.navigate('Gallery', {
                    id: item._id,
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

    _keyExtractor = (item) => item._id;

    render() {
        return (
            <View>
                {this.state.loading && <View style={styles.indicator}><ActivityIndicator size="large" /></View>}
                <FlatList
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