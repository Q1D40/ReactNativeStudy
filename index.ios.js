import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Navigator,
} from 'react-native';

class ReactNativeStudy extends Component {

  render() {
    let defaultName = 'MainView';
    let defaultComponent = MainView;
    return (
      <Navigator
      initialRoute={{ name: defaultName, component: defaultComponent }}
      configureScene={(route) => {
        return Navigator.SceneConfigs.PushFromRight;
      }}
      renderScene={(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
      }}
      />
    );
  }

}

class MainView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 2
    };
  }

  _pressButton() {
    const { navigator } = this.props;
    if(navigator) {
      navigator.push({
        name: 'SecView',
        component: SecView,
        params: {
          id: this.state.id
        }
      });
    }
  }

  render() {
    return (
      <View style={styles.cnt}>
      <TouchableOpacity onPress={this._pressButton.bind(this)}>
      <Text style={styles.btn}>点击进入</Text>
      </TouchableOpacity>
      </View>
    );
  }

}

class SecView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
  }

  componentDidMount() {
    this.setState({
      id: this.props.id
    });
  }

  _pressButton() {
    const { navigator } = this.props;
    if(navigator) {
      navigator.pop();
    }
  }

  render() {
    return (
      <View style={styles.cnt}>
      <Text>id={ this.state.id }</Text>
      <TouchableOpacity onPress={this._pressButton.bind(this)}>
      <Text style={styles.btn}>点击返回</Text>
      </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  cnt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    color: '#23527c',
  },
});

AppRegistry.registerComponent('ReactNativeStudy', () => ReactNativeStudy);
