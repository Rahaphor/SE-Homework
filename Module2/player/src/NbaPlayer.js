import React from "react";

class NbaPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      player: [],
      Stats: [],
      playerName: "",
      playStats: "",
    };
    this.getPlayerId = this.getPlayerId.bind(this);
    this.getPlayerStats = this.getPlayerStats.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async getPlayerId() {
    let response = await fetch(
      "https://free-nba.p.rapidapi.com/players?per_page=25&search=" +
        this.state.playerName,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "cc5040ef83msh679121bcb715bd7p1e6610jsn3f0cd527e975",
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
        },
      }
    );
    let json = await response.json();
    this.setState({ player: json.data });
  }

  async getPlayerStats() {
    let response = await fetch(
      "https://free-nba.p.rapidapi.com/stats?per_page=25&search=" + this.state.playerName,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "cc5040ef83msh679121bcb715bd7p1e6610jsn3f0cd527e975",
          "x-rapidapi-host": "free-nba.p.rapidapi.com",
        },
      }
    );
    let json = await response.json();
    console.log(json)
    this.setState({ Stats: json.data });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.getPlayerId();
    this.getPlayerStats();
  }

  handleChange(event) {
    this.setState({ playerName: event.target.value });
  }

  render() {
    console.log(this.state.player);
    console.log(this.state.Stats);
    return (
      <div>
        <h1 style={{ textAlign: 'center', backgroundColor:'blueviolet', color:'red' }}>WELCOME TO PLAYERSTATS</h1>

        <form onSubmit={this.handleSubmit}>
          <input value={this.state.playerName} onChange={this.handleChange} />

          <button style={{textAlign: 'center', backgroundColor:'green', color: 'ivory'}}>Submit</button>
        </form>
        {this.state.player.map((data, index) => {
          return (
            <div key={index}>
                {data.first_name}  
                
            
            </div>
            
          )
        })}
        {this.state.Stats.map((data, index) => {
          return (
            <div key={index}>
                assit:{data.ast} <br/> 
                block:{data.blk} <br/>
                dreb:{data.dreb}
                <br/>
                fg3pct:{data.fg3_pct}
                
                
                
            
            </div>
            
          )
        })}
      </div>

    );
  }
}
export default NbaPlayer;
