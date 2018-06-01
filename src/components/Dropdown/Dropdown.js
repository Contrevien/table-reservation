import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMenu: false,
      defaultOption: this.props.defaultOption
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
    else if (event.target.className === "menu") {

    }
    else{
      this.setState({
        showMenu: false,
        defaultOption: event.target.innerHTML
      }, () => {
        document.removeEventListener('click', this.closeMenu);
        this.props.change(event.target.innerHTML==="NON-VEG FLOOR"?"nonveg":"veg")
      }) 
    }
  }

  clickHandler = (name) => {
    this.setState({
      showMenu: false,
      defaultOption: name
    })
  }

  render() {
    return (
      <div className="dropdown-container">
        <button onClick={this.showMenu} className="dropdown-button">
          {this.state.defaultOption}
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                {this.props.options.map((option) => {
                  return <button key={option}>{option}</button>
                })}
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Dropdown;