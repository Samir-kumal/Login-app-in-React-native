import {
  View,
  Text,
  TextInput,
  Image,
  Touchable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useReducer, useState} from 'react';
import Button from './Button';

const LoginContainer = () => {
  const Style = {
    textColor: `text-black`,
  };
 const [userEmail, setEmail] =  useState("");
  const [userPassword, setPassword] = useState(""); 
  const [isEmailValid, setEmailIsValid] = useState();
  const [isPasswordValid, setPasswordIsValid] = useState(true);

  const onSubmitHandler = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(userEmail) === true) {
      setEmailIsValid(true)
    Alert.alert("Logged in Successfully")
    } else {
      setEmailIsValid(false)
      Alert.alert("please write valid email")
    }
  };
  return (
    <View className="h-full pt-4 flex flex-col gap-4 items-center text-black w-full bg-white">
      <TextInput
        value={userEmail}
        className="border-[1px] rounded-md pl-4 text-black h-16 w-[90%] border-black"
        // style={{borderWidth: 1, borderRadius: 8, paddingLeft: 4, color: 'black', height: 60, width: '90%', borderColor: 'black'}}

        placeholder="Enter user email"
        placeholderTextColor="#000"
        onChangeText={setEmail}
      />
      <TextInput
        value={userPassword}
        className="border-[1px] rounded-md pl-4 text-black h-16 w-[90%] border-black"
        // style={{borderWidth: 1, borderRadius: 8, paddingLeft: 4, color: 'black', height: 60, width: '90%', borderColor: 'black'}}

        placeholder="Enter  Password"
        placeholderTextColor="#000"
        onChangeText={setPassword}
      />
      <Text className={`${Style.textColor} font-bold translate-x-28`}>
        Forgot password?
      </Text>
      <View className="w-[90%] translate-y-0">
        <Button title="Submit" onPress={onSubmitHandler} />
      </View>

      <View className="w-[90%] relative flex justify-center items-center   h-20">
        <View className="h-[1px] w-[32%] bg-black absolute left-0"></View>
        <Text className={`${Style.textColor}`}>Or login with</Text>
        <View className="h-[1px] w-[32%] bg-black absolute right-0"></View>
      </View>
      <View
        className={`w-[90%] h-14  items-center flex flex-row  justify-between  `}>
        <View
          className={`flex  flex-row justify-center items-center w-[45%] h-full border-[1px] rounded-lg`}>
          <Image
            className={`-translate-x-3`}
            source={require('../assets/Google.png')}
          />
          <Text className={Style.textColor}>Google</Text>
        </View>
        <View
          className={`flex flex-row justify-center items-center w-[45%] h-full  border-[1px] rounded-lg`}>
          <Image
            className={`-translate-x-3`}
            source={require('../assets/Facebook.png')}
          />
          <Text className={Style.textColor}>Facebook</Text>
        </View>
      </View>
      <View className={`flex flex-row gap-2`}>
        <Text className={`${Style.textColor}`}> Dont have an Account?</Text>
        <TouchableOpacity
          onPress={onSubmitHandler}
          className={`${Style.textColor}`}>
          <Text className={`${Style.textColor} font-bold`}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginContainer;
