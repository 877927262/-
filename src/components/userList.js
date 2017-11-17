import React, { Component } from 'react';
import { Button,
        Flex,
        FlexItem,
        LoadMore
        } from 'react-weui';
import 'react-weui/build/packages/react-weui.css';
class UserList extends Component {
    constructor(props) {
        super(props);
        this.showRank = this.showRank.bind(this)
    }
    //前三名显示皇冠
    showRank (rank){
        if (rank > 3) {
            return rank
        }

        if (rank == 1) {
            return <img src="images/ranking0.png" alt="皇冠"/>
        } else if (rank == 2) {
            return <img src="images/ranking1.png" alt="皇冠"/>
        } else {
            return <img src="images/ranking2.png" alt="皇冠"/>
        }
    }

    render() {
      return (
          <div className="user">
              <Flex>
                  <FlexItem>{this.showRank(this.props.ranking)}</FlexItem>
                  <FlexItem>{this.props.headPortrait}</FlexItem>
                  <FlexItem><div>{this.props.name}</div><div>{this.props.studentNumber}</div></FlexItem>
                  <FlexItem>{this.props.punchedNumber}</FlexItem>
              </Flex>
              <hr/>
          </div>
      )
    }
}
export default UserList;
