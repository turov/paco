(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'paco-pepper.myshopify.com',
            storefrontAccessToken: '61b611572da7442b16af9a9ff317f3ec',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: '8460870779175',
                node: document.getElementById('product-component-1691083783454'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            },
                            "button": {
                                "font-family": "Gill Sans, sans-serif",
                                "font-size": "13px",
                                "padding-top": "6px",
                                "padding-bottom": "6px",
                                ":hover": {
                                    "background-color": "#2e8353"
                                },
                                "background-color": "#33915c",
                                ":focus": {
                                    "background-color": "#2e8353"
                                },
                                "border-radius": "6px",
                                "padding-left": "22px",
                                "padding-right": "22px"
                            },
                            "quantityInput": {
                                "font-size": "13px",
                                "padding-top": "14.5px",
                                "padding-bottom": "14.5px"
                            }
                        },
                        "contents": {
                            "img": false,
                            "title": false,
                            "price": false,
                            "options": false
                        },
                        "text": {
                            "button": "Order Now"
                        }
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "button": false,
                            "buttonWithQuantity": true
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            },
                            "button": {
                                "font-family": "Gill Sans, sans-serif",
                                "font-size": "13px",
                                "padding-top": "14.5px",
                                "padding-bottom": "14.5px",
                                ":hover": {
                                    "background-color": "#2e8353"
                                },
                                "background-color": "#33915c",
                                ":focus": {
                                    "background-color": "#2e8353"
                                },
                                "border-radius": "6px",
                                "padding-left": "22px",
                                "padding-right": "22px"
                            },
                            "quantityInput": {
                                "font-size": "13px",
                                "padding-top": "14.5px",
                                "padding-bottom": "14.5px"
                            }
                        },
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "option": {},
                    "cart": {
                        "styles": {
                            "button": {
                                "font-family": "Gill Sans, sans-serif",
                                "font-size": "13px",
                                "padding-top": "14.5px",
                                "padding-bottom": "14.5px",
                                ":hover": {
                                    "background-color": "#2e8353"
                                },
                                "background-color": "#33915c",
                                ":focus": {
                                    "background-color": "#2e8353"
                                },
                                "border-radius": "6px"
                            }
                        },
                        "text": {
                            "total": "Subtotal",
                            "button": "Checkout"
                        },
                        "popup": false
                    },
                    "toggle": {
                        "styles": {
                            "toggle": {
                                "font-family": "Gill Sans, sans-serif",
                                "background-color": "#33915c",
                                ":hover": {
                                    "background-color": "#2e8353"
                                },
                                ":focus": {
                                    "background-color": "#2e8353"
                                }
                            },
                            "count": {
                                "font-size": "13px"
                            }
                        }
                    }
                },
            });
        });
    }
})();