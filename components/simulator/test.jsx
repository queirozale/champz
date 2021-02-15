import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  };

  handleConvertString = (event) => {
    let str = this.inputRef.value;
    this.setState({
      text: str.replace(/[dog]/gi, ''),
    })
  };
  render() {
    return (
      <div>
        <TextField
        inputRef={ref => { this.inputRef = ref; }}
        fullWidth
        />
        <Button variant="outlined" href="#outlined-buttons" onClick={this.handleConvertString}>
          Convert
        </Button>
        <h1>{this.state.text}</h1>
      </div>
    )
    }
}

export default Test;