/*
 * https://github.com/facebook/react-native
 * Copyright cuiyueshuai
 * @author cuiyueshuai<850705402@qq.com>
 */

import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';

class ExpanableList extends Component {
  constructor(props) {
    super(props);
    let map = new Map();
    if (props.dataSource && props.isOpen) {
      props.dataSource.map((item, i) => map.set(i, true))
    }

    if (props.openOptions) {
      props.openOptions.map((item) => map.set(item, true))
    }
    this.state = {
      memberOpened: map
    }
  }

  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    headerKey: PropTypes.string,
    memberKey: PropTypes.string,
    renderRow: PropTypes.func,
    renderSectionHeaderX: PropTypes.func,
    renderSectionFooterX: PropTypes.func,
    headerOnPress: PropTypes.func,
    isOpen: PropTypes.bool,
    openOptions: PropTypes.array,
  };

  static defaultProps = {
    headerKey: 'header',
    memberKey: 'member',
    isOpen: false,
  };

  _keyExtractor = (item, index) => index;

  _onPress = (i) => {
    this.setState((state) => {
      const memberOpened = new Map(state.memberOpened);
      memberOpened.set(i, !memberOpened.get(i)); // toggle
      return { memberOpened };
    });

    if (this.props.headerOnPress) {
      this.prop.headerOnPress(i, this.state.memberOpened.get(i) || false);
    }

    LayoutAnimation.easeInEaseOut();
  };

  _renderItem = ({ item, index }) => { // eslint-disable-line
    const { renderRow, renderSectionHeaderX, renderSectionFooterX, headerKey, memberKey } = this.props;
    const sectionId = index;
    let memberArr = item[memberKey];
    if (!this.state.memberOpened.get(sectionId) || !memberArr) {
      memberArr = [];
    }

    return (
      <View>
        <TouchableOpacity onPress={() => this._onPress(sectionId)}>
          { renderSectionHeaderX ? renderSectionHeaderX(item[headerKey], sectionId) : null}
        </TouchableOpacity>
        <ScrollView scrollEnabled={false}>
          {
            memberArr.map((rowItem, rowId) => {
              return (
                <View key={rowId}>
                  {renderRow ? renderRow(rowItem, rowId, index) : null}
                </View>
              );
            })
          }
          { memberArr.length > 0 && renderSectionFooterX ? renderSectionFooterX(item, sectionId) : null }
        </ScrollView>
      </View>
    );
  };

  render() {
    const { dataSource } = this.props;
    return (
      <FlatList
        {...this.props}
        data={dataSource}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
}

export default ExpanableList;