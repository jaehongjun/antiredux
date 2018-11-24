import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "../../store";

class AppContainer extends Component {
  constructor(props){
    super(props);
    this._seeNotification = id => {
      this.setState(currentState => {
        return {
          ...currentState,
          notifications: {
            ...currentState.notifications,
            [id]: {
              ...currentState.notifications[id],
              seen : true
            }
          }
        }
      })
    }
    this._deleteNotification = id => 
    {
      console.log(this)
      this.setState(currentState => {
        const newState = delete currentState.notifications[id];
        return newState;
      })
    }
    // this._changeMessage = () => {
    //   console.log(this.state.message)  
    //   if(this.state.message === "Hello"){
    //     this.setState({
    //       message : "Bye Bye"
    //     })
    //   }else {
    //     this.setState({
    //       message : "Hello"
    //     })
    //   }
    // }
    this.state = {
      notifications: {
        "1" : {
          id: 1,
          text: "something",
          seen: false
        },
        "2" : {
          id: 2,
          text: "something for nothing",
          seen: false
        },
        "3" : {
          id: 3,
          text: "something for anything",
          seen: false
        },
      },
      deleteNotification : this._deleteNotification,
      seeNotification: this._seeNotification


    }
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
