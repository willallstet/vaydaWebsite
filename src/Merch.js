import React, { useEffect } from 'react';
import './merchModal.css'; // Reuse the existing CSS for styling

function Merch() {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    function loadScript() {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      document.body.appendChild(script);
      script.onload = () => {
        if (window.ShopifyBuy) {
          ShopifyBuyInit();
        }
      };
    }

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: 'y2qbfr-3m.myshopify.com',
        storefrontAccessToken: 'b62741fc4cb6a648265297366176504b',
      });
      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('collection', {
          id: '486237634873',
          node: document.getElementById('collection-component-1728842877512'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            // ... existing options ...
          },
        });
      });
    }

    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, []);

  return (
    <div className="App">
      <div style={{ height: '80vh', width: '80vw', overflow: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        <div id="collection-component-1728842877512"></div>
      </div>
    </div>
  );
}

export default Merch;
