import React, { Component } from 'react';
import { Button,
        Flex,
        FlexItem,
        LoadMore
        } from 'react-weui';
import 'react-weui/build/packages/react-weui.css';
class UserList extends Component {
    render() {
      return (
          <div className="user">
              <Flex>
                  <FlexItem><img src="images/4.png" alt="冠军"/></FlexItem>
                  <FlexItem><img src="images/2.png" alt="头像"/></FlexItem>
                  <FlexItem><div>{this.props.name}</div><div>{this.props.studentNumber}</div></FlexItem>
                  <FlexItem>{this.props.punchedNumber}</FlexItem>
              </Flex>
              <hr/>
          </div>
      )
    }
}
export default UserList;
