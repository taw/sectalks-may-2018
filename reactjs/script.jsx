let expected = [
  // 40 numbers from generate_expected_table go here...
];
class ValidatorLayer extends React.Component {
  shuffle(array) {
    return Array.from({ length: 40 }).map((el, i) => array[(21 * i + 17) % 40]);
  }
  shift(array) {
    return array.map((el, i) => ((el * 7 + i * 19) & 255))
  }
  render() {
    let { layer, flag } = this.props;
    if (flag[7] === expected[layer]) {
      if (layer === 39) {
        return <div>The flag is correct</div>
      } else {
        return <ValidatorLayer flag={this.shift(this.shuffle(flag))} layer={layer + 1} />
      }
    } else {
      return <div>The flag is wrong</div>
    }
  }
}
class Validator extends React.Component {
  render() {
    let {flag} = this.props;
    if (flag.length === 40) {
      let flag_parts = Array.from({ length: 40 }).map((el, i) => this.props.flag.charCodeAt(i));
      return <ValidatorLayer flag={flag_parts} layer={0} />
    } else {
      return <div>The flag is wrong</div>
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flag: "" };
  }

  render() {
    return <div>
      <span>Enter flag:</span>
      <input type="text" value={this.state.flag} onChange={(ev) => this.setState({ flag: ev.target.value })} />
      <Validator flag={this.state.flag} />
    </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"))
