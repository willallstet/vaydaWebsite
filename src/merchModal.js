import React, { useEffect, useState } from 'react';
import { request, gql } from 'graphql-request';
import './merchModal.css';

const SHOPIFY_API_URL = 'https://y2qbfr-3m.myshopify.com/api/2023-01/graphql.json';
const SHOPIFY_ACCESS_TOKEN = 'c9832af0fd39557fc08a96b321639b6e';

const FETCH_PRODUCTS_QUERY = gql`
  {
    products(first: 10) {
      edges {
        node {
          id
          title
          images(first: 1) {
            edges {
              node {
                src
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                price {
                  amount
                  currencyCode
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`;

const MerchModal = ({ show, onClose }) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await request(SHOPIFY_API_URL, FETCH_PRODUCTS_QUERY, null, {
          'X-Shopify-Storefront-Access-Token': SHOPIFY_ACCESS_TOKEN,
        });
        const products = data.products.edges.map(edge => ({
          id: edge.node.id,
          image: edge.node.images.edges[0]?.node.src,
          description: edge.node.title,
          variants: edge.node.variants.edges.map(variantEdge => ({
            id: variantEdge.node.id,
            price: `${variantEdge.node.price.currencyCode} ${variantEdge.node.price.amount}`,
            options: variantEdge.node.selectedOptions,
          })),
        }));
        setItems(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    // function loadScript() {
    //   const script = document.createElement('script');
    //   script.async = true;
    //   script.src = scriptURL;
    //   document.body.appendChild(script);
    //   script.onload = ShopifyBuyInit;
    // }

    // function ShopifyBuyInit() {
    //   const client = window.ShopifyBuy.buildClient({
    //     domain: 'y2qbfr-3m.myshopify.com',
    //     storefrontAccessToken: 'b62741fc4cb6a648265297366176504b',
    //   });
    //   window.ShopifyBuy.UI.onReady(client).then(function (ui) {
    //     ui.createComponent('collection', {
    //       id: '486237634873',
    //       node: document.getElementById('collection-component-1728847799346'),
    //       moneyFormat: '%24%7B%7Bamount%7D%7D',
    //       options: {
    //         "product": {
    //           "styles": {
    //             "product": {
    //               "@media (min-width: 601px)": {
    //                 "max-width": "calc(25% - 20px)",
    //                 "margin-left": "20px",
    //                 "margin-bottom": "50px",
    //                 "width": "calc(25% - 20px)"
    //               },
    //               "img": {
    //                 "height": "calc(100% - 15px)",
    //                 "position": "absolute",
    //                 "left": "0",
    //                 "right": "0",
    //                 "top": "0"
    //               },
    //               "imgWrapper": {
    //                 "padding-top": "calc(75% + 15px)",
    //                 "position": "relative",
    //                 "height": "0"
    //               }
    //             },
    //             "title": {
    //               "font-family": "Quantico, sans-serif",
    //               "font-size": "20px",
    //               "color": "#000000"
    //             },
    //             "button": {
    //               "font-family": "Quantico, sans-serif",
    //               "font-size": "16px",
    //               "padding-top": "16px",
    //               "padding-bottom": "16px",
    //               ":hover": {
    //                 "background-color": "#000000"
    //               },
    //               "background-color": "#000000",
    //               ":focus": {
    //                 "background-color": "#000000"
    //               },
    //               "border-radius": "0px"
    //             },
    //             "quantityInput": {
    //               "font-size": "16px",
    //               "padding-top": "16px",
    //               "padding-bottom": "16px"
    //             },
    //             "price": {
    //               "font-family": "Quantico, sans-serif",
    //               "color": "#000000"
    //             },
    //             "compareAt": {
    //               "font-family": "Quantico, sans-serif",
    //               "color": "#000000"
    //             },
    //             "unitPrice": {
    //               "font-family": "Quantico, sans-serif",
    //               "color": "#000000"
    //             }
    //           },
    //           "buttonDestination": "modal",
    //           "contents": {
    //             "options": false
    //           },
    //           "text": {
    //             "button": "View product"
    //           },
    //           "googleFonts": [
    //             "Quantico"
    //           ]
    //         },
    //         "productSet": {
    //           "styles": {
    //             "products": {
    //               "@media (min-width: 601px)": {
    //                 "margin-left": "-20px"
    //               }
    //             }
    //           }
    //         },
    //         "modalProduct": {
    //           "contents": {
    //             "img": false,
    //             "imgWithCarousel": true,
    //             "button": false,
    //             "buttonWithQuantity": true
    //           },
    //           "styles": {
    //             "product": {
    //               "@media (min-width: 601px)": {
    //                 "max-width": "100%",
    //                 "margin-left": "0px",
    //                 "margin-bottom": "0px"
    //               }
    //             },
    //             "button": {
    //               "font-family": "Quantico, sans-serif",
    //               "font-size": "16px",
    //               "padding-top": "16px",
    //               "padding-bottom": "16px",
    //               ":hover": {
    //                 "background-color": "#000000"
    //               },
    //               "background-color": "#000000",
    //               ":focus": {
    //                 "background-color": "#000000"
    //               },
    //               "border-radius": "0px"
    //             },
    //             "quantityInput": {
    //               "font-size": "16px",
    //               "padding-top": "16px",
    //               "padding-bottom": "16px"
    //             },
    //             "title": {
    //               "font-family": "Quantico, sans-serif",
    //               "font-weight": "bold",
    //               "font-size": "26px",
    //               "color": "#13ff00"
    //             },
    //             "price": {
    //               "font-family": "Quantico, sans-serif",
    //               "font-weight": "normal",
    //               "font-size": "18px",
    //               "color": "#13ff00"
    //             },
    //             "compareAt": {
    //               "font-family": "Quantico, sans-serif",
    //               "font-weight": "normal",
    //               "font-size": "15.299999999999999px",
    //               "color": "#13ff00"
    //             },
    //             "unitPrice": {
    //               "font-family": "Quantico, sans-serif",
    //               "font-weight": "normal",
    //               "font-size": "15.299999999999999px",
    //               "color": "#13ff00"
    //             },
    //             "description": {
    //               "font-family": "Quantico, sans-serif",
    //               "color": "#13ff00"
    //             }
    //           },
    //           "googleFonts": [
    //             "Quantico"
    //           ],
    //           "text": {
    //             "button": "Add to cart"
    //           }
    //         },
    //         "modal": {
    //           "styles": {
    //             "modal": {
    //               "background-color": "#000000"
    //             }
    //           }
    //         },
    //         "option": {
    //           "styles": {
    //             "label": {
    //               "font-family": "Quantico, sans-serif"
    //             },
    //             "select": {
    //               "font-family": "Quantico, sans-serif"
    //             }
    //           },
    //           "googleFonts": [
    //             "Quantico"
    //           ]
    //         },
    //         "cart": {
    //           "styles": {
    //             "button": {
    //               "font-family": "Quantico, sans-serif",
    //               "font-size": "16px",
    //               "padding-top": "16px",
    //               "padding-bottom": "16px",
    //               ":hover": {
    //                 "background-color": "#000000"
    //               },
    //               "background-color": "#000000",
    //               ":focus": {
    //                 "background-color": "#000000"
    //               },
    //               "border-radius": "0px"
    //             },
    //             "title": {
    //               "color": "#13ff00"
    //             },
    //             "header": {
    //               "color": "#13ff00"
    //             },
    //             "lineItems": {
    //               "color": "#13ff00"
    //             },
    //             "subtotalText": {
    //               "color": "#13ff00"
    //             },
    //             "subtotal": {
    //               "color": "#13ff00"
    //             },
    //             "notice": {
    //               "color": "#13ff00"
    //             },
    //             "currency": {
    //               "color": "#13ff00"
    //             },
    //             "close": {
    //               "color": "#13ff00",
    //               ":hover": {
    //                 "color": "#13ff00"
    //               }
    //             },
    //             "empty": {
    //               "color": "#13ff00"
    //             },
    //             "noteDescription": {
    //               "color": "#13ff00"
    //             },
    //             "discountText": {
    //               "color": "#13ff00"
    //             },
    //             "discountIcon": {
    //               "fill": "#13ff00"
    //             },
    //             "discountAmount": {
    //               "color": "#13ff00"
    //             },
    //             "cart": {
    //               "background-color": "#000000"
    //             },
    //             "footer": {
    //               "background-color": "#000000"
    //             }
    //           },
    //           "text": {
    //             "title": "cart",
    //             "total": "Subtotal",
    //             "empty": "your cart is empty.",
    //             "button": "checkout"
    //           },
    //           "googleFonts": [
    //             "Quantico"
    //           ]
    //         },
    //         "toggle": {
    //           "styles": {
    //             "toggle": {
    //               "font-family": "Quantico, sans-serif",
    //               "background-color": "#000000",
    //               ":hover": {
    //                 "background-color": "#000000"
    //               },
    //               ":focus": {
    //                 "background-color": "#000000"
    //               }
    //             },
    //             "count": {
    //               "font-size": "16px"
    //             }
    //           },
    //           "googleFonts": [
    //             "Quantico"
    //           ]
    //         },
    //         "lineItem": {
    //           "styles": {
    //             "variantTitle": {
    //               "color": "#13ff00"
    //             },
    //             "title": {
    //               "color": "#13ff00"
    //             },
    //             "price": {
    //               "color": "#13ff00"
    //             },
    //             "fullPrice": {
    //               "color": "#13ff00"
    //             },
    //             "discount": {
    //               "color": "#13ff00"
    //             },
    //             "discountIcon": {
    //               "fill": "#13ff00"
    //             },
    //             "quantity": {
    //               "color": "#13ff00"
    //             },
    //             "quantityIncrement": {
    //               "color": "#13ff00",
    //               "border-color": "#13ff00"
    //             },
    //             "quantityDecrement": {
    //               "color": "#13ff00",
    //               "border-color": "#13ff00"
    //             },
    //             "quantityInput": {
    //               "color": "#13ff00",
    //               "border-color": "#13ff00"
    //             }
    //           }
    //         }
    //       },
    //     });
    //   });
    // }

    if (show) {
      fetchProducts();
      // if (window.ShopifyBuy) {
      //   if (window.ShopifyBuy.UI) {
      //     ShopifyBuyInit();
      //   } else {
      //     loadScript();
      //   }
      // } else {
      //   loadScript();
      // }
    }
  }, [show]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="vintage-terminal-overlay">
      <div className="vintage-terminal-content">
        <div className="modal-title-bar">
          <span className="modal-title">merch</span>
          <div>
            <button onClick={onClose} className="exit-button">-</button>
            <button onClick={onClose} className="exit-button">X</button>
          </div>
        </div>
        <div className="lower-container" style={{ height: '0%' }}>
        </div>
        <h1>products coming soon</h1>
        {/* <div id="collection-component-1728847799346" style={{margin: '10px', overflow: 'scroll' }}></div> */}
      </div>
    </div>
  );
};

export default MerchModal;