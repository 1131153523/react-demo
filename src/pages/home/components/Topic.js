import React, { Component } from 'react'
import {
    TopicWrapper,
    TopicItem
} from '../styled'
export default class Topic extends Component {
  render() {
    return (
       <TopicWrapper>
           <TopicItem>
               <img src = "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
               社会热点
           </TopicItem>
       </TopicWrapper>
    )
  }
}
