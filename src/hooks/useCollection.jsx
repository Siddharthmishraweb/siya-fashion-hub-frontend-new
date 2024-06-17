// import { useState, useRef } from 'react';
// import { v4 as uuid } from 'uuid';

// import {
//   collection,
//   getDocs,
//   query,
//   where,
//   orderBy,
//   startAfter,
//   limit,
// } from 'firebase/firestore';

// import { db } from 'db/config';

// import { formatDiscountNumber } from 'helpers/format';

// export const useCollection = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [hasMore, setHasMore] = useState(true);

//   const productsRef = collection(db, 'products');

//   const latestDoc = useRef();

//   const getCollection = async ({
//     collectionName = 'products',
//     isNewQuery = true,
//     sortBy = { field: 'createdAt', direction: 'asc' },
//   }) => {
//     setError(null);

//     try {
//       if (isNewQuery) {
//         latestDoc.current = 0;
//         setHasMore(true);
//       }

//       let productsQuery;

//       let constraints = [orderBy(sortBy.field, sortBy.direction)];

//       if (sortBy.field === 'createdAt') {
//         constraints.unshift(orderBy('collection'));
//       }

//       if (sortBy.direction === 'desc' && !latestDoc.current) {
//         constraints.push(limit(4));
//       } else {
//         constraints.push(
//           startAfter(isNewQuery ? 0 : latestDoc.current),
//           limit(4)
//         );
//       }

//       if (collectionName === 'products') {
//         productsQuery = query(productsRef, ...constraints);
//       } else {
//         productsQuery = query(
//           productsRef,
//           where('collection', '==', collectionName),
//           ...constraints
//         );
//       }

//       const productsSnapshot = await getDocs(productsQuery);

//       if (productsSnapshot.size === 0) {
//         setHasMore(false);
//         setIsLoading(false);
//         return [];
//       }

//       setIsLoading(true);

//       latestDoc.current =
//         productsSnapshot.docs[productsSnapshot.docs.length - 1];

//       const productsPromises = productsSnapshot.docs.map(async (productDoc) => {
//         const productData = {
//           productId: productDoc.id,
//           ...productDoc.data(),
//         };

//         const skusRef = collection(productDoc.ref, 'skus');

//         const skusQuery = query(skusRef, orderBy('order'));

//         const skusSnapshot = await getDocs(skusQuery);

//         const skus = [];

//         skusSnapshot.forEach((skuDoc) =>
//           skus.push({
//             skuId: skuDoc.id,
//             ...skuDoc.data(),
//           })
//         );

//         const variantsRef = collection(productDoc.ref, 'variants');

//         const variantsSnapshot = await getDocs(variantsRef);

//         const productVariants = [];

//         variantsSnapshot.forEach((variantDoc) => {
//           let variantSkus = skus
//             .filter((sku) => sku.variantId === variantDoc.id)
//             .map((sku) => ({
//               size: sku.size,
//               skuId: sku.skuId,
//               quantity: sku.quantity,
//             }));

//           let availableQuantity = variantSkus.reduce((result, obj) => {
//             if (!obj.size) {
//               result['singleSize'] = obj.quantity;
//             } else {
//               result[obj.size] = obj.quantity;
//             }
//             return result;
//           }, {});

//           const sizes = Object.keys(availableQuantity);

//           const isSoldOut = variantSkus.every((sku) => sku.quantity === 0);

//           const { price: actualPrice, ...restProductData } = productData;
//           const {
//             variantPrice: currentPrice,
//             images: variantImages,
//             ...restVariantData
//           } = variantDoc.data();

//           const formattedVariantImages = variantImages.map((image) => ({
//             ...image,
//             url: `${restProductData.slug}-${restVariantData.color}`,
//           }));

//           productVariants.push({
//             variantId: variantDoc.id,
//             price: currentPrice,
//             actualPrice,
//             ...restProductData,
//             ...restVariantData,
//             slides: formattedVariantImages,
//             numberOfVariants: variantsSnapshot.size,
//             availableQuantity,
//             sizes,
//             skus: variantSkus,
//             discount: formatDiscountNumber({
//               currentPrice,
//               actualPrice,
//             }),
//             isSoldOut,
//           });
//         });

//         debugger;

//         console.warn("productVariants:::::", productVariants)

//         const formattedProductVariants = productVariants.map((variant) => ({
//           ...variant,
//           id: uuid(),
//           allVariants: productVariants,
//         }));

//         return formattedProductVariants;
//       });

//       const products = await Promise.all(productsPromises);

//       setIsLoading(false);
//       return [].concat(...products);
//     } catch (err) {
//       console.error(err);
//       setError(err);
//       setIsLoading(false);
//     }
//   };

//   return { getCollection, isLoading, hasMore, error };
// };



// const staticData = [
//   {
//     productId: '1',
//     variantId: 'v1',
//     color: 'Red',
//     currentPrice: 100,
//     actualPrice: 120,
//     model: 'Model A',
//     type: 'Type 1',
//     discount: 20,
//     slides: [
//       { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSs6D5i62ud3mXu3AFoA1Zysw2ArJZmgzDA&s', url: 'url1', id: uuid() },
//       { src: 'https://i.pinimg.com/736x/87/e3/43/87e343deb9ea36387a9cb69718ed4bc5.jpg', url: 'url2', id: uuid() }
//     ],
//     skus: [
//       { skuId: 'sku1', size: 'M', quantity: 10 },
//       { skuId: 'sku2', size: 'L', quantity: 0 }
//     ],
//     isSoldOut: false,
//     allVariants: []
//   },
//   {
//     productId: '2',
//     variantId: 'v2',
//     color: 'Blue',
//     currentPrice: 150,
//     actualPrice: 180,
//     model: 'Model B',
//     type: 'Type 2',
//     discount: 30,
//     slides: [
//       { src: 'https://i.pinimg.com/564x/d4/4b/46/d44b46f10348180a4dfb5be94fa3ede4.jpg', url: 'url3', id: uuid() },
//       { src: 'https://t4.ftcdn.net/jpg/01/67/25/37/360_F_167253732_FVaF7PyA5vat3JVPvP4F5AsCoZkYAnZF.jpg', url: 'url4', id: uuid() }
//     ],
//     skus: [
//       { skuId: 'sku3', size: 'S', quantity: 5 },
//       { skuId: 'sku4', size: 'M', quantity: 2 }
//     ],
//     isSoldOut: false,
//     allVariants: []
//   }
// ];




























// import { useState, useRef } from 'react';
// import { v4 as uuid } from 'uuid';
// const staticData = [
//   {
//     productId: '1',
//     variantId: 'v1',
//     color: 'Red',
//     currentPrice: 100,
//     actualPrice: 120,
//     model: 'Model A',
//     type: 'Type 1',
//     discount: 20,
//     slides: [
//       { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSs6D5i62ud3mXu3AFoA1Zysw2ArJZmgzDA&s', url: 'url1', id: uuid() },
//       { src: 'https://i.pinimg.com/736x/87/e3/43/87e343deb9ea36387a9cb69718ed4bc5.jpg', url: 'url2', id: uuid() }
//     ],
//     skus: [
//       { skuId: 'sku1', size: 'M', quantity: 10 },
//       { skuId: 'sku2', size: 'L', quantity: 0 }
//     ],
//     isSoldOut: false,
//     allVariants: [
//       {
//         variantId: 'v1',
//         color: 'Red',
//         currentPrice: 100,
//         discount: 20,
//         slides: [
//           { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSs6D5i62ud3mXu3AFoA1Zysw2ArJZmgzDA&s', url: 'url1', id: uuid() },
//           { src: 'https://i.pinimg.com/736x/87/e3/43/87e343deb9ea36387a9cb69718ed4bc5.jpg', url: 'url2', id: uuid() }
//         ],
//         skus: [
//           { skuId: 'sku1', size: 'M', quantity: 10 },
//           { skuId: 'sku2', size: 'L', quantity: 0 }
//         ],
//         isSoldOut: false
//       },
//       {
//         variantId: 'v3',
//         color: 'Green',
//         currentPrice: 90,
//         discount: 25,
//         slides: [
//           { src: 'https://i.pinimg.com/originals/35/80/31/3580314c141439fd7996582492ca6f7b.jpg', url: 'url3', id: uuid() },
//           { src: 'https://w0.peakpx.com/wallpaper/953/301/HD-wallpaper-poorna-kasim-multilingual-actress-green-saree-lover-thumbnail.jpg', url: 'url4', id: uuid() }
//         ],
//         skus: [
//           { skuId: 'sku5', size: 'S', quantity: 15 },
//           { skuId: 'sku6', size: 'M', quantity: 5 }
//         ],
//         isSoldOut: false
//       }
//     ]
//   },
//   {
//     productId: '2',
//     variantId: 'v2',
//     color: 'Blue',
//     currentPrice: 150,
//     actualPrice: 180,
//     model: 'Model B',
//     type: 'Type 2',
//     discount: 30,
//     slides: [
//       { src: 'https://i.pinimg.com/564x/d4/4b/46/d44b46f10348180a4dfb5be94fa3ede4.jpg', url: 'url3', id: uuid() },
//       { src: 'https://t4.ftcdn.net/jpg/01/67/25/37/360_F_167253732_FVaF7PyA5vat3JVPvP4F5AsCoZkYAnZF.jpg', url: 'url4', id: uuid() }
//     ],
//     skus: [
//       { skuId: 'sku3', size: 'S', quantity: 5 },
//       { skuId: 'sku4', size: 'M', quantity: 2 }
//     ],
//     isSoldOut: false,
//     allVariants: [
//       {
//         variantId: 'v2',
//         color: 'Blue',
//         currentPrice: 150,
//         discount: 30,
//         slides: [
//           { src: 'https://i.pinimg.com/564x/d4/4b/46/d44b46f10348180a4dfb5be94fa3ede4.jpg', url: 'url3', id: uuid() },
//           { src: 'https://t4.ftcdn.net/jpg/01/67/25/37/360_F_167253732_FVaF7PyA5vat3JVPvP4F5AsCoZkYAnZF.jpg', url: 'url4', id: uuid() }
//         ],
//         skus: [
//           { skuId: 'sku3', size: 'S', quantity: 5 },
//           { skuId: 'sku4', size: 'M', quantity: 2 }
//         ],
//         isSoldOut: false
//       },
//       {
//         variantId: 'v4',
//         color: 'Yellow',
//         currentPrice: 140,
//         discount: 35,
//         slides: [
//           { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76NQcllnm2tdpXlKRZXDSKhS32YOUDSwSHg&s', url: 'url5', id: uuid() },
//           { src: 'https://i.pinimg.com/564x/cc/58/03/cc580367b42730ef678b2b3aab8e1743.jpg', url: 'url6', id: uuid() }
//         ],
//         skus: [
//           { skuId: 'sku7', size: 'M', quantity: 8 },
//           { skuId: 'sku8', size: 'L', quantity: 3 }
//         ],
//         isSoldOut: false
//       }
//     ]
//   }
// ];

// export const useCollection = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [hasMore, setHasMore] = useState(true);

//   const latestDoc = useRef();

//   const getCollection = async ({ sortBy = { field: 'createdAt', direction: 'asc' } } = {}) => {
//     setError(null);
//     setIsLoading(true);

//     try {
//       // Sort static data based on sortBy
//       const sortedData = [...staticData].sort((a, b) => {
//         if (a[sortBy.field] > b[sortBy.field]) return sortBy.direction === 'asc' ? 1 : -1;
//         if (a[sortBy.field] < b[sortBy.field]) return sortBy.direction === 'asc' ? -1 : 1;
//         return 0;
//       });

//       // Mock pagination
//       const paginatedData = sortedData.slice(0, 4); // Adjust pagination as needed

//       // Update latestDoc for pagination
//       latestDoc.current = paginatedData[paginatedData.length - 1];

//       // Mock delay to simulate loading
//       await new Promise((resolve) => setTimeout(resolve, 500));

//       setIsLoading(false);
//       return paginatedData;
//     } catch (err) {
//       setError(err);
//       setIsLoading(false);
//     }
//   };

//   return { getCollection, isLoading, hasMore, error };
// };




import { useState, useRef } from 'react';
import axios from 'axios';
const baseUrl = "http://13.60.78.3:5000/"

export const useCollection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const latestDoc = useRef();

  const getCollection = async ({ sortBy = { field: 'createdAt', direction: 'asc' }, limit = 10, page = 1 } = {}) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.get(`${baseUrl}api/products/productDetail/getCollectionProducts`, {
        params: {
          sortBy: sortBy.field,
          direction: sortBy.direction,
          limit,
          page,
        },
      });

      const paginatedData = response.data;

      if (paginatedData.length < limit) {
        setHasMore(false);
      }

      // Update latestDoc for pagination
      latestDoc.current = paginatedData[paginatedData.length - 1];

      setIsLoading(false);
      return paginatedData;
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  return { getCollection, isLoading, hasMore, error };
};
