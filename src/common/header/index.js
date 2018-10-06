import React, {Component} from "react";
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux'
import {
    actionCreator
} from './store/index'
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from './style'
class Header extends Component {
    getListArea (focused, mouseIn){
        const {list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
        const jsList = list.toJS()
        const pageList = []
        for (let i = page * 10;i < (page + 1) * 10;i++) {
            pageList.push(<SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>)
        }
        return focused || mouseIn ? (
                        <SearchInfo
                            onMouseLeave={handleMouseLeave} 
                            onMouseEnter={handleMouseEnter}>
                            <SearchInfoTitle>
                                热门搜索
                                <SearchInfoSwitch 
                                    onClick={() => { handleChangePage (totalPage, page)}}> 换一批 </SearchInfoSwitch>
                            </SearchInfoTitle>
                            <div></div>
                            <SearchInfoList>
                                {pageList}
                            </SearchInfoList>
                        </SearchInfo>
        ) : ''
    }
    render () {
        const {focused, mouseIn, handleInputFocus, handleInputBlur, list} = this.props
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    < NavItem className = "left" > 首页 </NavItem>
                    < NavItem className = "left" > 下载APP </NavItem>
                    < NavItem className = "right" > 登录 </NavItem>
                    < NavItem className = "right" > Aa </NavItem>
                    <NavSearch
                        onFocus={() => { handleInputFocus(list) }}
                        onBlur={handleInputBlur}
                        className={focused ? 'focused' : ''}
                    >
                    </NavSearch>
                    {this.getListArea(focused, mouseIn)}
                    <Addition>
                        <Button>写文章</Button>
                        <Button>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>   
        )
    }
}
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus (list) {
            list.size === 0 && dispatch(actionCreator.getList()) 
            dispatch(actionCreator.searchFocus())
        },
        handleInputBlur () {
            dispatch(actionCreator.searchBlur())
        },
        handleMouseEnter () {
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave () {
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage (totalPage, page) {
            page < totalPage ? 
                dispatch(actionCreator.changePage(page + 1)): dispatch(actionCreator.changePage(0))
        }
    }
}
 export default connect(mapStateToProps, mapDispatchToProps)(Header)