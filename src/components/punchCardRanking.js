//这是打卡榜组件
import React, { Component } from 'react';
import {Flex,
        FlexItem,
        LoadMore
        } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import '../App.css';
import UserList from './userList';
class punchCardRanking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[{
                ranking:1,
                name:'gjf',
                studentNumber:1414103032,
                punchedNumber:111
            },{
                ranking:2,
                name:'hehe',
                studentNumber:1414103032,
                punchedNumber:222
            },{
                ranking:3,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:333
            },{
                ranking:4,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:444
            },{
                ranking:5,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:555
            },{
                ranking:6,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:666
            },{
                ranking:7,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:777
            },{
                ranking:8,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:888
            },{
                ranking:9,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:999
            }]
        };
    }

    render() {
      //循环渲染用户信息
      const rankingList = this.state.user.map((item,index)=>{
          return (
              <UserList key={index}
              ranking={item.ranking}
              name={item.name}
              studentNumber={item.studentNumber}
              punchedNumber={item.punchedNumber}
              headPortrait = {<img src="images/2.png" alt="头像"/>}
              />
          )
      })
      return (

        <div className="App">
              <div className="user">
                  <Flex>
                      <FlexItem id="userRanking">999+</FlexItem>
                      <FlexItem><img src="images/2.png" alt="头像"/></FlexItem>
                      <FlexItem><div>Jason Wang</div><div>Junior</div></FlexItem>
                      <FlexItem>44</FlexItem>
                  </Flex>
              </div>
              <div className="ranking-list">
                  {rankingList}
              </div>
              <LoadMore loading>Loading</LoadMore>
         </div>
      );
    }
}
export default punchCardRanking;
