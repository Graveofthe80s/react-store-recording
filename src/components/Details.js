import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className="container py-5">
              {/*title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*end of title */}
              {/*product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="Product"/>
                </div>
                {/*product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3><strong>Model: {title}</strong></h3>
                  <h4 className="text-uppercase mt-3 mb-2">
                    <strong>
                    Made by: <span className="text-uppercase">{company}</span>
                    </strong>
                  </h4>
                  <h4>
                    <strong>Price: <span>$</span>{price}</strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">Some info about the product: </p>
                  <p className="text-muted lead">{info}</p>

                  <div>
                    <Link to="/">
                      <ButtonContainer>Back to product</ButtonContainer>
                    </Link>

                    <ButtonContainer
                    cart
                    disabled={inCart? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                      {inCart? "inCart" : "Add to cart"}
                    </ButtonContainer>                    

                  </div>

                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
