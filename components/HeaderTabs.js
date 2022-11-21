import { View, Text, TouchableOpacity, } from 'react-native';
import React, {useState} from 'react';

function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery")

  return (
    <View style = {{flexDirection : "row", alignSelf:"center",marginTop : 10}}>
      <HeaderButton btnText = "Delivery" activeTab= {activeTab} setActiveTab= {setActiveTab}/>
      <HeaderButton btnText = "Pick up"  activeTab ={activeTab} setActiveTab = {setActiveTab} />
    </View>
  )
}

const HeaderButton = ({btnText,activeTab,setActiveTab}) => {
    return (
        <TouchableOpacity style = {{
            backgroundColor : activeTab === btnText ? "black": "white" ,
            paddingHorizontal: 27,
            paddingVertical : 8,
            borderRadius : 30,
        }}
        
        onPress  = {() => setActiveTab(btnText)}
        >
            <Text style = {{
                color : activeTab === btnText ? "white" : "black",
                fontWeight : "900",
                fontSize : 17
            }}>{btnText}</Text>
        </TouchableOpacity>
    ); 
}


export default HeaderTabs;