import React from "react";

class Image extends React.Component {
  constructor() {
    super();
    this.state = {
      image: '',
      playerImage:'',
    };
    this.getPlayerImage = this.getPlayerImage.bind(this);
    
  }

  async getPlayerImage() {
    let response = await fetch("https://nba-players.herokuapp.com/players/search=" + this.state.playerImage);
    let json = await response.json();
    this.setState({ image: json.data });
  }

  

  render(){
      console.log (this.state.image)
      return(
          <div>
              <img src={this.state.image} alt=''/>

          </div>
      )
  }
}
export default Image;



