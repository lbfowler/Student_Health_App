/**
 * Sample Page
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import UserAPI from '../../api/user.api'
import styles from './index.style'

export class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            academic: -1,
            career: -1,
            financial: -1,
            psychological: -1,
            physical: -1,
            social: -1,
            spiritual: -1,
            username: 'User Name Here',
            yourScore: '5',
            UAScore: '4',
            colorDiagonal: "#8fd2c7",
            colorVertical: "#b5d334",            
        };
    }
    // blackName mapping table (Case insensitive)
    // Social "Soc"
    // Physical "Phys"
    // Career "Car"
    // Financial "Fin"
    // Academic "Acad"
    // Spiritual "Spir"
    // Psychological "Psyc"

    componentDidMount(){
            UserAPI.getUserInfoAsync()
                .then((user) => {
                        this.setState({username: user.name});
                        this.setState({academic: user.scores.acad.averageScore});
                        this.setState({career: user.scores.acad.averageScore});
                        this.setState({financial: user.scores.acad.averageScore});
                        this.setState({psychological: user.scores.acad.averageScore});
                        this.setState({physical: user.scores.acad.averageScore});
                        this.setState({social: user.scores.acad.averageScore});
                        this.setState({spiritual: user.scores.acad.averageScore});
                    })
                .catch((error) =>  this.setState({username: 'John Doe'}));
    }
    render() {
        // console.log(this)
        // console.log(this.props.navigation.dangerouslyGetParent())
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.name}>{this.state.username}</Text>
                <View style={styles.scores}>
                    <View style={[styles.scoreCont,{backgroundColor: this.state.colorVertical}]}>
                        <Text style={styles.buttonText}>Your Score: {this.state.yourScore}</Text>
                    </View>
                    <View style={[styles.scoreCont,{backgroundColor: this.state.colorDiagonal}]}>    
                        <Text style={styles.buttonText}>UA Average: {this.state.UAScore}</Text>
                    </View>    
                </View>
                <View style={styles.lineStyle} />
                <TouchableOpacity
                    style={[styles.buttonCont,{backgroundColor: this.state.colorDiagonal}]}
                    onPress={() => this.props.navigation.navigate('Academic',{category: 'Acad'})}>
                    <Text style={styles.buttonText}>{this.state.academic} Academic</Text>    
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonCont,{backgroundColor: this.state.colorVertical}]}
                    onPress={() => this.props.navigation.navigate('Academic',{category: 'Car'})}>
                    <Text style={styles.buttonText}>{this.state.career} Career</Text>    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.buttonCont,{backgroundColor: this.state.colorDiagonal}]}
                    onPress={() => this.props.navigation.navigate('Academic',{category: 'Fin'})}>
                    <Text style={styles.buttonText}>{this.state.financial} Financial</Text>    
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttonCont,{backgroundColor: this.state.colorVertical}]}
                    onPress={() => this.props.navigation.navigate('Academic',{category: 'Psyc'})}>
                    <Text style={styles.buttonText}>{this.state.psychological} Psychological</Text>    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.buttonCont,{backgroundColor: this.state.colorDiagonal}]}
                    onPress={() => this.props.navigation.navigate('Academic',{category: 'Phys'})}>
                    <Text style={styles.buttonText}>{this.state.physical} Physical</Text>    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.buttonCont,{backgroundColor: this.state.colorVertical}]}
                    onPress={() => this.props.navigation.navigate('Academic',{category: 'Soc'})}>
                    <Text style={styles.buttonText}>{this.state.social} Social</Text>    
                </TouchableOpacity> 
                <TouchableOpacity
                    style={[styles.buttonCont,{backgroundColor: this.state.colorDiagonal}]}
                    onPress={() => this.props.navigation.navigate('Academic',{category: 'Spir'})}>
                    <Text style={styles.buttonText}>{this.state.spiritual} Spiritual</Text>    
                </TouchableOpacity>
            </View>
        );
    }
};
export default ProfileScreen;