import { DrawerItems, SafeAreaView } from 'react-navigation';
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableNativeFeedback,
} from 'react-native';

class CustomDrawerContentComponent extends Component {
    render() {
        const { theme, user } = this.props;
        const ripple = TouchableNativeFeedback.Ripple('#adacac', false);

        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <SafeAreaView
                        style={styles.container}
                        forceInset={{ top: 'always', horizontal: 'never' }}
                    >
                        <View style={[styles.containHeader, { backgroundColor: 'white' }]}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Avatar size='large' rounded icon={{ name: 'user-circle-o', type: 'font-awesome', size: 80 }} />
                                <Text style={{ color: '#f9f9f9', marginTop: '3%', fontFamily: 'sans-serif-condensed' }}>{`Hi ${user.firstname}`}</Text>
                                <Text style={{ color: '#f9f9f9', fontFamily: 'sans-serif-condensed' }}>{`${user.email}`}</Text>
                            </View>
                        </View>

                        <DrawerItems {...this.props} />

                        <View>
                            <View style={{ marginTop: '2%' }}>
                                <Divider style={{ backgroundColor: '#777f7c90' }} />
                            </View>
                            <View style={{ marginTop: '3%' }}>
                                <ColorPalette />
                            </View>
                            <View style={{ marginTop: '5%' }}>
                                <Divider style={{ backgroundColor: '#777f7c90' }} />
                            </View>
                        </View>
                    </SafeAreaView>
                </ScrollView>

                <View elevation={6} style={{ backgroundColor: '#ffffff' }}>
                    <TouchableNativeFeedback background={ripple}>
                        <View style={styles.containDrawerOption}>
                            <Icon
                                name='logout'
                                type='simple-line-icon'
                                size={20}
                                color={theme.pri700}
                                containerStyle={{ marginRight: '10%' }}
                            />
                            <Text style={{ color: 'black', fontFamily: 'sans-serif-medium' }}>Logout</Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback background={ripple}>
                        <View style={styles.containDrawerOption}>
                            <Icon
                                name='user-secret'
                                type='font-awesome'
                                size={24}
                                color={theme.pri700}
                                containerStyle={{ marginRight: '10%' }}
                            />
                            <Text style={{ color: 'black', fontFamily: 'sans-serif-medium' }}>Developer</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>

            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: 'white',
        width: '50%',
        height: '100%',
    },
    showMod:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1/5,
        height: '50%',
        width: '50%',
    },
    hamburger: {
        alignItems: 'center',
        flex: 1/8,
        justifyContent: 'center',
        resizeMode: 'contain',
        marginRight: "7.5%",
    },
});
export default CustomDrawerContentComponent;