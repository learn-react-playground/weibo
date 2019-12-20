import React from 'react';
import { Button, Input, Row } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import tx01 from './tx01.svg';
import tx02 from './tx02.svg';
import tx03 from './tx03.svg';
import tx04 from './tx04.svg';


const { TextArea } = Input;

class App extends React.Component {

  state = {
    tweet: "",
    tweets: [{
      avatar: tx02,
      username: "吃吃",
      tweet: "今天晴天，火锅串串钵钵鸡，奈雪喜茶一点点，下雨了打火锅，下雪了吃羊肉，冬至吃饺子，过年吃腊肉。",
      time: "8分钟前"
    }, {
      avatar: tx03,
      username: "邪见冥加",
      tweet: "邪见，即邪恶之见，或者指错误的观点。喜剧角色身份，常会有些出乎人意料的言语和行为。",
      time: "13分钟前"
    }, {
      avatar: tx04,
      username: "日暮山山山",
      tweet: "墨点无多泪点多，山河仍是旧山河。横流乱世杈椰树，留得文林细揣摹。",
      time: "20分钟前"
    }]
  }

  onChange = ({ target: { value } }) => {
    this.setState({ tweet: value });
  };

  onPublish = () => {
    const newTweet = {
      avatar: tx01,
      username: "User",
      tweet: this.state.tweet,
      time: "1分钟前"
    }
    this.setState({
      tweet: "",
      tweets: [newTweet, ...this.state.tweets]
    });
  };

  render() {
    const { tweet, tweets } = this.state;
    const tweetLength = tweet.length;
    return (
      <div style={{ width: 800, margin: '100px auto' }}>
        <div style={{ margin: '24px 0' }}/>
        <TextArea
          maxLength="500"
          id="studyIdea"
          placeholder="发布内容"
          rows="3"
          onChange={this.onChange}
          value={tweet}
        />
        <Row type="flex" justify="end" align="middle" style={{ marginTop: 8 }}>
          <div style={{ marginRight: 8 }}>
            <span className={tweetLength > 140 ? "count-alert" : ""}>{tweetLength}</span>/140
          </div>
          <Button onClick={this.onPublish} disabled={(tweetLength > 140 || tweetLength <=0)}>发布</Button>
        </Row>

        {
          tweets.map(tweet => (
            <div className="App-l" key={tweet.time}>
              <img src={tweet.avatar} className="App-t" alt="头像"/>
              <div className="App-k">
                <h3>{tweet.username}</h3>
                <p>{tweet.tweet}</p>
                <span>{tweet.time}</span>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
