'use strict';

import React, {
  Component,
  StyleSheet,
  ListView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

class MainList extends Component {

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
    this._renderRow = this._renderRow.bind(this);
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)}>
        <View>
          <View style={styles.row}>
            <Image  style={styles.thumb} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
            <Text style={styles.text}>
              {rowData}
            </Text>
          </View>
          <View  style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

  _pressRow(rowID: number) {
  }

  render() {
    return (
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this._renderRow}
      />
    );
  }

}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});

module.exports = MainList;
