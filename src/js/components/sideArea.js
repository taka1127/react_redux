import React from 'react';

export default class SideArea extends React.Component {
  constructor(props) {
    super(props);
  }

  renderGroup() {
    let groupListDom = [];
    for(var i = 0; i < this.props.groupList.length; i++) {
      let group = this.props.groupList[i];
      let groupItem = <li key={group.id}>{group.label}</li>;
      groupListDom.push(groupItem);
    }
    return groupListDom;
  }


  render() {
    return (
      <div className="side-area">
        <ul className="group-list">
          {this.renderGroup()}
        </ul>
      </div>
    )
  }
}