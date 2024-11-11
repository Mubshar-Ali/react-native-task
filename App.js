import React from 'react';
import {Text,View} from 'react-native';
const Name =()=> {
  return <Text>Mubashir Ali</Text>;
};
const Main =()=> {
    const names= [];
     for(let i=0; i <= 10; i++ ){
       names.push(<Name key={i} />);
     }
  return (
    <View>
        {names}
    </View>);
};

export default Main;