import React, { Component } from 'react';
import 'weui';
import {Flex,
        FlexItem
        } from 'react-weui';
import 'react-weui/build/packages/react-weui.css';
import './App.css';
import UserList from './components/userList';
import EnrolClass from  './components/enrolClass';

import PunchCardRanking from './components/punchCardRanking'
import {BrowserRouter as Router,
        Route,
        Link
    } from 'react-router-dom';
class App extends Component {
      constructor(props) {
          super(props);
          this.state = {
              active:true,

          };
          this.changePuchCard = this.changePuchCard.bind(this);
          this.changeUserList = this.changeUserList.bind(this);
      }
      //点击打卡榜下边框变红
      changePuchCard () {
          this.setState({
              active : true
          })
      }
      //点击报班榜下边框变红
      changeUserList () {
          this.setState({
              active : false
          })
      }


      render() {
        return (

            <Router>
                <div>
                    <div className="choose">
                        <Flex>
                            <FlexItem><h4 className={this.state.active ? 'active':'none'} ><Link to="/" onClick={this.changePuchCard}>打卡榜</Link></h4></FlexItem>
                            <FlexItem><h4 className={this.state.active ? 'none':'active'}><Link to="/enrolClass" onClick={this.changeUserList}>报班榜</Link></h4></FlexItem>
                        </Flex>
                    </div>
                    <Route exact path="/" component={PunchCardRanking}/>
                    <Route path="/enrolClass" component={EnrolClass}/>
                </div>
            </Router>
        );
      }
}

export default App;
