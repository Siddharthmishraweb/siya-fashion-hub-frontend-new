// import { useState, useEffect } from "react";

// import { useCollection } from "hooks/useCollection";

// import { ProductSlider } from "components/common";

// import styles from "./index.module.scss";

// const ProductSliderSection = ({ titleTop, titleBottom, sortBy }) => {
//   const { getCollection } = useCollection();
//   // const variantSlides = [
//   //   {
//   //     id: 1,
//   //     variantId: 1,
//   //     productId: 1,
//   //     model: "Essential Tag Tee",
//   //     color: "white",
//   //     discount: 10,
//   //     price: 25.0,
//   //     actualPrice: 30.0,
//   //     type: "T-shirt",

//   //     slides: [
//   //       {
//   //         url: "asdf",
//   //         src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
//   //       },
//   //     ],
//   //     images: [
//   //       "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2F8462353e-8636-4f36-a57a-676f36a367db%2Fessential-tag-tee-white-1.jpg?alt=media&token=c4af1dae-4895-4524-819a-8c872aac4b66",
//   //     ],
//   //     numberOfVariants: 2,
//   //     skus: [
//   //       {
//   //         skuId: 1,
//   //         order: 1,
//   //         productId: 1,
//   //         quantity: 99,
//   //         size: "xs",
//   //         value: "degirawhitehoodies",
//   //         variantId: 1,
//   //       },
//   //       {
//   //         skuId: 2,
//   //         order: 2,
//   //         productId: 1,
//   //         quantity: 19,
//   //         size: "md",
//   //         value: "degirawhitehoodiees",
//   //         variantId: 2,
//   //       },
//   //       {
//   //         skuId: 3,
//   //         order: 2,
//   //         productId: 2,
//   //         quantity: 9,
//   //         size: "xl",
//   //         value: "degirawhitehoodiees",
//   //         variantId: 3,
//   //       },
//   //     ],
//   //     isSoldOut: false,
//   //     allVariants: [
//   //       {
//   //         id: 1,
//   //         color: "white",
//   //         images: [
//   //           {
//   //             id: 1,
//   //             src: "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2F8462353e-8636-4f36-a57a-676f36a367db%2Fessential-tag-tee-white-1.jpg?alt=media&token=c4af1dae-4895-4524-819a-8c872aac4b66",
//   //           },
//   //         ],
//   //         slides: [
//   //           {
//   //             url: "asdf",
//   //             src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         id: 2,
//   //         color: "grey",
//   //         images: [
//   //           {
//   //             id: 2,
//   //             src: "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2Ff5d70df9-083f-4565-8e3d-8d2870665d2d%2Fessential-tag-tee-grey-1.jpg?alt=media&token=efcc48a8-dc0c-4793-810b-74eb04e18b4d",
//   //           },
//   //         ],
//   //         slides: [
//   //           {
//   //             url: "asdf",
//   //             src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww",
//   //           },
//   //         ],
//   //       },
//   //     ],
//   //   },
//   //   {
//   //     id: 2,
//   //     variantId: 2,
//   //     productId: 1,
//   //     model: "Essential Tag Tee",
//   //     color: "grey",
//   //     discount: 10,
//   //     price: 25.0,
//   //     actualPrice: 30.0,
//   //     type: "T-shirt",
//   //     slides: [
//   //       {
//   //         url: "asdf",
//   //         src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww",
//   //       },
//   //     ],
//   //     images: [
//   //       "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fHww",
//   //     ],
//   //     numberOfVariants: 2,
//   //     skus: [
//   //       {
//   //         skuId: 1,
//   //         order: 1,
//   //         productId: 1,
//   //         quantity: 99,
//   //         size: "xl",
//   //         value: "degirawhitehoodies",
//   //         variantId: 2,
//   //       },
//   //       {
//   //         skuId: 3,
//   //         order: 2,
//   //         productId: 2,
//   //         quantity: 9,
//   //         size: "xl",
//   //         value: "sasa",
//   //         variantId: 3,
//   //       },
//   //     ],
//   //     isSoldOut: true,
//   //     allVariants: [
//   //       {
//   //         id: 1,
//   //         color: "white",
//   //         images: [
//   //           {
//   //             id: 1,
//   //             src: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fHww",
//   //           },
//   //         ],
//   //         slides: [
//   //           {
//   //             url: "asdf",
//   //             src: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fHww",
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         id: 2,
//   //         color: "grey",
//   //         images: [
//   //           {
//   //             id: 2,
//   //             src: "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2Ff5d70df9-083f-4565-8e3d-8d2870665d2d%2Fessential-tag-tee-grey-1.jpg?alt=media&token=efcc48a8-dc0c-4793-810b-74eb04e18b4d",
//   //           },
//   //         ],
//   //         slides: [
//   //           {
//   //             url: "asdf",
//   //             src: "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2F8462353e-8636-4f36-a57a-676f36a367db%2Fessential-tag-tee-white-1.jpg?alt=media&token=c4af1dae-4895-4524-819a-8c872aac4b66",
//   //           },
//   //         ],
//   //       },
//   //     ],
//   //   },
//   // ];


//   const variantSlides = [
//     {
//       id: 1,
//       variantId: 1,
//       productId: 1,
//       model: "Essential Tag Tee",
//       color: "white",
//       discount: 10,
//       price: 25.0,
//       actualPrice: 30.0,
//       type: "T-shirt",
//       slides: [
//         {
//           url: "asdf",
//           src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
//         },
//       ],
//       images: [
//         "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2F8462353e-8636-4f36-a57a-676f36a367db%2Fessential-tag-tee-white-1.jpg?alt=media&token=c4af1dae-4895-4524-819a-8c872aac4b66",
//       ],
//       numberOfVariants: 2,
//       skus: [
//         {
//           skuId: 1,
//           order: 1,
//           productId: 1,
//           quantity: 99,
//           size: "xs",
//           value: "degirawhitehoodies",
//           variantId: 1,
//         },
//         {
//           skuId: 2,
//           order: 2,
//           productId: 1,
//           quantity: 19,
//           size: "md",
//           value: "degirawhitehoodiees",
//           variantId: 1,
//         },
//       ],
//       isSoldOut: false,
//       allVariants: [
//         {
//           id: 1,
//           color: "white",
//           images: [
//             {
//               id: 1,
//               src: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNoaXJ0fGVufDB8fDB8fHww",
//             },
//           ],
//           slides: [
//             {
//               url: "asdf",
//               src: "https://images.unsplash.com/photo-1548864789-7393f2b4baa5?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             },
//           ],
//         },
//         {
//           id: 2,
//           color: "grey",
//           images: [
//             {
//               id: 2,
//               src: "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2Ff5d70df9-083f-4565-8e3d-8d2870665d2d%2Fessential-tag-tee-grey-1.jpg?alt=media&token=efcc48a8-dc0c-4793-810b-74eb04e18b4d",
//             },
//           ],
//           slides: [
//             {
//               url: "asdf",
//               src: "https://images.unsplash.com/photo-1548864789-7393f2b4baa5?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: 2,
//       variantId: 2,
//       productId: 1,
//       model: "Essential Tag Tee",
//       color: "grey",
//       discount: 10,
//       price: 25.0,
//       actualPrice: 30.0,
//       type: "T-shirt",
//       slides: [
//         {
//           url: "asdf",
//           src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww",
//         },
//       ],
//       images: [
//         "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fHww",
//       ],
//       numberOfVariants: 2,
//       skus: [
//         {
//           skuId: 3,
//           order: 1,
//           productId: 1,
//           quantity: 9,
//           size: "xl",
//           value: "sasa",
//           variantId: 2,
//         },
//       ],
//       isSoldOut: true,
//       allVariants: [
//         {
//           id: 1,
//           color: "white",
//           images: [
//             {
//               id: 1,
//               src: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fHww",
//             },
//           ],
//           slides: [
//             {
//               url: "asdf",
//               src: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fHww",
//             },
//             {
//               url: "asdf",
//               src: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNoaXJ0fGVufDB8fDB8fHww",
//             },
//           ],
//         },
//         {
//           id: 2,
//           color: "grey",
//           images: [
//             {
//               id: 2,
//               src: "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2Ff5d70df9-083f-4565-8e3d-8d2870665d2d%2Fessential-tag-tee-grey-1.jpg?alt=media&token=efcc48a8-dc0c-4793-810b-74eb04e18b4d",
//             },
//           ],
//           slides: [
//             {
//               url: "asdf",
//               src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww",
//             },
//           ],
//         },
//       ],
//     },
//   ];

//   // const variantSlides = [
//   //   {
//   //     id: 1,
//   //     variantId: 1,
//   //     productId: 1,
//   //     model: "Essential Tag Tee",
//   //     color: "white",
//   //     discount: 10,
//   //     price: 25.0,
//   //     actualPrice: 30.0,
//   //     type: "T-shirt",
//   //     numberOfVariants: 0,
//   //     skus: [
//   //       {
//   //         skuId: 1,
//   //         order: 1,
//   //         productId: 1,
//   //         quantity: 99,
//   //         size: "xs",
//   //         value: "degirawhitehoodies",
//   //         variantId: 1,
//   //       },
//   //       {
//   //         skuId: 2,
//   //         order: 2,
//   //         productId: 1,
//   //         quantity: 19,
//   //         size: "md",
//   //         value: "degirawhitehoodiees",
//   //         variantId: 1,
//   //       },
//   //     ],
//   //     isSoldOut: false,
//   //     allVariants: [
//   //       {
//   //         id: 2,
//   //         color: "grey",
//   //         slides: [
//   //           {
//   //             url: "asdf1",
//   //             src: "https://images.unsplash.com/photo-1548864789-7393f2b4baa5?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   //           },
//   //           {
//   //             url: "asdf1",
//   //             src: "https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg"
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         id: 1,
//   //         color: "white",
//   //         slides: [
//   //           {
//   //             url: "asdf4",
//   //             src: "https://media.istockphoto.com/id/590039970/photo/man-wearing-a-white-shirt-white-background.webp?b=1&s=612x612&w=0&k=20&c=ldhgNb8WuXMMqh5h1hCLKnZHTr-cB6TYPOi7lXOzVLE=",
//   //           },
//   //           {
//   //             url: "asdf3",
//   //             src: "https://cdn.pixabay.com/photo/2016/04/19/16/28/model-1338993_1280.jpg",
//   //           },
//   //         ],
//   //       },

//   //     ],
//   //   },

//   // ];
  

//   // const variantSlides = [
//   //   {
//   //     id: 1,
//   //     variantId: 1,
//   //     productId: 1,
//   //     model: "Essential Tag Tee",
//   //     color: "white",
//   //     discount: 10,
//   //     price: 25.0,
//   //     actualPrice: 30.0,
//   //     type: "T-shirt",
//   //     numberOfVariants: 0,
//   //     skus: [
//   //       {
//   //         skuId: 1,
//   //         order: 1,
//   //         productId: 1,
//   //         quantity: 99,
//   //         size: "xs",
//   //         value: "degirawhitehoodies",
//   //         variantId: 1,
//   //       },
//   //       {
//   //         skuId: 2,
//   //         order: 2,
//   //         productId: 1,
//   //         quantity: 19,
//   //         size: "md",
//   //         value: "degirawhitehoodiees",
//   //         variantId: 1,
//   //       },
//   //     ],
//   //     isSoldOut: false,
//   //     allVariants: [
//   //       {
//   //         id: 2,
//   //         color: "grey",
//   //         slides: [
//   //           {
//   //             url: "asdf1",
//   //             src: "https://images.unsplash.com/photo-1548864789-7393f2b4baa5?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   //           },
//   //           {
//   //             url: "asdf1",
//   //             src: "https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg"
//   //           },
//   //         ],
//   //       },
//   //       {
//   //         id: 1,
//   //         color: "white",
//   //         slides: [
//   //           {
//   //             url: "asdf4",
//   //             src: "https://media.istockphoto.com/id/590039970/photo/man-wearing-a-white-shirt-white-background.webp?b=1&s=612x612&w=0&k=20&c=ldhgNb8WuXMMqh5h1hCLKnZHTr-cB6TYPOi7lXOzVLE=",
//   //           },
//   //           {
//   //             url: "asdf3",
//   //             src: "https://cdn.pixabay.com/photo/2016/04/19/16/28/model-1338993_1280.jpg",
//   //           },
//   //         ],
//   //       },
//   //     ],
//   //   },
//   // ];

//   // const variantSlides = [
//   //   {
//   //     "color": "white",
//   //     "variantId": 1,
//   //     "productId":1,
//   //     "images": [
//   //       {
//   //         "id": 1,
//   //         "src": "https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png"
//   //       },
//   //       {
//   //         "id": 2,
//   //         "src": "https://cdn.pixabay.com/photo/2016/04/19/16/28/model-1338993_1280.jpg"
//   //       }
//   //     ],
//   //     "variantPrice": 28,
//   //     "skus": [
//   //       {
//   //         "order": 1,
//   //         "quantity": 123,
//   //         "size": "xs",
//   //         "value": "degirateewhitexs"
//   //       },
//   //       {
//   //         "order": 2,
//   //         "quantity": 123,
//   //         "size": "s",
//   //         "value": "degirateewhites"
//   //       },
//   //       {
//   //         "order": 3,
//   //         "quantity": 123,
//   //         "size": "m",
//   //         "value": "degirateewhitem"
//   //       },
//   //       {
//   //         "order": 4,
//   //         "quantity": 123,
//   //         "size": "l",
//   //         "value": "degirateewhitel"
//   //       },
//   //       {
//   //         "order": 5,
//   //         "quantity": 123,
//   //         "size": "xl",
//   //         "value": "degirateewhitexl"
//   //       }
//   //     ]
//   //   },
//   //   {
//   //     "variantId": 2,
//   //     "productId":2,
//   //     "color": "black",
//   //     "images": [
//   //       {
//   //         "id": 1,
//   //         "src": "https://cdn.pixabay.com/photo/2023/04/01/23/53/man-7893263_1280.jpg"
//   //       },
//   //       {
//   //         "id": 2,
//   //         "src": "https://cdn.pixabay.com/photo/2015/12/31/08/01/honor-1115325_1280.jpg"
//   //       }
//   //     ],
//   //     "variantPrice": 36,
//   //     "skus": [
//   //       {
//   //         "order": 1,
//   //         "quantity": 123,
//   //         "size": "xs",
//   //         "value": "degirateeblackxs"
//   //       },
//   //       {
//   //         "order": 2,
//   //         "quantity": 123,
//   //         "size": "s",
//   //         "value": "degirateeblacks"
//   //       },
//   //       {
//   //         "order": 3,
//   //         "quantity": 123,
//   //         "size": "m",
//   //         "value": "degirateeblackm"
//   //       },
//   //       {
//   //         "order": 4,
//   //         "quantity": 123,
//   //         "size": "l",
//   //         "value": "degirateeblackl"
//   //       },
//   //       {
//   //         "order": 5,
//   //         "quantity": 123,
//   //         "size": "xl",
//   //         "value": "degirateeblackxl"
//   //       }
//   //     ]
//   //   },
//   //   {
//   //     "color": "grey",
//   //     "variantId": 3,
//   //     "productId":3,
//   //     "images": [
//   //       {
//   //         "id": 1,
//   //         "src": "https://cdn.pixabay.com/photo/2019/03/15/10/21/fashion-4056729_1280.jpg"
//   //       },
//   //       {
//   //         "id": 2,
//   //         "src": "https://cdn.pixabay.com/photo/2023/05/08/22/00/tshirt-7979854_1280.jpg"
//   //       }
//   //     ],
//   //     "variantPrice": 36,
//   //     "skus": [
//   //       {
//   //         "order": 1,
//   //         "quantity": 123,
//   //         "size": "xs",
//   //         "value": "degirateegreyxs"
//   //       },
//   //       {
//   //         "order": 2,
//   //         "quantity": 123,
//   //         "size": "s",
//   //         "value": "degirateegreys"
//   //       },
//   //       {
//   //         "order": 3,
//   //         "quantity": 123,
//   //         "size": "m",
//   //         "value": "degirateegreym"
//   //       },
//   //       {
//   //         "order": 4,
//   //         "quantity": 123,
//   //         "size": "l",
//   //         "value": "degirateegreyl"
//   //       },
//   //       {
//   //         "order": 5,
//   //         "quantity": 123,
//   //         "size": "xl",
//   //         "value": "degirateegreyxl"
//   //       }
//   //     ]
//   //   },
//   //   {
//   //     "color": "tan",
//   //     "variantId": 4,
//   //     "productId":4,
//   //     "images": [
//   //       {
//   //         "id": 1,
//   //         "src": "https://cdn.pixabay.com/photo/2023/05/08/22/00/tshirt-7979854_1280.jpg"
//   //       },
//   //       {
//   //         "id": 2,
//   //         "src": "	https://cdn.pixabay.com/photo/2023/05/08/22/00/tshirt-7979854_1280.jpg"
//   //       }
//   //     ],
//   //     "variantPrice": 36,
//   //     "skus": [
//   //       {
//   //         "order": 1,
//   //         "quantity": 123,
//   //         "size": "xs",
//   //         "value": "degirateetanxs"
//   //       },
//   //       {
//   //         "order": 2,
//   //         "quantity": 123,
//   //         "size": "s",
//   //         "value": "degirateetans"
//   //       },
//   //       {
//   //         "order": 3,
//   //         "quantity": 123,
//   //         "size": "m",
//   //         "value": "degirateetanm"
//   //       },
//   //       {
//   //         "order": 4,
//   //         "quantity": 123,
//   //         "size": "l",
//   //         "value": "degirateetanl"
//   //       },
//   //       {
//   //         "order": 5,
//   //         "quantity": 123,
//   //         "size": "xl",
//   //         "value": "degirateetanxl"
//   //       }
//   //     ]
//   //   },
//   //   {
//   //     "color": "purple",
//   //     "variantId": 5,
//   //     "productId":5,
//   //     "images": [
//   //       {
//   //         "id": "Add corresponding image id (id used as folder name where image is found in storage)",
//   //         "src": "Add corresponging image link from storage"
//   //       },
//   //       {
//   //         "id": "Add corresponding image id (id used as folder name where image is found in storage)",
//   //         "src": "Add corresponging image link from storage"
//   //       }
//   //     ],
//   //     "variantPrice": 36,
//   //     "skus": [
//   //       {
//   //         "order": 1,
//   //         "quantity": 123,
//   //         "size": "xs",
//   //         "value": "degirateepurplexs"
//   //       },
//   //       {
//   //         "order": 2,
//   //         "quantity": 123,
//   //         "size": "s",
//   //         "value": "degirateepurples"
//   //       },
//   //       {
//   //         "order": 3,
//   //         "quantity": 123,
//   //         "size": "m",
//   //         "value": "degirateepurplem"
//   //       },
//   //       {
//   //         "order": 4,
//   //         "quantity": 123,
//   //         "size": "l",
//   //         "value": "degirateepurplel"
//   //       },
//   //       {
//   //         "order": 5,
//   //         "quantity": 123,
//   //         "size": "xl",
//   //         "value": "degirateepurplexl"
//   //       }
//   //     ]
//   //   }
//   // ]

//   const [slides, setSlides] = useState(variantSlides);

//   useEffect(() => {
//     (async () => {
//       // const fetchedVariants = await getCollection({
//       //   sortBy,
//       // });

//       // setSlides(
//       //   fetchedVariants.sort((a, b) =>
//       //     a.color.toUpperCase() > b.color.toUpperCase() ? 1 : -1
//       //   )
//       // );

//       setSlides(
//         variantSlides.sort((a, b) =>
//           a.color.toUpperCase() > b.color.toUpperCase() ? 1 : -1
//         )
//       );
//     })();
//   }, []);

//   return (
//     <section className={styles.section}>
//       <div className={`${styles.container} main-container`}>
//         {titleTop && <p className={styles.section_title_top}>{titleTop}</p>}
//         {titleBottom && (
//           <h1 className={styles.section_title_bottom}>{titleBottom}</h1>
//         )}
//         <div className={styles.carousel_container}>
//           <ProductSlider
//             slides={slides}
//             slidesPerView="auto"
//             spaceBetween={20}
//             pagination={false}
//             sliderClassName={styles.slider}
//             slideClassName={styles.slide}
//             fillClassName={styles.fill}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductSliderSection;


import { useState, useEffect } from "react";

import { useCollection } from "hooks/useCollection";

import { ProductSlider } from "components/common";

import styles from "./index.module.scss";

const ProductSliderSection = ({ titleTop, titleBottom, sortBy }) => {
  const { getCollection } = useCollection();
  // const variantSlides = [
  //   {
  //     id: 1,
  //     variantId: 1,
  //     productId: 1,
  //     model: "Essential Tag Tee",
  //     color: "white",
  //     discount: 10,
  //     price: 25.0,
  //     actualPrice: 30.0,
  //     type: "T-shirt",

  //     slides: [
  //       {
  //         url: "asdf",
  //         src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
  //       },
  //     ],
  //     images: [
  //       "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2F8462353e-8636-4f36-a57a-676f36a367db%2Fessential-tag-tee-white-1.jpg?alt=media&token=c4af1dae-4895-4524-819a-8c872aac4b66",
  //     ],
  //     numberOfVariants: 2,
  //     skus: [
  //       {
  //         skuId: 1,
  //         order: 1,
  //         productId: 1,
  //         quantity: 99,
  //         size: "xs",
  //         value: "degirawhitehoodies",
  //         variantId: 1,
  //       },
  //       {
  //         skuId: 2,
  //         order: 2,
  //         productId: 1,
  //         quantity: 19,
  //         size: "md",
  //         value: "degirawhitehoodiees",
  //         variantId: 2,
  //       },
  //       {
  //         skuId: 3,
  //         order: 2,
  //         productId: 2,
  //         quantity: 9,
  //         size: "xl",
  //         value: "degirawhitehoodiees",
  //         variantId: 3,
  //       },
  //     ],
  //     isSoldOut: false,
  //     allVariants: [
  //       {
  //         id: 1,
  //         color: "white",
  //         images: [
  //           {
  //             id: 1,
  //             src: "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2F8462353e-8636-4f36-a57a-676f36a367db%2Fessential-tag-tee-white-1.jpg?alt=media&token=c4af1dae-4895-4524-819a-8c872aac4b66",
  //           },
  //         ],
  //         slides: [
  //           {
  //             url: "asdf",
  //             src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
  //           },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         color: "grey",
  //         images: [
  //           {
  //             id: 2,
  //             src: "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2Ff5d70df9-083f-4565-8e3d-8d2870665d2d%2Fessential-tag-tee-grey-1.jpg?alt=media&token=efcc48a8-dc0c-4793-810b-74eb04e18b4d",
  //           },
  //         ],
  //         slides: [
  //           {
  //             url: "asdf",
  //             src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     variantId: 2,
  //     productId: 1,
  //     model: "Essential Tag Tee",
  //     color: "grey",
  //     discount: 10,
  //     price: 25.0,
  //     actualPrice: 30.0,
  //     type: "T-shirt",
  //     slides: [
  //       {
  //         url: "asdf",
  //         src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww",
  //       },
  //     ],
  //     images: [
  //       "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fHww",
  //     ],
  //     numberOfVariants: 2,
  //     skus: [
  //       {
  //         skuId: 1,
  //         order: 1,
  //         productId: 1,
  //         quantity: 99,
  //         size: "xl",
  //         value: "degirawhitehoodies",
  //         variantId: 2,
  //       },
  //       {
  //         skuId: 3,
  //         order: 2,
  //         productId: 2,
  //         quantity: 9,
  //         size: "xl",
  //         value: "sasa",
  //         variantId: 3,
  //       },
  //     ],
  //     isSoldOut: true,
  //     allVariants: [
  //       {
  //         id: 1,
  //         color: "white",
  //         images: [
  //           {
  //             id: 1,
  //             src: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fHww",
  //           },
  //         ],
  //         slides: [
  //           {
  //             url: "asdf",
  //             src: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fHww",
  //           },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         color: "grey",
  //         images: [
  //           {
  //             id: 2,
  //             src: "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2Ff5d70df9-083f-4565-8e3d-8d2870665d2d%2Fessential-tag-tee-grey-1.jpg?alt=media&token=efcc48a8-dc0c-4793-810b-74eb04e18b4d",
  //           },
  //         ],
  //         slides: [
  //           {
  //             url: "asdf",
  //             src: "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2F8462353e-8636-4f36-a57a-676f36a367db%2Fessential-tag-tee-white-1.jpg?alt=media&token=c4af1dae-4895-4524-819a-8c872aac4b66",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];


  const variantSlides = [
    {
      id: 1,
      variantId: 1,
      productId: 1,
      model: "Essential Tag Tee",
      color: "white",
      discount: 10,
      price: 25.0,
      actualPrice: 30.0,
      type: "T-shirt",
      slides: [
        {
          url: "asdf",
          src: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
        },
      ],
      images: [
        "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2F8462353e-8636-4f36-a57a-676f36a367db%2Fessential-tag-tee-white-1.jpg?alt=media&token=c4af1dae-4895-4524-819a-8c872aac4b66",
      ],
      numberOfVariants: 2,
      skus: [
        {
          skuId: 1,
          order: 1,
          productId: 1,
          quantity: 99,
          size: "xs",
          value: "degirawhitehoodies",
          variantId: 1,
        },
        {
          skuId: 2,
          order: 2,
          productId: 1,
          quantity: 19,
          size: "md",
          value: "degirawhitehoodiees",
          variantId: 1,
        },
      ],
      isSoldOut: false,
      allVariants: [
        {
          id: 1,
          color: "white",
          images: [
            {
              id: 1,
              src: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHNoaXJ0fGVufDB8fDB8fHww",
            },
          ],
          slides: [
            {
              url: "asdf",
              src: "https://images.unsplash.com/photo-1548864789-7393f2b4baa5?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
        {
          id: 2,
          color: "grey",
          images: [
            {
              id: 2,
              src: "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2Ff5d70df9-083f-4565-8e3d-8d2870665d2d%2Fessential-tag-tee-grey-1.jpg?alt=media&token=efcc48a8-dc0c-4793-810b-74eb04e18b4d",
            },
          ],
          slides: [
            {
              url: "asdf",
              src: "https://images.unsplash.com/photo-1548864789-7393f2b4baa5?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      variantId: 2,
      productId: 1,
      model: "Essential Tag Tee",
      color: "grey",
      discount: 10,
      price: 25.0,
      actualPrice: 30.0,
      type: "T-shirt",
      slides: [
        {
          url: "asdf",
          src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww",
        },
      ],
      images: [
        "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fHww",
      ],
      numberOfVariants: 2,
      skus: [
        {
          skuId: 3,
          order: 1,
          productId: 1,
          quantity: 9,
          size: "xl",
          value: "sasa",
          variantId: 2,
        },
      ],
      isSoldOut: true,
      allVariants: [
        {
          id: 1,
          color: "white",
          images: [
            {
              id: 1,
              src: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXJ0fGVufDB8fDB8fHww",
            },
          ],
          slides: [
            {
              url: "asdf",
              src: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNoaXJ0fGVufDB8fDB8fHww",
            },
            {
              url: "asdf",
              src: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNoaXJ0fGVufDB8fDB8fHww",
            },
          ],
        },
        {
          id: 2,
          color: "grey",
          images: [
            {
              id: 2,
              src: "https://firebasestorage.googleapis.com/v0/b/flaakko-v2.appspot.com/o/product-images%2Ff5d70df9-083f-4565-8e3d-8d2870665d2d%2Fessential-tag-tee-grey-1.jpg?alt=media&token=efcc48a8-dc0c-4793-810b-74eb04e18b4d",
            },
          ],
          slides: [
            {
              url: "asdf",
              src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww",
            },
          ],
        },
      ],
    },
  ];

  // const variantSlides = [
  //   {
  //     id: 1,
  //     variantId: 1,
  //     productId: 1,
  //     model: "Essential Tag Tee",
  //     color: "white",
  //     discount: 10,
  //     price: 25.0,
  //     actualPrice: 30.0,
  //     type: "T-shirt",
  //     numberOfVariants: 0,
  //     skus: [
  //       {
  //         skuId: 1,
  //         order: 1,
  //         productId: 1,
  //         quantity: 99,
  //         size: "xs",
  //         value: "degirawhitehoodies",
  //         variantId: 1,
  //       },
  //       {
  //         skuId: 2,
  //         order: 2,
  //         productId: 1,
  //         quantity: 19,
  //         size: "md",
  //         value: "degirawhitehoodiees",
  //         variantId: 1,
  //       },
  //     ],
  //     isSoldOut: false,
  //     allVariants: [
  //       {
  //         id: 2,
  //         color: "grey",
  //         slides: [
  //           {
  //             url: "asdf1",
  //             src: "https://images.unsplash.com/photo-1548864789-7393f2b4baa5?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //           },
  //           {
  //             url: "asdf1",
  //             src: "https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg"
  //           },
  //         ],
  //       },
  //       {
  //         id: 1,
  //         color: "white",
  //         slides: [
  //           {
  //             url: "asdf4",
  //             src: "https://media.istockphoto.com/id/590039970/photo/man-wearing-a-white-shirt-white-background.webp?b=1&s=612x612&w=0&k=20&c=ldhgNb8WuXMMqh5h1hCLKnZHTr-cB6TYPOi7lXOzVLE=",
  //           },
  //           {
  //             url: "asdf3",
  //             src: "https://cdn.pixabay.com/photo/2016/04/19/16/28/model-1338993_1280.jpg",
  //           },
  //         ],
  //       },

  //     ],
  //   },

  // ];
  

  // const variantSlides = [
  //   {
  //     id: 1,
  //     variantId: 1,
  //     productId: 1,
  //     model: "Essential Tag Tee",
  //     color: "white",
  //     discount: 10,
  //     price: 25.0,
  //     actualPrice: 30.0,
  //     type: "T-shirt",
  //     numberOfVariants: 0,
  //     skus: [
  //       {
  //         skuId: 1,
  //         order: 1,
  //         productId: 1,
  //         quantity: 99,
  //         size: "xs",
  //         value: "degirawhitehoodies",
  //         variantId: 1,
  //       },
  //       {
  //         skuId: 2,
  //         order: 2,
  //         productId: 1,
  //         quantity: 19,
  //         size: "md",
  //         value: "degirawhitehoodiees",
  //         variantId: 1,
  //       },
  //     ],
  //     isSoldOut: false,
  //     allVariants: [
  //       {
  //         id: 2,
  //         color: "grey",
  //         slides: [
  //           {
  //             url: "asdf1",
  //             src: "https://images.unsplash.com/photo-1548864789-7393f2b4baa5?q=80&w=2834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //           },
  //           {
  //             url: "asdf1",
  //             src: "https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg"
  //           },
  //         ],
  //       },
  //       {
  //         id: 1,
  //         color: "white",
  //         slides: [
  //           {
  //             url: "asdf4",
  //             src: "https://media.istockphoto.com/id/590039970/photo/man-wearing-a-white-shirt-white-background.webp?b=1&s=612x612&w=0&k=20&c=ldhgNb8WuXMMqh5h1hCLKnZHTr-cB6TYPOi7lXOzVLE=",
  //           },
  //           {
  //             url: "asdf3",
  //             src: "https://cdn.pixabay.com/photo/2016/04/19/16/28/model-1338993_1280.jpg",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  // const variantSlides = [
  //   {
  //     "color": "white",
  //     "variantId": 1,
  //     "productId":1,
  //     "images": [
  //       {
  //         "id": 1,
  //         "src": "https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png"
  //       },
  //       {
  //         "id": 2,
  //         "src": "https://cdn.pixabay.com/photo/2016/04/19/16/28/model-1338993_1280.jpg"
  //       }
  //     ],
  //     "variantPrice": 28,
  //     "skus": [
  //       {
  //         "order": 1,
  //         "quantity": 123,
  //         "size": "xs",
  //         "value": "degirateewhitexs"
  //       },
  //       {
  //         "order": 2,
  //         "quantity": 123,
  //         "size": "s",
  //         "value": "degirateewhites"
  //       },
  //       {
  //         "order": 3,
  //         "quantity": 123,
  //         "size": "m",
  //         "value": "degirateewhitem"
  //       },
  //       {
  //         "order": 4,
  //         "quantity": 123,
  //         "size": "l",
  //         "value": "degirateewhitel"
  //       },
  //       {
  //         "order": 5,
  //         "quantity": 123,
  //         "size": "xl",
  //         "value": "degirateewhitexl"
  //       }
  //     ]
  //   },
  //   {
  //     "variantId": 2,
  //     "productId":2,
  //     "color": "black",
  //     "images": [
  //       {
  //         "id": 1,
  //         "src": "https://cdn.pixabay.com/photo/2023/04/01/23/53/man-7893263_1280.jpg"
  //       },
  //       {
  //         "id": 2,
  //         "src": "https://cdn.pixabay.com/photo/2015/12/31/08/01/honor-1115325_1280.jpg"
  //       }
  //     ],
  //     "variantPrice": 36,
  //     "skus": [
  //       {
  //         "order": 1,
  //         "quantity": 123,
  //         "size": "xs",
  //         "value": "degirateeblackxs"
  //       },
  //       {
  //         "order": 2,
  //         "quantity": 123,
  //         "size": "s",
  //         "value": "degirateeblacks"
  //       },
  //       {
  //         "order": 3,
  //         "quantity": 123,
  //         "size": "m",
  //         "value": "degirateeblackm"
  //       },
  //       {
  //         "order": 4,
  //         "quantity": 123,
  //         "size": "l",
  //         "value": "degirateeblackl"
  //       },
  //       {
  //         "order": 5,
  //         "quantity": 123,
  //         "size": "xl",
  //         "value": "degirateeblackxl"
  //       }
  //     ]
  //   },
  //   {
  //     "color": "grey",
  //     "variantId": 3,
  //     "productId":3,
  //     "images": [
  //       {
  //         "id": 1,
  //         "src": "https://cdn.pixabay.com/photo/2019/03/15/10/21/fashion-4056729_1280.jpg"
  //       },
  //       {
  //         "id": 2,
  //         "src": "https://cdn.pixabay.com/photo/2023/05/08/22/00/tshirt-7979854_1280.jpg"
  //       }
  //     ],
  //     "variantPrice": 36,
  //     "skus": [
  //       {
  //         "order": 1,
  //         "quantity": 123,
  //         "size": "xs",
  //         "value": "degirateegreyxs"
  //       },
  //       {
  //         "order": 2,
  //         "quantity": 123,
  //         "size": "s",
  //         "value": "degirateegreys"
  //       },
  //       {
  //         "order": 3,
  //         "quantity": 123,
  //         "size": "m",
  //         "value": "degirateegreym"
  //       },
  //       {
  //         "order": 4,
  //         "quantity": 123,
  //         "size": "l",
  //         "value": "degirateegreyl"
  //       },
  //       {
  //         "order": 5,
  //         "quantity": 123,
  //         "size": "xl",
  //         "value": "degirateegreyxl"
  //       }
  //     ]
  //   },
  //   {
  //     "color": "tan",
  //     "variantId": 4,
  //     "productId":4,
  //     "images": [
  //       {
  //         "id": 1,
  //         "src": "https://cdn.pixabay.com/photo/2023/05/08/22/00/tshirt-7979854_1280.jpg"
  //       },
  //       {
  //         "id": 2,
  //         "src": "	https://cdn.pixabay.com/photo/2023/05/08/22/00/tshirt-7979854_1280.jpg"
  //       }
  //     ],
  //     "variantPrice": 36,
  //     "skus": [
  //       {
  //         "order": 1,
  //         "quantity": 123,
  //         "size": "xs",
  //         "value": "degirateetanxs"
  //       },
  //       {
  //         "order": 2,
  //         "quantity": 123,
  //         "size": "s",
  //         "value": "degirateetans"
  //       },
  //       {
  //         "order": 3,
  //         "quantity": 123,
  //         "size": "m",
  //         "value": "degirateetanm"
  //       },
  //       {
  //         "order": 4,
  //         "quantity": 123,
  //         "size": "l",
  //         "value": "degirateetanl"
  //       },
  //       {
  //         "order": 5,
  //         "quantity": 123,
  //         "size": "xl",
  //         "value": "degirateetanxl"
  //       }
  //     ]
  //   },
  //   {
  //     "color": "purple",
  //     "variantId": 5,
  //     "productId":5,
  //     "images": [
  //       {
  //         "id": "Add corresponding image id (id used as folder name where image is found in storage)",
  //         "src": "Add corresponging image link from storage"
  //       },
  //       {
  //         "id": "Add corresponding image id (id used as folder name where image is found in storage)",
  //         "src": "Add corresponging image link from storage"
  //       }
  //     ],
  //     "variantPrice": 36,
  //     "skus": [
  //       {
  //         "order": 1,
  //         "quantity": 123,
  //         "size": "xs",
  //         "value": "degirateepurplexs"
  //       },
  //       {
  //         "order": 2,
  //         "quantity": 123,
  //         "size": "s",
  //         "value": "degirateepurples"
  //       },
  //       {
  //         "order": 3,
  //         "quantity": 123,
  //         "size": "m",
  //         "value": "degirateepurplem"
  //       },
  //       {
  //         "order": 4,
  //         "quantity": 123,
  //         "size": "l",
  //         "value": "degirateepurplel"
  //       },
  //       {
  //         "order": 5,
  //         "quantity": 123,
  //         "size": "xl",
  //         "value": "degirateepurplexl"
  //       }
  //     ]
  //   }
  // ]

  const [slides, setSlides] = useState(variantSlides);

  useEffect(() => {
    (async () => {
      // const fetchedVariants = await getCollection({
      //   sortBy,
      // });

      // setSlides(
      //   fetchedVariants.sort((a, b) =>
      //     a.color.toUpperCase() > b.color.toUpperCase() ? 1 : -1
      //   )
      // );

      setSlides(
        variantSlides.sort((a, b) =>
          a.color.toUpperCase() > b.color.toUpperCase() ? 1 : -1
        )
      );
    })();
  }, []);

  return (
    <section className={styles.section}>
      <div className={`${styles.container} main-container`}>
        {titleTop && <p className={styles.section_title_top}>{titleTop}</p>}
        {titleBottom && (
          <h1 className={styles.section_title_bottom}>{titleBottom}</h1>
        )}
        <div className={styles.carousel_container}>
          <ProductSlider
            slides={slides}
            slidesPerView="auto"
            spaceBetween={20}
            pagination={false}
            sliderClassName={styles.slider}
            slideClassName={styles.slide}
            fillClassName={styles.fill}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSliderSection;
