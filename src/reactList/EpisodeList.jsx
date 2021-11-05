import React from "react";
import Axios from "axios";

class EpisodeDetail extends React.Component {
  state = { episode: this.props.episode };
  render() {
    const {
      episode: {
        airdate,
        name,
        image: { medium: thumbUrl },
      },
    } = this.state;
    return (
      <div>
        <img src={thumbUrl} alt="" />
        <br />
        개봉일 : {airdate} 제목 : {name}
      </div>
    );
  }
}

class EpisodeList extends React.Component {
  state = { episodeList: [] };

  componentDidMount() {
    const apiUrl = "./EpisodJson.json";
    const params = {
      q: "mr-robot",
      embed: "episodes",
    };
    Axios.get(apiUrl, { params })
      .then((response) => {
        const {
          data: {
            _embedded: { episodes },
          },
        } = response;
        this.setState({
          episodeList: episodes,
        });
        console.log(episodes);
      })
      .catch((e) => console.error(e));
  }

  render() {
    const { episodeList } = this.state;
    return (
      <div>
        <h1>Episode List</h1>
        {/* {JSON.stringify(episodeList)} */}
        {episodeList.map((ep, index) => (
          <EpisodeDetail episode={ep} key={index} />
        ))}
      </div>
    );
  }
}

export default EpisodeList;
