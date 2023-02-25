"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(225);
;// CONCATENATED MODULE: ./profile.js
const skills = [
    {
        skill: "HTML",
        percentage: "80"
    },
    {
        skill: "CSS",
        percentage: "65"
    },
    {
        skill: "Javascript",
        percentage: "75"
    },
    {
        skill: "Bootstrap",
        percentage: "65"
    },
    {
        skill: "Node.js",
        percentage: "60"
    },
    {
        skill: "Expreess.js",
        percentage: "60"
    },
    {
        skill: "React.js",
        percentage: "70"
    },
    {
        skill: "React Native",
        percentage: "70"
    },
    {
        skill: "Firebase",
        percentage: "70"
    },
    {
        skill: "Stripe",
        percentage: "65"
    },
    {
        skill: "Next.js",
        percentage: "60"
    }, 
];
const experiences = [
    {
        title: "Product design - Software developer at casilleropostal.co",
        description: "Talk to the customer \xb7 Understand what the client needs or requires \xb7 Costumer service \xb7 LCL \xb7 Figma \xb7 JavaScript \xb7 Yola platform / Layout and HTML \xb7 Air freight delivery process from USA/China to Colombia",
        from: 2017,
        to: 2023
    },
    {
        title: "UI/UX Product Designer at Universidad Republicana",
        description: "Design and improvement of interfaces that facilitate its use, improve the experience and usability of your product,understand how users use your interface, design interfaces and user experience.",
        from: 2022,
        to: 2022
    },
    {
        title: "Import and export assistant at Diamond Logistics S.A.S",
        description: "Customs services are an important aspect of shipping and logistics management. By utilizing Microsoft Excel for LCL and FCL inspections, custom service data can be integrated into the inspection templates to ensure compliance with customs regulations. Excel can help manage customs-related information, such as tariffs, taxes, and import/export regulations, to ensure smooth and efficient customs clearance processes.",
        from: 2013,
        to: 2016
    },
    {
        title: "Courier air operations coordinator at ABE Cargo Express ",
        description: "International courier import and export process \xb7 Tariff position \xb7 Dangerous goods certification by Avianca",
        from: 2006,
        to: 2012
    }, 
];
const projects = [
    {
        name: "Deliveroo",
        description: "Created with Expo and Javascript. Renders restaurants list that contain dishes from restaurants around the world. It uses Sanity as backend to save restaurants and dishes that allow users simulate an order.",
        image: "portfolio1.png",
        url: "https://github.com/juancamilorivas/deliveroo-clone"
    },
    {
        name: "Pokedex",
        description: "This amazing project was developed fetching the official Pokemon API on a React native Expo app, useContext Hooks, Lodash and Formik as tecnologies. Through a fake user you can add and catch all your favorite pokemon, it works on Android and IOS.",
        image: "portfolio2.png",
        url: "https://github.com/juancamilorivas/pokedex"
    },
    {
        name: "Uber 2.0",
        description: "Created with Expo and Javascript. This app renders an Uber 2.0 clone that uses technology as Redux to manage the state and Google Autocomplete to show in a map options like distance and travel time",
        image: "portfolio3.png",
        url: "https://github.com/juancamilorivas/uber-clone"
    },
    {
        name: "Cards presentation",
        description: "This repository features a React.js project for building a responsive card layout using Bootstrap. It's a great reference for developers looking to learn how to create dynamic UI components and apply basic interactivity in React.js, styled with Bootstrap. Use it to quickly get started on your own responsive web applications.",
        image: "portfolio4.png",
        url: "https://github.com/juancamilorivas/react-cards-bootstrap"
    },
    {
        name: "To-Do List",
        description: "This repository showcases a simple CRUD web application built with Express.js and MongoDB. It's a great starting point for learning how to create a RESTful API, connect to a database, and perform CRUD operations. Use it as a reference for your own projects or to get up and running quickly.",
        image: "portfolio5.png",
        url: "https://github.com/juancamilorivas/express-mongodb-crud"
    },
    {
        name: "Web Batatabit",
        description: "Cover the principles of mobile-first design, as well as practical implementation techniques, including CSS. The repository includes code examples, resources, and projects, making it an excellent starting point for developers looking to create web designs optimized for mobile devices.",
        image: "portfolio6.png",
        url: "https://github.com/juancamilorivas/CursoMobileFirst"
    }, 
];

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./pages/index.js




const Index = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-md-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "card card-body bg-secondary text-light",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "Camilo.png",
                                        alt: "",
                                        className: "img-fluid"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "col-md-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Camilo Rivas"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Software Developer"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "I'm a software engineer who constantly seeks out innovative solutions to everyday problems. In my three years in this industry, I've honed my analytical thinking and collaboration skills, and I love working with a team"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://www.linkedin.com/in/juan-camilo-rivas-molina-a079291b1/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "font-weight-bold",
                                                children: "LinkedIn"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row py-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card bg-light",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card-body",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "Skills"
                                    }),
                                    skills.map(({ skill , percentage  }, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "py-3",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                    children: [
                                                        skill,
                                                        " ",
                                                        percentage,
                                                        "%"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "progress ",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "progress-bar",
                                                        role: "progressbar",
                                                        style: {
                                                            width: `${percentage}%`
                                                        },
                                                        "aria-valuenow": "50",
                                                        "aria-valuemin": "0",
                                                        "aria-valuemax": "100"
                                                    })
                                                })
                                            ]
                                        }, i)
                                    )
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-md-8",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "card bg-light",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "card-body",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: "Experience"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: experiences.map(({ title , description , from , to  }, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        children: title
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h5", {
                                                        children: [
                                                            from,
                                                            "-",
                                                            to
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: description
                                                    })
                                                ]
                                            }, i)
                                        )
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-md-12",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "card card-body bg-dark",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-12",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-center text-light",
                                            children: "Portafolio"
                                        })
                                    }),
                                    projects.map(({ name , description , image , url  }, i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: `${url}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-4 p-2 ",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "card h-100",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "overflow",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: `/${image}`,
                                                                alt: "Pokemon app",
                                                                className: "card-img-top"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "card-body",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "font-weight-normal text-secondary",
                                                                    children: name
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: description
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: url,
                                                                    className: "overflow",
                                                                    children: "Know more"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, i)
                                    )
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center mt-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://github.com/juancamilorivas?tab=repositories",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "btn btn-outline-light",
                                        children: "More projects"
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    })
;
/* harmony default export */ const pages = (Index);


/***/ }),

/***/ 281:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,225], () => (__webpack_exec__(904)));
module.exports = __webpack_exports__;

})();