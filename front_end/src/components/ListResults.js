import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ResultDetail from './ResultDetail';

class ListResult extends Component {
    state = { results: [] };

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({results: response.data}));
    }

    renderList(){
        return this.state.results.map(
            result => <ResultDetail key={result.title} itenary={result} />
        );
    }

    render(){
        return (
            <View>
                {this.renderList()}
            </View>
        );
    }
};

export default ListResult;