import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DLT } from "../redux/actions/action";

import img from "../img/CLAWS_NEW_pages-to-jpg-0001-removebg-preview.png";

import { Link } from "react-router-dom";
import "../Style/Header.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardsdata from "./CardsData";



const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [index, setIndex] = useState(0);
  
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  

  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      
      <Navbar id="navbar"
        expand="lg"
        className="bg-body-tertiary   bg-dark"
        bg="dark" data-bs-theme="dark"
        
      >
        <Container>
          <Link to="/Claws_Project">
            {" "}
            <Navbar.Brand>
              <Badge
                style={{
                  height: "60px",
                  marginLeft: "-20px",
                  marginTop: "-15px",
                }}
              >
                {" "}
                <img
                  style={{ height: "80px", width: "120px" }}
                  src={img}
                  alt="Logo"
                />
              </Badge>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ color: "white !important" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Nav className=" text-light mt-2 mx-2">
                  <span className="header_link"> HOME</span>
                </Nav>
              </Link>
              <Link to="/Product_details" style={{ textDecoration: "none" }}>
                <Nav className=" header_link text-light mx-2 mt-2">
                  PRODUCTS
                </Nav>
              </Link>

              <Link to="/about-us" style={{ textDecoration: "none" }}>
                <Nav className="header_link text-light mx-2 mt-2">
                  ABOUT US
                </Nav>
              </Link>
            </Nav>
            <Form inline className="mx-1">
        <Row>
          <Col  xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2" onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </Col>
          {/* <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col> */}
        </Row>
      </Form>

            <Badge
              badgeContent={getdata.length}
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="mx-2 mb-1"
            >
              <i
                className="fa-solid fa-cart-shopping text-light mb-2"
                style={{
                  fontSize: 25,
                  cursor: "pointer",
                  color: "white !important",
                  marginTop:'-5px'
                }}
              ></i>
            </Badge>
          </Navbar.Collapse>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {getdata.length ? (
              <div
                className="card_details"
                style={{ width: "24rem", padding: 10 }}
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getdata.map((e) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <NavLink
                                to={`/cart/${e.id}`}
                                onClick={handleClose}
                              >
                                <img
                                  src={e.imgdata}
                                  style={{ width: "5rem", height: "5rem" }}
                                  alt=""
                                />
                              </NavLink>
                            </td>
                            <td>
                              <p>{e.rname}</p>
                              <p>Price : ₹{e.price}</p>
                              <p>Quantity : {e.qnty}</p>
                              <p
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(e.id)}
                              >
                                <i className="fas fa-trash smalltrash"></i>
                              </p>
                            </td>

                            <td
                              className="mt-5"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(e.id)}
                            >
                              <i className="fas fa-trash largetrash"></i>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    <p className="text-center">Total :₹ {price}</p>
                    <center>
                    <Link to='/forms'><button className="btn btn-danger"> Proceed order</button></Link></center>
                  </tbody>
                </Table>
              </div>
            ) : (
              <div
                className="card_details d-flex justify-content-center align-items-center"
                style={{ width: "24rem", padding: 10, position: "relative" }}
              >
                <i
                  className="fas fa-close smallclose"
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 20,
                    fontSize: 23,
                    cursor: "pointer",
                  }}
                ></i>
                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                <img
                  src="./cart.gif"
                  alt=""
                  className="emptycart_img"
                  style={{ width: "5rem", padding: 10 }}
                />
              </div>
            )}
          </Menu>
        </Container>
      </Navbar>

      <div className="Container " >
         <div className="container  d-flex justify-content-around align-items-center flex-wrap"> {
            Cardsdata.filter((val) => {
                if(searchTerm == ""){
                  return '';
                }
                if(val.rname.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              }).map((val,id) => {
                return(
                  <div className="template m-3" key={val.id}>
                    <Link to={`/product_details/${val.id}`} onClick={()=>{
                      setSearchTerm='';
                    }}> <img className="img-fluid" style={{width:'200px', height:'200px' , borderRadius:'20px'}} src={val.imgdata} alt="" /></Link> 
                      <h5 style={{fontSize:'15px'}}>  {val.rname}</h5>
                      <p className="price">Price :₹{val.price}</p>
                  </div> 
                )
              })
          }
          </div>
        </div>
    </>
  );
};

export default Header;
