/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { Table } from '@alifd/next';

export default class CustomTable extends Component {

  renderColumns = () => {
    const { columns } = this.props;
    return columns.map((item, index) => {
      let { title, dataIndex, cell, width = 100, style = { textAlign: 'center' }, lock } = item;
      return (
        <Table.Column
          title={title}
          key={index}
          dataIndex={dataIndex}
          cell={cell}
          width={width}
          style={style}
          lock={lock}
        />
      );
    });
  };

  render() {
    return <Table {...this.props}>{this.renderColumns()}</Table>;
  }
}
