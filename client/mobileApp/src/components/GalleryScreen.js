import React, { Component } from 'react';
import {FlatList, View, Image, Text, Dimensions, ActivityIndicator, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {fetchGallery} from '../actions/galleriesActions'

/* Screen where the Gallery with photos is presented */
class GalleryScreen extends Component {

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

    componentDidMount() {
        const { params } = this.props.navigation.state;
        const id = params ? params.id : null;

        this.props.dispatch(fetchGallery(id));
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
            <View style={styles.container}>
                {this.props.gallery.loading && <View style={styles.indicator}><ActivityIndicator size="large" color="#0145CD" /></View>}
                {!this.props.gallery.loading && this.props.gallery.error !== null && <Text>{this.props.gallery.error.message}</Text>}
                {!this.props.gallery.loading && this.props.gallery.error === null &&
                <FlatList
                    style={{padding: 10}}
                    numColumns={this.props.gallery.columns}
                    data={this.props.gallery.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default connect(store => ({gallery: store.galleries}))(GalleryScreen);