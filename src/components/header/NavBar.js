import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./cart/CartWidget";

function NavBar() {
   const categories = [
      {
         categoryId: "Galaxy S",
         name: "Galaxy S",
      },
      {
         categoryId: "Galaxy Note",
         name: "Galaxy Note",
      },
      {
         categoryId: "Galaxy A",
         name: "Galaxy A",
      },
   ];
   return (
      <Fragment>
         <Navbar
            className="NavBar container"
            collapseOnSelect
            expand="lg"
            bg="light"
         >
            <Container>
               <Navbar.Brand>
                  <Link to="/">
                     <span>
                        <svg className="contenedor--svg">
                           <path d="M15.937 19.184c.155.363.104.829.026 1.114-.13.492-.466 1.01-1.45 1.01-.931 0-1.5-.544-1.5-1.347v-1.45H9v1.14C9 22.99 11.614 24 14.436 24c2.692 0 4.918-.932 5.28-3.417.181-1.295.052-2.123-.026-2.46-.62-3.133-6.29-4.065-6.73-5.8-.077-.31-.051-.62-.026-.776.104-.466.44-1.01 1.372-1.01.88 0 1.398.544 1.398 1.346v.933h3.728v-1.062C19.432 8.492 16.507 8 14.384 8c-2.666 0-4.815.88-5.229 3.314-.103.673-.13 1.269.026 2.02.673 3.028 5.98 3.909 6.756 5.85zm48.534-.025c.155.362.103.828.026 1.087-.13.492-.466.984-1.45.984-.932 0-1.475-.544-1.475-1.347V18.46h-3.96v1.139c0 3.288 2.588 4.297 5.383 4.297 2.667 0 4.867-.906 5.23-3.391.18-1.269.05-2.123-.027-2.434-.621-3.107-6.238-4.013-6.652-5.747-.078-.311-.052-.622-.026-.777.104-.466.414-.984 1.346-.984.854 0 1.372.544 1.372 1.346v.907h3.701V11.78c0-3.21-2.899-3.728-4.995-3.728-2.615 0-4.763.88-5.177 3.288-.104.647-.13 1.243.026 1.993.673 3.03 5.927 3.91 6.678 5.826zm30.984 1.32l-.207-12.013h3.701v14.757h-5.332l-3.753-12.401.207 12.401h-3.676V8.466h5.54l3.52 12.013zM28.335 9.553l-2.07 13.826h-4.038l2.744-14.913h6.652l2.744 14.913h-4.012l-2.02-13.826zm21.796 0L47.542 23.38h-3.779L41.201 9.553l-.104 13.826H37.37l.31-14.913h6.083l1.89 11.65 1.89-11.65h6.082l.337 14.913h-3.728l-.103-13.826zm26.868 11.6c1.035 0 1.372-.726 1.424-1.088.026-.156.026-.389.026-.57V8.44h3.779V19.16c0 .284-.026.828-.026.983-.259 2.797-2.46 3.703-5.203 3.703-2.744 0-4.944-.906-5.203-3.703-.026-.155-.052-.699-.026-.983V8.44h3.78v11.055c0 .181 0 .414.025.57.078.388.389 1.087 1.424 1.087zm31.165-.156c1.087 0 1.45-.7 1.527-1.088.026-.18.052-.388.026-.57v-2.174h-1.527V14.99h5.28v4.013c0 .285 0 .492-.051.984-.259 2.719-2.615 3.676-5.255 3.676-2.64 0-4.996-.957-5.254-3.676-.052-.492-.052-.699-.052-.984v-6.291c0-.259.026-.725.052-.984.336-2.796 2.588-3.676 5.254-3.676 2.64 0 4.97.88 5.229 3.676.052.466.026.984.026.984v.492h-3.78v-.829s0-.362-.051-.57c-.078-.336-.362-1.087-1.501-1.087-1.088 0-1.398.725-1.476 1.088-.052.207-.052.466-.052.699v6.835c0 .181 0 .388.026.57.104.414.492 1.087 1.58 1.087z"></path>
                        </svg>
                     </span>
                  </Link>
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     {categories.map((category) => (
                        <Nav.Link>
                           <Link to={`/categoria/${category.categoryId}`}>{category.name}</Link>
                        </Nav.Link>
                     ))}
                  </Nav>
                  <Nav>
                     <Nav.Link>
                        <Link to="/cart">
                           <CartWidget />
                        </Link>
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </Fragment>
   );
}

export default NavBar;
