import styled from 'styled-components'
export const HeaderWrapper = styled.div`
    position:relative;
    height: 58px;
    border-bottom:1px solid #f0f0f0;    
`
export const Logo = styled.a.attrs({
    href:'/'
})`
    position:absolute;
    height: 58px;
    top:0;
    left:0;
    width: 100px;
    display:block;
    border-bottom: 1px solid #f0f0f0;
    background: url('https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png') no-repeat center center/cover;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding-right: 70px;
`
export const NavItem = styled.div`
    line-height: 58px;
    color: #333;
    font-size: 17px;
    padding:0 15px;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active {
        color:#ea6f5a;
    }
`
 export const NavSearch = styled.input.attrs({
     placeholder: '搜索'
 })`
    width: 160px;
    height:38px;
    padding:0 35px 0 20px;
    box-sizing:border-box;
    border:none;
    outline: none;
    border-radius: 19px;
    background:#eee;
    margin-top: 9px;
    margin-left:20px;
    float: left;
    font-size: 14px;
    transition: all 0.3s ease-out;
    &::placeholder {
        color: black;
    }
    &.focused {
        width: 240px;
    }

 `

 export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:58px;

 `

  export const Button = styled.div `
    float: right;
    line-height: 38px;
    border-radius:19px;
    margin-top:9px;
    margin-right: 20px;
    border: 1px solid #ec6149;
    padding: 0 20px;
    font-size: 14px;
    &:first-child {
        color:#ec6149;
    }
    &:last-child {
        color: #fff;
        background: #ec6149;
    }
 `
 export const SearchInfo = styled.div`
    position:absolute;
    left: 185px;
    top: 60px;
    width: 240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
 `
 export const SearchInfoTitle = styled.div`
    margin: 20px 0 15px 0;
    line-height: 20px;
    font-size:14px;
    color: #969696;
 `
export const SearchInfoSwitch = styled.span `
    float: right;
    font-size: 13px;    
    cursor: pointer;
`
export const SearchInfoItem = styled.a`
    margin-right:10px;
    margin-bottom: 10px;
    float:left;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #333;
    border-radius: 3px;
`

export const SearchInfoList = styled.div `
    overflow:hidden;
`

