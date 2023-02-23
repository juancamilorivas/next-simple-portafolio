"use strict";
exports.id = 225;
exports.ids = [225];
exports.modules = {

/***/ 225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Navbar.js


const Navbar = ()=>/*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-expand-lg navbar-dark bg-dark ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "navbar-brand",
                        children: "Start"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#navbarNav",
                    "aria-controls": "navbarNav",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "navbar-toggler-icon"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarNav",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navbar-nav ml-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/github",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "GitHub"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    })
;
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(808);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(281);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/Layout.js






//Here in Layout yu=ou can put anything you want and it will appear in all pages!
const Layout = ({ children , title , footer =true , dark =false  })=>{
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            console.log(url);
            external_nprogress_default().start();
        };
        router.events.on("routeChangeStart", handleRouteChange);
        router.events.on("routeChangeComplete", ()=>external_nprogress_default().done()
        );
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()({
            "bg-dark": dark,
            "bg-light": !dark
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "container py-4",
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: external_classnames_default()("text-center", {
                            "text-light": dark
                        }),
                        children: title
                    }),
                    children
                ]
            }),
            footer && /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "bg-dark text-light text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container p-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "\xa9 Camilo Rivas"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "2000 - ",
                                new Date().getFullYear()
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "All rights reserved"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;