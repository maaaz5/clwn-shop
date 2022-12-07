import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  /* display: flex; */
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 500px) {
    .name,
    .quantity,
    .price {
      font-size: 12px;
    }
  }

  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

// .checkout-item-container {
// width: 100%;
// display: flex;
// min-height: 100px;
// border-bottom: 1px solid darkgrey;
// padding: 15px 0;
// font-size: 20px;
// align-items: center;

//   .image-container {
// width: 23%;
// padding-right: 15px;

// img {
//   width: 100%;
//   height: 100%;
// }
//   }
// .name,
// .quantity,
// .price {
//   width: 23%;
// }

// .quantity {
//   display: flex;

//   .arrow {
//     cursor: pointer;
//   }

//   .value {
//     margin: 0 10px;
//   }
// }

// .remove-button {
//   padding-left: 12px;
//   cursor: pointer;
// }
// }
