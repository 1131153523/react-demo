import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './styled'
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img  className="banner-img" src = "https://upload.jianshu.io/admin_banners/web_images/4490/b7edd948215a7a8db1fc8e7b3c07171f53803185.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" / >
                    <Topic>
                    </Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home