/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * Copyright cuiyueshuai
 * @author cuiyueshuai<850705402@qq.com>
 */

import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';

import ExpandableList from 'react-native-expandable-section-flatlist';
import MockData from './constants/mockData';
import DictStyle from './constants/dictStyle';

class Example extends React.PureComponent {

  _renderRow = (rowItem, rowId, sectionId) => (
    <TouchableOpacity key={rowId} onPress={() => {}}>
      <View
        style={{ alignItems: 'center', margin: 5, padding: 5,
          borderWidth: 0.5, borderColor: DictStyle.colorSet.lineColor }}
      >
        <Text style={{ fontSize: DictStyle.fontSet.mSize, color: DictStyle.colorSet.normalFontColor }}>
          {rowItem.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  _renderSection = (section, sectionId)  => {
    return (
      <View
        style={{ marginVertical: 10, marginHorizontal: 15, height: 30, flexDirection: 'row',
          justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5,
          borderBottomColor: DictStyle.colorSet.lineColor }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: DictStyle.fontSet.mSize, color: DictStyle.colorSet.normalFontColor }}>
            {section}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: DictStyle.fontSet.xSize, color: DictStyle.colorSet.weakFontColor }}>
            {'更多 '}
          </Text>
        </View>
      </View>
    );
  };

  _headerOnPress = (i, item) => {
    console.log(i, item);
  };

  _btnPress = () => {
    // this.ExpandableList.scrollToEnd();
    // this.ExpandableList.scrollToIndex({ index: 3 });
    this.ExpandableList.scrollToSection({ section: 4 }); // The starting point of a section is 0;
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ExpandableList
          ref={instance => this.ExpandableList = instance}
          isOpen={true}
          dataSource={MockData.workbenchData}
          headerKey="title"
          memberKey="member"
          renderRow={this._renderRow}
          renderSectionHeaderX={this._renderSection}
          openOptions={[1,2,]}
          headerOnPress={this._headerOnPress}
          rowNumberCloseMode={0}
        />
        <Button
          style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 50, backgroundColor: 'blue' }}
          onPress={this._btnPress}
          title="Scroll"
          color="red"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('example', () => Example);
