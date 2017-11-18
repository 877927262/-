// 这是报班榜组件
import React, { Component } from 'react';
import {Flex,
        FlexItem,
        LoadMore
        } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import '../App.css';
import UserList from './userList';
class EnrolClass extends Component {
    constructor(props) {
        super(props);
        this.withDrawalRanking = this.withDrawalRanking.bind(this);
        this.state = {
            // 用户本人的信息
            userInfo:{
                ranking:100000,
                name:'guojianfei',
                studentNumber:6666666,
                punchedNumber:1,
                classNumber:11
            },
            //其他人的信息
            user:[{
                ranking:1,
                name:'gjf',
                studentNumber:1414103032,
                punchedNumber:111,
                classNumber:22
            },{
                ranking:2,
                name:'hehe',
                studentNumber:1414103032,
                punchedNumber:222,
                classNumber:33
            },{
                ranking:3,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:333,
                classNumber:44
            },{
                ranking:4,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:444,
                classNumber:55
            },{
                ranking:5,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:555,
                classNumber:66
            },{
                ranking:6,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:666,
                classNumber:77
            },{
                ranking:7,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:777,
                classNumber:88
            },{
                ranking:8,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:888,
                classNumber:99
            },{
                ranking:9,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:999,
                classNumber:789
            }]
        };
    }

    //如果用户的排名大于999，那就显示999+
    withDrawalRanking(ranking){
        if(ranking>999){
            return '999+';
        }
        else{
            return ranking;
        }
    }

    render() {
          //循环渲染用户信息
          const rankingList = this.state.user.map((item,index)=>{
              return (
                  <UserList key={index}
                  ranking={item.ranking}
                  name={item.name}
                  studentNumber={item.studentNumber}
                  punchedNumber={item.classNumber}
                  headPortrait = {<img src="images/2.png" alt="头像"/>}
                  />
              )
          })

      return (

        <div className="App">
              <div className="user">
                  <Flex>
                      <FlexItem id="userRanking">{this.withDrawalRanking(this.state.userInfo.ranking)}</FlexItem>
                      <FlexItem><img src="images/2.png" alt="头像"/></FlexItem>
                      <FlexItem><div>{this.state.userInfo.name}</div><div>{this.state.userInfo.studentNumber}</div></FlexItem>
                      <FlexItem>{this.state.userInfo.classNumber}</FlexItem>
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
export default EnrolClass;
