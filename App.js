/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, ScrollView, Pressable, Switch, Keyboard, TouchableWithoutFeedback} from 'react-native';

const App = () => {
    const [name, setNameValue] = useState('');
    const [age, setAgeValue] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [UserInfo, setUserInfo] = useState([]); //Array to store submitted value
    const [showUserInfo, setShowUserInfo] = useState(true);

    const handleSubmit = () => {
        if (name.trim() && age.trim()) {
            const newComponent = (
                <Text key = {UserInfo.length} style = {{marginLeft : 10, marginTop : 10, fontFamily : 'Courier'}}>
                {name.padEnd(20)} || {age.padStart(3)}
                </Text>
            );
            setUserInfo([...UserInfo, newComponent]);
            setNameValue(''); //clear input after submit
            setAgeValue('');
        }
        Keyboard.dismiss();
    };

    return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <View style={{flex: 1}}>
        <View style = {{flex: 1}}>
        <Text style = {{marginTop : 10, marginLeft : 10}}>Name</Text>
        <TextInput
            style = {{borderWidth : 1,
                      margin : 10,
                      padding : 10,
                      borderRadius :4}}
            value = {name}
            onChangeText = {value => {
                setNameValue(value);
            }}
            autofocus = {true}
            returnKeyType = {'next'}
            placeholder = {"Your Name"}
        />

        <Text style = {{marginTop : 5, marginLeft : 10}}>Age</Text>
        <TextInput
            style = {{borderWidth : 1,
                      margin : 10,
                      padding : 10,
                      borderRadius :4}}
            value = {age}
            onChangeText = {value => {
                setAgeValue(value);
            }}
            keyboardType = {'numeric'}
            placeholder = {"Age"}
        />

        <Pressable
            style ={[{backgroundColor : 'blue', margin : 10},
                      (name.length === 0 || age.length === 0) && {opacity : 0.5},
            ]}
            disabled = {name.length === 0 || age.length === 0}
            onPress = {handleSubmit}
        >
        <Text
            style = {{color : 'white',
                      textAlign : 'center',
                      padding : 10
            }}>Submit</Text>
        </Pressable>
        </View>

        <View
        style = {{flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  position: 'absolute',
                  paddingTop: 250,
                 }}>
            <Switch
                    value = {showUserInfo}
                    onValueChange = {(value) => setShowUserInfo(value)}
            />
            <Text>Show Information</Text>

        </View>
        {showUserInfo && (
        <View style = {{flex: 3, paddingTop: 300, position: 'absolute'}}>
            <ScrollView showsVerticalScrollIndicator = {false}>
            {UserInfo}
            </ScrollView>
        </View>
        )}
    </View>
    </TouchableWithoutFeedback>
    );
};

export default App;
