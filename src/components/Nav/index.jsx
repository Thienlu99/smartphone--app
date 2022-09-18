import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import './Nav.scss';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';




Nav.propTypes = {
    
};

function Nav(props) {
    return (
        <div className='container-fluid nav'>
            <div className='container'>
                <Row>
                    <Col md={12}>
                        <ul className='nav-ul'>
                            <li><a href=""><PhoneIphoneOutlinedIcon  fontSize='smaill' /> Điện thoại</a></li>
                            <li><a href=""><LaptopMacOutlinedIcon  fontSize='smaill'/> Laptop</a></li>
                            <li><a href=""><ComputerOutlinedIcon fontSize='smaill'/> Máy tính bảng</a></li>
                            <li><a href=""><HeadphonesOutlinedIcon fontSize='smaill'/> Phụ kiện</a></li>
                            <li><a href=""><AutoAwesomeOutlinedIcon fontSize='smaill'/> KHUYẾN MÃI</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Nav;