import React, { Component } from 'react';
import { Button,
        Flex,
        FlexItem,
        LoadMore
        } from 'react-weui';
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './App.css';
import UserList from './components/userList'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:[{
                ranking:10,
                name:'gjf',
                studentNumber:1414103032,
                punchedNumber:666
            },{
                ranking:10,
                name:'hehe',
                studentNumber:1414103032,
                punchedNumber:888
            },{
                ranking:10,
                name:'heihei',
                studentNumber:1414103032,
                punchedNumber:999
            }]

        };

    }

      render() {
        const itemList=this.state.user.map((item,index)=><UserList key={index}
        ranking={item.ranking}
        name={item.name}
        studentNumber={item.studentNumber}
        punchedNumber={item.punchedNumber} />)
        return (
          <div className="App">
                <div className="choose">
                    <Flex>
                        <FlexItem><h4 className="active">打卡榜</h4></FlexItem>
                        <FlexItem><h4>报班榜</h4></FlexItem>
                    </Flex>
                </div>
                <div className="user">
                    <Flex>
                        <FlexItem id="userRanking">9</FlexItem>
                        <FlexItem><img src="images/2.png" alt="头像"/></FlexItem>
                        <FlexItem><div>Jason Wang</div><div>Junior</div></FlexItem>
                        <FlexItem>44</FlexItem>
                    </Flex>
                </div>
                <div className="ranking-list">
                        {itemList}
                    <div className="user">
                        <Flex>
                            <FlexItem><img src="images/5.png" alt="亚军"/></FlexItem>
                            <FlexItem><img src="images/2.png" alt="头像"/></FlexItem>
                            <FlexItem><div>name</div><div>number</div></FlexItem>
                            <FlexItem>44</FlexItem>
                        </Flex>
                        <hr/>
                    </div>
                    <div className="user">
                        <Flex>
                            <FlexItem><img src="images/6.png" alt="季军"/></FlexItem>
                            <FlexItem><img src="images/2.png" alt="头像"/></FlexItem>
                            <FlexItem><div>name</div><div>number</div></FlexItem>
                            <FlexItem>44</FlexItem>
                        </Flex>
                        <hr/>
                    </div>
                </div>
                <LoadMore loading>Loading</LoadMore>
          </div>
        );
      }
}

export default App;
