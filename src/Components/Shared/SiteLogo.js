import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logos/logo.png'
const SiteLogo = () => {
    return (
        <LogoStyle>
            <img src={logo} alt=""/>
        </LogoStyle>
    );
};

const LogoStyle = styled.div`
padding: 5px 0;
display: block;
img {
    max-width: 150px;
    
}
`

export default SiteLogo;