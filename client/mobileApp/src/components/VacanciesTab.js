import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';

/* Vacancies Tab */
export default class VacanciesTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>Vacancies</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    mainText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});