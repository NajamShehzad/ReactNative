import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';


class AlbumList extends Component {
    state ={
        albums:[]
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => this.setState({albums:res.data}))
        .catch(err => console.log(err));
        // console.log("Is it working?");
    }
    render() {
        const {albums} = this.state;
        return (
            <View>
                <Text>
                    This is Album!
                </Text>
                {albums.map(data => <Text key={data.title}>{data.title}</Text>)}
            </View>
        )
    }

}
export default AlbumList;