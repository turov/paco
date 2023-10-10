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

        const btns = document.querySelectorAll('.shop-btn');

        btns.forEach(btn => {
            ShopifyBuy.UI.onReady(client).then(function (ui) {
                ui.createComponent('product', {
                    id: '8460870779175',
                    node: btn,
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
                                    "font-family": "Avant Garde, sans-serif",
                                    "font-size": "18px",
                                    "padding-top": "17px",
                                    "padding-bottom": "17px",
                                    "margin": btn.classList.contains('shop-btn-center') ? "0 auto !important" : "-20px auto 0 0 !important",
                                    "display": "block",
                                    ":hover": {
                                        "background-color": "#2e8353"
                                    },
                                    "background-color": "#33915c",
                                    ":focus": {
                                        "background-color": "#2e8353"
                                    },
                                    "border-radius": "8px"
                                },
                                "quantityInput": {
                                    "font-size": "18px",
                                    "padding-top": "17px",
                                    "padding-bottom": "17px"
                                }
                            },
                            "contents": {
                                "img": false,
                                "title": false,
                                "price": false,
                                "options": false
                            },
                            "text": {
                                "button": btn.getAttribute('data-text') || "Order Now"
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
                                    "font-family": "Avant Garde, sans-serif",
                                    "font-size": "18px",
                                    "padding-top": "17px",
                                    "padding-bottom": "17px",
                                    ":hover": {
                                        "background-color": "#2e8353"
                                    },
                                    "background-color": "#33915c",
                                    ":focus": {
                                        "background-color": "#2e8353"
                                    },
                                    "border-radius": "8px"
                                },
                                "quantityInput": {
                                    "font-size": "18px",
                                    "padding-top": "17px",
                                    "padding-bottom": "17px"
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
                                    "font-family": "Avant Garde, sans-serif",
                                    "font-size": "18px",
                                    "padding-top": "17px",
                                    "padding-bottom": "17px",
                                    ":hover": {
                                        "background-color": "#2e8353"
                                    },
                                    "background-color": "#33915c",
                                    ":focus": {
                                        "background-color": "#2e8353"
                                    },
                                    "border-radius": "8px"
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
                                    "font-family": "Avant Garde, sans-serif",
                                    "background-color": "#33915c",
                                    ":hover": {
                                        "background-color": "#2e8353"
                                    },
                                    ":focus": {
                                        "background-color": "#2e8353"
                                    }
                                },
                                "count": {
                                    "font-size": "18px"
                                }
                            }
                        }
                    },
                });
            });


        })
    }
})();