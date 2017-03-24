import react from 'react'

class Input extends react.Component {

  value(){
    return this.self.value;
  }

  render(){
    return <input type="text" id={ this.props.id } className={ this.props.className } ref={ el => { this.self = el }}/>
  }
}