import React, { Component } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import axios from 'axios';

/* Screen presenting the photos galleries of a day from a selected event */
export default class DayScreen extends Component {

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

        axios.get('https://graduates-mindera.herokuapp.com/day/' + id)
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