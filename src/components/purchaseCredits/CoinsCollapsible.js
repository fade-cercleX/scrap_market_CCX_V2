import React, { useState } from "react";
import {
  SafeAreaView,
  Switch,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { SemiBold, Text } from "../../layout/Text";
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { style } from "../../styles/index";
import {Entypo} from 'react-native-vector-icons'


const CoinsCollapsible = () => {
  const [activeSections, setActiveSections] = useState([]);
  const [multipleSelect] = useState(false);
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const CONTENT = [
    {
      title: 'Market Price (1 coin)',
      content:
        'To see detailed view of market price once, one coin will be deducted',
    },
    {
      title: 'Posting Scraps',
      content:
        'You can post unlimited scraps for buying and selling. It’s completely free.',
    },
    {
      title: 'Bidding on Scraps (1 coin)',
      content:
        'For bidding on scraps, one coin will be deducted. Both selling and buying.',
    },

    {
      title: 'User Details (5 coins)',
      content:
        'Our Return & Refund Policy template lets you get started with a Return and Refund Policy agreement. This template is free to download and use.According to TrueShip study, over 60% of customers review a Return/Refund Policy before they make a purchasing decision.',
    },
  ];

  const SELECTORS = [
    { title: 'T&C', value: 0 },
    { title: 'Privacy Policy', value: 1 },
    { title: 'Return Policy', value: 2 },
  ];

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        transition="backgroundColor">
        <View style={[styles.header, isActive ? styles.text : style.inputText]} >
        <Text>{section.title}</Text>
         { isActive ?  <Entypo name='chevron-small-up' size={24} />: <Entypo name='chevron-small-down' size={24} />  }
        </View>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          >
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <ScrollView>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  title: {
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    padding: 10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor:"#fff",
    borderRadius:7
    
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    backgroundColor:"#fff",
    padding: 20,
    shadowColor:"rgba(230,230,230,0.025)",
    shadowOpacity:1.9,
    elevation:1,
    shadowOffset:{ 
      width:0,
      height:4
    },
        
    
  },
  active: {
    borderRadius:7,
    backgroundColor:"#fff",
    paddingHorizontal:10,
    paddingVertical:10
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
});
export default CoinsCollapsible;
