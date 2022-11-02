class BMI extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        inputI: "",
        inputG: "",
        result: ""
    }
    this.handleHeight = this.handleHeight.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleInput = this.handleInput.bind(this);
    }
    handleHeight(e) {
        this.setState({
    inputI: e.target.value 
        });
    }
    handleWeight(e){
        this.setState({
    inputG: e.target.value
        })
    }
    handleInput(e){
        e.preventDefault();
        this.setState({
          result: (this.state.inputG / ((this.state.inputI * this.state.inputI) / 10000)).toFixed(2)
        })
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleInput}>
              <p className="text">Height in cm:</p>
              <div className="height"><input type="number" id="height" value={this.state.inputI} onChange={this.handleHeight}/></div>
              <p className="text">Weight in kg:</p>
              <div className="weight"><input type="number" id="weight" value={this.state.inputG} onChange={this.handleWeight}/></div>
              <div className="submit"><button id="submit" type="submit">Submit</button></div>
            </form>
              <p className="result">{this.state.result}</p>
            </div>
        )
    }
}
ReactDOM.render(<BMI />, document.getElementById("root"))