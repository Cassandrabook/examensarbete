(() => {
  var e,
    t = {
      2258: (e, t, o) => {
        "use strict";
        o.r(t);
        var r = o(9196),
          c = o(5736),
          n = o(3849),
          s = o.n(n);
        const a = window.wp.blockEditor;
        var i = o(444);
        const l = (0, r.createElement)(
          i.SVG,
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          (0, r.createElement)("path", { fill: "none", d: "M0 0h24v24H0V0z" }),
          (0, r.createElement)("path", {
            d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
          })
        );
        var m = o(2911);
        const u = window.wp.blocks;
        var d = o(7708),
          p = o(9307);
        const _ = window.wc.wcSettings;
        var h, g, w, k, E, y, b, v, f, C;
        const S = (0, _.getSetting)("wcBlocksConfig", {
            buildPhase: 1,
            pluginUrl: "",
            productCount: 0,
            defaultAvatar: "",
            restApiRoutes: {},
            wordCountType: "words",
          }),
          N = S.pluginUrl + "assets/images/",
          P = (S.pluginUrl, S.buildPhase),
          x =
            null === (h = _.STORE_PAGES.shop) || void 0 === h
              ? void 0
              : h.permalink,
          R =
            null === (g = _.STORE_PAGES.checkout) || void 0 === g
              ? void 0
              : g.id,
          T =
            (null === (w = _.STORE_PAGES.checkout) ||
              void 0 === w ||
              w.permalink,
            null === (k = _.STORE_PAGES.privacy) || void 0 === k || k.permalink,
            null === (E = _.STORE_PAGES.privacy) || void 0 === E || E.title,
            null === (y = _.STORE_PAGES.terms) || void 0 === y || y.permalink,
            null === (b = _.STORE_PAGES.terms) || void 0 === b || b.title,
            null === (v = _.STORE_PAGES.cart) || void 0 === v ? void 0 : v.id),
          I =
            null === (f = _.STORE_PAGES.cart) || void 0 === f
              ? void 0
              : f.permalink,
          A =
            (null !== (C = _.STORE_PAGES.myaccount) &&
            void 0 !== C &&
            C.permalink
              ? _.STORE_PAGES.myaccount.permalink
              : (0, _.getSetting)("wpLoginUrl", "/wp-login.php"),
            (0, _.getSetting)("localPickupEnabled", !1)),
          B = (0, _.getSetting)("countries", {}),
          M = (0, _.getSetting)("countryData", {}),
          O = Object.fromEntries(
            Object.keys(M)
              .filter((e) => !0 === M[e].allowBilling)
              .map((e) => [e, B[e] || ""])
          ),
          D = Object.fromEntries(
            Object.keys(M)
              .filter((e) => !0 === M[e].allowBilling)
              .map((e) => [e, M[e].states || []])
          ),
          L = Object.fromEntries(
            Object.keys(M)
              .filter((e) => !0 === M[e].allowShipping)
              .map((e) => [e, B[e] || ""])
          ),
          F = Object.fromEntries(
            Object.keys(M)
              .filter((e) => !0 === M[e].allowShipping)
              .map((e) => [e, M[e].states || []])
          ),
          V = Object.fromEntries(
            Object.keys(M).map((e) => [e, M[e].locale || []])
          ),
          Y = {
            address: [
              "first_name",
              "last_name",
              "company",
              "address_1",
              "address_2",
              "city",
              "postcode",
              "country",
              "state",
              "phone",
            ],
            contact: ["email"],
            additional: [],
          },
          $ = (0, _.getSetting)("addressFieldsLocations", Y).address,
          U =
            ((0, _.getSetting)("addressFieldsLocations", Y).contact,
            (0, _.getSetting)("addressFieldsLocations", Y).additional,
            () => P > 1),
          j = ({
            imageUrl: e = `${N}/block-error.svg`,
            header: t = (0, c.__)("Oops!", "woocommerce"),
            text: o = (0, c.__)(
              "There was an error loading the content.",
              "woocommerce"
            ),
            errorMessage: n,
            errorMessagePrefix: s = (0, c.__)("Error:", "woocommerce"),
            button: a,
            showErrorBlock: i = !0,
          }) =>
            i
              ? (0, r.createElement)(
                  "div",
                  { className: "wc-block-error wc-block-components-error" },
                  e &&
                    (0, r.createElement)("img", {
                      className:
                        "wc-block-error__image wc-block-components-error__image",
                      src: e,
                      alt: "",
                    }),
                  (0, r.createElement)(
                    "div",
                    {
                      className:
                        "wc-block-error__content wc-block-components-error__content",
                    },
                    t &&
                      (0, r.createElement)(
                        "p",
                        {
                          className:
                            "wc-block-error__header wc-block-components-error__header",
                        },
                        t
                      ),
                    o &&
                      (0, r.createElement)(
                        "p",
                        {
                          className:
                            "wc-block-error__text wc-block-components-error__text",
                        },
                        o
                      ),
                    n &&
                      (0, r.createElement)(
                        "p",
                        {
                          className:
                            "wc-block-error__message wc-block-components-error__message",
                        },
                        s ? s + " " : "",
                        n
                      ),
                    a &&
                      (0, r.createElement)(
                        "p",
                        {
                          className:
                            "wc-block-error__button wc-block-components-error__button",
                        },
                        a
                      )
                  )
                )
              : null;
        o(8406);
        class z extends p.Component {
          constructor(...e) {
            super(...e),
              (0, d.Z)(this, "state", { errorMessage: "", hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return void 0 !== e.statusText && void 0 !== e.status
              ? {
                  errorMessage: (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)("strong", null, e.status),
                    ": ",
                    e.statusText
                  ),
                  hasError: !0,
                }
              : { errorMessage: e.message, hasError: !0 };
          }
          render() {
            const {
                header: e,
                imageUrl: t,
                showErrorMessage: o = !0,
                showErrorBlock: c = !0,
                text: n,
                errorMessagePrefix: s,
                renderError: a,
                button: i,
              } = this.props,
              { errorMessage: l, hasError: m } = this.state;
            return m
              ? "function" == typeof a
                ? a({ errorMessage: l })
                : (0, r.createElement)(j, {
                    showErrorBlock: c,
                    errorMessage: o ? l : null,
                    header: e,
                    imageUrl: t,
                    text: n,
                    errorMessagePrefix: s,
                    button: i,
                  })
              : this.props.children;
          }
        }
        const K = z,
          H = window.wp.data,
          q = (0, p.createContext)({
            isEditor: !1,
            currentPostId: 0,
            currentView: "",
            previewData: {},
            getPreviewData: () => ({}),
          }),
          Z = () => (0, p.useContext)(q),
          W = ({
            children: e,
            currentPostId: t = 0,
            previewData: o = {},
            currentView: c = "",
            isPreview: n = !1,
          }) => {
            const s = (0, H.useSelect)(
                (e) => t || e("core/editor").getCurrentPostId(),
                [t]
              ),
              a = (0, p.useCallback)((e) => (o && e in o ? o[e] : {}), [o]),
              i = {
                isEditor: !0,
                currentPostId: s,
                currentView: c,
                previewData: o,
                getPreviewData: a,
                isPreview: n,
              };
            return (0, r.createElement)(q.Provider, { value: i }, e);
          },
          G = window.wp.plugins,
          Q = window.wc.wcBlocksData;
        var X = o(7180),
          J = o.n(X);
        let ee = (function (e) {
          return (
            (e.ADD_EVENT_CALLBACK = "add_event_callback"),
            (e.REMOVE_EVENT_CALLBACK = "remove_event_callback"),
            e
          );
        })({});
        const te = {},
          oe = (
            e = te,
            { type: t, eventType: o, id: r, callback: c, priority: n }
          ) => {
            const s = e.hasOwnProperty(o) ? new Map(e[o]) : new Map();
            switch (t) {
              case ee.ADD_EVENT_CALLBACK:
                return s.set(r, { priority: n, callback: c }), { ...e, [o]: s };
              case ee.REMOVE_EVENT_CALLBACK:
                return s.delete(r), { ...e, [o]: s };
            }
          },
          re =
            (e, t) =>
            (o, r = 10) => {
              const c = ((e, t, o = 10) => ({
                id: Math.floor(Math.random() * Date.now()).toString(),
                type: ee.ADD_EVENT_CALLBACK,
                eventType: e,
                callback: t,
                priority: o,
              }))(e, o, r);
              return (
                t(c),
                () => {
                  var o;
                  t(
                    ((o = e),
                    { id: c.id, type: ee.REMOVE_EVENT_CALLBACK, eventType: o })
                  );
                }
              );
            },
          ce = (0, p.createContext)({
            onPaymentProcessing: () => () => () => {},
            onPaymentSetup: () => () => () => {},
          }),
          ne = ({ children: e }) => {
            const {
                isProcessing: t,
                isIdle: o,
                isCalculating: c,
                hasError: n,
              } = (0, H.useSelect)((e) => {
                const t = e(Q.CHECKOUT_STORE_KEY);
                return {
                  isProcessing: t.isProcessing(),
                  isIdle: t.isIdle(),
                  hasError: t.hasError(),
                  isCalculating: t.isCalculating(),
                };
              }),
              { isPaymentReady: s } = (0, H.useSelect)((e) => {
                const t = e(Q.PAYMENT_STORE_KEY);
                return {
                  isPaymentProcessing: t.isPaymentProcessing(),
                  isPaymentReady: t.isPaymentReady(),
                };
              }),
              { setValidationErrors: a } = (0, H.useDispatch)(
                Q.VALIDATION_STORE_KEY
              ),
              [i, l] = (0, p.useReducer)(oe, {}),
              { onPaymentSetup: m } = ((e) =>
                (0, p.useMemo)(
                  () => ({ onPaymentSetup: re("payment_setup", e) }),
                  [e]
                ))(l),
              u = (0, p.useRef)(i);
            (0, p.useEffect)(() => {
              u.current = i;
            }, [i]);
            const {
              __internalSetPaymentProcessing: d,
              __internalSetPaymentIdle: _,
              __internalEmitPaymentProcessingEvent: h,
            } = (0, H.useDispatch)(Q.PAYMENT_STORE_KEY);
            (0, p.useEffect)(() => {
              !t || n || c || (d(), h(u.current, a));
            }, [t, n, c, d, h, a]),
              (0, p.useEffect)(() => {
                o && !s && _();
              }, [o, s, _]),
              (0, p.useEffect)(() => {
                n && s && _();
              }, [n, s, _]);
            const g = {
              onPaymentProcessing: (0, p.useMemo)(
                () =>
                  function (...e) {
                    return (
                      J()("onPaymentProcessing", {
                        alternative: "onPaymentSetup",
                        plugin: "WooCommerce Blocks",
                      }),
                      m(...e)
                    );
                  },
                [m]
              ),
              onPaymentSetup: m,
            };
            return (0, r.createElement)(ce.Provider, { value: g }, e);
          },
          se = {
            NONE: "none",
            INVALID_ADDRESS: "invalid_address",
            UNKNOWN: "unknown_error",
          },
          ae = {
            INVALID_COUNTRY:
              "woocommerce_rest_cart_shipping_rates_invalid_country",
            MISSING_COUNTRY:
              "woocommerce_rest_cart_shipping_rates_missing_country",
            INVALID_STATE: "woocommerce_rest_cart_shipping_rates_invalid_state",
          },
          ie = {
            shippingErrorStatus: {
              isPristine: !0,
              isValid: !1,
              hasInvalidAddress: !1,
              hasError: !1,
            },
            dispatchErrorStatus: (e) => e,
            shippingErrorTypes: se,
            onShippingRateSuccess: () => () => {},
            onShippingRateFail: () => () => {},
            onShippingRateSelectSuccess: () => () => {},
            onShippingRateSelectFail: () => () => {},
          },
          le = (e, { type: t }) => (Object.values(se).includes(t) ? t : e),
          me = "shipping_rates_success",
          ue = "shipping_rates_fail",
          de = "shipping_rate_select_success",
          pe = "shipping_rate_select_fail",
          _e = (e) => ({
            onSuccess: re(me, e),
            onFail: re(ue, e),
            onSelectSuccess: re(de, e),
            onSelectFail: re(pe, e),
          });
        let he = (function (e) {
            return (
              (e.SUCCESS = "success"),
              (e.FAIL = "failure"),
              (e.ERROR = "error"),
              e
            );
          })({}),
          ge = (function (e) {
            return (
              (e.CART = "wc/cart"),
              (e.CHECKOUT = "wc/checkout"),
              (e.PAYMENTS = "wc/checkout/payments"),
              (e.EXPRESS_PAYMENTS = "wc/checkout/express-payments"),
              (e.CONTACT_INFORMATION = "wc/checkout/contact-information"),
              (e.SHIPPING_ADDRESS = "wc/checkout/shipping-address"),
              (e.BILLING_ADDRESS = "wc/checkout/billing-address"),
              (e.SHIPPING_METHODS = "wc/checkout/shipping-methods"),
              (e.CHECKOUT_ACTIONS = "wc/checkout/checkout-actions"),
              e
            );
          })({});
        const we = async (e, t, o) => {
          const r = ((e, t) =>
              e[t]
                ? Array.from(e[t].values()).sort(
                    (e, t) => e.priority - t.priority
                  )
                : [])(e, t),
            c = [];
          for (const e of r)
            try {
              const t = await Promise.resolve(e.callback(o));
              "object" == typeof t && c.push(t);
            } catch (e) {
              console.error(e);
            }
          return !c.length || c;
        };
        var ke = o(9262),
          Ee = o.n(ke);
        const ye = window.wp.htmlEntities,
          be = (e) => "number" == typeof e,
          ve = (e) => "string" == typeof e,
          fe = (e) => {
            const t = {};
            return (
              void 0 !== e.label && (t.label = e.label),
              void 0 !== e.required && (t.required = e.required),
              void 0 !== e.hidden && (t.hidden = e.hidden),
              void 0 === e.label ||
                e.optionalLabel ||
                (t.optionalLabel = (0, c.sprintf)(
                  /* translators: %s Field label. */ /* translators: %s Field label. */
                  (0, c.__)("%s (optional)", "woocommerce"),
                  e.label
                )),
              e.priority &&
                (be(e.priority) && (t.index = e.priority),
                ve(e.priority) && (t.index = parseInt(e.priority, 10))),
              e.hidden && (t.required = !1),
              t
            );
          },
          Ce = Object.entries(V)
            .map(([e, t]) => [
              e,
              Object.entries(t)
                .map(([e, t]) => [e, fe(t)])
                .reduce((e, [t, o]) => ((e[t] = o), e), {}),
            ])
            .reduce((e, [t, o]) => ((e[t] = o), e), {}),
          Se = (e, t, o = "") => {
            const r = o && void 0 !== Ce[o] ? Ce[o] : {};
            return e
              .map((e) => ({
                key: e,
                ...(_.defaultFields[e] || {}),
                ...(r[e] || {}),
                ...(t[e] || {}),
              }))
              .sort((e, t) => e.index - t.index);
          },
          Ne = window.wp.url,
          Pe = (e, t) => e in t,
          xe = (e) => {
            const t = Se($, {}, e.country),
              o = Object.assign({}, e);
            return (
              t.forEach(({ key: t = "", hidden: r = !1 }) => {
                r && Pe(t, e) && (o[t] = "");
              }),
              o
            );
          },
          Re = (e) => {
            if (0 === Object.values(e).length) return null;
            const t =
                "string" == typeof L[e.country]
                  ? (0, ye.decodeEntities)(L[e.country])
                  : "",
              o =
                "object" == typeof F[e.country] &&
                "string" == typeof F[e.country][e.state]
                  ? (0, ye.decodeEntities)(F[e.country][e.state])
                  : e.state,
              r = [];
            r.push(e.postcode.toUpperCase()),
              r.push(e.city),
              r.push(o),
              r.push(t);
            return r.filter(Boolean).join(", ") || null;
          },
          Te = window.CustomEvent || null,
          Ie = (e, t, o = !1, r = !1) => {
            if ("function" != typeof jQuery) return () => {};
            const c = () => {
              ((
                e,
                {
                  bubbles: t = !1,
                  cancelable: o = !1,
                  element: r,
                  detail: c = {},
                }
              ) => {
                if (!Te) return;
                r || (r = document.body);
                const n = new Te(e, { bubbles: t, cancelable: o, detail: c });
                r.dispatchEvent(n);
              })(t, { bubbles: o, cancelable: r });
            };
            return jQuery(document).on(e, c), () => jQuery(document).off(e, c);
          },
          Ae = (e) => {
            const t = null == e ? void 0 : e.detail;
            (t && t.preserveCartData) ||
              (0, H.dispatch)(Q.CART_STORE_KEY).invalidateResolutionForStore();
          },
          Be = (e) => {
            ((null != e && e.persisted) ||
              "back_forward" ===
                (window.performance &&
                window.performance.getEntriesByType("navigation").length
                  ? window.performance.getEntriesByType("navigation")[0].type
                  : "")) &&
              (0, H.dispatch)(Q.CART_STORE_KEY).invalidateResolutionForStore();
          },
          Me = () => {
            1 === window.wcBlocksStoreCartListeners.count &&
              window.wcBlocksStoreCartListeners.remove(),
              window.wcBlocksStoreCartListeners.count--;
          },
          Oe = {
            first_name: "",
            last_name: "",
            company: "",
            address_1: "",
            address_2: "",
            city: "",
            state: "",
            postcode: "",
            country: "",
            phone: "",
          },
          De = { ...Oe, email: "" },
          Le = {
            total_items: "",
            total_items_tax: "",
            total_fees: "",
            total_fees_tax: "",
            total_discount: "",
            total_discount_tax: "",
            total_shipping: "",
            total_shipping_tax: "",
            total_price: "",
            total_tax: "",
            tax_lines: Q.EMPTY_TAX_LINES,
            currency_code: "",
            currency_symbol: "",
            currency_minor_unit: 2,
            currency_decimal_separator: "",
            currency_thousand_separator: "",
            currency_prefix: "",
            currency_suffix: "",
          },
          Fe = (e) =>
            Object.fromEntries(
              Object.entries(e).map(([e, t]) => [e, (0, ye.decodeEntities)(t)])
            ),
          Ve = {
            cartCoupons: Q.EMPTY_CART_COUPONS,
            cartItems: Q.EMPTY_CART_ITEMS,
            cartFees: Q.EMPTY_CART_FEES,
            cartItemsCount: 0,
            cartItemsWeight: 0,
            crossSellsProducts: Q.EMPTY_CART_CROSS_SELLS,
            cartNeedsPayment: !0,
            cartNeedsShipping: !0,
            cartItemErrors: Q.EMPTY_CART_ITEM_ERRORS,
            cartTotals: Le,
            cartIsLoading: !0,
            cartErrors: Q.EMPTY_CART_ERRORS,
            billingAddress: De,
            shippingAddress: Oe,
            shippingRates: Q.EMPTY_SHIPPING_RATES,
            isLoadingRates: !1,
            cartHasCalculatedShipping: !1,
            paymentMethods: Q.EMPTY_PAYMENT_METHODS,
            paymentRequirements: Q.EMPTY_PAYMENT_REQUIREMENTS,
            receiveCart: () => {},
            receiveCartContents: () => {},
            extensions: Q.EMPTY_EXTENSIONS,
          },
          Ye = (e = { shouldSelect: !0 }) => {
            const { isEditor: t, previewData: o } = Z(),
              r = null == o ? void 0 : o.previewCart,
              { shouldSelect: c } = e,
              n = (0, p.useRef)();
            (0, p.useEffect)(
              () => (
                (() => {
                  if (
                    (window.wcBlocksStoreCartListeners ||
                      (window.wcBlocksStoreCartListeners = {
                        count: 0,
                        remove: () => {},
                      }),
                    (null === (e = window.wcBlocksStoreCartListeners) ||
                    void 0 === e
                      ? void 0
                      : e.count) > 0)
                  )
                    return void window.wcBlocksStoreCartListeners.count++;
                  var e;
                  document.body.addEventListener("wc-blocks_added_to_cart", Ae),
                    document.body.addEventListener(
                      "wc-blocks_removed_from_cart",
                      Ae
                    ),
                    window.addEventListener("pageshow", Be);
                  const t = Ie("added_to_cart", "wc-blocks_added_to_cart"),
                    o = Ie("removed_from_cart", "wc-blocks_removed_from_cart");
                  (window.wcBlocksStoreCartListeners.count = 1),
                    (window.wcBlocksStoreCartListeners.remove = () => {
                      document.body.removeEventListener(
                        "wc-blocks_added_to_cart",
                        Ae
                      ),
                        document.body.removeEventListener(
                          "wc-blocks_removed_from_cart",
                          Ae
                        ),
                        window.removeEventListener("pageshow", Be),
                        t(),
                        o();
                    });
                })(),
                Me
              ),
              []
            );
            const s = (0, H.useSelect)(
              (e, { dispatch: o }) => {
                if (!c) return Ve;
                if (t)
                  return {
                    cartCoupons: r.coupons,
                    cartItems: r.items,
                    crossSellsProducts: r.cross_sells,
                    cartFees: r.fees,
                    cartItemsCount: r.items_count,
                    cartItemsWeight: r.items_weight,
                    cartNeedsPayment: r.needs_payment,
                    cartNeedsShipping: r.needs_shipping,
                    cartItemErrors: Q.EMPTY_CART_ITEM_ERRORS,
                    cartTotals: r.totals,
                    cartIsLoading: !1,
                    cartErrors: Q.EMPTY_CART_ERRORS,
                    billingData: De,
                    billingAddress: De,
                    shippingAddress: Oe,
                    extensions: Q.EMPTY_EXTENSIONS,
                    shippingRates: r.shipping_rates,
                    isLoadingRates: !1,
                    cartHasCalculatedShipping: r.has_calculated_shipping,
                    paymentRequirements: r.paymentRequirements,
                    receiveCart:
                      "function" == typeof (null == r ? void 0 : r.receiveCart)
                        ? r.receiveCart
                        : () => {},
                    receiveCartContents:
                      "function" ==
                      typeof (null == r ? void 0 : r.receiveCartContents)
                        ? r.receiveCartContents
                        : () => {},
                  };
                const n = e(Q.CART_STORE_KEY),
                  s = n.getCartData(),
                  a = n.getCartErrors(),
                  i = n.getCartTotals(),
                  l = !n.hasFinishedResolution("getCartData"),
                  m = n.isCustomerDataUpdating(),
                  { receiveCart: u, receiveCartContents: d } = o(
                    Q.CART_STORE_KEY
                  ),
                  p = Fe(s.billingAddress),
                  _ = s.needsShipping ? Fe(s.shippingAddress) : p,
                  h =
                    s.fees.length > 0
                      ? s.fees.map((e) => Fe(e))
                      : Q.EMPTY_CART_FEES,
                  g =
                    s.coupons.length > 0
                      ? s.coupons.map((e) => ({ ...e, label: e.code }))
                      : Q.EMPTY_CART_COUPONS;
                return {
                  cartCoupons: g,
                  cartItems: s.items,
                  crossSellsProducts: s.crossSells,
                  cartFees: h,
                  cartItemsCount: s.itemsCount,
                  cartItemsWeight: s.itemsWeight,
                  cartNeedsPayment: s.needsPayment,
                  cartNeedsShipping: s.needsShipping,
                  cartItemErrors: s.errors,
                  cartTotals: i,
                  cartIsLoading: l,
                  cartErrors: a,
                  billingData: xe(p),
                  billingAddress: xe(p),
                  shippingAddress: xe(_),
                  extensions: s.extensions,
                  shippingRates: s.shippingRates,
                  isLoadingRates: m,
                  cartHasCalculatedShipping: s.hasCalculatedShipping,
                  paymentRequirements: s.paymentRequirements,
                  receiveCart: u,
                  receiveCartContents: d,
                };
              },
              [c]
            );
            return (
              (n.current && Ee()(n.current, s)) || (n.current = s), n.current
            );
          },
          $e = (e) =>
            !((e) => null === e)(e) &&
            e instanceof Object &&
            e.constructor === Object;
        function Ue(e, t) {
          return $e(e) && t in e;
        }
        const je = (0, _.getSetting)("collectableMethodIds", []),
          ze = (e) => je.includes(e.method_id),
          Ke = (e) =>
            !!A &&
            (Array.isArray(e)
              ? !!e.find((e) => je.includes(e))
              : je.includes(e));
        var He = o(9127),
          qe = o.n(He);
        const Ze = [
            {
              destination: {
                address_1: "",
                address_2: "",
                city: "",
                state: "",
                postcode: "",
                country: "",
              },
              package_id: 0,
              name: (0, c.__)("Shipping", "woocommerce"),
              items: [
                {
                  key: "33e75ff09dd601bbe69f351039152189",
                  name: (0, c._x)(
                    "Beanie with Logo",
                    "example product in Cart Block",
                    "woocommerce"
                  ),
                  quantity: 2,
                },
                {
                  key: "6512bd43d9caa6e02c990b0a82652dca",
                  name: (0, c._x)(
                    "Beanie",
                    "example product in Cart Block",
                    "woocommerce"
                  ),
                  quantity: 1,
                },
              ],
              shipping_rates: [
                {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  name: (0, c.__)("Flat rate shipping", "woocommerce"),
                  description: "",
                  delivery_time: "",
                  price: "500",
                  taxes: "0",
                  rate_id: "flat_rate:0",
                  instance_id: 0,
                  meta_data: [],
                  method_id: "flat_rate",
                  selected: !0,
                },
                {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  name: (0, c.__)("Free shipping", "woocommerce"),
                  description: "",
                  delivery_time: "",
                  price: "0",
                  taxes: "0",
                  rate_id: "free_shipping:1",
                  instance_id: 0,
                  meta_data: [],
                  method_id: "flat_rate",
                  selected: !1,
                },
                {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  name: (0, c.__)("Local pickup", "woocommerce"),
                  description: "",
                  delivery_time: "",
                  price: "0",
                  taxes: "0",
                  rate_id: "pickup_location:1",
                  instance_id: 1,
                  meta_data: [
                    { key: "pickup_location", value: "New York" },
                    {
                      key: "pickup_address",
                      value: "123 Easy Street, New York, 12345",
                    },
                  ],
                  method_id: "pickup_location",
                  selected: !1,
                },
                {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  name: (0, c.__)("Local pickup", "woocommerce"),
                  description: "",
                  delivery_time: "",
                  price: "0",
                  taxes: "0",
                  rate_id: "pickup_location:2",
                  instance_id: 1,
                  meta_data: [
                    { key: "pickup_location", value: "Los Angeles" },
                    {
                      key: "pickup_address",
                      value: "123 Easy Street, Los Angeles, California, 90210",
                    },
                  ],
                  method_id: "pickup_location",
                  selected: !1,
                },
              ],
            },
          ],
          We = (0, _.getSetting)("displayCartPricesIncludingTax", !1),
          Ge = {
            coupons: [],
            shipping_rates:
              (0, _.getSetting)("shippingMethodsExist", !1) ||
              (0, _.getSetting)("localPickupEnabled", !1)
                ? Ze
                : [],
            items: [
              {
                key: "1",
                id: 1,
                type: "simple",
                quantity: 2,
                catalog_visibility: "visible",
                name: (0, c.__)("Beanie", "woocommerce"),
                summary: (0, c.__)("Beanie", "woocommerce"),
                short_description: (0, c.__)(
                  "Warm hat for winter",
                  "woocommerce"
                ),
                description:
                  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                sku: "woo-beanie",
                permalink: "https://example.org",
                low_stock_remaining: 2,
                backorders_allowed: !1,
                show_backorder_badge: !1,
                sold_individually: !1,
                quantity_limits: {
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                  editable: !0,
                },
                images: [
                  {
                    id: 10,
                    src: N + "previews/beanie.jpg",
                    thumbnail: N + "previews/beanie.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                variation: [
                  {
                    attribute: (0, c.__)("Color", "woocommerce"),
                    value: (0, c.__)("Yellow", "woocommerce"),
                  },
                  {
                    attribute: (0, c.__)("Size", "woocommerce"),
                    value: (0, c.__)("Small", "woocommerce"),
                  },
                ],
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: We ? "12000" : "10000",
                  regular_price: We ? "12000" : "10000",
                  sale_price: We ? "12000" : "10000",
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: We ? "12000000" : "10000000",
                    regular_price: We ? "12000000" : "10000000",
                    sale_price: We ? "12000000" : "10000000",
                  },
                },
                totals: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  line_subtotal: "2000",
                  line_subtotal_tax: "400",
                  line_total: "2000",
                  line_total_tax: "400",
                },
                extensions: {},
                item_data: [],
              },
              {
                key: "2",
                id: 2,
                type: "simple",
                quantity: 1,
                catalog_visibility: "visible",
                name: (0, c.__)("Cap", "woocommerce"),
                summary: (0, c.__)("Cap", "woocommerce"),
                short_description: (0, c.__)(
                  "Lightweight baseball cap",
                  "woocommerce"
                ),
                description:
                  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
                sku: "woo-cap",
                low_stock_remaining: null,
                permalink: "https://example.org",
                backorders_allowed: !1,
                show_backorder_badge: !1,
                sold_individually: !1,
                quantity_limits: {
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                  editable: !0,
                },
                images: [
                  {
                    id: 11,
                    src: N + "previews/cap.jpg",
                    thumbnail: N + "previews/cap.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                variation: [
                  {
                    attribute: (0, c.__)("Color", "woocommerce"),
                    value: (0, c.__)("Orange", "woocommerce"),
                  },
                ],
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: We ? "2400" : "2000",
                  regular_price: We ? "2400" : "2000",
                  sale_price: We ? "2400" : "2000",
                  price_range: null,
                  raw_prices: {
                    precision: 6,
                    price: We ? "24000000" : "20000000",
                    regular_price: We ? "24000000" : "20000000",
                    sale_price: We ? "24000000" : "20000000",
                  },
                },
                totals: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  line_subtotal: "2000",
                  line_subtotal_tax: "400",
                  line_total: "2000",
                  line_total_tax: "400",
                },
                extensions: {},
                item_data: [],
              },
            ],
            cross_sells: [
              {
                id: 1,
                name: (0, c.__)("Polo", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-polo",
                short_description: (0, c.__)("Polo", "woocommerce"),
                description: (0, c.__)("Polo", "woocommerce"),
                on_sale: !1,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: We ? "24000" : "20000",
                  regular_price: We ? "24000" : "20000",
                  sale_price: We ? "12000" : "10000",
                  price_range: null,
                },
                price_html: "",
                average_rating: "4.5",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: N + "previews/polo.jpg",
                    thumbnail: N + "previews/polo.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: "",
                  description: "",
                  url: "",
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 2,
                name: (0, c.__)("Long Sleeve Tee", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-long-sleeve-tee",
                short_description: (0, c.__)("Long Sleeve Tee", "woocommerce"),
                description: (0, c.__)("Long Sleeve Tee", "woocommerce"),
                on_sale: !1,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: We ? "30000" : "25000",
                  regular_price: We ? "30000" : "25000",
                  sale_price: We ? "30000" : "25000",
                  price_range: null,
                },
                price_html: "",
                average_rating: "4",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: N + "previews/long-sleeve-tee.jpg",
                    thumbnail: N + "previews/long-sleeve-tee.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: "",
                  description: "",
                  url: "",
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 3,
                name: (0, c.__)("Hoodie with Zipper", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-hoodie-with-zipper",
                short_description: (0, c.__)(
                  "Hoodie with Zipper",
                  "woocommerce"
                ),
                description: (0, c.__)("Hoodie with Zipper", "woocommerce"),
                on_sale: !0,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: We ? "15000" : "12500",
                  regular_price: We ? "30000" : "25000",
                  sale_price: We ? "15000" : "12500",
                  price_range: null,
                },
                price_html: "",
                average_rating: "1",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: N + "previews/hoodie-with-zipper.jpg",
                    thumbnail: N + "previews/hoodie-with-zipper.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: "",
                  description: "",
                  url: "",
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 4,
                name: (0, c.__)("Hoodie with Logo", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-hoodie-with-logo",
                short_description: (0, c.__)("Polo", "woocommerce"),
                description: (0, c.__)("Polo", "woocommerce"),
                on_sale: !1,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: We ? "4500" : "4250",
                  regular_price: We ? "4500" : "4250",
                  sale_price: We ? "4500" : "4250",
                  price_range: null,
                },
                price_html: "",
                average_rating: "5",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: N + "previews/hoodie-with-logo.jpg",
                    thumbnail: N + "previews/hoodie-with-logo.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: "",
                  description: "",
                  url: "",
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 5,
                name: (0, c.__)("Hoodie with Pocket", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-hoodie-with-pocket",
                short_description: (0, c.__)(
                  "Hoodie with Pocket",
                  "woocommerce"
                ),
                description: (0, c.__)("Hoodie with Pocket", "woocommerce"),
                on_sale: !0,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: We ? "3500" : "3250",
                  regular_price: We ? "4500" : "4250",
                  sale_price: We ? "3500" : "3250",
                  price_range: null,
                },
                price_html: "",
                average_rating: "3.75",
                review_count: 4,
                images: [
                  {
                    id: 17,
                    src: N + "previews/hoodie-with-pocket.jpg",
                    thumbnail: N + "previews/hoodie-with-pocket.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: "",
                  description: "",
                  url: "",
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
              {
                id: 6,
                name: (0, c.__)("T-Shirt", "woocommerce"),
                parent: 0,
                type: "simple",
                variation: "",
                permalink: "https://example.org",
                sku: "woo-t-shirt",
                short_description: (0, c.__)("T-Shirt", "woocommerce"),
                description: (0, c.__)("T-Shirt", "woocommerce"),
                on_sale: !1,
                prices: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  price: We ? "1800" : "1500",
                  regular_price: We ? "1800" : "1500",
                  sale_price: We ? "1800" : "1500",
                  price_range: null,
                },
                price_html: "",
                average_rating: "3",
                review_count: 2,
                images: [
                  {
                    id: 17,
                    src: N + "previews/tshirt.jpg",
                    thumbnail: N + "previews/tshirt.jpg",
                    srcset: "",
                    sizes: "",
                    name: "",
                    alt: "",
                  },
                ],
                categories: [],
                tags: [],
                attributes: [],
                variations: [],
                has_options: !1,
                is_purchasable: !0,
                is_in_stock: !0,
                is_on_backorder: !1,
                low_stock_remaining: null,
                sold_individually: !1,
                add_to_cart: {
                  text: "",
                  description: "",
                  url: "",
                  minimum: 1,
                  maximum: 99,
                  multiple_of: 1,
                },
              },
            ],
            fees: [
              {
                id: "fee",
                name: (0, c.__)("Fee", "woocommerce"),
                totals: {
                  currency_code: "USD",
                  currency_symbol: "$",
                  currency_minor_unit: 2,
                  currency_decimal_separator: ".",
                  currency_thousand_separator: ",",
                  currency_prefix: "$",
                  currency_suffix: "",
                  total: "100",
                  total_tax: "20",
                },
              },
            ],
            items_count: 3,
            items_weight: 0,
            needs_payment: !0,
            needs_shipping: (0, _.getSetting)("shippingEnabled", !0),
            has_calculated_shipping: !0,
            shipping_address: {
              first_name: "",
              last_name: "",
              company: "",
              address_1: "",
              address_2: "",
              city: "",
              state: "",
              postcode: "",
              country: "",
              phone: "",
            },
            billing_address: {
              first_name: "",
              last_name: "",
              company: "",
              address_1: "",
              address_2: "",
              city: "",
              state: "",
              postcode: "",
              country: "",
              email: "",
              phone: "",
            },
            totals: {
              currency_code: "USD",
              currency_symbol: "$",
              currency_minor_unit: 2,
              currency_decimal_separator: ".",
              currency_thousand_separator: ",",
              currency_prefix: "$",
              currency_suffix: "",
              total_items: "4000",
              total_items_tax: "800",
              total_fees: "100",
              total_fees_tax: "20",
              total_discount: "0",
              total_discount_tax: "0",
              total_shipping: "0",
              total_shipping_tax: "0",
              total_tax: "820",
              total_price: "4920",
              tax_lines: [
                {
                  name: (0, c.__)("Sales tax", "woocommerce"),
                  rate: "20%",
                  price: "820",
                },
              ],
            },
            errors: [],
            payment_methods: ["cod", "bacs", "cheque"],
            payment_requirements: ["products"],
            extensions: {},
          },
          Qe = window.wp.hooks,
          Xe = () => ({
            dispatchStoreEvent: (0, p.useCallback)((e, t = {}) => {
              try {
                (0, Qe.doAction)(`experimental__woocommerce_blocks-${e}`, t);
              } catch (e) {
                console.error(e);
              }
            }, []),
            dispatchCheckoutEvent: (0, p.useCallback)((e, t = {}) => {
              try {
                (0, Qe.doAction)(
                  `experimental__woocommerce_blocks-checkout-${e}`,
                  {
                    ...t,
                    storeCart: (0, H.select)("wc/store/cart").getCartData(),
                  }
                );
              } catch (e) {
                console.error(e);
              }
            }, []),
          }),
          Je = () => {
            const {
                shippingRates: e,
                needsShipping: t,
                hasCalculatedShipping: o,
                isLoadingRates: r,
                isCollectable: c,
                isSelectingRate: n,
              } = (0, H.useSelect)((e) => {
                const t = !!e("core/editor"),
                  o = e(Q.CART_STORE_KEY),
                  r = t ? Ge.shipping_rates : o.getShippingRates();
                return {
                  shippingRates: r,
                  needsShipping: t ? Ge.needs_shipping : o.getNeedsShipping(),
                  hasCalculatedShipping: t
                    ? Ge.has_calculated_shipping
                    : o.getHasCalculatedShipping(),
                  isLoadingRates: !t && o.isCustomerDataUpdating(),
                  isCollectable: r.every(({ shipping_rates: e }) =>
                    e.find(({ method_id: e }) => Ke(e))
                  ),
                  isSelectingRate: !t && o.isShippingRateBeingSelected(),
                };
              }),
              s = (0, p.useRef)({});
            (0, p.useEffect)(() => {
              const t = ((e) =>
                Object.fromEntries(
                  e.map(({ package_id: e, shipping_rates: t }) => {
                    var o;
                    return [
                      e,
                      (null === (o = t.find((e) => e.selected)) || void 0 === o
                        ? void 0
                        : o.rate_id) || "",
                    ];
                  })
                ))(e);
              $e(t) && !qe()(s.current, t) && (s.current = t);
            }, [e]);
            const { selectShippingRate: a } = (0, H.useDispatch)(
                Q.CART_STORE_KEY
              ),
              i = Ke(Object.values(s.current).map((e) => e.split(":")[0])),
              { dispatchCheckoutEvent: l } = Xe(),
              m = (0, p.useCallback)(
                (e, t) => {
                  let o;
                  void 0 !== e &&
                    ((o = Ke(e.split(":")[0]) ? a(e, null) : a(e, t)),
                    o
                      .then(() => {
                        l("set-selected-shipping-rate", { shippingRateId: e });
                      })
                      .catch((e) => {
                        (0, Q.processErrorResponse)(e);
                      }));
                },
                [a, l]
              );
            return {
              isSelectingRate: n,
              selectedRates: s.current,
              selectShippingRate: m,
              shippingRates: e,
              needsShipping: t,
              hasCalculatedShipping: o,
              isLoadingRates: r,
              isCollectable: c,
              hasSelectedLocalPickup: i,
            };
          },
          { NONE: et, INVALID_ADDRESS: tt, UNKNOWN: ot } = se,
          rt = (0, p.createContext)(ie),
          ct = () => (0, p.useContext)(rt),
          nt = ({ children: e }) => {
            const {
                __internalIncrementCalculating: t,
                __internalDecrementCalculating: o,
              } = (0, H.useDispatch)(Q.CHECKOUT_STORE_KEY),
              { shippingRates: c, isLoadingRates: n, cartErrors: s } = Ye(),
              { selectedRates: a, isSelectingRate: i } = Je(),
              [l, m] = (0, p.useReducer)(le, et),
              [u, d] = (0, p.useReducer)(oe, {}),
              _ = (0, p.useRef)(u),
              h = (0, p.useMemo)(
                () => ({
                  onShippingRateSuccess: _e(d).onSuccess,
                  onShippingRateFail: _e(d).onFail,
                  onShippingRateSelectSuccess: _e(d).onSelectSuccess,
                  onShippingRateSelectFail: _e(d).onSelectFail,
                }),
                [d]
              );
            (0, p.useEffect)(() => {
              _.current = u;
            }, [u]),
              (0, p.useEffect)(() => {
                n ? t() : o();
              }, [n, t, o]),
              (0, p.useEffect)(() => {
                i ? t() : o();
              }, [t, o, i]),
              (0, p.useEffect)(() => {
                s.length > 0 &&
                s.some((e) => !(!e.code || !Object.values(ae).includes(e.code)))
                  ? m({ type: tt })
                  : m({ type: et });
              }, [s]);
            const g = (0, p.useMemo)(
              () => ({
                isPristine: l === et,
                isValid: l === et,
                hasInvalidAddress: l === tt,
                hasError: l === ot || l === tt,
              }),
              [l]
            );
            (0, p.useEffect)(() => {
              n ||
                (0 !== c.length && !g.hasError) ||
                we(_.current, ue, {
                  hasInvalidAddress: g.hasInvalidAddress,
                  hasError: g.hasError,
                });
            }, [c, n, g.hasError, g.hasInvalidAddress]),
              (0, p.useEffect)(() => {
                !n && c.length > 0 && !g.hasError && we(_.current, me, c);
              }, [c, n, g.hasError]),
              (0, p.useEffect)(() => {
                i ||
                  (g.hasError
                    ? we(_.current, pe, {
                        hasError: g.hasError,
                        hasInvalidAddress: g.hasInvalidAddress,
                      })
                    : we(_.current, de, a.current));
              }, [a, i, g.hasError, g.hasInvalidAddress]);
            const w = {
              shippingErrorStatus: g,
              dispatchErrorStatus: m,
              shippingErrorTypes: se,
              ...h,
            };
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(rt.Provider, { value: w }, e)
            );
          };
        function st(e, t) {
          const o = (0, p.useRef)();
          return (
            (0, p.useEffect)(() => {
              o.current === e || (t && !t(e, o.current)) || (o.current = e);
            }, [e, t]),
            o.current
          );
        }
        const at = {},
          it = {},
          lt = () => at,
          mt = () => it,
          ut = (0, p.createContext)({
            onSubmit: () => {},
            onCheckoutAfterProcessingWithSuccess: () => () => {},
            onCheckoutAfterProcessingWithError: () => () => {},
            onCheckoutBeforeProcessing: () => () => {},
            onCheckoutValidationBeforeProcessing: () => () => {},
            onCheckoutSuccess: () => () => {},
            onCheckoutFail: () => () => {},
            onCheckoutValidation: () => () => {},
          }),
          dt = () => (0, p.useContext)(ut),
          pt = ({ children: e, redirectUrl: t }) => {
            const o = lt(),
              c = mt(),
              { isEditor: n } = Z(),
              { __internalUpdateAvailablePaymentMethods: s } = (0,
              H.useDispatch)(Q.PAYMENT_STORE_KEY);
            (0, p.useEffect)(() => {
              (n ||
                0 !== Object.keys(o).length ||
                0 !== Object.keys(c).length) &&
                s();
            }, [n, o, c, s]);
            const {
                __internalSetRedirectUrl: a,
                __internalEmitValidateEvent: i,
                __internalEmitAfterProcessingEvents: l,
                __internalSetBeforeProcessing: m,
              } = (0, H.useDispatch)(Q.CHECKOUT_STORE_KEY),
              {
                checkoutRedirectUrl: u,
                checkoutStatus: d,
                isCheckoutBeforeProcessing: _,
                isCheckoutAfterProcessing: h,
                checkoutHasError: g,
                checkoutOrderId: w,
                checkoutOrderNotes: k,
                checkoutCustomerId: E,
              } = (0, H.useSelect)((e) => {
                const t = e(Q.CHECKOUT_STORE_KEY);
                return {
                  checkoutRedirectUrl: t.getRedirectUrl(),
                  checkoutStatus: t.getCheckoutStatus(),
                  isCheckoutBeforeProcessing: t.isBeforeProcessing(),
                  isCheckoutAfterProcessing: t.isAfterProcessing(),
                  checkoutHasError: t.hasError(),
                  checkoutOrderId: t.getOrderId(),
                  checkoutOrderNotes: t.getOrderNotes(),
                  checkoutCustomerId: t.getCustomerId(),
                };
              });
            t && t !== u && a(t);
            const { setValidationErrors: y } = (0, H.useDispatch)(
                Q.VALIDATION_STORE_KEY
              ),
              { dispatchCheckoutEvent: b } = Xe(),
              {
                checkoutNotices: v,
                paymentNotices: f,
                expressPaymentNotices: C,
              } = (0, H.useSelect)((e) => {
                const { getNotices: t } = e("core/notices");
                return {
                  checkoutNotices: Object.values(ge)
                    .filter(
                      (e) => e !== ge.PAYMENTS && e !== ge.EXPRESS_PAYMENTS
                    )
                    .reduce((e, o) => [...e, ...t(o)], []),
                  paymentNotices: t(ge.PAYMENTS),
                  expressPaymentNotices: t(ge.EXPRESS_PAYMENTS),
                };
              }, []),
              [S, N] = (0, p.useReducer)(oe, {}),
              P = (0, p.useRef)(S),
              {
                onCheckoutValidation: x,
                onCheckoutSuccess: R,
                onCheckoutFail: T,
              } = ((e) =>
                (0, p.useMemo)(
                  () => ({
                    onCheckoutSuccess: re("checkout_success", e),
                    onCheckoutFail: re("checkout_fail", e),
                    onCheckoutValidation: re("checkout_validation", e),
                  }),
                  [e]
                ))(N);
            (0, p.useEffect)(() => {
              P.current = S;
            }, [S]);
            const I = (0, p.useMemo)(
                () =>
                  function (...e) {
                    return (
                      J()("onCheckoutBeforeProcessing", {
                        alternative: "onCheckoutValidation",
                        plugin: "WooCommerce Blocks",
                      }),
                      x(...e)
                    );
                  },
                [x]
              ),
              A = (0, p.useMemo)(
                () =>
                  function (...e) {
                    return (
                      J()("onCheckoutValidationBeforeProcessing", {
                        since: "9.7.0",
                        alternative: "onCheckoutValidation",
                        plugin: "WooCommerce Blocks",
                        link: "https://github.com/woocommerce/woocommerce-blocks/pull/8381",
                      }),
                      x(...e)
                    );
                  },
                [x]
              ),
              B = (0, p.useMemo)(
                () =>
                  function (...e) {
                    return (
                      J()("onCheckoutAfterProcessingWithSuccess", {
                        since: "9.7.0",
                        alternative: "onCheckoutSuccess",
                        plugin: "WooCommerce Blocks",
                        link: "https://github.com/woocommerce/woocommerce-blocks/pull/8381",
                      }),
                      R(...e)
                    );
                  },
                [R]
              ),
              M = (0, p.useMemo)(
                () =>
                  function (...e) {
                    return (
                      J()("onCheckoutAfterProcessingWithError", {
                        since: "9.7.0",
                        alternative: "onCheckoutFail",
                        plugin: "WooCommerce Blocks",
                        link: "https://github.com/woocommerce/woocommerce-blocks/pull/8381",
                      }),
                      T(...e)
                    );
                  },
                [T]
              );
            (0, p.useEffect)(() => {
              _ && i({ observers: P.current, setValidationErrors: y });
            }, [_, y, i]);
            const O = st(d),
              D = st(g);
            (0, p.useEffect)(() => {
              (d === O && g === D) ||
                (h &&
                  l({
                    observers: P.current,
                    notices: {
                      checkoutNotices: v,
                      paymentNotices: f,
                      expressPaymentNotices: C,
                    },
                  }));
            }, [d, g, u, w, E, k, h, _, O, D, v, C, f, i, l]);
            const L = {
              onSubmit: (0, p.useCallback)(() => {
                b("submit"), m();
              }, [b, m]),
              onCheckoutBeforeProcessing: I,
              onCheckoutValidationBeforeProcessing: A,
              onCheckoutAfterProcessingWithSuccess: B,
              onCheckoutAfterProcessingWithError: M,
              onCheckoutSuccess: R,
              onCheckoutFail: T,
              onCheckoutValidation: x,
            };
            return (0, r.createElement)(ut.Provider, { value: L }, e);
          },
          _t = window.wp.apiFetch;
        var ht = o.n(_t);
        (0, c.__)(
          "Something went wrong. Please contact us to get assistance.",
          "woocommerce"
        );
        const gt = window.wc.wcBlocksRegistry,
          wt = (e, t, o) => {
            const r = Object.keys(e).map((t) => ({ key: t, value: e[t] }), []),
              c = `wc-${o}-new-payment-method`;
            return r.push({ key: c, value: t }), r;
          },
          kt = (e) => {
            if (!e) return;
            const { __internalSetCustomerId: t } = (0, H.dispatch)(
              Q.CHECKOUT_STORE_KEY
            );
            ht().setNonce &&
              "function" == typeof ht().setNonce &&
              ht().setNonce(e),
              null != e &&
                e.get("User-ID") &&
                t(parseInt(e.get("User-ID") || "0", 10));
          },
          Et = () => {
            const { onCheckoutValidation: e } = dt(),
              {
                hasError: t,
                redirectUrl: o,
                isProcessing: r,
                isBeforeProcessing: n,
                isComplete: s,
                orderNotes: a,
                shouldCreateAccount: i,
                extensionData: l,
                customerId: m,
              } = (0, H.useSelect)((e) => {
                const t = e(Q.CHECKOUT_STORE_KEY);
                return {
                  hasError: t.hasError(),
                  redirectUrl: t.getRedirectUrl(),
                  isProcessing: t.isProcessing(),
                  isBeforeProcessing: t.isBeforeProcessing(),
                  isComplete: t.isComplete(),
                  orderNotes: t.getOrderNotes(),
                  shouldCreateAccount: t.getShouldCreateAccount(),
                  extensionData: t.getExtensionData(),
                  customerId: t.getCustomerId(),
                };
              }),
              {
                __internalSetHasError: u,
                __internalProcessCheckoutResponse: d,
              } = (0, H.useDispatch)(Q.CHECKOUT_STORE_KEY),
              _ = (0, H.useSelect)(
                (e) => e(Q.VALIDATION_STORE_KEY).hasValidationErrors
              ),
              { shippingErrorStatus: h } = ct(),
              { billingAddress: g, shippingAddress: w } = (0, H.useSelect)(
                (e) => e(Q.CART_STORE_KEY).getCustomerData()
              ),
              {
                cartNeedsPayment: k,
                cartNeedsShipping: E,
                receiveCartContents: y,
              } = Ye(),
              {
                activePaymentMethod: b,
                paymentMethodData: v,
                isExpressPaymentMethodActive: f,
                hasPaymentError: C,
                isPaymentReady: S,
                shouldSavePayment: N,
              } = (0, H.useSelect)((e) => {
                const t = e(Q.PAYMENT_STORE_KEY);
                return {
                  activePaymentMethod: t.getActivePaymentMethod(),
                  paymentMethodData: t.getPaymentMethodData(),
                  isExpressPaymentMethodActive:
                    t.isExpressPaymentMethodActive(),
                  hasPaymentError: t.hasPaymentError(),
                  isPaymentReady: t.isPaymentReady(),
                  shouldSavePayment: t.getShouldSavePaymentMethod(),
                };
              }, []),
              P = (0, gt.getPaymentMethods)(),
              x = (0, gt.getExpressPaymentMethods)(),
              R = (0, p.useRef)(g),
              T = (0, p.useRef)(w),
              I = (0, p.useRef)(o),
              [A, B] = (0, p.useState)(!1),
              M = (0, p.useMemo)(() => {
                var e;
                const t = { ...x, ...P };
                return null == t || null === (e = t[b]) || void 0 === e
                  ? void 0
                  : e.paymentMethodId;
              }, [b, x, P]),
              O = (_() && !f) || C || h.hasError,
              D = !t && !O && (S || !k) && r;
            (0, p.useEffect)(() => {
              O === t || (!r && !n) || f || u(O);
            }, [O, t, r, n, f, u]),
              (0, p.useEffect)(() => {
                (R.current = g), (T.current = w), (I.current = o);
              }, [g, w, o]);
            const L = (0, p.useCallback)(
              () =>
                _()
                  ? void 0 !==
                      (0, H.select)(Q.VALIDATION_STORE_KEY).getValidationError(
                        "shipping-rates-error"
                      ) && {
                      errorMessage: (0, c.__)(
                        "Sorry, this order requires a shipping option.",
                        "woocommerce"
                      ),
                    }
                  : C
                  ? {
                      errorMessage: (0, c.__)(
                        "There was a problem with your payment option.",
                        "woocommerce"
                      ),
                      context: "wc/checkout/payments",
                    }
                  : !h.hasError || {
                      errorMessage: (0, c.__)(
                        "There was a problem with your shipping option.",
                        "woocommerce"
                      ),
                      context: "wc/checkout/shipping-methods",
                    },
              [_, C, h.hasError]
            );
            (0, p.useEffect)(() => {
              let t;
              return (
                f || (t = e(L, 0)),
                () => {
                  f || "function" != typeof t || t();
                }
              );
            }, [e, L, f]),
              (0, p.useEffect)(() => {
                I.current && (window.location.href = I.current);
              }, [s]);
            const F = (0, p.useCallback)(async () => {
              if (A) return;
              B(!0),
                (() => {
                  const e = (0, H.select)(
                      "wc/store/store-notices"
                    ).getRegisteredContainers(),
                    { removeNotice: t } = (0, H.dispatch)("core/notices"),
                    { getNotices: o } = (0, H.select)("core/notices");
                  e.forEach((e) => {
                    o(e).forEach((o) => {
                      t(o.id, e);
                    });
                  });
                })();
              const e = k
                  ? { payment_method: M, payment_data: wt(v, N, b) }
                  : {},
                t = {
                  shipping_address: E ? xe(T.current) : void 0,
                  billing_address: xe(R.current),
                  customer_note: a,
                  create_account: i,
                  ...e,
                  extensions: { ...l },
                };
              ht()({
                path: "/wc/store/v1/checkout",
                method: "POST",
                data: t,
                cache: "no-store",
                parse: !1,
              })
                .then((e) => {
                  if (
                    ((function (e) {
                      if (
                        "object" != typeof e ||
                        null === e ||
                        !("body" in e) ||
                        !("headers" in e)
                      )
                        throw new Error("Response not valid");
                    })(e),
                    kt(e.headers),
                    !e.ok)
                  )
                    throw e;
                  return e.json();
                })
                .then((e) => {
                  d(e), B(!1);
                })
                .catch((e) => {
                  kt(null == e ? void 0 : e.headers);
                  try {
                    e.json()
                      .then((e) => e)
                      .then((e) => {
                        var t;
                        null !== (t = e.data) &&
                          void 0 !== t &&
                          t.cart &&
                          y(e.data.cart),
                          (0, Q.processErrorResponse)(e),
                          d(e);
                      });
                  } catch {
                    let e = (0, c.__)(
                      "Something went wrong when placing the order. Check your email for order updates before retrying.",
                      "woocommerce"
                    );
                    0 !== m &&
                      (e = (0, c.__)(
                        "Something went wrong when placing the order. Check your account's order history or your email for order updates before retrying.",
                        "woocommerce"
                      )),
                      (0, Q.processErrorResponse)({
                        code: "unknown_error",
                        message: e,
                        data: null,
                      });
                  }
                  u(!0), B(!1);
                });
            }, [A, k, M, v, N, b, a, i, l, E, y, u, d]);
            return (
              (0, p.useEffect)(() => {
                D && !A && F();
              }, [F, D, A]),
              null
            );
          },
          yt = ({ children: e, redirectUrl: t }) =>
            (0, r.createElement)(
              pt,
              { redirectUrl: t },
              (0, r.createElement)(
                nt,
                null,
                (0, r.createElement)(
                  ne,
                  null,
                  e,
                  (0, r.createElement)(
                    K,
                    {
                      renderError: _.CURRENT_USER_IS_ADMIN ? null : () => null,
                    },
                    (0, r.createElement)(G.PluginArea, {
                      scope: "woocommerce-checkout",
                    })
                  ),
                  (0, r.createElement)(Et, null)
                )
              )
            ),
          bt = ({ children: e, redirectUrl: t }) =>
            (0, r.createElement)(yt, { redirectUrl: t }, e),
          vt = window.wc.blocksCheckout,
          ft = (0, r.createElement)(
            i.SVG,
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            (0, r.createElement)(
              "g",
              { fill: "none", fillRule: "evenodd" },
              (0, r.createElement)("path", { d: "M0 0h24v24H0z" }),
              (0, r.createElement)("path", {
                fill: "currentColor",
                fillRule: "nonzero",
                d: "M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45ZM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2Zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2Z",
              })
            ),
            " "
          );
        var Ct = o(4333);
        const St = (0, p.createContext)({
            hasContainerWidth: !1,
            containerClassName: "",
            isMobile: !1,
            isSmall: !1,
            isMedium: !1,
            isLarge: !1,
          }),
          Nt = ({ children: e, className: t = "" }) => {
            const [o, c] = (() => {
                const [e, { width: t }] = (0, Ct.useResizeObserver)();
                let o = "";
                return (
                  t > 700
                    ? (o = "is-large")
                    : t > 520
                    ? (o = "is-medium")
                    : t > 400
                    ? (o = "is-small")
                    : t && (o = "is-mobile"),
                  [e, o]
                );
              })(),
              n = {
                hasContainerWidth: "" !== c,
                containerClassName: c,
                isMobile: "is-mobile" === c,
                isSmall: "is-small" === c,
                isMedium: "is-medium" === c,
                isLarge: "is-large" === c,
              };
            return (0, r.createElement)(
              St.Provider,
              { value: n },
              (0, r.createElement)("div", { className: s()(t, c) }, o, e)
            );
          };
        o(906);
        const Pt = ({ children: e, className: t }) =>
            (0, r.createElement)(
              Nt,
              { className: s()("wc-block-components-sidebar-layout", t) },
              e
            ),
          xt = ["core/paragraph", "core/image", "core/separator"],
          Rt = (e) => {
            const t = (0, vt.applyCheckoutFilter)({
              filterName: "additionalCartCheckoutInnerBlockTypes",
              defaultValue: [],
              extensions: (0, H.select)(Q.CART_STORE_KEY).getCartData()
                .extensions,
              arg: { block: e },
              validation: (e) => {
                if (Array.isArray(e) && e.every((e) => "string" == typeof e))
                  return !0;
                throw new Error(
                  "allowedBlockTypes filters must return an array of strings."
                );
              },
            });
            return Array.from(
              new Set([
                ...(0, u.getBlockTypes)()
                  .filter((t) =>
                    ((null == t ? void 0 : t.parent) || []).includes(e)
                  )
                  .map(({ name: e }) => e),
                ...xt,
                ...t,
              ])
            );
          },
          Tt = ({
            clientId: e,
            registeredBlocks: t,
            defaultTemplate: o = [],
          }) => {
            const r = (0, p.useRef)(t),
              c = (0, p.useRef)(o),
              n = (0, H.useRegistry)(),
              { isPreview: s } = Z();
            (0, p.useEffect)(() => {
              let t = !1;
              if (s) return;
              const { replaceInnerBlocks: o } = (0, H.dispatch)(
                "core/block-editor"
              );
              return n.subscribe(() => {
                if (!n.select("core/block-editor").getBlock(e)) return;
                const s = n.select("core/block-editor").getBlocks(e);
                if (0 === s.length && c.current.length > 0 && !t) {
                  const r = (0, u.createBlocksFromInnerBlocksTemplate)(
                    c.current
                  );
                  if (0 !== r.length) return (t = !0), void o(e, r);
                }
                const a = r.current.map((e) => (0, u.getBlockType)(e)),
                  i = ((e, t) => {
                    const o = t.filter(
                        (e) =>
                          e &&
                          (({ attributes: e }) => {
                            var t, o, r;
                            return Boolean(
                              (null === (t = e.lock) || void 0 === t
                                ? void 0
                                : t.remove) ||
                                (null === (o = e.lock) ||
                                void 0 === o ||
                                null === (r = o.default) ||
                                void 0 === r
                                  ? void 0
                                  : r.remove)
                            );
                          })(e)
                      ),
                      r = [];
                    return (
                      o.forEach((t) => {
                        if (void 0 === t) return;
                        const o = e.find((e) => e.name === t.name);
                        o || r.push(t);
                      }),
                      r
                    );
                  })(s, a);
                if (0 === i.length) return;
                let l = -1;
                const m = i.map((e) => {
                  const t = c.current.findIndex(([t]) => t === e.name),
                    o = (0, u.createBlock)(e.name);
                  return (
                    -1 === l &&
                      (l = (({
                        defaultTemplatePosition: e,
                        innerBlocks: t,
                        currentDefaultTemplate: o,
                      }) => {
                        switch (e) {
                          case -1:
                            return t.length;
                          case 0:
                            return 0;
                          default:
                            const r = o.current[e - 1],
                              c = t.findIndex(({ name: e }) => e === r[0]);
                            return -1 === c ? e : c + 1;
                        }
                      })({
                        defaultTemplatePosition: t,
                        innerBlocks: s,
                        currentDefaultTemplate: c,
                      })),
                    o
                  );
                });
                n.batch(() => {
                  n.dispatch("core/block-editor").insertBlocks(m, l, e);
                });
              }, "core/block-editor");
            }, [e, s, n]);
          };
        o(5003);
        const It = (0, p.createContext)({ hasDarkControls: !1 });
        (0, u.registerBlockType)("woocommerce/filled-cart-block", {
          icon: {
            src: (0, r.createElement)(m.Z, {
              icon: ft,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          edit: ({ clientId: e }) => {
            const t = (0, a.useBlockProps)(),
              { currentView: o } = Z(),
              { hasDarkControls: c } = (0, p.useContext)(It),
              n = Rt(vt.innerBlockAreas.FILLED_CART),
              i = [
                ["woocommerce/cart-items-block", {}, []],
                ["woocommerce/cart-totals-block", {}, []],
              ];
            return (
              Tt({ clientId: e, registeredBlocks: n, defaultTemplate: i }),
              (0, r.createElement)(
                "div",
                { ...t, hidden: "woocommerce/filled-cart-block" !== o },
                (0, r.createElement)(
                  Pt,
                  {
                    className: s()("wc-block-cart", { "has-dark-controls": c }),
                  },
                  (0, r.createElement)(a.InnerBlocks, {
                    allowedBlocks: n,
                    template: i,
                    templateLock: "insert",
                  })
                )
              )
            );
          },
          save: () =>
            (0, r.createElement)(
              "div",
              { ...a.useBlockProps.save() },
              (0, r.createElement)(a.InnerBlocks.Content, null)
            ),
        });
        var At = o(5062);
        const Bt = (0, p.forwardRef)(({ children: e, className: t = "" }, o) =>
          (0, r.createElement)(
            "div",
            { ref: o, className: s()("wc-block-components-main", t) },
            e
          )
        );
        (0, u.registerBlockType)("woocommerce/cart-items-block", {
          icon: {
            src: (0, r.createElement)(m.Z, {
              icon: At.Z,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          edit: ({ clientId: e }) => {
            const t = (0, a.useBlockProps)({
                className: "wc-block-cart__main",
              }),
              o = Rt(vt.innerBlockAreas.CART_ITEMS),
              c = [
                ["woocommerce/cart-line-items-block", {}, []],
                ["woocommerce/cart-cross-sells-block", {}, []],
              ];
            return (
              Tt({ clientId: e, registeredBlocks: o, defaultTemplate: c }),
              (0, r.createElement)(
                Bt,
                { ...t },
                (0, r.createElement)(a.InnerBlocks, {
                  allowedBlocks: o,
                  template: c,
                  templateLock: !1,
                  renderAppender: a.InnerBlocks.ButtonBlockAppender,
                })
              )
            );
          },
          save: () =>
            (0, r.createElement)(
              "div",
              { ...a.useBlockProps.save() },
              (0, r.createElement)(a.InnerBlocks.Content, null)
            ),
        });
        var Mt = o(5904),
          Ot = o(2600);
        const Dt = [
            "BUTTON",
            "FIELDSET",
            "INPUT",
            "OPTGROUP",
            "OPTION",
            "SELECT",
            "TEXTAREA",
            "A",
          ],
          Lt = ({ children: e, style: t = {}, ...o }) => {
            const c = (0, p.useRef)(null),
              n = () => {
                c.current &&
                  Mt.focus.focusable.find(c.current).forEach((e) => {
                    Dt.includes(e.nodeName) && e.setAttribute("tabindex", "-1"),
                      e.hasAttribute("contenteditable") &&
                        e.setAttribute("contenteditable", "false");
                  });
              },
              s = (0, Ot.y1)(n, 0, { leading: !0 });
            return (
              (0, p.useLayoutEffect)(() => {
                let e;
                return (
                  n(),
                  c.current &&
                    ((e = new window.MutationObserver(s)),
                    e.observe(c.current, {
                      childList: !0,
                      attributes: !0,
                      subtree: !0,
                    })),
                  () => {
                    e && e.disconnect(), s.cancel();
                  }
                );
              }, [s]),
              (0, r.createElement)(
                "div",
                {
                  ref: c,
                  "aria-disabled": "true",
                  style: {
                    userSelect: "none",
                    pointerEvents: "none",
                    cursor: "normal",
                    ...t,
                  },
                  ...o,
                },
                e
              )
            );
          };
        var Ft = o(5158),
          Vt = o(9630);
        o(8968);
        const Yt = ({
            className: e,
            quantity: t = 1,
            minimum: o = 1,
            maximum: n,
            onChange: a = () => {},
            step: i = 1,
            itemName: l = "",
            disabled: m,
          }) => {
            const u = s()("wc-block-components-quantity-selector", e),
              d = (0, p.useRef)(null),
              _ = (0, p.useRef)(null),
              h = (0, p.useRef)(null),
              g = void 0 !== n,
              w = !m && t - i >= o,
              k = !m && (!g || t + i <= n),
              E = (0, p.useCallback)(
                (e) => {
                  let t = e;
                  g && (t = Math.min(t, Math.floor(n / i) * i)),
                    (t = Math.max(t, Math.ceil(o / i) * i)),
                    (t = Math.floor(t / i) * i),
                    t !== e && a(t);
                },
                [g, n, o, a, i]
              ),
              y = (0, Ot.y1)(E, 300);
            (0, p.useLayoutEffect)(() => {
              E(t);
            }, [t, E]);
            const b = (0, p.useCallback)(
              (e) => {
                const o =
                    void 0 !== typeof e.key
                      ? "ArrowDown" === e.key
                      : e.keyCode === Vt.DOWN,
                  r =
                    void 0 !== typeof e.key
                      ? "ArrowUp" === e.key
                      : e.keyCode === Vt.UP;
                o && w && (e.preventDefault(), a(t - i)),
                  r && k && (e.preventDefault(), a(t + i));
              },
              [t, a, k, w, i]
            );
            return (0, r.createElement)(
              "div",
              { className: u },
              (0, r.createElement)("input", {
                ref: d,
                className: "wc-block-components-quantity-selector__input",
                disabled: m,
                type: "number",
                step: i,
                min: o,
                max: n,
                value: t,
                onKeyDown: b,
                onChange: (e) => {
                  let o = parseInt(e.target.value, 10);
                  (o = isNaN(o) ? t : o), o !== t && (a(o), y(o));
                },
                "aria-label": (0, c.sprintf)(
                  /* translators: %s refers to the item name in the cart. */ /* translators: %s refers to the item name in the cart. */
                  (0, c.__)("Quantity of %s in your cart.", "woocommerce"),
                  l
                ),
              }),
              (0, r.createElement)(
                "button",
                {
                  ref: _,
                  "aria-label": (0, c.sprintf)(
                    /* translators: %s refers to the item name in the cart. */ /* translators: %s refers to the item name in the cart. */
                    (0, c.__)("Reduce quantity of %s", "woocommerce"),
                    l
                  ),
                  className:
                    "wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--minus",
                  disabled: !w,
                  onClick: () => {
                    const e = t - i;
                    a(e),
                      (0, Ft.speak)(
                        (0, c.sprintf)(
                          /* translators: %s refers to the item's new quantity in the cart. */ /* translators: %s refers to the item's new quantity in the cart. */
                          (0, c.__)("Quantity reduced to %s.", "woocommerce"),
                          e
                        )
                      ),
                      E(e);
                  },
                },
                "－"
              ),
              (0, r.createElement)(
                "button",
                {
                  ref: h,
                  "aria-label": (0, c.sprintf)(
                    /* translators: %s refers to the item's name in the cart. */ /* translators: %s refers to the item's name in the cart. */
                    (0, c.__)("Increase quantity of %s", "woocommerce"),
                    l
                  ),
                  disabled: !k,
                  className:
                    "wc-block-components-quantity-selector__button wc-block-components-quantity-selector__button--plus",
                  onClick: () => {
                    const e = t + i;
                    a(e),
                      (0, Ft.speak)(
                        (0, c.sprintf)(
                          /* translators: %s refers to the item's new quantity in the cart. */ /* translators: %s refers to the item's new quantity in the cart. */
                          (0, c.__)("Quantity increased to %s.", "woocommerce"),
                          e
                        )
                      ),
                      E(e);
                  },
                },
                "＋"
              )
            );
          },
          $t = window.wc.blocksComponents,
          Ut = window.wc.priceFormat;
        o(6645);
        const jt = ({
            currency: e,
            maxPrice: t,
            minPrice: o,
            priceClassName: n,
            priceStyle: a = {},
          }) =>
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                "span",
                { className: "screen-reader-text" },
                (0, c.sprintf)(
                  /* translators: %1$s min price, %2$s max price */ /* translators: %1$s min price, %2$s max price */
                  (0, c.__)("Price between %1$s and %2$s", "woocommerce"),
                  (0, Ut.formatPrice)(o),
                  (0, Ut.formatPrice)(t)
                )
              ),
              (0, r.createElement)(
                "span",
                { "aria-hidden": !0 },
                (0, r.createElement)($t.FormattedMonetaryAmount, {
                  className: s()("wc-block-components-product-price__value", n),
                  currency: e,
                  value: o,
                  style: a,
                }),
                " — ",
                (0, r.createElement)($t.FormattedMonetaryAmount, {
                  className: s()("wc-block-components-product-price__value", n),
                  currency: e,
                  value: t,
                  style: a,
                })
              )
            ),
          zt = ({
            currency: e,
            regularPriceClassName: t,
            regularPriceStyle: o,
            regularPrice: n,
            priceClassName: a,
            priceStyle: i,
            price: l,
          }) =>
            (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                "span",
                { className: "screen-reader-text" },
                (0, c.__)("Previous price:", "woocommerce")
              ),
              (0, r.createElement)($t.FormattedMonetaryAmount, {
                currency: e,
                renderText: (e) =>
                  (0, r.createElement)(
                    "del",
                    {
                      className: s()(
                        "wc-block-components-product-price__regular",
                        t
                      ),
                      style: o,
                    },
                    e
                  ),
                value: n,
              }),
              (0, r.createElement)(
                "span",
                { className: "screen-reader-text" },
                (0, c.__)("Discounted price:", "woocommerce")
              ),
              (0, r.createElement)($t.FormattedMonetaryAmount, {
                currency: e,
                renderText: (e) =>
                  (0, r.createElement)(
                    "ins",
                    {
                      className: s()(
                        "wc-block-components-product-price__value",
                        "is-discounted",
                        a
                      ),
                      style: i,
                    },
                    e
                  ),
                value: l,
              })
            ),
          Kt = ({
            align: e,
            className: t,
            currency: o,
            format: c = "<price/>",
            maxPrice: n,
            minPrice: a,
            price: i,
            priceClassName: l,
            priceStyle: m,
            regularPrice: u,
            regularPriceClassName: d,
            regularPriceStyle: _,
            style: h,
          }) => {
            const g = s()(t, "price", "wc-block-components-product-price", {
              [`wc-block-components-product-price--align-${e}`]: e,
            });
            c.includes("<price/>") ||
              ((c = "<price/>"),
              console.error(
                "Price formats need to include the `<price/>` tag."
              ));
            const w = u && i && i < u;
            let k = (0, r.createElement)("span", {
              className: s()("wc-block-components-product-price__value", l),
            });
            return (
              w
                ? (k = (0, r.createElement)(zt, {
                    currency: o,
                    price: i,
                    priceClassName: l,
                    priceStyle: m,
                    regularPrice: u,
                    regularPriceClassName: d,
                    regularPriceStyle: _,
                  }))
                : void 0 !== a && void 0 !== n
                ? (k = (0, r.createElement)(jt, {
                    currency: o,
                    maxPrice: n,
                    minPrice: a,
                    priceClassName: l,
                    priceStyle: m,
                  }))
                : i &&
                  (k = (0, r.createElement)($t.FormattedMonetaryAmount, {
                    className: s()(
                      "wc-block-components-product-price__value",
                      l
                    ),
                    currency: o,
                    value: i,
                    style: m,
                  })),
              (0, r.createElement)(
                "span",
                { className: g, style: h },
                (0, p.createInterpolateElement)(c, { price: k })
              )
            );
          };
        o(333);
        const Ht = ({
          className: e = "",
          disabled: t = !1,
          name: o,
          permalink: c = "",
          target: n,
          rel: a,
          style: i,
          onClick: l,
          ...m
        }) => {
          const u = s()("wc-block-components-product-name", e);
          if (t) {
            const e = m;
            return (0, r.createElement)("span", {
              className: u,
              ...e,
              dangerouslySetInnerHTML: { __html: (0, ye.decodeEntities)(o) },
            });
          }
          return (0, r.createElement)("a", {
            className: u,
            href: c,
            target: n,
            ...m,
            dangerouslySetInnerHTML: { __html: (0, ye.decodeEntities)(o) },
            style: i,
          });
        };
        var qt = o(1064);
        o(2930);
        const Zt = ({ children: e, className: t }) =>
            (0, r.createElement)(
              "div",
              { className: s()("wc-block-components-product-badge", t) },
              e
            ),
          Wt = () =>
            (0, r.createElement)(
              Zt,
              { className: "wc-block-components-product-backorder-badge" },
              (0, c.__)("Available on backorder", "woocommerce")
            ),
          Gt = ({ image: e = {}, fallbackAlt: t = "" }) => {
            const o = e.thumbnail
              ? {
                  src: e.thumbnail,
                  alt: (0, ye.decodeEntities)(e.alt) || t || "Product Image",
                }
              : { src: _.PLACEHOLDER_IMG_SRC, alt: "" };
            return (0, r.createElement)("img", { ...o, alt: o.alt });
          },
          Qt = ({ lowStockRemaining: e }) =>
            e
              ? (0, r.createElement)(
                  Zt,
                  { className: "wc-block-components-product-low-stock-badge" },
                  (0, c.sprintf)(
                    /* translators: %d stock amount (number of items in stock for product) */ /* translators: %d stock amount (number of items in stock for product) */
                    (0, c.__)("%d left in stock", "woocommerce"),
                    e
                  )
                )
              : null;
        var Xt = o(7427);
        o(3804);
        const Jt = ({ details: e = [] }) =>
            Array.isArray(e)
              ? 0 === (e = e.filter((e) => !e.hidden)).length
                ? null
                : (0, r.createElement)(
                    "ul",
                    { className: "wc-block-components-product-details" },
                    e.map((e) => {
                      const t = (null == e ? void 0 : e.key) || e.name || "",
                        o =
                          (null == e ? void 0 : e.className) ||
                          (t
                            ? `wc-block-components-product-details__${(0, Xt.o)(
                                t
                              )}`
                            : "");
                      return (0, r.createElement)(
                        "li",
                        { key: t + (e.display || e.value), className: o },
                        t &&
                          (0, r.createElement)(
                            r.Fragment,
                            null,
                            (0, r.createElement)(
                              "span",
                              {
                                className:
                                  "wc-block-components-product-details__name",
                              },
                              (0, ye.decodeEntities)(t),
                              ":"
                            ),
                            " "
                          ),
                        (0, r.createElement)(
                          "span",
                          {
                            className:
                              "wc-block-components-product-details__value",
                          },
                          (0, ye.decodeEntities)(e.display || e.value)
                        )
                      );
                    })
                  )
              : null,
          eo = window.wp.autop,
          to = (e) => e.replace(/<\/?[a-z][^>]*?>/gi, ""),
          oo = (e, t) => e.replace(/[\s|\.\,]+$/i, "") + t,
          ro = window.wp.wordcount,
          co = ({
            source: e,
            maxLength: t = 15,
            countType: o = "words",
            className: c = "",
            style: n = {},
          }) => {
            const s = (0, p.useMemo)(
              () =>
                ((e, t = 15, o = "words") => {
                  const r = (0, eo.autop)(e);
                  if ((0, ro.count)(r, o) <= t) return r;
                  const c = ((e) => {
                    const t = e.indexOf("</p>");
                    return -1 === t ? e : e.substr(0, t + 4);
                  })(r);
                  return (0, ro.count)(c, o) <= t
                    ? c
                    : "words" === o
                    ? ((e, t, o = "&hellip;", r = !0) => {
                        const c = to(e),
                          n = c.split(" ").splice(0, t).join(" ");
                        return n === c
                          ? r
                            ? (0, eo.autop)(c)
                            : c
                          : r
                          ? (0, eo.autop)(oo(n, o))
                          : oo(n, o);
                      })(c, t)
                    : ((e, t, o = !0, r = "&hellip;", c = !0) => {
                        const n = to(e),
                          s = n.slice(0, t);
                        if (s === n) return c ? (0, eo.autop)(n) : n;
                        if (o) return (0, eo.autop)(oo(s, r));
                        const a = s.match(/([\s]+)/g),
                          i = a ? a.length : 0,
                          l = n.slice(0, t + i);
                        return c ? (0, eo.autop)(oo(l, r)) : oo(l, r);
                      })(c, t, "characters_including_spaces" === o);
                })(e, t, o),
              [e, t, o]
            );
            return (0, r.createElement)(
              p.RawHTML,
              { style: n, className: c },
              s
            );
          },
          no = ({
            className: e,
            shortDescription: t = "",
            fullDescription: o = "",
          }) => {
            const c = t || o;
            return c
              ? (0, r.createElement)(co, {
                  className: e,
                  source: c,
                  maxLength: 15,
                  countType: S.wordCountType || "words",
                })
              : null;
          };
        o(6021);
        const so = ({
            shortDescription: e = "",
            fullDescription: t = "",
            itemData: o = [],
            variation: c = [],
          }) =>
            (0, r.createElement)(
              "div",
              { className: "wc-block-components-product-metadata" },
              (0, r.createElement)(no, {
                className: "wc-block-components-product-metadata__description",
                shortDescription: e,
                fullDescription: t,
              }),
              (0, r.createElement)(Jt, { details: o }),
              (0, r.createElement)(Jt, {
                details: c.map(({ attribute: e = "", value: t }) => ({
                  key: e,
                  value: t,
                })),
              })
            ),
          ao = ({ currency: e, saleAmount: t, format: o = "<price/>" }) => {
            if (!t || t <= 0) return null;
            o.includes("<price/>") ||
              ((o = "<price/>"),
              console.error(
                "Price formats need to include the `<price/>` tag."
              ));
            const n = (0, c.sprintf)(
              /* translators: %s will be replaced by the discount amount */ /* translators: %s will be replaced by the discount amount */
              (0, c.__)("Save %s", "woocommerce"),
              o
            );
            return (0, r.createElement)(
              Zt,
              { className: "wc-block-components-sale-badge" },
              (0, p.createInterpolateElement)(n, {
                price: (0, r.createElement)($t.FormattedMonetaryAmount, {
                  currency: e,
                  value: t,
                }),
              })
            );
          },
          io = (e, t) => e.convertPrecision(t.minorUnit).getAmount(),
          lo = (e) => (0, vt.mustContain)(e, "<price/>"),
          mo = (0, p.forwardRef)(
            ({ lineItem: e, onRemove: t = () => {}, tabIndex: o }, n) => {
              const {
                  name: a = "",
                  catalog_visibility: i = "visible",
                  short_description: l = "",
                  description: m = "",
                  low_stock_remaining: u = null,
                  show_backorder_badge: d = !1,
                  quantity_limits: h = {
                    minimum: 1,
                    maximum: 99,
                    multiple_of: 1,
                    editable: !0,
                  },
                  sold_individually: g = !1,
                  permalink: w = "",
                  images: k = [],
                  variation: E = [],
                  item_data: y = [],
                  prices: b = {
                    currency_code: "USD",
                    currency_minor_unit: 2,
                    currency_symbol: "$",
                    currency_prefix: "$",
                    currency_suffix: "",
                    currency_decimal_separator: ".",
                    currency_thousand_separator: ",",
                    price: "0",
                    regular_price: "0",
                    sale_price: "0",
                    price_range: null,
                    raw_prices: {
                      precision: 6,
                      price: "0",
                      regular_price: "0",
                      sale_price: "0",
                    },
                  },
                  totals: v = {
                    currency_code: "USD",
                    currency_minor_unit: 2,
                    currency_symbol: "$",
                    currency_prefix: "$",
                    currency_suffix: "",
                    currency_decimal_separator: ".",
                    currency_thousand_separator: ",",
                    line_subtotal: "0",
                    line_subtotal_tax: "0",
                  },
                  extensions: f,
                } = e,
                {
                  quantity: C,
                  setItemQuantity: S,
                  removeItem: N,
                  isPendingDelete: P,
                } = ((e) => {
                  const t = { key: "", quantity: 1 };
                  ((e) =>
                    $e(e) &&
                    Ue(e, "key") &&
                    Ue(e, "quantity") &&
                    ve(e.key) &&
                    be(e.quantity))(e) &&
                    ((t.key = e.key), (t.quantity = e.quantity));
                  const { key: o = "", quantity: r = 1 } = t,
                    { cartErrors: c } = Ye(),
                    {
                      __internalIncrementCalculating: n,
                      __internalDecrementCalculating: s,
                    } = (0, H.useDispatch)(Q.CHECKOUT_STORE_KEY),
                    [a, i] = (0, p.useState)(r),
                    [l] = (0, Ot.Nr)(a, 400),
                    m = st(l),
                    { removeItemFromCart: u, changeCartItemQuantity: d } = (0,
                    H.useDispatch)(Q.CART_STORE_KEY);
                  (0, p.useEffect)(() => i(r), [r]);
                  const _ = (0, H.useSelect)(
                      (e) => {
                        if (!o) return { quantity: !1, delete: !1 };
                        const t = e(Q.CART_STORE_KEY);
                        return {
                          quantity: t.isItemPendingQuantity(o),
                          delete: t.isItemPendingDelete(o),
                        };
                      },
                      [o]
                    ),
                    h = (0, p.useCallback)(
                      () =>
                        o
                          ? u(o).catch((e) => {
                              (0, Q.processErrorResponse)(e);
                            })
                          : Promise.resolve(!1),
                      [o, u]
                    );
                  return (
                    (0, p.useEffect)(() => {
                      o &&
                        be(m) &&
                        Number.isFinite(m) &&
                        m !== l &&
                        d(o, l).catch((e) => {
                          (0, Q.processErrorResponse)(e);
                        });
                    }, [o, d, l, m]),
                    (0, p.useEffect)(
                      () => (
                        _.delete ? n() : s(),
                        () => {
                          _.delete && s();
                        }
                      ),
                      [s, n, _.delete]
                    ),
                    (0, p.useEffect)(
                      () => (
                        _.quantity || l !== a ? n() : s(),
                        () => {
                          (_.quantity || l !== a) && s();
                        }
                      ),
                      [n, s, _.quantity, l, a]
                    ),
                    {
                      isPendingDelete: _.delete,
                      quantity: a,
                      setItemQuantity: i,
                      removeItem: h,
                      cartItemQuantityErrors: c,
                    }
                  );
                })(e),
                { dispatchStoreEvent: x } = Xe(),
                { receiveCart: R, ...T } = Ye(),
                I = (0, p.useMemo)(
                  () => ({ context: "cart", cartItem: e, cart: T }),
                  [e, T]
                ),
                A = (0, Ut.getCurrencyFromPriceResponse)(b),
                B = (0, vt.applyCheckoutFilter)({
                  filterName: "itemName",
                  defaultValue: a,
                  extensions: f,
                  arg: I,
                }),
                M = (0, qt.Z)({
                  amount: parseInt(b.raw_prices.regular_price, 10),
                  precision: b.raw_prices.precision,
                }),
                O = (0, qt.Z)({
                  amount: parseInt(b.raw_prices.price, 10),
                  precision: b.raw_prices.precision,
                }),
                D = M.subtract(O),
                L = D.multiply(C),
                F = (0, Ut.getCurrencyFromPriceResponse)(v);
              let V = parseInt(v.line_subtotal, 10);
              (0, _.getSetting)("displayCartPricesIncludingTax", !1) &&
                (V += parseInt(v.line_subtotal_tax, 10));
              const Y = (0, qt.Z)({ amount: V, precision: F.minorUnit }),
                $ = k.length ? k[0] : {},
                U = "hidden" === i || "search" === i,
                j = (0, vt.applyCheckoutFilter)({
                  filterName: "cartItemClass",
                  defaultValue: "",
                  extensions: f,
                  arg: I,
                }),
                z = (0, vt.applyCheckoutFilter)({
                  filterName: "cartItemPrice",
                  defaultValue: "<price/>",
                  extensions: f,
                  arg: I,
                  validation: lo,
                }),
                K = (0, vt.applyCheckoutFilter)({
                  filterName: "subtotalPriceFormat",
                  defaultValue: "<price/>",
                  extensions: f,
                  arg: I,
                  validation: lo,
                }),
                q = (0, vt.applyCheckoutFilter)({
                  filterName: "saleBadgePriceFormat",
                  defaultValue: "<price/>",
                  extensions: f,
                  arg: I,
                  validation: lo,
                }),
                Z = (0, vt.applyCheckoutFilter)({
                  filterName: "showRemoveItemLink",
                  defaultValue: !0,
                  extensions: f,
                  arg: I,
                });
              return (0, r.createElement)(
                "tr",
                {
                  className: s()("wc-block-cart-items__row", j, {
                    "is-disabled": P,
                  }),
                  ref: n,
                  tabIndex: o,
                },
                (0, r.createElement)(
                  "td",
                  {
                    className: "wc-block-cart-item__image",
                    "aria-hidden": !Ue($, "alt") || !$.alt,
                  },
                  U
                    ? (0, r.createElement)(Gt, { image: $, fallbackAlt: B })
                    : (0, r.createElement)(
                        "a",
                        { href: w, tabIndex: -1 },
                        (0, r.createElement)(Gt, { image: $, fallbackAlt: B })
                      )
                ),
                (0, r.createElement)(
                  "td",
                  { className: "wc-block-cart-item__product" },
                  (0, r.createElement)(
                    "div",
                    { className: "wc-block-cart-item__wrap" },
                    (0, r.createElement)(Ht, {
                      disabled: P || U,
                      name: B,
                      permalink: w,
                    }),
                    d
                      ? (0, r.createElement)(Wt, null)
                      : !!u &&
                          (0, r.createElement)(Qt, { lowStockRemaining: u }),
                    (0, r.createElement)(
                      "div",
                      { className: "wc-block-cart-item__prices" },
                      (0, r.createElement)(Kt, {
                        currency: A,
                        regularPrice: io(M, A),
                        price: io(O, A),
                        format: K,
                      })
                    ),
                    (0, r.createElement)(ao, {
                      currency: A,
                      saleAmount: io(D, A),
                      format: q,
                    }),
                    (0, r.createElement)(so, {
                      shortDescription: l,
                      fullDescription: m,
                      itemData: y,
                      variation: E,
                    }),
                    (0, r.createElement)(
                      "div",
                      { className: "wc-block-cart-item__quantity" },
                      !g &&
                        !!h.editable &&
                        (0, r.createElement)(Yt, {
                          disabled: P,
                          quantity: C,
                          minimum: h.minimum,
                          maximum: h.maximum,
                          step: h.multiple_of,
                          onChange: (t) => {
                            S(t),
                              x("cart-set-item-quantity", {
                                product: e,
                                quantity: t,
                              });
                          },
                          itemName: B,
                        }),
                      Z &&
                        (0, r.createElement)(
                          "button",
                          {
                            className: "wc-block-cart-item__remove-link",
                            "aria-label": (0, c.sprintf)(
                              /* translators: %s refers to the item's name in the cart. */ /* translators: %s refers to the item's name in the cart. */
                              (0, c.__)("Remove %s from cart", "woocommerce"),
                              B
                            ),
                            onClick: () => {
                              t(),
                                N(),
                                x("cart-remove-item", {
                                  product: e,
                                  quantity: C,
                                }),
                                (0, Ft.speak)(
                                  (0, c.sprintf)(
                                    /* translators: %s refers to the item name in the cart. */ /* translators: %s refers to the item name in the cart. */
                                    (0, c.__)(
                                      "%s has been removed from your cart.",
                                      "woocommerce"
                                    ),
                                    B
                                  )
                                );
                            },
                            disabled: P,
                          },
                          (0, c.__)("Remove item", "woocommerce")
                        )
                    )
                  )
                ),
                (0, r.createElement)(
                  "td",
                  { className: "wc-block-cart-item__total" },
                  (0, r.createElement)(
                    "div",
                    {
                      className:
                        "wc-block-cart-item__total-price-and-sale-badge-wrapper",
                    },
                    (0, r.createElement)(Kt, {
                      currency: F,
                      format: z,
                      price: Y.getAmount(),
                    }),
                    C > 1 &&
                      (0, r.createElement)(ao, {
                        currency: A,
                        saleAmount: io(L, A),
                        format: q,
                      })
                  )
                )
              );
            }
          );
        o(9510);
        const uo = [...Array(3)].map((_x, e) =>
            (0, r.createElement)(mo, { lineItem: {}, key: e })
          ),
          po = (e) => {
            const t = {};
            return (
              e.forEach(({ key: e }) => {
                t[e] = (0, p.createRef)();
              }),
              t
            );
          },
          _o = ({ lineItems: e = [], isLoading: t = !1, className: o }) => {
            const n = (0, p.useRef)(null),
              a = (0, p.useRef)(po(e));
            (0, p.useEffect)(() => {
              a.current = po(e);
            }, [e]);
            const i = (e) => () => {
                null != a &&
                a.current &&
                e &&
                a.current[e].current instanceof HTMLElement
                  ? a.current[e].current.focus()
                  : n.current instanceof HTMLElement && n.current.focus();
              },
              l = t
                ? uo
                : e.map((t, o) => {
                    const c = e.length > o + 1 ? e[o + 1].key : null;
                    return (0, r.createElement)(mo, {
                      key: t.key,
                      lineItem: t,
                      onRemove: i(c),
                      ref: a.current[t.key],
                      tabIndex: -1,
                    });
                  });
            return (0, r.createElement)(
              "table",
              {
                className: s()("wc-block-cart-items", o),
                ref: n,
                tabIndex: -1,
              },
              (0, r.createElement)(
                "thead",
                null,
                (0, r.createElement)(
                  "tr",
                  { className: "wc-block-cart-items__header" },
                  (0, r.createElement)(
                    "th",
                    { className: "wc-block-cart-items__header-image" },
                    (0, r.createElement)(
                      "span",
                      null,
                      (0, c.__)("Product", "woocommerce")
                    )
                  ),
                  (0, r.createElement)(
                    "th",
                    { className: "wc-block-cart-items__header-product" },
                    (0, r.createElement)(
                      "span",
                      null,
                      (0, c.__)("Details", "woocommerce")
                    )
                  ),
                  (0, r.createElement)(
                    "th",
                    { className: "wc-block-cart-items__header-total" },
                    (0, r.createElement)(
                      "span",
                      null,
                      (0, c.__)("Total", "woocommerce")
                    )
                  )
                )
              ),
              (0, r.createElement)("tbody", null, l)
            );
          },
          ho = ({ className: e }) => {
            const { cartItems: t, cartIsLoading: o } = Ye();
            return (0, r.createElement)(_o, {
              className: e,
              lineItems: t,
              isLoading: o,
            });
          };
        (0, u.registerBlockType)("woocommerce/cart-line-items-block", {
          icon: {
            src: (0, r.createElement)(m.Z, {
              icon: At.Z,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, a.useBlockProps)();
            return (0, r.createElement)(
              "div",
              { ...o },
              (0, r.createElement)(
                Lt,
                null,
                (0, r.createElement)(ho, { className: t })
              )
            );
          },
          save: () =>
            (0, r.createElement)("div", { ...a.useBlockProps.save() }),
        }),
          (0, u.registerBlockType)("woocommerce/cart-cross-sells-block", {
            icon: {
              src: (0, r.createElement)(m.Z, {
                icon: At.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: () => {
              const e = (0, a.useBlockProps)({
                  className: "wc-block-cart__cross-sells",
                }),
                t = [
                  [
                    "core/heading",
                    {
                      content: (0, c.__)(
                        "You may be interested in…",
                        "woocommerce"
                      ),
                      level: 2,
                      fontSize: "large",
                    },
                    [],
                  ],
                  ["woocommerce/cart-cross-sells-products-block", {}, []],
                ];
              return (0, r.createElement)(
                "div",
                { ...e },
                (0, r.createElement)(a.InnerBlocks, {
                  template: t,
                  templateLock: !1,
                })
              );
            },
            save: () =>
              (0, r.createElement)(
                "div",
                { ...a.useBlockProps.save() },
                (0, r.createElement)(a.InnerBlocks.Content, null)
              ),
          });
        const go = window.wp.components,
          wo = window.wc.wcBlocksSharedContext,
          ko = window.wp.styleEngine;
        function Eo(e = {}) {
          const t = {};
          return (
            (0, ko.getCSSRules)(e, { selector: "" }).forEach((e) => {
              t[e.key] = e.value;
            }),
            t
          );
        }
        function yo(e, t) {
          return e && t ? `has-${(0, Xt.o)(t)}-${e}` : "";
        }
        const bo = (e) => {
            const t = ((e) => {
                const t = $e(e) ? e : { style: {} };
                let o = t.style;
                return (
                  ve(o) && (o = JSON.parse(o) || {}),
                  $e(o) || (o = {}),
                  { ...t, style: o }
                );
              })(e),
              o = (function (e) {
                var t, o, r, c, n, a, i;
                const {
                    backgroundColor: l,
                    textColor: m,
                    gradient: u,
                    style: d,
                  } = e,
                  p = yo("background-color", l),
                  _ = yo("color", m),
                  h = (function (e) {
                    if (e) return `has-${e}-gradient-background`;
                  })(u),
                  g =
                    h ||
                    (null == d || null === (t = d.color) || void 0 === t
                      ? void 0
                      : t.gradient);
                return {
                  className: s()(_, h, {
                    [p]: !g && !!p,
                    "has-text-color":
                      m ||
                      (null == d || null === (o = d.color) || void 0 === o
                        ? void 0
                        : o.text),
                    "has-background":
                      l ||
                      (null == d || null === (r = d.color) || void 0 === r
                        ? void 0
                        : r.background) ||
                      u ||
                      (null == d || null === (c = d.color) || void 0 === c
                        ? void 0
                        : c.gradient),
                    "has-link-color": $e(
                      null == d || null === (n = d.elements) || void 0 === n
                        ? void 0
                        : n.link
                    )
                      ? null == d ||
                        null === (a = d.elements) ||
                        void 0 === a ||
                        null === (i = a.link) ||
                        void 0 === i
                        ? void 0
                        : i.color
                      : void 0,
                  }),
                  style: Eo({ color: (null == d ? void 0 : d.color) || {} }),
                };
              })(t),
              r = (function (e) {
                var t;
                const o =
                    (null === (t = e.style) || void 0 === t
                      ? void 0
                      : t.border) || {},
                  r = (function (e) {
                    var t;
                    const { borderColor: o, style: r } = e,
                      c = o ? yo("border-color", o) : "";
                    return s()({
                      "has-border-color":
                        !!o ||
                        !(
                          null == r ||
                          null === (t = r.border) ||
                          void 0 === t ||
                          !t.color
                        ),
                      [c]: !!c,
                    });
                  })(e);
                return { className: r, style: Eo({ border: o }) };
              })(t),
              c = (function (e) {
                var t;
                return {
                  className: void 0,
                  style: Eo({
                    spacing:
                      (null === (t = e.style) || void 0 === t
                        ? void 0
                        : t.spacing) || {},
                  }),
                };
              })(t),
              n = ((e) => {
                const t = $e(e.style.typography) ? e.style.typography : {},
                  o = ve(t.fontFamily) ? t.fontFamily : "";
                return {
                  className: e.fontFamily
                    ? `has-${e.fontFamily}-font-family`
                    : o,
                  style: {
                    fontSize: e.fontSize
                      ? `var(--wp--preset--font-size--${e.fontSize})`
                      : t.fontSize,
                    fontStyle: t.fontStyle,
                    fontWeight: t.fontWeight,
                    letterSpacing: t.letterSpacing,
                    lineHeight: t.lineHeight,
                    textDecoration: t.textDecoration,
                    textTransform: t.textTransform,
                  },
                };
              })(t);
            return {
              className: s()(
                n.className,
                o.className,
                r.className,
                c.className
              ),
              style: { ...n.style, ...o.style, ...r.style, ...c.style },
            };
          },
          vo = window.wc.wcBlocksSharedHocs;
        o(3902);
        const fo = (e) => {
            const { className: t, align: o } = e,
              n = bo(e),
              { parentClassName: a } = (0, wo.useInnerBlockLayoutContext)(),
              { product: i } = (0, wo.useProductDataContext)();
            if (!((i.id && i.on_sale) || e.isDescendentOfSingleProductTemplate))
              return null;
            const l =
              "string" == typeof o
                ? `wc-block-components-product-sale-badge--align-${o}`
                : "";
            return (0, r.createElement)(
              "div",
              {
                className: s()(
                  "wc-block-components-product-sale-badge",
                  t,
                  l,
                  { [`${a}__product-onsale`]: a },
                  n.className
                ),
                style: n.style,
              },
              (0, r.createElement)($t.Label, {
                label: (0, c.__)("Sale", "woocommerce"),
                screenReaderLabel: (0, c.__)("Product on sale", "woocommerce"),
              })
            );
          },
          Co = (0, vo.withProductDataContext)(fo);
        o(3030);
        let So = (function (e) {
          return (e.SINGLE = "single"), (e.THUMBNAIL = "thumbnail"), e;
        })({});
        const No = (e) =>
            (0, r.createElement)("img", {
              ...e,
              src: _.PLACEHOLDER_IMG_SRC,
              alt: "",
              width: void 0,
              height: void 0,
            }),
          Po = ({
            image: e,
            loaded: t,
            showFullSize: o,
            fallbackAlt: c,
            width: n,
            scale: s,
            height: a,
            aspectRatio: i,
          }) => {
            const {
                thumbnail: l,
                src: m,
                srcset: u,
                sizes: d,
                alt: _,
              } = e || {},
              h = {
                alt: _ || c,
                hidden: !t,
                src: l,
                ...(o && { src: m, srcSet: u, sizes: d }),
              },
              g = { height: a, width: n, objectFit: s, aspectRatio: i };
            return (0, r.createElement)(
              p.Fragment,
              null,
              h.src &&
                (0, r.createElement)("img", {
                  style: g,
                  "data-testid": "product-image",
                  ...h,
                }),
              !e && (0, r.createElement)(No, { style: g })
            );
          },
          xo = (e) => {
            const {
                className: t,
                imageSizing: o = So.SINGLE,
                showProductLink: n = !0,
                showSaleBadge: a,
                saleBadgeAlign: i = "right",
                height: l,
                width: m,
                scale: u,
                aspectRatio: d,
                ..._
              } = e,
              h = bo(e),
              { parentClassName: g } = (0, wo.useInnerBlockLayoutContext)(),
              { product: w, isLoading: k } = (0, wo.useProductDataContext)(),
              { dispatchStoreEvent: E } = Xe();
            if (!w.id)
              return (0, r.createElement)(
                "div",
                {
                  className: s()(
                    t,
                    "wc-block-components-product-image",
                    { [`${g}__product-image`]: g },
                    h.className
                  ),
                  style: h.style,
                },
                (0, r.createElement)(No, null)
              );
            const y = !!w.images.length,
              b = y ? w.images[0] : null,
              v = n ? "a" : p.Fragment,
              f = (0, c.sprintf)(
                /* translators: %s is referring to the product name */ /* translators: %s is referring to the product name */
                (0, c.__)("Link to %s", "woocommerce"),
                w.name
              ),
              C = {
                href: w.permalink,
                ...(!y && { "aria-label": f }),
                onClick: () => {
                  E("product-view-link", { product: w });
                },
              };
            return (
              delete _.style,
              (0, r.createElement)(
                "div",
                {
                  className: s()(
                    t,
                    "wc-block-components-product-image",
                    { [`${g}__product-image`]: g },
                    h.className
                  ),
                  style: h.style,
                },
                (0, r.createElement)(
                  v,
                  { ...(n && C) },
                  !!a && (0, r.createElement)(Co, { align: i, ..._ }),
                  (0, r.createElement)(Po, {
                    fallbackAlt: w.name,
                    image: b,
                    loaded: !k,
                    showFullSize: o !== So.THUMBNAIL,
                    width: m,
                    height: l,
                    scale: u,
                    aspectRatio: d,
                  })
                )
              )
            );
          };
        (0, vo.withProductDataContext)(xo), o(9375);
        const Ro = ({
            children: e,
            headingLevel: t,
            elementType: o = `h${t}`,
            ...c
          }) => (0, r.createElement)(o, { ...c }, e),
          To = (e) => {
            const {
                className: t,
                headingLevel: o = 2,
                showProductLink: c = !0,
                linkTarget: n,
                align: a,
              } = e,
              i = bo(e),
              { parentClassName: l } = (0, wo.useInnerBlockLayoutContext)(),
              { product: m } = (0, wo.useProductDataContext)(),
              { dispatchStoreEvent: u } = Xe();
            return m.id
              ? (0, r.createElement)(
                  Ro,
                  {
                    headingLevel: o,
                    className: s()(
                      t,
                      i.className,
                      "wc-block-components-product-title",
                      {
                        [`${l}__product-title`]: l,
                        [`wc-block-components-product-title--align-${a}`]:
                          a && U(),
                      }
                    ),
                    style: U() ? i.style : {},
                  },
                  (0, r.createElement)(Ht, {
                    disabled: !c,
                    name: m.name,
                    permalink: m.permalink,
                    target: n,
                    onClick: () => {
                      u("product-view-link", { product: m });
                    },
                  })
                )
              : (0, r.createElement)(Ro, {
                  headingLevel: o,
                  className: s()(
                    t,
                    i.className,
                    "wc-block-components-product-title",
                    {
                      [`${l}__product-title`]: l,
                      [`wc-block-components-product-title--align-${a}`]:
                        a && U(),
                    }
                  ),
                  style: U() ? i.style : {},
                });
          };
        (0, vo.withProductDataContext)(To), o(2499);
        const Io = (e) => ({ width: (e / 5) * 100 + "%" }),
          Ao = ({ parentClassName: e }) => {
            const t = Io(0);
            return (0, r.createElement)(
              "div",
              {
                className: s()(
                  "wc-block-components-product-rating__norating-container",
                  `${e}-product-rating__norating-container`
                ),
              },
              (0, r.createElement)(
                "div",
                {
                  className: "wc-block-components-product-rating__norating",
                  role: "img",
                },
                (0, r.createElement)("span", { style: t })
              ),
              (0, r.createElement)(
                "span",
                null,
                (0, c.__)("No Reviews", "woocommerce")
              )
            );
          },
          Bo = (e) => {
            const { rating: t, reviews: o, parentClassName: n } = e,
              a = Io(t),
              i = (0, c.sprintf)(
                /* translators: %f is referring to the average rating value */ /* translators: %f is referring to the average rating value */
                (0, c.__)("Rated %f out of 5", "woocommerce"),
                t
              ),
              l = {
                __html: (0, c.sprintf)(
                  /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */ /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
                  (0, c._n)(
                    "Rated %1$s out of 5 based on %2$s customer rating",
                    "Rated %1$s out of 5 based on %2$s customer ratings",
                    o,
                    "woocommerce"
                  ),
                  (0, c.sprintf)('<strong class="rating">%f</strong>', t),
                  (0, c.sprintf)('<span class="rating">%d</span>', o)
                ),
              };
            return (0, r.createElement)(
              "div",
              {
                className: s()(
                  "wc-block-components-product-rating__stars",
                  `${n}__product-rating__stars`
                ),
                role: "img",
                "aria-label": i,
              },
              (0, r.createElement)("span", {
                style: a,
                dangerouslySetInnerHTML: l,
              })
            );
          },
          Mo = (e) => {
            const { reviews: t } = e,
              o = (0, c.sprintf)(
                /* translators: %s is referring to the total of reviews for a product */ /* translators: %s is referring to the total of reviews for a product */
                (0, c._n)(
                  "(%s customer review)",
                  "(%s customer reviews)",
                  t,
                  "woocommerce"
                ),
                t
              );
            return (0, r.createElement)(
              "span",
              {
                className: "wc-block-components-product-rating__reviews_count",
              },
              o
            );
          },
          Oo = (e) => {
            const {
                textAlign: t,
                isDescendentOfSingleProductBlock: o,
                shouldDisplayMockedReviewsWhenProductHasNoReviews: c,
              } = e,
              n = bo(e),
              { parentClassName: a } = (0, wo.useInnerBlockLayoutContext)(),
              { product: i } = (0, wo.useProductDataContext)(),
              l = ((e) => {
                const t = parseFloat(e.average_rating);
                return Number.isFinite(t) && t > 0 ? t : 0;
              })(i),
              m = ((e) => {
                const t = be(e.review_count)
                  ? e.review_count
                  : parseInt(e.review_count, 10);
                return Number.isFinite(t) && t > 0 ? t : 0;
              })(i),
              u = s()(n.className, "wc-block-components-product-rating", {
                [`${a}__product-rating`]: a,
                [`has-text-align-${t}`]: t,
              }),
              d = c ? (0, r.createElement)(Ao, { parentClassName: a }) : null,
              p = m
                ? (0, r.createElement)(Bo, {
                    rating: l,
                    reviews: m,
                    parentClassName: a,
                  })
                : d;
            if (m || c)
              return (0, r.createElement)(
                "div",
                { className: u, style: n.style },
                (0, r.createElement)(
                  "div",
                  {
                    className: "wc-block-components-product-rating__container",
                  },
                  p,
                  m && o ? (0, r.createElement)(Mo, { reviews: m }) : null
                )
              );
          },
          Do =
            ((0, vo.withProductDataContext)(Oo),
            (e) => {
              var t, o;
              const {
                  className: c,
                  textAlign: n,
                  isDescendentOfSingleProductTemplate: a,
                } = e,
                i = bo(e),
                { parentName: l, parentClassName: m } = (0,
                wo.useInnerBlockLayoutContext)(),
                { product: u } = (0, wo.useProductDataContext)(),
                d = "woocommerce/all-products" === l,
                p = s()("wc-block-components-product-price", c, i.className, {
                  [`${m}__product-price`]: m,
                });
              if (!u.id && !a) {
                const e = (0, r.createElement)(Kt, { align: n, className: p });
                return d
                  ? (0, r.createElement)(
                      "div",
                      { className: "wp-block-woocommerce-product-price" },
                      e
                    )
                  : e;
              }
              const _ = u.prices,
                h = a
                  ? (0, Ut.getCurrencyFromPriceResponse)()
                  : (0, Ut.getCurrencyFromPriceResponse)(_),
                g = "5000",
                w = _.price !== _.regular_price,
                k = s()({
                  [`${m}__product-price__value`]: m,
                  [`${m}__product-price__value--on-sale`]: w,
                }),
                E = (0, r.createElement)(Kt, {
                  align: n,
                  className: p,
                  style: i.style,
                  regularPriceStyle: i.style,
                  priceStyle: i.style,
                  priceClassName: k,
                  currency: h,
                  price: a ? g : _.price,
                  minPrice:
                    null == _ || null === (t = _.price_range) || void 0 === t
                      ? void 0
                      : t.min_amount,
                  maxPrice:
                    null == _ || null === (o = _.price_range) || void 0 === o
                      ? void 0
                      : o.max_amount,
                  regularPrice: a ? g : _.regular_price,
                  regularPriceClassName: s()({
                    [`${m}__product-price__regular`]: m,
                  }),
                });
              return d
                ? (0, r.createElement)(
                    "div",
                    { className: "wp-block-woocommerce-product-price" },
                    E
                  )
                : E;
            }),
          Lo = (e, t) => {
            const o = e.find(({ id: e }) => e === t);
            return o ? o.quantity : 0;
          };
        o(4466);
        const Fo = ({ product: e, className: t, style: o }) => {
            const {
                id: n,
                permalink: a,
                add_to_cart: i,
                has_options: l,
                is_purchasable: m,
                is_in_stock: u,
              } = e,
              { dispatchStoreEvent: d } = Xe(),
              {
                cartQuantity: h,
                addingToCart: g,
                addToCart: w,
              } = ((e) => {
                const { addItemToCart: t } = (0, H.useDispatch)(
                    Q.CART_STORE_KEY
                  ),
                  { cartItems: o, cartIsLoading: r } = Ye(),
                  { createErrorNotice: c, removeNotice: n } = (0,
                  H.useDispatch)("core/notices"),
                  [s, a] = (0, p.useState)(!1),
                  i = (0, p.useRef)(Lo(o, e));
                return (
                  (0, p.useEffect)(() => {
                    const t = Lo(o, e);
                    t !== i.current && (i.current = t);
                  }, [o, e]),
                  {
                    cartQuantity: Number.isFinite(i.current) ? i.current : 0,
                    addingToCart: s,
                    cartIsLoading: r,
                    addToCart: (o = 1) => (
                      a(!0),
                      t(e, o)
                        .then(() => {
                          n("add-to-cart");
                        })
                        .catch((e) => {
                          c((0, ye.decodeEntities)(e.message), {
                            id: "add-to-cart",
                            context: "wc/all-products",
                            isDismissible: !0,
                          });
                        })
                        .finally(() => {
                          a(!1);
                        })
                    ),
                  }
                );
              })(n),
              k = Number.isFinite(h) && h > 0,
              E = !l && m && u,
              y = (0, ye.decodeEntities)(
                (null == i ? void 0 : i.description) || ""
              ),
              b = k
                ? (0, c.sprintf)(
                    /* translators: %s number of products in cart. */ /* translators: %s number of products in cart. */
                    (0, c._n)("%d in cart", "%d in cart", h, "woocommerce"),
                    h
                  )
                : (0, ye.decodeEntities)(
                    (null == i ? void 0 : i.text) ||
                      (0, c.__)("Add to cart", "woocommerce")
                  ),
              v = E ? "button" : "a",
              f = {};
            return (
              E
                ? (f.onClick = async () => {
                    await w(), d("cart-add-item", { product: e });
                    const { cartRedirectAfterAdd: t } = (0, _.getSetting)(
                      "productsSettings"
                    );
                    t && (window.location.href = I);
                  })
                : ((f.href = a),
                  (f.rel = "nofollow"),
                  (f.onClick = () => {
                    d("product-view-link", { product: e });
                  })),
              (0, r.createElement)(
                v,
                {
                  ...f,
                  "aria-label": y,
                  disabled: g,
                  className: s()(
                    t,
                    "wp-block-button__link",
                    "wp-element-button",
                    "add_to_cart_button",
                    "wc-block-components-product-button__button",
                    { loading: g, added: k }
                  ),
                  style: o,
                },
                b
              )
            );
          },
          Vo = ({ className: e, style: t }) =>
            (0, r.createElement)("button", {
              className: s()(
                "wp-block-button__link",
                "wp-element-button",
                "add_to_cart_button",
                "wc-block-components-product-button__button",
                "wc-block-components-product-button__button--placeholder",
                e
              ),
              style: t,
              disabled: !0,
            }),
          Yo = (e) => {
            const { className: t, textAlign: o } = e,
              c = bo(e),
              { parentClassName: n } = (0, wo.useInnerBlockLayoutContext)(),
              { product: a } = (0, wo.useProductDataContext)();
            return (0, r.createElement)(
              "div",
              {
                className: s()(
                  t,
                  "wp-block-button",
                  "wc-block-components-product-button",
                  { [`${n}__product-add-to-cart`]: n, [`align-${o}`]: o }
                ),
              },
              a.id
                ? (0, r.createElement)(Fo, {
                    product: a,
                    style: c.style,
                    className: c.className,
                  })
                : (0, r.createElement)(Vo, {
                    style: c.style,
                    className: c.className,
                  })
            );
          },
          $o =
            ((0, vo.withProductDataContext)(Yo),
            ({ product: e }) =>
              (0, r.createElement)(
                "div",
                { className: "cross-sells-product" },
                (0, r.createElement)(
                  wo.InnerBlockLayoutContextProvider,
                  {
                    parentName: "woocommerce/cart-cross-sells-block",
                    parentClassName: "wp-block-cart-cross-sells-product",
                  },
                  (0, r.createElement)(
                    wo.ProductDataContextProvider,
                    { isLoading: !1, product: e },
                    (0, r.createElement)(
                      "div",
                      null,
                      (0, r.createElement)(xo, {
                        className: "",
                        showSaleBadge: !1,
                        productId: e.id,
                        showProductLink: !1,
                        saleBadgeAlign: "left",
                        imageSizing: So.SINGLE,
                        isDescendentOfQueryLoop: !1,
                      }),
                      (0, r.createElement)(To, {
                        align: "",
                        headingLevel: 3,
                        showProductLink: !0,
                      }),
                      (0, r.createElement)(Oo, null),
                      (0, r.createElement)(fo, {
                        productId: e.id,
                        align: "left",
                      }),
                      (0, r.createElement)(Do, null)
                    ),
                    (0, r.createElement)(Yo, null)
                  )
                )
              )),
          Uo = ({ products: e, columns: t }) => {
            const o = e.map((e, o) =>
              o >= t
                ? null
                : (0, r.createElement)($o, {
                    isLoading: !1,
                    product: e,
                    key: e.id,
                  })
            );
            return (0, r.createElement)("div", null, o);
          },
          jo = { Z: 3 },
          zo = ({ className: e, columns: t }) => {
            const { crossSellsProducts: o } = Ye();
            return (
              void 0 === t && (t = jo.Z),
              (0, r.createElement)(Uo, {
                className: e,
                columns: t,
                products: o,
              })
            );
          };
        o(810),
          o(7002),
          (0, u.registerBlockType)(
            "woocommerce/cart-cross-sells-products-block",
            {
              icon: {
                src: (0, r.createElement)(m.Z, {
                  icon: At.Z,
                  className: "wc-block-editor-components-block-icon",
                }),
              },
              edit: ({ attributes: e, setAttributes: t }) => {
                const { className: o, columns: n } = e,
                  s = (0, a.useBlockProps)();
                return (0, r.createElement)(
                  "div",
                  { ...s },
                  (0, r.createElement)(
                    a.InspectorControls,
                    null,
                    (0, r.createElement)(
                      go.PanelBody,
                      { title: (0, c.__)("Settings", "woocommerce") },
                      (0, r.createElement)(go.RangeControl, {
                        label: (0, c.__)(
                          "Cross-Sells products to show",
                          "woocommerce"
                        ),
                        value: n,
                        onChange: (e) => t({ columns: e }),
                        min: (0, _.getSetting)("minColumns", 1),
                        max: (0, _.getSetting)("maxColumns", 6),
                      })
                    )
                  ),
                  (0, r.createElement)(
                    Lt,
                    null,
                    (0, r.createElement)(zo, { columns: n, className: o })
                  )
                );
              },
              save: () =>
                (0, r.createElement)("div", { ...a.useBlockProps.save() }),
            }
          );
        const Ko = (0, p.forwardRef)(({ children: e, className: t = "" }, o) =>
          (0, r.createElement)(
            "div",
            { ref: o, className: s()("wc-block-components-sidebar", t) },
            e
          )
        );
        function Ho(e) {
          const t = (0, p.useRef)(e);
          return qe()(e, t.current) || (t.current = e), t.current;
        }
        o(4723),
          (0, u.registerBlockType)("woocommerce/cart-totals-block", {
            icon: {
              src: (0, r.createElement)(m.Z, {
                icon: At.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ clientId: e }) => {
              const t = (0, a.useBlockProps)({
                  className: "wc-block-cart__sidebar",
                }),
                o = Rt(vt.innerBlockAreas.CART_TOTALS),
                c = [
                  ["woocommerce/cart-order-summary-block", {}, []],
                  ["woocommerce/cart-express-payment-block", {}, []],
                  ["woocommerce/proceed-to-checkout-block", {}, []],
                  ["woocommerce/cart-accepted-payment-methods-block", {}, []],
                ];
              return (
                Tt({ clientId: e, registeredBlocks: o, defaultTemplate: c }),
                (0, r.createElement)(
                  Ko,
                  { ...t },
                  (0, r.createElement)(a.InnerBlocks, {
                    allowedBlocks: o,
                    template: c,
                    templateLock: !1,
                    renderAppender: a.InnerBlocks.ButtonBlockAppender,
                  })
                )
              );
            },
            save: () =>
              (0, r.createElement)(
                "div",
                { ...a.useBlockProps.save() },
                (0, r.createElement)(a.InnerBlocks.Content, null)
              ),
          });
        const qo = (e = !1) => {
            const {
                paymentMethodsInitialized: t,
                expressPaymentMethodsInitialized: o,
                availablePaymentMethods: r,
                availableExpressPaymentMethods: c,
              } = (0, H.useSelect)((e) => {
                const t = e(Q.PAYMENT_STORE_KEY);
                return {
                  paymentMethodsInitialized: t.paymentMethodsInitialized(),
                  expressPaymentMethodsInitialized:
                    t.expressPaymentMethodsInitialized(),
                  availableExpressPaymentMethods:
                    t.getAvailableExpressPaymentMethods(),
                  availablePaymentMethods: t.getAvailablePaymentMethods(),
                };
              }),
              n = Object.values(r).map(({ name: e }) => e),
              s = Object.values(c).map(({ name: e }) => e),
              a = (0, gt.getPaymentMethods)(),
              i = (0, gt.getExpressPaymentMethods)(),
              l = Object.keys(a).reduce(
                (e, t) => (n.includes(t) && (e[t] = a[t]), e),
                {}
              ),
              m = Object.keys(i).reduce(
                (e, t) => (s.includes(t) && (e[t] = i[t]), e),
                {}
              ),
              u = Ho(l),
              d = Ho(m);
            return { paymentMethods: e ? d : u, isInitialized: e ? o : t };
          },
          Zo = () => qo(!0);
        o(991);
        const Wo = ({
            children: e,
            className: t,
            screenReaderLabel: o,
            showSpinner: n = !1,
            isLoading: a = !0,
          }) =>
            (0, r.createElement)(
              "div",
              { className: s()(t, { "wc-block-components-loading-mask": a }) },
              a && n && (0, r.createElement)($t.Spinner, null),
              (0, r.createElement)(
                "div",
                {
                  className: s()({
                    "wc-block-components-loading-mask__children": a,
                  }),
                  "aria-hidden": a,
                },
                e
              ),
              a &&
                (0, r.createElement)(
                  "span",
                  { className: "screen-reader-text" },
                  o || (0, c.__)("Loading…", "woocommerce")
                )
            ),
          Go = (0, r.createElement)(
            i.SVG,
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            (0, r.createElement)(
              "g",
              { fill: "none", fillRule: "evenodd" },
              (0, r.createElement)("path", { d: "M0 0h24v24H0z" }),
              (0, r.createElement)("path", {
                fill: "#000",
                fillRule: "nonzero",
                d: "M17.3 8v1c1 .2 1.4.9 1.4 1.7h-1c0-.6-.3-1-1-1-.8 0-1.3.4-1.3.9 0 .4.3.6 1.4 1 1 .2 2 .6 2 1.9 0 .9-.6 1.4-1.5 1.5v1H16v-1c-.9-.1-1.6-.7-1.7-1.7h1c0 .6.4 1 1.3 1 1 0 1.2-.5 1.2-.8 0-.4-.2-.8-1.3-1.1-1.3-.3-2.1-.8-2.1-1.8 0-.9.7-1.5 1.6-1.6V8h1.3zM12 10v1H6v-1h6zm2-2v1H6V8h8zM2 4v16h20V4H2zm2 14V6h16v12H4z",
              }),
              (0, r.createElement)("path", {
                stroke: "#000",
                strokeLinecap: "round",
                d: "M6 16c2.6 0 3.9-3 1.7-3-2 0-1 3 1.5 3 1 0 1-.8 2.8-.8",
              })
            )
          );
        var Qo = o(214),
          Xo = o(1231),
          Jo = o(3326);
        o(3169);
        const er = { bank: Qo.Z, bill: Xo.Z, card: Jo.Z, checkPayment: Go },
          tr = ({ icon: e = "", text: t = "" }) => {
            const o = !!e,
              c = (0, p.useCallback)((e) => o && ve(e) && Ue(er, e), [o]),
              n = s()("wc-block-components-payment-method-label", {
                "wc-block-components-payment-method-label--with-icon": o,
              });
            return (0, r.createElement)(
              "span",
              { className: n },
              c(e) ? (0, r.createElement)(m.Z, { icon: er[e] }) : e,
              t
            );
          },
          or = (e) =>
            `wc-block-components-payment-method-icon wc-block-components-payment-method-icon--${e}`,
          rr = ({ id: e, src: t = null, alt: o = "" }) =>
            t
              ? (0, r.createElement)("img", {
                  className: or(e),
                  src: t,
                  alt: o,
                })
              : null,
          cr = [
            {
              id: "alipay",
              alt: "Alipay",
              src: N + "payment-methods/alipay.svg",
            },
            {
              id: "amex",
              alt: "American Express",
              src: N + "payment-methods/amex.svg",
            },
            {
              id: "bancontact",
              alt: "Bancontact",
              src: N + "payment-methods/bancontact.svg",
            },
            {
              id: "diners",
              alt: "Diners Club",
              src: N + "payment-methods/diners.svg",
            },
            {
              id: "discover",
              alt: "Discover",
              src: N + "payment-methods/discover.svg",
            },
            { id: "eps", alt: "EPS", src: N + "payment-methods/eps.svg" },
            {
              id: "giropay",
              alt: "Giropay",
              src: N + "payment-methods/giropay.svg",
            },
            { id: "ideal", alt: "iDeal", src: N + "payment-methods/ideal.svg" },
            { id: "jcb", alt: "JCB", src: N + "payment-methods/jcb.svg" },
            { id: "laser", alt: "Laser", src: N + "payment-methods/laser.svg" },
            {
              id: "maestro",
              alt: "Maestro",
              src: N + "payment-methods/maestro.svg",
            },
            {
              id: "mastercard",
              alt: "Mastercard",
              src: N + "payment-methods/mastercard.svg",
            },
            {
              id: "multibanco",
              alt: "Multibanco",
              src: N + "payment-methods/multibanco.svg",
            },
            {
              id: "p24",
              alt: "Przelewy24",
              src: N + "payment-methods/p24.svg",
            },
            { id: "sepa", alt: "Sepa", src: N + "payment-methods/sepa.svg" },
            {
              id: "sofort",
              alt: "Sofort",
              src: N + "payment-methods/sofort.svg",
            },
            {
              id: "unionpay",
              alt: "Union Pay",
              src: N + "payment-methods/unionpay.svg",
            },
            { id: "visa", alt: "Visa", src: N + "payment-methods/visa.svg" },
            {
              id: "wechat",
              alt: "WeChat",
              src: N + "payment-methods/wechat.svg",
            },
          ];
        o(6391);
        const nr = ({ icons: e = [], align: t = "center", className: o }) => {
            const c = ((e) => {
              const t = {};
              return (
                e.forEach((e) => {
                  let o = {};
                  "string" == typeof e && (o = { id: e, alt: e, src: null }),
                    "object" == typeof e &&
                      (o = {
                        id: e.id || "",
                        alt: e.alt || "",
                        src: e.src || null,
                      }),
                    o.id && ve(o.id) && !t[o.id] && (t[o.id] = o);
                }),
                Object.values(t)
              );
            })(e);
            if (0 === c.length) return null;
            const n = s()(
              "wc-block-components-payment-method-icons",
              {
                "wc-block-components-payment-method-icons--align-left":
                  "left" === t,
                "wc-block-components-payment-method-icons--align-right":
                  "right" === t,
              },
              o
            );
            return (0, r.createElement)(
              "div",
              { className: n },
              c.map((e) => {
                const t = {
                  ...e,
                  ...((o = e.id), cr.find((e) => e.id === o) || {}),
                };
                var o;
                return (0, r.createElement)(rr, {
                  key: "payment-method-icon-" + e.id,
                  ...t,
                });
              })
            );
          },
          sr = (e = "") => {
            const { cartCoupons: t, cartIsLoading: o } = Ye(),
              { createErrorNotice: r } = (0, H.useDispatch)("core/notices"),
              { createNotice: n } = (0, H.useDispatch)("core/notices"),
              { setValidationErrors: s } = (0, H.useDispatch)(
                Q.VALIDATION_STORE_KEY
              ),
              { isApplyingCoupon: a, isRemovingCoupon: i } = (0, H.useSelect)(
                (e) => {
                  const t = e(Q.CART_STORE_KEY);
                  return {
                    isApplyingCoupon: t.isApplyingCoupon(),
                    isRemovingCoupon: t.isRemovingCoupon(),
                  };
                },
                [r, n]
              ),
              { applyCoupon: l, removeCoupon: m } = (0, H.useDispatch)(
                Q.CART_STORE_KEY
              );
            return {
              appliedCoupons: t,
              isLoading: o,
              applyCoupon: (t) =>
                l(t)
                  .then(
                    () => (
                      (0, vt.applyCheckoutFilter)({
                        filterName: "showApplyCouponNotice",
                        defaultValue: !0,
                        arg: { couponCode: t, context: e },
                      }) &&
                        n(
                          "info",
                          (0, c.sprintf)(
                            /* translators: %s coupon code. */ /* translators: %s coupon code. */
                            (0, c.__)(
                              'Coupon code "%s" has been applied to your cart.',
                              "woocommerce"
                            ),
                            t
                          ),
                          { id: "coupon-form", type: "snackbar", context: e }
                        ),
                      Promise.resolve(!0)
                    )
                  )
                  .catch(
                    (e) => (
                      s({
                        coupon: {
                          message: (0, ye.decodeEntities)(e.message),
                          hidden: !1,
                        },
                      }),
                      Promise.resolve(!1)
                    )
                  ),
              removeCoupon: (t) =>
                m(t)
                  .then(
                    () => (
                      (0, vt.applyCheckoutFilter)({
                        filterName: "showRemoveCouponNotice",
                        defaultValue: !0,
                        arg: { couponCode: t, context: e },
                      }) &&
                        n(
                          "info",
                          (0, c.sprintf)(
                            /* translators: %s coupon code. */ /* translators: %s coupon code. */
                            (0, c.__)(
                              'Coupon code "%s" has been removed from your cart.',
                              "woocommerce"
                            ),
                            t
                          ),
                          { id: "coupon-form", type: "snackbar", context: e }
                        ),
                      Promise.resolve(!0)
                    )
                  )
                  .catch(
                    (t) => (
                      r(t.message, { id: "coupon-form", context: e }),
                      Promise.resolve(!1)
                    )
                  ),
              isApplyingCoupon: a,
              isRemovingCoupon: i,
            };
          },
          ar = (e, t) => {
            const o = [],
              r = (t, o) => {
                const r = o + "_tax",
                  c = Ue(e, o) && ve(e[o]) ? parseInt(e[o], 10) : 0;
                return {
                  key: o,
                  label: t,
                  value: c,
                  valueWithTax:
                    c + (Ue(e, r) && ve(e[r]) ? parseInt(e[r], 10) : 0),
                };
              };
            return (
              o.push(r((0, c.__)("Subtotal:", "woocommerce"), "total_items")),
              o.push(r((0, c.__)("Fees:", "woocommerce"), "total_fees")),
              o.push(
                r((0, c.__)("Discount:", "woocommerce"), "total_discount")
              ),
              o.push({
                key: "total_tax",
                label: (0, c.__)("Taxes:", "woocommerce"),
                value: parseInt(e.total_tax, 10),
                valueWithTax: parseInt(e.total_tax, 10),
              }),
              t &&
                o.push(
                  r((0, c.__)("Shipping:", "woocommerce"), "total_shipping")
                ),
              o
            );
          };
        class ir extends p.Component {
          constructor(...e) {
            super(...e),
              (0, d.Z)(this, "state", { errorMessage: "", hasError: !1 });
          }
          static getDerivedStateFromError(e) {
            return { errorMessage: e.message, hasError: !0 };
          }
          render() {
            const { hasError: e, errorMessage: t } = this.state,
              { isEditor: o } = this.props;
            if (e) {
              let e = (0, c.__)(
                "We are experiencing difficulties with this payment method. Please contact us for assistance.",
                "woocommerce"
              );
              (o || _.CURRENT_USER_IS_ADMIN) &&
                (e =
                  t ||
                  (0, c.__)(
                    "There was an error with this payment method. Please verify it's configured correctly.",
                    "woocommerce"
                  ));
              const n = [
                { id: "0", content: e, isDismissible: !1, status: "error" },
              ];
              return (0, r.createElement)($t.StoreNoticesContainer, {
                additionalNotices: n,
                context: ge.PAYMENTS,
              });
            }
            return this.props.children;
          }
        }
        const lr = ir,
          mr = "wc/store/payment",
          ur = () => {
            const { isEditor: e } = Z(),
              { activePaymentMethod: t, paymentMethodData: o } = (0,
              H.useSelect)((e) => {
                const t = e(mr);
                return {
                  activePaymentMethod: t.getActivePaymentMethod(),
                  paymentMethodData: t.getPaymentMethodData(),
                };
              }),
              {
                __internalSetActivePaymentMethod: n,
                __internalSetExpressPaymentStarted: s,
                __internalSetPaymentIdle: a,
                __internalSetPaymentError: i,
                __internalSetPaymentMethodData: l,
                __internalSetExpressPaymentError: m,
              } = (0, H.useDispatch)(mr),
              { paymentMethods: u } = Zo(),
              d = (() => {
                const {
                    onCheckoutBeforeProcessing: e,
                    onCheckoutValidationBeforeProcessing: t,
                    onCheckoutAfterProcessingWithSuccess: o,
                    onCheckoutAfterProcessingWithError: r,
                    onSubmit: n,
                    onCheckoutSuccess: s,
                    onCheckoutFail: a,
                    onCheckoutValidation: i,
                  } = dt(),
                  {
                    isCalculating: l,
                    isComplete: m,
                    isIdle: u,
                    isProcessing: d,
                    customerId: h,
                  } = (0, H.useSelect)((e) => {
                    const t = e(Q.CHECKOUT_STORE_KEY);
                    return {
                      isComplete: t.isComplete(),
                      isIdle: t.isIdle(),
                      isProcessing: t.isProcessing(),
                      customerId: t.getCustomerId(),
                      isCalculating: t.isCalculating(),
                    };
                  }),
                  {
                    paymentStatus: g,
                    activePaymentMethod: w,
                    shouldSavePayment: k,
                  } = (0, H.useSelect)((e) => {
                    const t = e(Q.PAYMENT_STORE_KEY);
                    return {
                      paymentStatus: {
                        get isPristine() {
                          return (
                            J()("isPristine", {
                              since: "9.6.0",
                              alternative: "isIdle",
                              plugin: "WooCommerce Blocks",
                              link: "https://github.com/woocommerce/woocommerce-blocks/pull/8110",
                            }),
                            t.isPaymentIdle()
                          );
                        },
                        isIdle: t.isPaymentIdle(),
                        isStarted: t.isExpressPaymentStarted(),
                        isProcessing: t.isPaymentProcessing(),
                        get isFinished() {
                          return (
                            J()("isFinished", {
                              since: "9.6.0",
                              plugin: "WooCommerce Blocks",
                              link: "https://github.com/woocommerce/woocommerce-blocks/pull/8110",
                            }),
                            t.hasPaymentError() || t.isPaymentReady()
                          );
                        },
                        hasError: t.hasPaymentError(),
                        get hasFailed() {
                          return (
                            J()("hasFailed", {
                              since: "9.6.0",
                              plugin: "WooCommerce Blocks",
                              link: "https://github.com/woocommerce/woocommerce-blocks/pull/8110",
                            }),
                            t.hasPaymentError()
                          );
                        },
                        get isSuccessful() {
                          return (
                            J()("isSuccessful", {
                              since: "9.6.0",
                              plugin: "WooCommerce Blocks",
                              link: "https://github.com/woocommerce/woocommerce-blocks/pull/8110",
                            }),
                            t.isPaymentReady()
                          );
                        },
                        isReady: t.isPaymentReady(),
                        isDoingExpressPayment: t.isExpressPaymentMethodActive(),
                      },
                      activePaymentMethod: t.getActivePaymentMethod(),
                      shouldSavePayment: t.getShouldSavePaymentMethod(),
                    };
                  }),
                  { __internalSetExpressPaymentError: E } = (0, H.useDispatch)(
                    Q.PAYMENT_STORE_KEY
                  ),
                  { onPaymentProcessing: y, onPaymentSetup: b } = (0,
                  p.useContext)(ce),
                  {
                    shippingErrorStatus: v,
                    shippingErrorTypes: f,
                    onShippingRateSuccess: C,
                    onShippingRateFail: S,
                    onShippingRateSelectSuccess: N,
                    onShippingRateSelectFail: P,
                  } = ct(),
                  {
                    shippingRates: x,
                    isLoadingRates: R,
                    selectedRates: T,
                    isSelectingRate: I,
                    selectShippingRate: A,
                    needsShipping: B,
                  } = Je(),
                  { billingAddress: M, shippingAddress: O } = (0, H.useSelect)(
                    (e) => e(Q.CART_STORE_KEY).getCustomerData()
                  ),
                  { setShippingAddress: D } = (0, H.useDispatch)(
                    Q.CART_STORE_KEY
                  ),
                  {
                    cartItems: L,
                    cartFees: F,
                    cartTotals: V,
                    extensions: Y,
                  } = Ye(),
                  { appliedCoupons: $ } = sr(),
                  U = (0, p.useRef)(ar(V, B)),
                  j = (0, p.useRef)({
                    label: (0, c.__)("Total", "woocommerce"),
                    value: parseInt(V.total_price, 10),
                  });
                (0, p.useEffect)(() => {
                  (U.current = ar(V, B)),
                    (j.current = {
                      label: (0, c.__)("Total", "woocommerce"),
                      value: parseInt(V.total_price, 10),
                    });
                }, [V, B]);
                const z = (0, p.useCallback)(
                  (e = "") => {
                    J()(
                      "setExpressPaymentError should only be used by Express Payment Methods (using the provided onError handler).",
                      {
                        alternative: "",
                        plugin: "woocommerce-gutenberg-products-block",
                        link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228",
                      }
                    ),
                      E(e);
                  },
                  [E]
                );
                return {
                  activePaymentMethod: w,
                  billing: {
                    appliedCoupons: $,
                    billingAddress: M,
                    billingData: M,
                    cartTotal: j.current,
                    cartTotalItems: U.current,
                    currency: (0, Ut.getCurrencyFromPriceResponse)(V),
                    customerId: h,
                    displayPricesIncludingTax: (0, _.getSetting)(
                      "displayCartPricesIncludingTax",
                      !1
                    ),
                  },
                  cartData: { cartItems: L, cartFees: F, extensions: Y },
                  checkoutStatus: {
                    isCalculating: l,
                    isComplete: m,
                    isIdle: u,
                    isProcessing: d,
                  },
                  components: {
                    LoadingMask: Wo,
                    PaymentMethodIcons: nr,
                    PaymentMethodLabel: tr,
                    ValidationInputError: $t.ValidationInputError,
                  },
                  emitResponse: { noticeContexts: ge, responseTypes: he },
                  eventRegistration: {
                    onCheckoutAfterProcessingWithError: r,
                    onCheckoutAfterProcessingWithSuccess: o,
                    onCheckoutBeforeProcessing: e,
                    onCheckoutValidationBeforeProcessing: t,
                    onCheckoutSuccess: s,
                    onCheckoutFail: a,
                    onCheckoutValidation: i,
                    onPaymentProcessing: y,
                    onPaymentSetup: b,
                    onShippingRateFail: S,
                    onShippingRateSelectFail: P,
                    onShippingRateSelectSuccess: N,
                    onShippingRateSuccess: C,
                  },
                  onSubmit: n,
                  paymentStatus: g,
                  setExpressPaymentError: z,
                  shippingData: {
                    isSelectingRate: I,
                    needsShipping: B,
                    selectedRates: T,
                    setSelectedRates: A,
                    setShippingAddress: D,
                    shippingAddress: O,
                    shippingRates: x,
                    shippingRatesLoading: R,
                  },
                  shippingStatus: {
                    shippingErrorStatus: v,
                    shippingErrorTypes: f,
                  },
                  shouldSavePayment: k,
                };
              })(),
              h = (0, p.useRef)(t),
              g = (0, p.useRef)(o),
              w = (0, p.useCallback)(
                (e) => () => {
                  (h.current = t), (g.current = o), s(), n(e);
                },
                [t, o, n, s]
              ),
              k = (0, p.useCallback)(() => {
                a(), n(h.current, g.current);
              }, [n, a]),
              E = (0, p.useCallback)(
                (e) => {
                  i(), l(e), m(e), n(h.current, g.current);
                },
                [n, i, l, m]
              ),
              y = (0, p.useCallback)(
                (e = "") => {
                  J()(
                    "Express Payment Methods should use the provided onError handler instead.",
                    {
                      alternative: "onError",
                      plugin: "woocommerce-gutenberg-products-block",
                      link: "https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/4228",
                    }
                  ),
                    e ? E(e) : m("");
                },
                [m, E]
              ),
              b = Object.entries(u),
              v =
                b.length > 0
                  ? b.map(([t, o]) => {
                      const c = e ? o.edit : o.content;
                      return (0, p.isValidElement)(c)
                        ? (0, r.createElement)(
                            "li",
                            { key: t, id: `express-payment-method-${t}` },
                            (0, p.cloneElement)(c, {
                              ...d,
                              onClick: w(t),
                              onClose: k,
                              onError: E,
                              setExpressPaymentError: y,
                            })
                          )
                        : null;
                    })
                  : (0, r.createElement)(
                      "li",
                      { key: "noneRegistered" },
                      (0, c.__)("No registered Payment Methods", "woocommerce")
                    );
            return (0, r.createElement)(
              lr,
              { isEditor: e },
              (0, r.createElement)(
                "ul",
                {
                  className:
                    "wc-block-components-express-payment__event-buttons",
                },
                v
              )
            );
          };
        o(9660);
        const dr = () => {
            const { paymentMethods: e, isInitialized: t } = Zo(),
              {
                isCalculating: o,
                isProcessing: n,
                isAfterProcessing: s,
                isBeforeProcessing: a,
                isComplete: i,
                hasError: l,
              } = (0, H.useSelect)((e) => {
                const t = e(Q.CHECKOUT_STORE_KEY);
                return {
                  isCalculating: t.isCalculating(),
                  isProcessing: t.isProcessing(),
                  isAfterProcessing: t.isAfterProcessing(),
                  isBeforeProcessing: t.isBeforeProcessing(),
                  isComplete: t.isComplete(),
                  hasError: t.hasError(),
                };
              }),
              m = (0, H.useSelect)((e) =>
                e(Q.PAYMENT_STORE_KEY).isExpressPaymentMethodActive()
              );
            if (!t || (t && 0 === Object.keys(e).length)) return null;
            const u = n || s || a || (i && !l);
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                Wo,
                { isLoading: o || u || m },
                (0, r.createElement)(
                  "div",
                  {
                    className:
                      "wc-block-components-express-payment wc-block-components-express-payment--cart",
                  },
                  (0, r.createElement)(
                    "div",
                    {
                      className: "wc-block-components-express-payment__content",
                    },
                    (0, r.createElement)($t.StoreNoticesContainer, {
                      context: ge.EXPRESS_PAYMENTS,
                    }),
                    (0, r.createElement)(ur, null)
                  )
                )
              ),
              (0, r.createElement)(
                "div",
                {
                  className:
                    "wc-block-components-express-payment-continue-rule wc-block-components-express-payment-continue-rule--cart",
                },
                (0, c.__)("Or", "woocommerce")
              )
            );
          },
          pr = ({ className: e }) => {
            const { cartNeedsPayment: t } = Ye();
            return t
              ? (0, r.createElement)(
                  "div",
                  { className: s()("wc-block-cart__payment-options", e) },
                  (0, r.createElement)(dr, null)
                )
              : null;
          };
        o(7600);
        const _r = (0, r.createElement)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "currentColor",
            viewBox: "0 0 24 24",
          },
          (0, r.createElement)("path", {
            stroke: "#1E1E1E",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            d: "M18.25 12a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z",
          }),
          (0, r.createElement)("path", { fill: "#1E1E1E", d: "M10 3h4v3h-4z" }),
          (0, r.createElement)("rect", {
            width: "1.5",
            height: "5",
            x: "11.25",
            y: "8",
            fill: "#1E1E1E",
            rx: ".75",
          }),
          (0, r.createElement)("path", {
            fill: "#1E1E1E",
            d: "m15.7 4.816 1.66 1.078-1.114 1.718-1.661-1.078z",
          })
        );
        (0, u.registerBlockType)("woocommerce/cart-express-payment-block", {
          icon: {
            src: (0, r.createElement)(m.Z, {
              style: { fill: "none" },
              icon: _r,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          edit: ({ attributes: e }) => {
            const { paymentMethods: t, isInitialized: o } = Zo(),
              c = Object.keys(t).length > 0,
              n = (0, a.useBlockProps)({
                className: s()({
                  "wp-block-woocommerce-cart-express-payment-block--has-express-payment-methods":
                    c,
                }),
              }),
              { className: i } = e;
            return o && c
              ? (0, r.createElement)(
                  "div",
                  { ...n },
                  (0, r.createElement)(pr, { className: i })
                )
              : null;
          },
          save: () =>
            (0, r.createElement)("div", { ...a.useBlockProps.save() }),
        });
        var hr = o(2069);
        const gr = (0, c.__)("Proceed to Checkout", "woocommerce"),
          wr = {
            checkoutPageId: { type: "number", default: 0 },
            lock: { type: "object", default: { move: !0, remove: !0 } },
            buttonLabel: { type: "string", default: gr },
          };
        var kr = o(3871);
        o(1029), o(7440);
        const Er = () =>
            (0, r.createElement)("span", {
              className: "wc-block-components-spinner",
              "aria-hidden": "true",
            }),
          yr = ({
            className: e,
            showSpinner: t = !1,
            children: o,
            variant: c = "contained",
            ...n
          }) => {
            const a = s()(
              "wc-block-components-button",
              "wp-element-button",
              e,
              c,
              { "wc-block-components-button--loading": t }
            );
            return (0, r.createElement)(
              kr.Z,
              { className: a, ...n },
              t && (0, r.createElement)(Er, null),
              (0, r.createElement)(
                "span",
                { className: "wc-block-components-button__text" },
                o
              )
            );
          },
          br = ({ onChange: e, placeholder: t, value: o, ...c }) =>
            (0, r.createElement)(
              yr,
              { ...c },
              (0, r.createElement)(a.RichText, {
                multiline: !1,
                allowedFormats: [],
                value: o,
                placeholder: t,
                onChange: e,
              })
            ),
          vr = (e, t) => {
            if (!e.title.raw) return e.slug;
            const o = 1 === t.filter((t) => t.title.raw === e.title.raw).length;
            return e.title.raw + (o ? "" : ` - ${e.slug}`);
          },
          fr = ({ setPageId: e, pageId: t, labels: o }) => {
            const n =
              (0, H.useSelect)(
                (e) =>
                  e("core").getEntityRecords("postType", "page", {
                    status: "publish",
                    orderby: "title",
                    order: "asc",
                    per_page: 100,
                  }),
                []
              ) || null;
            return n
              ? (0, r.createElement)(
                  go.PanelBody,
                  { title: o.title },
                  (0, r.createElement)(go.SelectControl, {
                    label: (0, c.__)("Link to", "woocommerce"),
                    value: t,
                    options: [
                      { label: o.default, value: 0 },
                      ...n.map((e) => ({
                        label: vr(e, n),
                        value: parseInt(e.id, 10),
                      })),
                    ],
                    onChange: (t) => e(parseInt(t, 10)),
                  })
                )
              : null;
          };
        o(2317),
          (0, u.registerBlockType)("woocommerce/proceed-to-checkout-block", {
            icon: {
              src: (0, r.createElement)(m.Z, {
                icon: hr.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            attributes: wr,
            edit: ({ attributes: e, setAttributes: t }) => {
              const o = (0, a.useBlockProps)(),
                { checkoutPageId: n = 0, buttonLabel: s } = e,
                { current: i } = (0, p.useRef)(n),
                l = (0, H.useSelect)(
                  (e) => i || e("core/editor").getCurrentPostId(),
                  [i]
                );
              return (0, r.createElement)(
                "div",
                { ...o },
                (0, r.createElement)(
                  a.InspectorControls,
                  null,
                  !(l === T && 0 === i) &&
                    (0, r.createElement)(fr, {
                      pageId: n,
                      setPageId: (e) => t({ checkoutPageId: e }),
                      labels: {
                        title: (0, c.__)(
                          "Proceed to Checkout button",
                          "woocommerce"
                        ),
                        default: (0, c.__)(
                          "WooCommerce Checkout Page",
                          "woocommerce"
                        ),
                      },
                    })
                ),
                (0, r.createElement)(br, {
                  className: "wc-block-cart__submit-button",
                  value: s,
                  placeholder: gr,
                  onChange: (e) => {
                    t({ buttonLabel: e });
                  },
                })
              );
            },
            save: () =>
              (0, r.createElement)("div", { ...a.useBlockProps.save() }),
          });
        const Cr = (0, r.createElement)(
            i.SVG,
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            (0, r.createElement)("path", {
              d: "M22.7 22.7l-20-20L2 2l-.7-.7L0 2.5 4.4 7l2.2 4.7L5.2 14A2 2 0 007 17h7.5l1.3 1.4a2 2 0 102.8 2.8l2.9 2.8 1.2-1.3zM7.4 15a.2.2 0 01-.2-.3l.9-1.7h2.4l2 2h-5zm8.2-2a2 2 0 001.7-1l3.6-6.5.1-.5c0-.6-.4-1-1-1H6.5l9 9zM7 18a2 2 0 100 4 2 2 0 000-4z",
            }),
            (0, r.createElement)("path", { fill: "none", d: "M0 0h24v24H0z" })
          ),
          Sr = x
            ? [
                "core/paragraph",
                {
                  align: "center",
                  content: (0, c.sprintf)(
                    /* translators: %s is the link to the store product directory. */ /* translators: %s is the link to the store product directory. */
                    (0, c.__)('<a href="%s">Browse store</a>', "woocommerce"),
                    x
                  ),
                  dropCap: !1,
                },
              ]
            : null,
          Nr = [
            [
              "core/heading",
              {
                textAlign: "center",
                content: (0, c.__)(
                  "Your cart is currently empty!",
                  "woocommerce"
                ),
                level: 2,
                className:
                  "with-empty-cart-icon wc-block-cart__empty-cart__title",
              },
            ],
            Sr,
            ["core/separator", { className: "is-style-dots" }],
            [
              "core/heading",
              {
                textAlign: "center",
                content: (0, c.__)("New in store", "woocommerce"),
                level: 2,
              },
            ],
            ["woocommerce/product-new", { columns: 4, rows: 1 }],
          ].filter(Boolean);
        o(2800),
          (0, u.registerBlockType)("woocommerce/empty-cart-block", {
            icon: {
              src: (0, r.createElement)(m.Z, {
                icon: Cr,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ clientId: e }) => {
              const t = (0, a.useBlockProps)(),
                { currentView: o } = Z(),
                c = Rt(vt.innerBlockAreas.EMPTY_CART);
              return (
                Tt({ clientId: e, registeredBlocks: c, defaultTemplate: Nr }),
                (0, r.createElement)(
                  "div",
                  { ...t, hidden: "woocommerce/empty-cart-block" !== o },
                  (0, r.createElement)(a.InnerBlocks, {
                    template: Nr,
                    templateLock: !1,
                    renderAppender: a.InnerBlocks.ButtonBlockAppender,
                  })
                )
              );
            },
            save: () =>
              (0, r.createElement)(
                "div",
                { ...a.useBlockProps.save() },
                (0, r.createElement)(a.InnerBlocks.Content, null)
              ),
          });
        const Pr = (e) =>
            Object.values(e).reduce(
              (e, t) => (null !== t.icons && (e = e.concat(t.icons)), e),
              []
            ),
          xr = ({ className: e }) => {
            const { paymentMethods: t } = qo(!1);
            return (0, r.createElement)(nr, { className: e, icons: Pr(t) });
          };
        (0, u.registerBlockType)(
          "woocommerce/cart-accepted-payment-methods-block",
          {
            icon: {
              src: (0, r.createElement)(m.Z, {
                icon: Jo.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                o = (0, a.useBlockProps)();
              return (0, r.createElement)(
                "div",
                { ...o },
                (0, r.createElement)(xr, { className: t })
              );
            },
            save: () =>
              (0, r.createElement)("div", { ...a.useBlockProps.save() }),
          }
        );
        const Rr = (0, r.createElement)(
          i.SVG,
          {
            xmlns: "http://www.w3.org/2000/SVG",
            viewBox: "0 0 24 24",
            fill: "none",
          },
          (0, r.createElement)("path", {
            stroke: "currentColor",
            strokeWidth: "1.5",
            fill: "none",
            d: "M6 3.75h12c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25z",
          }),
          (0, r.createElement)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            d: "M6.9 7.5A1.1 1.1 0 018 6.4h8a1.1 1.1 0 011.1 1.1v2a1.1 1.1 0 01-1.1 1.1H8a1.1 1.1 0 01-1.1-1.1v-2zm1.2.1v1.8h7.8V7.6H8.1z",
            clipRule: "evenodd",
          }),
          (0, r.createElement)("path", {
            fill: "currentColor",
            d: "M8.5 12h1v1h-1v-1zM8.5 14h1v1h-1v-1zM8.5 16h1v1h-1v-1zM11.5 12h1v1h-1v-1zM11.5 14h1v1h-1v-1zM11.5 16h1v1h-1v-1zM14.5 12h1v1h-1v-1zM14.5 14h1v1h-1v-1zM14.5 16h1v1h-1v-1z",
          })
        );
        o(1691);
        const Tr = (0, Ct.withInstanceId)(
          ({
            instanceId: e,
            isLoading: t = !1,
            onSubmit: o,
            displayCouponForm: n = !1,
          }) => {
            const [a, i] = (0, p.useState)(""),
              [l, m] = (0, p.useState)(!n),
              u = `wc-block-components-totals-coupon__input-${e}`,
              d = s()("wc-block-components-totals-coupon__content", {
                "screen-reader-text": l,
              }),
              { validationErrorId: _ } = (0, H.useSelect)((e) => ({
                validationErrorId: e(
                  Q.VALIDATION_STORE_KEY
                ).getValidationErrorId(u),
              }));
            return (0, r.createElement)(
              "div",
              { className: "wc-block-components-totals-coupon" },
              l
                ? (0, r.createElement)(
                    "a",
                    {
                      role: "button",
                      href: "#wc-block-components-totals-coupon__form",
                      className: "wc-block-components-totals-coupon-link",
                      "aria-label": (0, c.__)("Add a coupon", "woocommerce"),
                      onClick: (e) => {
                        e.preventDefault(), m(!1);
                      },
                    },
                    (0, c.__)("Add a coupon", "woocommerce")
                  )
                : (0, r.createElement)(
                    Wo,
                    {
                      screenReaderLabel: (0, c.__)(
                        "Applying coupon…",
                        "woocommerce"
                      ),
                      isLoading: t,
                      showSpinner: !1,
                    },
                    (0, r.createElement)(
                      "div",
                      { className: d },
                      (0, r.createElement)(
                        "form",
                        {
                          className: "wc-block-components-totals-coupon__form",
                          id: "wc-block-components-totals-coupon__form",
                        },
                        (0, r.createElement)($t.ValidatedTextInput, {
                          id: u,
                          errorId: "coupon",
                          className: "wc-block-components-totals-coupon__input",
                          label: (0, c.__)("Enter code", "woocommerce"),
                          value: a,
                          ariaDescribedBy: _,
                          onChange: (e) => {
                            i(e);
                          },
                          focusOnMount: !0,
                          validateOnMount: !1,
                          showError: !1,
                        }),
                        (0, r.createElement)(
                          yr,
                          {
                            className:
                              "wc-block-components-totals-coupon__button",
                            disabled: t || !a,
                            showSpinner: t,
                            onClick: (e) => {
                              var t;
                              e.preventDefault(),
                                void 0 !== o
                                  ? null === (t = o(a)) ||
                                    void 0 === t ||
                                    t.then((e) => {
                                      e && (i(""), m(!0));
                                    })
                                  : (i(""), m(!0));
                            },
                            type: "submit",
                          },
                          (0, c.__)("Apply", "woocommerce")
                        )
                      ),
                      (0, r.createElement)($t.ValidationInputError, {
                        propertyName: "coupon",
                        elementId: u,
                      })
                    )
                  )
            );
          }
        );
        o(4970);
        const Ir = { context: "summary" },
          Ar = ({
            cartCoupons: e = [],
            currency: t,
            isRemovingCoupon: o,
            removeCoupon: n,
            values: s,
          }) => {
            const { total_discount: a, total_discount_tax: i } = s,
              l = parseInt(a, 10);
            if (!l && 0 === e.length) return null;
            const m = parseInt(i, 10),
              u = (0, _.getSetting)("displayCartPricesIncludingTax", !1)
                ? l + m
                : l,
              d = (0, vt.applyCheckoutFilter)({
                arg: Ir,
                filterName: "coupons",
                defaultValue: e,
              });
            return (0, r.createElement)($t.TotalsItem, {
              className: "wc-block-components-totals-discount",
              currency: t,
              description:
                0 !== d.length &&
                (0, r.createElement)(
                  Wo,
                  {
                    screenReaderLabel: (0, c.__)(
                      "Removing coupon…",
                      "woocommerce"
                    ),
                    isLoading: o,
                    showSpinner: !1,
                  },
                  (0, r.createElement)(
                    "ul",
                    {
                      className:
                        "wc-block-components-totals-discount__coupon-list",
                    },
                    d.map((e) =>
                      (0, r.createElement)($t.RemovableChip, {
                        key: "coupon-" + e.code,
                        className:
                          "wc-block-components-totals-discount__coupon-list-item",
                        text: e.label,
                        screenReaderText: (0, c.sprintf)(
                          /* translators: %s Coupon code. */ /* translators: %s Coupon code. */
                          (0, c.__)("Coupon: %s", "woocommerce"),
                          e.label
                        ),
                        disabled: o,
                        onRemove: () => {
                          n(e.code);
                        },
                        radius: "large",
                        ariaLabel: (0, c.sprintf)(
                          /* translators: %s is a coupon code. */ /* translators: %s is a coupon code. */
                          (0, c.__)('Remove coupon "%s"', "woocommerce"),
                          e.label
                        ),
                      })
                    )
                  )
                ),
              label: u
                ? (0, c.__)("Discount", "woocommerce")
                : (0, c.__)("Coupons", "woocommerce"),
              value: u ? -1 * u : "-",
            });
          };
        o(4554);
        const Br = ({ currency: e, values: t, className: o }) => {
            const n =
                (0, _.getSetting)("taxesEnabled", !0) &&
                (0, _.getSetting)("displayCartPricesIncludingTax", !1),
              { total_price: a, total_tax: i, tax_lines: l } = t,
              { receiveCart: m, ...u } = Ye(),
              d = (0, vt.applyCheckoutFilter)({
                filterName: "totalLabel",
                defaultValue: (0, c.__)("Total", "woocommerce"),
                extensions: u.extensions,
                arg: { cart: u },
              }),
              h = parseInt(i, 10),
              g =
                l && l.length > 0
                  ? (0, c.sprintf)(
                      /* translators: %s is a list of tax rates */ /* translators: %s is a list of tax rates */
                      (0, c.__)("Including %s", "woocommerce"),
                      l
                        .map(
                          ({ name: t, price: o }) =>
                            `${(0, Ut.formatPrice)(o, e)} ${t}`
                        )
                        .join(", ")
                    )
                  : (0, c.__)("Including <TaxAmount/> in taxes", "woocommerce");
            return (0, r.createElement)($t.TotalsItem, {
              className: s()("wc-block-components-totals-footer-item", o),
              currency: e,
              label: d,
              value: parseInt(a, 10),
              description:
                n &&
                0 !== h &&
                (0, r.createElement)(
                  "p",
                  { className: "wc-block-components-totals-footer-item-tax" },
                  (0, p.createInterpolateElement)(g, {
                    TaxAmount: (0, r.createElement)(
                      $t.FormattedMonetaryAmount,
                      {
                        className:
                          "wc-block-components-totals-footer-item-tax-value",
                        currency: e,
                        value: h,
                      }
                    ),
                  })
                ),
            });
          },
          Mr = ({ selectedShippingRates: e }) =>
            (0, r.createElement)(
              "div",
              {
                className:
                  "wc-block-components-totals-item__description wc-block-components-totals-shipping__via",
              },
              (0, ye.decodeEntities)(
                e.filter((t, o) => e.indexOf(t) === o).join(", ")
              )
            );
        o(313);
        var Or = o(3133);
        o(2750);
        const Dr = ({
          id: e,
          className: t,
          label: o,
          onChange: n,
          options: a,
          value: i,
          required: l = !1,
          errorMessage: m = (0, c.__)("Please select a value.", "woocommerce"),
          errorId: u,
          autoComplete: d = "off",
        }) => {
          const _ = (0, p.useRef)(null),
            h = (0, p.useId)(),
            g = e || "control-" + h,
            w = u || g,
            { setValidationErrors: k, clearValidationError: E } = (0,
            H.useDispatch)(Q.VALIDATION_STORE_KEY),
            y = (0, H.useSelect)((e) =>
              e(Q.VALIDATION_STORE_KEY).getValidationError(w)
            );
          return (
            (0, p.useEffect)(
              () => (
                !l || i ? E(w) : k({ [w]: { message: m, hidden: !0 } }),
                () => {
                  E(w);
                }
              ),
              [E, i, w, m, l, k]
            ),
            (0, r.createElement)(
              "div",
              {
                id: g,
                className: s()("wc-block-components-combobox", t, {
                  "is-active": i,
                  "has-error":
                    (null == y ? void 0 : y.message) &&
                    !(null != y && y.hidden),
                }),
                ref: _,
              },
              (0, r.createElement)(Or.Z, {
                className: "wc-block-components-combobox-control",
                label: o,
                onChange: n,
                onFilterValueChange: (e) => {
                  if (e.length) {
                    const t = $e(_.current)
                      ? _.current.ownerDocument.activeElement
                      : void 0;
                    if (t && $e(_.current) && _.current.contains(t)) return;
                    const o = e.toLocaleUpperCase(),
                      r = a.find((e) => e.value.toLocaleUpperCase() === o);
                    if (r) return void n(r.value);
                    const c = a.find((e) =>
                      e.label.toLocaleUpperCase().startsWith(o)
                    );
                    c && n(c.value);
                  }
                },
                options: a,
                value: i || "",
                allowReset: !1,
                autoComplete: d,
                "aria-invalid":
                  (null == y ? void 0 : y.message) && !(null != y && y.hidden),
              }),
              (0, r.createElement)($t.ValidationInputError, { propertyName: w })
            )
          );
        };
        o(7368);
        const Lr = ({
            className: e,
            countries: t,
            id: o,
            label: n,
            onChange: a,
            value: i = "",
            autoComplete: l = "off",
            required: m = !1,
            errorId: u,
            errorMessage: d = (0, c.__)(
              "Please select a country",
              "woocommerce"
            ),
          }) => {
            const _ = (0, p.useMemo)(
              () =>
                Object.entries(t).map(([e, t]) => ({
                  value: e,
                  label: (0, ye.decodeEntities)(t),
                })),
              [t]
            );
            return (0, r.createElement)(
              "div",
              { className: s()(e, "wc-block-components-country-input") },
              (0, r.createElement)(Dr, {
                id: o,
                label: n,
                onChange: a,
                options: _,
                value: i,
                errorId: u,
                errorMessage: d,
                required: m,
                autoComplete: l,
              })
            );
          },
          Fr = (e) => (0, r.createElement)(Lr, { countries: O, ...e }),
          Vr = (e) => (0, r.createElement)(Lr, { countries: L, ...e });
        o(6115);
        const Yr = (e, t) => {
            const o = t.find(
              (t) =>
                t.label.toLocaleUpperCase() === e.toLocaleUpperCase() ||
                t.value.toLocaleUpperCase() === e.toLocaleUpperCase()
            );
            return o ? o.value : "";
          },
          $r = ({
            className: e,
            id: t,
            states: o,
            country: n,
            label: a,
            onChange: i,
            autoComplete: l = "off",
            value: m = "",
            required: u = !1,
            errorId: d = "",
          }) => {
            const _ = o[n],
              h = (0, p.useMemo)(
                () =>
                  _
                    ? Object.keys(_).map((e) => ({
                        value: e,
                        label: (0, ye.decodeEntities)(_[e]),
                      }))
                    : [],
                [_]
              ),
              g = (0, p.useCallback)(
                (e) => {
                  const t = h.length > 0 ? Yr(e, h) : e;
                  t !== m && i(t);
                },
                [i, h, m]
              ),
              w = (0, p.useRef)(m);
            return (
              (0, p.useEffect)(() => {
                w.current !== m && (w.current = m);
              }, [m]),
              (0, p.useEffect)(() => {
                if (h.length > 0 && w.current) {
                  const e = Yr(w.current, h);
                  e !== w.current && g(e);
                }
              }, [h, g]),
              h.length > 0
                ? (0, r.createElement)(Dr, {
                    className: s()(e, "wc-block-components-state-input"),
                    id: t,
                    label: a,
                    onChange: g,
                    options: h,
                    value: m,
                    errorMessage: (0, c.__)(
                      "Please select a state.",
                      "woocommerce"
                    ),
                    errorId: d,
                    required: u,
                    autoComplete: l,
                  })
                : (0, r.createElement)($t.ValidatedTextInput, {
                    className: e,
                    id: t,
                    label: a,
                    onChange: g,
                    autoComplete: l,
                    value: m,
                    required: u,
                  })
            );
          },
          Ur = (e) => (0, r.createElement)($r, { states: D, ...e }),
          jr = (e) => (0, r.createElement)($r, { states: F, ...e }),
          zr = ({
            id: e = "",
            fields: t,
            fieldConfig: o = {},
            onChange: n,
            addressType: a = "shipping",
            values: i,
          }) => {
            const l = (0, Ct.useInstanceId)(zr),
              m = Ho(t),
              u = Ho(o),
              d = Ho(i.country),
              _ = (0, p.useMemo)(() => {
                const e = Se(m, u, d);
                return {
                  fields: e,
                  addressType: a,
                  required: e.filter((e) => e.required),
                  hidden: e.filter((e) => e.hidden),
                };
              }, [m, u, d, a]),
              h = (0, p.useRef)({});
            return (
              (0, p.useEffect)(() => {
                const e = {
                  ...i,
                  ...Object.fromEntries(_.hidden.map((e) => [e.key, ""])),
                };
                qe()(i, e) || n(e);
              }, [n, _, i]),
              (0, p.useEffect)(() => {
                "shipping" === a &&
                  ((e) => {
                    const t = "shipping_country",
                      o = (0, H.select)(
                        Q.VALIDATION_STORE_KEY
                      ).getValidationError(t);
                    !e.country &&
                      (e.city || e.state || e.postcode) &&
                      (o
                        ? (0, H.dispatch)(
                            Q.VALIDATION_STORE_KEY
                          ).showValidationError(t)
                        : (0, H.dispatch)(
                            Q.VALIDATION_STORE_KEY
                          ).setValidationErrors({
                            [t]: {
                              message: (0, c.__)(
                                "Please select your country",
                                "woocommerce"
                              ),
                              hidden: !1,
                            },
                          })),
                      o &&
                        e.country &&
                        (0, H.dispatch)(
                          Q.VALIDATION_STORE_KEY
                        ).clearValidationError(t);
                  })(i);
              }, [i, a]),
              (0, p.useEffect)(() => {
                var e, t;
                null === (e = h.current) ||
                  void 0 === e ||
                  null === (t = e.postcode) ||
                  void 0 === t ||
                  t.revalidate();
              }, [d]),
              (e = e || `${l}`),
              (0, r.createElement)(
                "div",
                { id: e, className: "wc-block-components-address-form" },
                _.fields.map((t) => {
                  if (t.hidden) return null;
                  if ("checkbox" === t.type)
                    return (0, r.createElement)($t.CheckboxControl, {
                      className: `wc-block-components-address-form__${t.key}`,
                      label: t.label,
                      key: t.key,
                      checked: Boolean(i[t.key]),
                      onChange: (e) => {
                        n({ ...i, [t.key]: e });
                      },
                    });
                  const o = {
                    id: `${e}-${t.key}`,
                    errorId: `${a}_${t.key}`,
                    label: t.required ? t.label : t.optionalLabel,
                    autoCapitalize: t.autocapitalize,
                    autoComplete: t.autocomplete,
                    errorMessage: t.errorMessage,
                    required: t.required,
                    className: `wc-block-components-address-form__${t.key}`,
                  };
                  if ("country" === t.key) {
                    const e = "shipping" === a ? Vr : Fr;
                    return (0, r.createElement)(e, {
                      key: t.key,
                      ...o,
                      value: i.country,
                      onChange: (e) => {
                        const t = { ...i, country: e, state: "" };
                        i.postcode &&
                          !(0, vt.isPostcode)({
                            postcode: i.postcode,
                            country: e,
                          }) &&
                          (t.postcode = ""),
                          n(t);
                      },
                    });
                  }
                  if ("state" === t.key) {
                    const e = "shipping" === a ? jr : Ur;
                    return (0, r.createElement)(e, {
                      key: t.key,
                      ...o,
                      country: i.country,
                      value: i.state,
                      onChange: (e) => n({ ...i, state: e }),
                    });
                  }
                  return "select" === t.type
                    ? void 0 === t.options
                      ? null
                      : (0, r.createElement)(Dr, {
                          key: t.key,
                          ...o,
                          className: s()(
                            "wc-block-components-select-input",
                            `wc-block-components-select-input-${t.key}`
                          ),
                          value: i[t.key],
                          onChange: (e) => {
                            n({ ...i, [t.key]: e });
                          },
                          options: t.options,
                        })
                    : (0, r.createElement)($t.ValidatedTextInput, {
                        key: t.key,
                        ref: (e) => (h.current[t.key] = e),
                        ...o,
                        type: t.type,
                        value: i[t.key],
                        onChange: (e) => n({ ...i, [t.key]: e }),
                        customFormatter: (e) =>
                          "postcode" === t.key
                            ? e.trimStart().toUpperCase()
                            : e,
                        customValidation: (e) =>
                          ((e, t, o) =>
                            !(
                              (e.required || e.value) &&
                              "postcode" === t &&
                              o.country &&
                              !(0, vt.isPostcode)({
                                postcode: e.value,
                                country: o.country,
                              }) &&
                              (e.setCustomValidity(
                                (0, c.__)(
                                  "Please enter a valid postcode",
                                  "woocommerce"
                                )
                              ),
                              1)
                            ))(e, t.key, i),
                      });
                })
              )
            );
          },
          Kr = zr,
          Hr = ({ address: e, onUpdate: t, onCancel: o, addressFields: n }) => {
            const [s, a] = (0, p.useState)(e),
              { showAllValidationErrors: i } = (0, H.useDispatch)(
                Q.VALIDATION_STORE_KEY
              ),
              { hasValidationErrors: l, isCustomerDataUpdating: m } = (0,
              H.useSelect)((e) => ({
                hasValidationErrors: e(Q.VALIDATION_STORE_KEY)
                  .hasValidationErrors,
                isCustomerDataUpdating: e(
                  Q.CART_STORE_KEY
                ).isCustomerDataUpdating(),
              }));
            return (0, r.createElement)(
              "form",
              { className: "wc-block-components-shipping-calculator-address" },
              (0, r.createElement)(Kr, { fields: n, onChange: a, values: s }),
              (0, r.createElement)(
                yr,
                {
                  className:
                    "wc-block-components-shipping-calculator-address__button",
                  disabled: m,
                  onClick: (r) => (
                    r.preventDefault(),
                    qe()(s, e) ? o() : (i(), l() ? void 0 : t(s))
                  ),
                  type: "submit",
                },
                (0, c.__)("Update", "woocommerce")
              )
            );
          },
          qr = ({
            onUpdate: e = () => {},
            onCancel: t = () => {},
            addressFields: o = ["country", "state", "city", "postcode"],
          }) => {
            const { shippingAddress: c } = (() => {
                const { customerData: e, isInitialized: t } = (0, H.useSelect)(
                    (e) => {
                      const t = e(Q.CART_STORE_KEY);
                      return {
                        customerData: t.getCustomerData(),
                        isInitialized: t.hasFinishedResolution("getCartData"),
                      };
                    }
                  ),
                  { setShippingAddress: o, setBillingAddress: r } = (0,
                  H.useDispatch)(Q.CART_STORE_KEY);
                return {
                  isInitialized: t,
                  billingAddress: e.billingAddress,
                  shippingAddress: e.shippingAddress,
                  setBillingAddress: r,
                  setShippingAddress: o,
                };
              })(),
              n = "wc/cart/shipping-calculator";
            return (0, r.createElement)(
              "div",
              { className: "wc-block-components-shipping-calculator" },
              (0, r.createElement)($t.StoreNoticesContainer, { context: n }),
              (0, r.createElement)(Hr, {
                address: c,
                addressFields: o,
                onCancel: t,
                onUpdate: (t) => {
                  (0, H.dispatch)(Q.CART_STORE_KEY)
                    .updateCustomerData({ shipping_address: t }, !1)
                    .then(() => {
                      ((e) => {
                        const { removeNotice: t } = (0, H.dispatch)(
                            "core/notices"
                          ),
                          { getNotices: o } = (0, H.select)("core/notices");
                        o(e).forEach((o) => {
                          t(o.id, e);
                        });
                      })(n),
                        e(t);
                    })
                    .catch((e) => {
                      (0, Q.processErrorResponse)(e, n);
                    });
                },
              })
            );
          },
          Zr = ({
            label: e = (0, c.__)("Calculate", "woocommerce"),
            isShippingCalculatorOpen: t,
            setIsShippingCalculatorOpen: o,
          }) =>
            (0, r.createElement)(
              "a",
              {
                role: "button",
                href: "#wc-block-components-shipping-calculator-address__link",
                className:
                  "wc-block-components-totals-shipping__change-address__link",
                id: "wc-block-components-totals-shipping__change-address__link",
                onClick: (e) => {
                  e.preventDefault(), o(!t);
                },
                "aria-label": e,
                "aria-expanded": t,
              },
              e
            ),
          Wr = ({
            showCalculator: e,
            isShippingCalculatorOpen: t,
            setIsShippingCalculatorOpen: o,
            isCheckout: n = !1,
          }) =>
            e
              ? (0, r.createElement)(Zr, {
                  label: (0, c.__)(
                    "Add an address for shipping options",
                    "woocommerce"
                  ),
                  isShippingCalculatorOpen: t,
                  setIsShippingCalculatorOpen: o,
                })
              : (0, r.createElement)(
                  "em",
                  null,
                  n
                    ? (0, c.__)("No shipping options available", "woocommerce")
                    : (0, c.__)("Calculated during checkout", "woocommerce")
                ),
          Gr = () => {
            const { pickupAddress: e } = (0, H.useSelect)((e) => {
              const t = e("wc/store/cart")
                .getShippingRates()
                .flatMap((e) => e.shipping_rates)
                .find((e) => e.selected && ze(e));
              if ($e(t) && Ue(t, "meta_data")) {
                const e = t.meta_data.find((e) => "pickup_address" === e.key);
                if ($e(e) && Ue(e, "value") && e.value)
                  return { pickupAddress: e.value };
              }
              return $e(t), { pickupAddress: void 0 };
            });
            return void 0 === e
              ? null
              : (0, r.createElement)(
                  "span",
                  { className: "wc-block-components-shipping-address" },
                  (0, c.sprintf)(
                    /* translators: %s: shipping method name, e.g. "Amazon Locker" */ /* translators: %s: shipping method name, e.g. "Amazon Locker" */
                    (0, c.__)("Collection from %s", "woocommerce"),
                    e
                  ) + " "
                );
          },
          Qr = ({ formattedLocation: e }) =>
            e
              ? (0, r.createElement)(
                  "span",
                  { className: "wc-block-components-shipping-address" },
                  (0, c.sprintf)(
                    /* translators: %s location. */ /* translators: %s location. */
                    (0, c.__)("Shipping to %s", "woocommerce"),
                    e
                  ) + " "
                )
              : null,
          Xr = ({
            showCalculator: e,
            isShippingCalculatorOpen: t,
            setIsShippingCalculatorOpen: o,
            shippingAddress: n,
          }) => {
            const { isEditor: s } = Z(),
              a = (0, H.useSelect)((e) =>
                e(Q.CHECKOUT_STORE_KEY).prefersCollection()
              );
            if (!Re(n) && !s) return null;
            const i = Re(n);
            return (0, r.createElement)(
              r.Fragment,
              null,
              a
                ? (0, r.createElement)(Gr, null)
                : (0, r.createElement)(Qr, { formattedLocation: i }),
              e &&
                (0, r.createElement)(Zr, {
                  label: (0, c.__)("Change address", "woocommerce"),
                  isShippingCalculatorOpen: t,
                  setIsShippingCalculatorOpen: o,
                })
            );
          };
        var Jr = o(9140),
          ec = (o(946), o(202)),
          tc = o(2720),
          oc = o(4824);
        const rc = (e) => {
            switch (e) {
              case "success":
              case "warning":
              case "info":
              case "default":
                return "polite";
              default:
                return "assertive";
            }
          },
          cc = (e) => {
            switch (e) {
              case "success":
                return ec.Z;
              case "warning":
              case "info":
              case "error":
                return tc.Z;
              default:
                return oc.Z;
            }
          },
          nc = ({
            className: e,
            status: t = "default",
            children: o,
            spokenMessage: n = o,
            onRemove: a = () => {},
            isDismissible: i = !0,
            politeness: l = rc(t),
            summary: u,
          }) => (
            ((e, t) => {
              const o = "string" == typeof e ? e : (0, p.renderToString)(e);
              (0, p.useEffect)(() => {
                o && (0, Ft.speak)(o, t);
              }, [o, t]);
            })(n, l),
            (0, r.createElement)(
              "div",
              {
                className: s()(
                  e,
                  "wc-block-components-notice-banner",
                  "is-" + t,
                  { "is-dismissible": i }
                ),
              },
              (0, r.createElement)(m.Z, { icon: cc(t) }),
              (0, r.createElement)(
                "div",
                { className: "wc-block-components-notice-banner__content" },
                u &&
                  (0, r.createElement)(
                    "p",
                    { className: "wc-block-components-notice-banner__summary" },
                    u
                  ),
                o
              ),
              !!i &&
                (0, r.createElement)(yr, {
                  className: "wc-block-components-notice-banner__dismiss",
                  icon: Jr.Z,
                  label: (0, c.__)("Dismiss this notice", "woocommerce"),
                  onClick: (e) => {
                    "function" ==
                      typeof (null == e ? void 0 : e.preventDefault) &&
                      e.preventDefault &&
                      e.preventDefault(),
                      a();
                  },
                  showTooltip: !1,
                })
            )
          );
        var sc = o(3561),
          ac = o.n(sc);
        const ic = ["a", "b", "em", "i", "strong", "p", "br"],
          lc = ["target", "href", "rel", "name", "download"],
          mc = (e, t) => {
            const o = (null == t ? void 0 : t.tags) || ic,
              r = (null == t ? void 0 : t.attr) || lc;
            return ac().sanitize(e, { ALLOWED_TAGS: o, ALLOWED_ATTR: r });
          },
          uc = (e) => {
            const t = (0, _.getSetting)("displayCartPricesIncludingTax", !1)
              ? parseInt(e.price, 10) + parseInt(e.taxes, 10)
              : parseInt(e.price, 10);
            return {
              label: (0, ye.decodeEntities)(e.name),
              value: e.rate_id,
              description: (0, r.createElement)(
                r.Fragment,
                null,
                Number.isFinite(t) &&
                  (0, r.createElement)($t.FormattedMonetaryAmount, {
                    currency: (0, Ut.getCurrencyFromPriceResponse)(e),
                    value: t,
                  }),
                Number.isFinite(t) && e.delivery_time ? " — " : null,
                (0, ye.decodeEntities)(e.delivery_time)
              ),
            };
          },
          dc = ({
            className: e = "",
            noResultsMessage: t,
            onSelectRate: o,
            rates: c,
            renderOption: n = uc,
            selectedRate: s,
            disabled: a = !1,
          }) => {
            const i = (null == s ? void 0 : s.rate_id) || "",
              l = st(i),
              [m, u] = (0, p.useState)(() => {
                var e;
                return (
                  i ||
                  (null === (e = c[0]) || void 0 === e ? void 0 : e.rate_id)
                );
              });
            if (
              ((0, p.useEffect)(() => {
                i && i !== l && i !== m && u(i);
              }, [i, m, l]),
              (0, p.useEffect)(() => {
                m && o(m);
              }, [o, m]),
              0 === c.length)
            )
              return t;
            if (c.length > 1)
              return (0, r.createElement)($t.RadioControl, {
                className: e,
                onChange: (e) => {
                  u(e), o(e);
                },
                disabled: a,
                selected: m,
                options: c.map(n),
              });
            const {
              label: d,
              secondaryLabel: _,
              description: h,
              secondaryDescription: g,
            } = n(c[0]);
            return (0, r.createElement)($t.RadioControlOptionLayout, {
              label: d,
              secondaryLabel: _,
              description: h,
              secondaryDescription: g,
            });
          };
        o(7099);
        const pc = ({
            packageId: e,
            className: t = "",
            noResultsMessage: o,
            renderOption: n,
            packageData: a,
            collapsible: i,
            showItems: l,
          }) => {
            const { selectShippingRate: m, isSelectingRate: u } = Je(),
              d =
                document.querySelectorAll(
                  ".wc-block-components-shipping-rates-control__package"
                ).length > 1,
              _ = null != l ? l : d,
              h = null != i ? i : d,
              g = (0, r.createElement)(
                r.Fragment,
                null,
                (h || _) &&
                  (0, r.createElement)("div", {
                    className:
                      "wc-block-components-shipping-rates-control__package-title",
                    dangerouslySetInnerHTML: { __html: mc(a.name) },
                  }),
                _ &&
                  (0, r.createElement)(
                    "ul",
                    {
                      className:
                        "wc-block-components-shipping-rates-control__package-items",
                    },
                    Object.values(a.items).map((e) => {
                      const t = (0, ye.decodeEntities)(e.name),
                        o = e.quantity;
                      return (0, r.createElement)(
                        "li",
                        {
                          key: e.key,
                          className:
                            "wc-block-components-shipping-rates-control__package-item",
                        },
                        (0, r.createElement)($t.Label, {
                          label: o > 1 ? `${t} × ${o}` : `${t}`,
                          screenReaderLabel: (0, c.sprintf)(
                            /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */ /* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
                            (0, c._n)(
                              "%1$s (%2$d unit)",
                              "%1$s (%2$d units)",
                              o,
                              "woocommerce"
                            ),
                            t,
                            o
                          ),
                        })
                      );
                    })
                  )
              ),
              w = (0, p.useCallback)(
                (t) => {
                  m(t, e);
                },
                [e, m]
              ),
              k = {
                className: t,
                noResultsMessage: o,
                rates: a.shipping_rates,
                onSelectRate: w,
                selectedRate: a.shipping_rates.find((e) => e.selected),
                renderOption: n,
                disabled: u,
              };
            return h
              ? (0, r.createElement)(
                  $t.Panel,
                  {
                    className: s()(
                      "wc-block-components-shipping-rates-control__package",
                      t,
                      {
                        "wc-block-components-shipping-rates-control__package--disabled":
                          u,
                      }
                    ),
                    initialOpen: !1,
                    title: g,
                  },
                  (0, r.createElement)(dc, { ...k })
                )
              : (0, r.createElement)(
                  "div",
                  {
                    className: s()(
                      "wc-block-components-shipping-rates-control__package",
                      t,
                      {
                        "wc-block-components-shipping-rates-control__package--disabled":
                          u,
                      }
                    ),
                  },
                  g,
                  (0, r.createElement)(dc, { ...k })
                );
          },
          _c = ({
            packages: e,
            showItems: t,
            collapsible: o,
            noResultsMessage: c,
            renderOption: n,
          }) =>
            e.length
              ? (0, r.createElement)(
                  r.Fragment,
                  null,
                  e.map(({ package_id: e, ...s }) =>
                    (0, r.createElement)(pc, {
                      key: e,
                      packageId: e,
                      packageData: s,
                      collapsible: o,
                      showItems: t,
                      noResultsMessage: c,
                      renderOption: n,
                    })
                  )
                )
              : null,
          hc = ({
            shippingRates: e,
            isLoadingRates: t,
            className: o,
            collapsible: n,
            showItems: s,
            noResultsMessage: a,
            renderOption: i,
            context: l,
          }) => {
            (0, p.useEffect)(() => {
              var o, r;
              t ||
                ((o = ((e) => e.length)(e)),
                (r = ((e) =>
                  e.reduce(function (e, t) {
                    return e + t.shipping_rates.length;
                  }, 0))(e)),
                1 === o
                  ? (0, Ft.speak)(
                      (0, c.sprintf)(
                        /* translators: %d number of shipping options found. */ /* translators: %d number of shipping options found. */
                        (0, c._n)(
                          "%d shipping option was found.",
                          "%d shipping options were found.",
                          r,
                          "woocommerce"
                        ),
                        r
                      )
                    )
                  : (0, Ft.speak)(
                      (0, c.sprintf)(
                        /* translators: %d number of shipping packages packages. */ /* translators: %d number of shipping packages packages. */
                        (0, c._n)(
                          "Shipping option searched for %d package.",
                          "Shipping options searched for %d packages.",
                          o,
                          "woocommerce"
                        ),
                        o
                      ) +
                        " " +
                        (0, c.sprintf)(
                          /* translators: %d number of shipping options available. */ /* translators: %d number of shipping options available. */
                          (0, c._n)(
                            "%d shipping option was found",
                            "%d shipping options were found",
                            r,
                            "woocommerce"
                          ),
                          r
                        )
                    ));
            }, [t, e]);
            const { extensions: m, receiveCart: u, ...d } = Ye(),
              _ = {
                className: o,
                collapsible: n,
                showItems: s,
                noResultsMessage: a,
                renderOption: i,
                extensions: m,
                cart: d,
                components: { ShippingRatesControlPackage: pc },
                context: l,
              },
              { isEditor: h } = Z(),
              { hasSelectedLocalPickup: g, selectedRates: w } = Je(),
              k = $e(w) ? Object.values(w) : [],
              E = k.every((e) => e === k[0]);
            return (0, r.createElement)(
              Wo,
              {
                isLoading: t,
                screenReaderLabel: (0, c.__)(
                  "Loading shipping rates…",
                  "woocommerce"
                ),
                showSpinner: !0,
              },
              g &&
                "woocommerce/cart" === l &&
                e.length > 1 &&
                !E &&
                !h &&
                (0, r.createElement)(
                  nc,
                  {
                    className: "wc-block-components-notice",
                    isDismissible: !1,
                    status: "warning",
                  },
                  (0, c.__)(
                    "Multiple shipments must have the same pickup location",
                    "woocommerce"
                  )
                ),
              (0, r.createElement)(vt.ExperimentalOrderShippingPackages.Slot, {
                ..._,
              }),
              (0, r.createElement)(
                vt.ExperimentalOrderShippingPackages,
                null,
                (0, r.createElement)(_c, {
                  packages: e,
                  noResultsMessage: a,
                  renderOption: i,
                })
              )
            );
          },
          gc = ({
            hasRates: e,
            shippingRates: t,
            isLoadingRates: o,
            isAddressComplete: n,
          }) => {
            const s = e
              ? (0, c.__)("Shipping options", "woocommerce")
              : (0, c.__)("Choose a shipping option", "woocommerce");
            return (0, r.createElement)(
              "fieldset",
              { className: "wc-block-components-totals-shipping__fieldset" },
              (0, r.createElement)(
                "legend",
                { className: "screen-reader-text" },
                s
              ),
              (0, r.createElement)(hc, {
                className: "wc-block-components-totals-shipping__options",
                noResultsMessage: (0, r.createElement)(
                  r.Fragment,
                  null,
                  n &&
                    (0, r.createElement)(
                      nc,
                      {
                        isDismissible: !1,
                        className:
                          "wc-block-components-shipping-rates-control__no-results-notice",
                        status: "warning",
                      },
                      (0, c.__)(
                        "There are no shipping options available. Please check your shipping address.",
                        "woocommerce"
                      )
                    )
                ),
                shippingRates: t,
                isLoadingRates: o,
                context: "woocommerce/cart",
              })
            );
          };
        o(6968);
        const wc = ({
            currency: e,
            values: t,
            showCalculator: o = !0,
            showRateSelector: n = !0,
            isCheckout: a = !1,
            className: i,
          }) => {
            const [l, m] = (0, p.useState)(!1),
              {
                shippingAddress: u,
                cartHasCalculatedShipping: d,
                shippingRates: h,
                isLoadingRates: g,
              } = Ye(),
              w = ((e) =>
                (0, _.getSetting)("displayCartPricesIncludingTax", !1)
                  ? parseInt(e.total_shipping, 10) +
                    parseInt(e.total_shipping_tax, 10)
                  : parseInt(e.total_shipping, 10))(t),
              k = h.some((e) => e.shipping_rates.length) || w > 0,
              E = o && l,
              y = (0, H.useSelect)((e) =>
                e(Q.CHECKOUT_STORE_KEY).prefersCollection()
              ),
              b = h.flatMap((e) =>
                e.shipping_rates
                  .filter(
                    (e) => (y && ze(e) && e.selected) || (!y && e.selected)
                  )
                  .flatMap((e) => e.name)
              ),
              v = ((e) =>
                !!e.country &&
                Se($, {}, e.country).every(
                  ({ key: t = "", hidden: o = !1, required: r = !1 }) =>
                    !(!o && r) || (Pe(t, e) && "" !== e[t])
                ))(u),
              f = ((e, t, o) =>
                !e ||
                (!t &&
                  o.some(
                    (e) => !e.shipping_rates.some((e) => !Ke(e.method_id))
                  )))(k, y, h);
            return (0, r.createElement)(
              "div",
              { className: s()("wc-block-components-totals-shipping", i) },
              (0, r.createElement)($t.TotalsItem, {
                label: (0, c.__)("Shipping", "woocommerce"),
                value:
                  !f && d
                    ? w
                    : (!v || a) &&
                      (0, r.createElement)(Wr, {
                        showCalculator: o,
                        isCheckout: a,
                        isShippingCalculatorOpen: l,
                        setIsShippingCalculatorOpen: m,
                      }),
                description:
                  (!f && d) || (v && !a)
                    ? (0, r.createElement)(
                        r.Fragment,
                        null,
                        (0, r.createElement)(Mr, { selectedShippingRates: b }),
                        (0, r.createElement)(Xr, {
                          shippingAddress: u,
                          showCalculator: o,
                          isShippingCalculatorOpen: l,
                          setIsShippingCalculatorOpen: m,
                        })
                      )
                    : null,
                currency: e,
              }),
              E &&
                (0, r.createElement)(qr, {
                  onUpdate: () => {
                    m(!1);
                  },
                  onCancel: () => {
                    m(!1);
                  },
                }),
              n &&
                d &&
                !E &&
                (0, r.createElement)(gc, {
                  hasRates: k,
                  shippingRates: h,
                  isLoadingRates: g,
                  isAddressComplete: v,
                })
            );
          },
          kc = () => {
            const { extensions: e, receiveCart: t, ...o } = Ye(),
              c = { extensions: e, cart: o, context: "woocommerce/cart" };
            return (0, r.createElement)(vt.ExperimentalOrderMeta.Slot, {
              ...c,
            });
          };
        (0, u.registerBlockType)("woocommerce/cart-order-summary-block", {
          icon: {
            src: (0, r.createElement)(m.Z, {
              icon: Rr,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          edit: ({ clientId: e }) => {
            const t = (0, a.useBlockProps)(),
              { cartTotals: o } = Ye(),
              n = (0, Ut.getCurrencyFromPriceResponse)(o),
              s = Rt(vt.innerBlockAreas.CART_ORDER_SUMMARY),
              i = [
                [
                  "woocommerce/cart-order-summary-heading-block",
                  { content: (0, c.__)("Cart totals", "woocommerce") },
                  [],
                ],
                ["woocommerce/cart-order-summary-coupon-form-block", {}, []],
                ["woocommerce/cart-order-summary-subtotal-block", {}, []],
                ["woocommerce/cart-order-summary-fee-block", {}, []],
                ["woocommerce/cart-order-summary-discount-block", {}, []],
                ["woocommerce/cart-order-summary-shipping-block", {}, []],
                ["woocommerce/cart-order-summary-taxes-block", {}, []],
              ];
            return (
              Tt({ clientId: e, registeredBlocks: s, defaultTemplate: i }),
              (0, r.createElement)(
                "div",
                { ...t },
                (0, r.createElement)(a.InnerBlocks, {
                  allowedBlocks: s,
                  template: i,
                }),
                (0, r.createElement)(
                  "div",
                  { className: "wc-block-components-totals-wrapper" },
                  (0, r.createElement)(Br, { currency: n, values: o })
                ),
                (0, r.createElement)(kc, null)
              )
            );
          },
          save: () =>
            (0, r.createElement)(
              "div",
              { ...a.useBlockProps.save() },
              (0, r.createElement)(a.InnerBlocks.Content, null)
            ),
        });
        const Ec = ({ className: e = "" }) => {
          const { cartTotals: t } = Ye(),
            o = (0, Ut.getCurrencyFromPriceResponse)(t);
          return (0, r.createElement)(
            $t.TotalsWrapper,
            { className: e },
            (0, r.createElement)($t.Subtotal, { currency: o, values: t })
          );
        };
        (0, u.registerBlockType)(
          "woocommerce/cart-order-summary-subtotal-block",
          {
            icon: {
              src: (0, r.createElement)(m.Z, {
                icon: Rr,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                o = (0, a.useBlockProps)();
              return (0, r.createElement)(
                "div",
                { ...o },
                (0, r.createElement)(Ec, { className: t })
              );
            },
            save: () =>
              (0, r.createElement)("div", { ...a.useBlockProps.save() }),
          }
        );
        const yc = ({ className: e }) => {
          const { cartFees: t, cartTotals: o } = Ye(),
            c = (0, Ut.getCurrencyFromPriceResponse)(o);
          return (0, r.createElement)(
            $t.TotalsWrapper,
            { className: e },
            (0, r.createElement)($t.TotalsFees, { currency: c, cartFees: t })
          );
        };
        (0, u.registerBlockType)("woocommerce/cart-order-summary-fee-block", {
          icon: {
            src: (0, r.createElement)(m.Z, {
              icon: Rr,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          edit: ({ attributes: e }) => {
            const { className: t } = e,
              o = (0, a.useBlockProps)();
            return (0, r.createElement)(
              "div",
              { ...o },
              (0, r.createElement)(yc, { className: t })
            );
          },
          save: () =>
            (0, r.createElement)("div", { ...a.useBlockProps.save() }),
        });
        const bc = () => {
            const { extensions: e, receiveCart: t, ...o } = Ye(),
              c = { extensions: e, cart: o, context: "woocommerce/cart" };
            return (0, r.createElement)(vt.ExperimentalDiscountsMeta.Slot, {
              ...c,
            });
          },
          vc = ({ className: e }) => {
            const { cartTotals: t, cartCoupons: o } = Ye(),
              { removeCoupon: c, isRemovingCoupon: n } = sr("wc/cart"),
              s = (0, Ut.getCurrencyFromPriceResponse)(t);
            return (0, r.createElement)(
              r.Fragment,
              null,
              (0, r.createElement)(
                $t.TotalsWrapper,
                { className: e },
                (0, r.createElement)(Ar, {
                  cartCoupons: o,
                  currency: s,
                  isRemovingCoupon: n,
                  removeCoupon: c,
                  values: t,
                })
              ),
              (0, r.createElement)(bc, null)
            );
          };
        (0, u.registerBlockType)(
          "woocommerce/cart-order-summary-discount-block",
          {
            icon: {
              src: (0, r.createElement)(m.Z, {
                icon: Rr,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                o = (0, a.useBlockProps)();
              return (0, r.createElement)(
                "div",
                { ...o },
                (0, r.createElement)(vc, { className: t })
              );
            },
            save: () =>
              (0, r.createElement)("div", { ...a.useBlockProps.save() }),
          }
        );
        const fc = ({ className: e }) => {
          const { cartTotals: t, cartNeedsShipping: o } = Ye();
          if (!o) return null;
          const c = (0, Ut.getCurrencyFromPriceResponse)(t);
          return (0, r.createElement)(
            $t.TotalsWrapper,
            { className: e },
            (0, r.createElement)(wc, {
              showCalculator: (0, _.getSetting)(
                "isShippingCalculatorEnabled",
                !0
              ),
              showRateSelector: !0,
              values: t,
              currency: c,
            })
          );
        };
        (0, u.registerBlockType)(
          "woocommerce/cart-order-summary-shipping-block",
          {
            icon: {
              src: (0, r.createElement)(m.Z, {
                icon: Rr,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                o = (0, _.getSetting)("shippingEnabled", !0),
                n = (0, a.useBlockProps)();
              return (0, r.createElement)(
                "div",
                { ...n },
                (0, r.createElement)(
                  a.InspectorControls,
                  null,
                  !!o &&
                    (0, r.createElement)(
                      go.PanelBody,
                      {
                        title: (0, c.__)(
                          "Shipping Calculations",
                          "woocommerce"
                        ),
                      },
                      (0, r.createElement)(
                        "p",
                        { className: "wc-block-checkout__controls-text" },
                        (0, c.__)(
                          "Options that control shipping can be managed in your store settings.",
                          "woocommerce"
                        )
                      ),
                      (0, r.createElement)(
                        go.ExternalLink,
                        {
                          href: `${_.ADMIN_URL}admin.php?page=wc-settings&tab=shipping&section=options`,
                        },
                        (0, c.__)("Manage shipping options", "woocommerce")
                      ),
                      " "
                    )
                ),
                (0, r.createElement)(
                  Lt,
                  null,
                  (0, r.createElement)(fc, { className: t })
                )
              );
            },
            save: () =>
              (0, r.createElement)("div", { ...a.useBlockProps.save() }),
          }
        );
        var Cc = o(6855);
        const Sc = ({ className: e }) => {
          const t = (0, _.getSetting)("couponsEnabled", !0),
            { applyCoupon: o, isApplyingCoupon: c } = sr("wc/cart");
          return t
            ? (0, r.createElement)(
                $t.TotalsWrapper,
                { className: e },
                (0, r.createElement)(Tr, { onSubmit: o, isLoading: c })
              )
            : null;
        };
        (0, u.registerBlockType)(
          "woocommerce/cart-order-summary-coupon-form-block",
          {
            icon: {
              src: (0, r.createElement)(m.Z, {
                icon: Cc.Z,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            edit: ({ attributes: e }) => {
              const { className: t } = e,
                o = (0, a.useBlockProps)();
              return (0, r.createElement)(
                "div",
                { ...o },
                (0, r.createElement)(
                  Lt,
                  null,
                  (0, r.createElement)(Sc, { className: t })
                )
              );
            },
            save: () =>
              (0, r.createElement)("div", { ...a.useBlockProps.save() }),
          }
        );
        const Nc = ({ className: e, showRateAfterTaxName: t }) => {
            const { cartTotals: o } = Ye();
            if (
              (0, _.getSetting)("displayCartPricesIncludingTax", !1) ||
              parseInt(o.total_tax, 10) <= 0
            )
              return null;
            const c = (0, Ut.getCurrencyFromPriceResponse)(o);
            return (0, r.createElement)(
              $t.TotalsWrapper,
              { className: e },
              (0, r.createElement)($t.TotalsTaxes, {
                showRateAfterTaxName: t,
                currency: c,
                values: o,
              })
            );
          },
          Pc = {
            showRateAfterTaxName: {
              type: "boolean",
              default: (0, _.getSetting)("displayCartPricesIncludingTax", !1),
            },
            lock: { type: "object", default: { remove: !0, move: !1 } },
          };
        (0, u.registerBlockType)("woocommerce/cart-order-summary-taxes-block", {
          icon: {
            src: (0, r.createElement)(m.Z, {
              icon: Rr,
              className: "wc-block-editor-components-block-icon",
            }),
          },
          attributes: Pc,
          edit: ({ attributes: e, setAttributes: t }) => {
            const { className: o, showRateAfterTaxName: n } = e,
              s = (0, a.useBlockProps)(),
              i = (0, _.getSetting)("taxesEnabled"),
              l = (0, _.getSetting)("displayItemizedTaxes", !1),
              m = (0, _.getSetting)("displayCartPricesIncludingTax", !1);
            return (0, r.createElement)(
              "div",
              { ...s },
              (0, r.createElement)(
                a.InspectorControls,
                null,
                i &&
                  l &&
                  !m &&
                  (0, r.createElement)(
                    go.PanelBody,
                    { title: (0, c.__)("Taxes", "woocommerce") },
                    (0, r.createElement)(go.ToggleControl, {
                      label: (0, c.__)(
                        "Show rate after tax name",
                        "woocommerce"
                      ),
                      help: (0, c.__)(
                        "Show the percentage rate alongside each tax line in the summary.",
                        "woocommerce"
                      ),
                      checked: n,
                      onChange: () => t({ showRateAfterTaxName: !n }),
                    })
                  )
              ),
              (0, r.createElement)(Nc, {
                className: o,
                showRateAfterTaxName: n,
              })
            );
          },
          save: () =>
            (0, r.createElement)("div", { ...a.useBlockProps.save() }),
        }),
          o(3964),
          (0, u.registerBlockType)(
            "woocommerce/cart-order-summary-heading-block",
            {
              icon: {
                src: (0, r.createElement)(m.Z, {
                  icon: Rr,
                  className: "wc-block-editor-components-block-icon",
                }),
              },
              edit: ({ attributes: e, setAttributes: t }) => {
                const { content: o = "", className: c = "" } = e,
                  n = (0, a.useBlockProps)();
                return (0, r.createElement)(
                  "div",
                  { ...n },
                  (0, r.createElement)(
                    "span",
                    { className: s()(c, "wc-block-cart__totals-title") },
                    (0, r.createElement)(a.PlainText, {
                      className: "",
                      value: o,
                      onChange: (e) => t({ content: e }),
                      style: { backgroundColor: "transparent" },
                    })
                  )
                );
              },
              save: () =>
                (0, r.createElement)("div", { ...a.useBlockProps.save() }),
            }
          ),
          o(7994);
        const xc = (e, t = !0) => {
            t
              ? window.document.body.classList.add(e)
              : window.document.body.classList.remove(e);
          },
          Rc = ({ attributes: e, setAttributes: t }) => {
            const { hasDarkControls: o } = e;
            return (0, r.createElement)(
              a.InspectorControls,
              null,
              (0, r.createElement)(
                go.PanelBody,
                { title: (0, c.__)("Style", "woocommerce") },
                (0, r.createElement)(go.ToggleControl, {
                  label: (0, c.__)("Dark mode inputs", "woocommerce"),
                  help: (0, c.__)(
                    "Inputs styled specifically for use on dark background colors.",
                    "woocommerce"
                  ),
                  checked: o,
                  onChange: () => t({ hasDarkControls: !o }),
                })
              )
            );
          };
        o(4413);
        const Tc = (e, t) => {
            const [o, r] = (0, p.useState)(() => {
              const o = window.localStorage.getItem(e);
              if (o)
                try {
                  return JSON.parse(o);
                } catch {
                  console.error(
                    `Value for key '${e}' could not be retrieved from localStorage because it can't be parsed.`
                  );
                }
              return t;
            });
            return (
              (0, p.useEffect)(() => {
                try {
                  window.localStorage.setItem(e, JSON.stringify(o));
                } catch {
                  console.error(
                    `Value for key '${e}' could not be saved in localStorage because it can't be converted into a string.`
                  );
                }
              }, [e, o]),
              [o, r]
            );
          },
          Ic = [],
          Ac = ({ block: e }) => {
            const [t, o] = ((e) => {
                const [t, o] = Tc(
                    "wc-blocks_dismissed_sidebar_compatibility_notices",
                    Ic
                  ),
                  [r, c] = (0, p.useState)(!1),
                  n = t.includes(e);
                return (
                  (0, p.useEffect)(() => {
                    c(!n);
                  }, [n]),
                  [
                    r,
                    () => {
                      const r = new Set(t);
                      r.add(e), o([...r]);
                    },
                  ]
                );
              })(e),
              n = (0, p.createInterpolateElement)(
                (0, c.__)(
                  "The Cart & Checkout Blocks are built to optimize for faster checkout. To make sure this feature is right for your store, <a>review the list of compatible extensions</a>.",
                  "woocommerce"
                ),
                {
                  a: (0, r.createElement)(go.ExternalLink, {
                    href: "https://woocommerce.com/document/cart-checkout-blocks-support-status/#section-3",
                  }),
                }
              );
            return (0, r.createElement)(
              go.Notice,
              {
                onRemove: o,
                className: s()([
                  "wc-blocks-sidebar-compatibility-notice",
                  { "is-hidden": !t },
                ]),
              },
              n
            );
          };
        function Bc() {
          const e = (0, c.__)(
            "Your store does not have any payment methods that support the Checkout block. Once you have configured a compatible payment method it will be displayed here.",
            "woocommerce"
          );
          return (0, r.createElement)(
            go.Notice,
            {
              className: "wc-blocks-no-payment-methods-notice",
              status: "warning",
              spokenMessage: e,
              isDismissible: !1,
            },
            (0, r.createElement)(
              "div",
              { className: "wc-blocks-no-payment-methods-notice__content" },
              e,
              " ",
              (0, r.createElement)(
                go.ExternalLink,
                {
                  href: `${_.ADMIN_URL}admin.php?page=wc-settings&tab=checkout`,
                },
                (0, c.__)("Configure Payment Methods", "woocommerce")
              )
            )
          );
        }
        o(9245);
        const Mc = window.wp.editor,
          Oc = window.wp.coreData;
        function Dc({ block: e }) {
          const t = "checkout" === e ? R : T,
            o =
              "checkout" === e
                ? "woocommerce_checkout_page_id"
                : "woocommerce_cart_page_id",
            { saveEntityRecord: n } = (0, H.useDispatch)(Oc.store),
            { editPost: s, savePost: a } = (0, H.useDispatch)(Mc.store),
            {
              slug: i,
              postPublished: l,
              currentPostId: m,
            } = (0, H.useSelect)((o) => {
              var r;
              const { getEntityRecord: c } = o(Oc.store),
                { isCurrentPostPublished: n, getCurrentPostId: s } = o(
                  Mc.store
                );
              return {
                slug:
                  (null === (r = c("postType", "page", t)) || void 0 === r
                    ? void 0
                    : r.slug) || e,
                postPublished: n(),
                currentPostId: s(),
              };
            }, []),
            [u, d] = (0, p.useState)("pristine"),
            _ = (0, p.useCallback)(() => {
              d("updating"),
                Promise.resolve()
                  .then(() =>
                    ht()({
                      path: `/wc/v3/settings/advanced/${o}`,
                      method: "GET",
                    })
                  )
                  .catch((e) => {
                    "rest_setting_setting_invalid" === e.code && d("error");
                  })
                  .then(() => {
                    if (!l) return s({ status: "publish" }), a();
                  })
                  .then(() =>
                    ht()({
                      path: `/wc/v3/settings/advanced/${o}`,
                      method: "POST",
                      data: { value: m.toString() },
                    })
                  )
                  .then(() => {
                    if (0 !== t)
                      return n("postType", "page", { id: t, slug: `${i}-2` });
                  })
                  .then(() => s({ slug: i }))
                  .then(() => a())
                  .then(() => d("updated"));
            }, [l, s, a, o, m, t, n, i]);
          let h;
          return (
            (h =
              "checkout" === e
                ? (0, p.createInterpolateElement)(
                    (0, c.__)(
                      "If you would like to use this block as your default checkout, <a>update your page settings</a>.",
                      "woocommerce"
                    ),
                    {
                      a: (0, r.createElement)(
                        "a",
                        { href: "#", onClick: _ },
                        (0, c.__)("update your page settings", "woocommerce")
                      ),
                    }
                  )
                : (0, p.createInterpolateElement)(
                    (0, c.__)(
                      "If you would like to use this block as your default cart, <a>update your page settings</a>.",
                      "woocommerce"
                    ),
                    {
                      a: (0, r.createElement)(
                        "a",
                        { href: "#", onClick: _ },
                        (0, c.__)("update your page settings", "woocommerce")
                      ),
                    }
                  )),
            ("string" == typeof pagenow && "site-editor" === pagenow) ||
            m === t ||
            "dismissed" === u
              ? null
              : (0, r.createElement)(
                  go.Notice,
                  {
                    className: "wc-default-page-notice",
                    status: "updated" === u ? "success" : "info",
                    onRemove: () => d("dismissed"),
                    spokenMessage:
                      "updated" === u
                        ? (0, c.__)("Page settings updated", "woocommerce")
                        : h,
                  },
                  "updated" === u
                    ? (0, c.__)("Page settings updated", "woocommerce")
                    : (0, r.createElement)(
                        r.Fragment,
                        null,
                        (0, r.createElement)("p", null, h)
                      )
                )
          );
        }
        o(4828);
        const Lc = {
            warning: "#F0B849",
            error: "#CC1818",
            success: "#46B450",
            info: "#0073AA",
          },
          Fc = ({ status: e = "warning", ...t }) =>
            (0, r.createElement)(
              i.SVG,
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                ...t,
              },
              (0, r.createElement)("path", {
                d: "M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z",
                stroke: Lc[e],
                strokeWidth: "1.5",
              }),
              (0, r.createElement)("path", {
                d: "M13 7H11V13H13V7Z",
                fill: Lc[e],
              }),
              (0, r.createElement)("path", {
                d: "M13 15H11V17H13V15Z",
                fill: Lc[e],
              })
            );
        var Vc = o(7642);
        const Yc = [],
          $c = window.wp.notices;
        var Uc = o(5146);
        const jc = !1,
          zc = o.n(Uc)()("wc-admin:tracks");
        function Kc(e, t) {
          return (
            zc("recordevent %s %o", "wcadmin_" + e, t, {
              _tqk: window._tkq,
              shouldRecord: !(
                jc ||
                !window._tkq ||
                !window.wcTracks ||
                !window.wcTracks.isEnabled
              ),
            }),
            !(
              !window.wcTracks ||
              "function" != typeof window.wcTracks.recordEvent
            ) &&
              (jc
                ? (window.wcTracks.validateEvent(e, t), !1)
                : void window.wcTracks.recordEvent(e, t))
          );
        }
        const Hc = ({ blocks: e, findCondition: t }) => {
            for (const o of e) {
              if (t(o)) return o;
              if (o.innerBlocks) {
                const e = Hc({ blocks: o.innerBlocks, findCondition: t });
                if (e) return e;
              }
            }
          },
          qc = ({ blockType: e = "woocommerce/cart" }) =>
            "woocommerce/cart" === e
              ? (0, r.createElement)(
                  "p",
                  null,
                  (0, c.__)(
                    "If you continue, the cart block will be replaced with the classic experience powered by shortcodes. This means that you may lose customizations that you made to the cart block.",
                    "woocommerce"
                  )
                )
              : (0, r.createElement)(
                  r.Fragment,
                  null,
                  (0, r.createElement)(
                    "p",
                    null,
                    (0, c.__)(
                      "If you continue, the checkout block will be replaced with the classic experience powered by shortcodes. This means that you may lose:",
                      "woocommerce"
                    )
                  ),
                  (0, r.createElement)(
                    "ul",
                    { className: "cross-list" },
                    (0, r.createElement)(
                      "li",
                      null,
                      (0, c.__)(
                        "Customizations and updates to the block",
                        "woocommerce"
                      )
                    ),
                    (0, r.createElement)(
                      "li",
                      null,
                      (0, c.__)(
                        "Additional local pickup options created for the new checkout",
                        "woocommerce"
                      )
                    )
                  )
                );
        function Zc({ block: e, clientId: t }) {
          const { createInfoNotice: o } = (0, H.useDispatch)($c.store),
            { replaceBlock: n, selectBlock: s } = (0, H.useDispatch)(a.store),
            [i, l] = (0, p.useState)(!1),
            m = () => l(!1),
            { undo: d } = (0, H.useDispatch)(Oc.store),
            _ =
              "woocommerce/cart" === e
                ? (0, c.__)("Switch to classic cart", "woocommerce")
                : (0, c.__)("Switch to classic checkout", "woocommerce"),
            h =
              "woocommerce/cart" === e
                ? (0, c.__)("Switched to classic cart.", "woocommerce")
                : (0, c.__)("Switched to classic checkout.", "woocommerce"),
            { getBlocks: g } = (0, H.useSelect)(
              (e) => ({ getBlocks: e(a.store).getBlocks }),
              []
            ),
            w = () => {
              d(),
                Kc("switch_to_classic_shortcode_undo", {
                  shortcode: "woocommerce/checkout" === e ? "checkout" : "cart",
                });
            };
          return (0, r.createElement)(
            r.Fragment,
            null,
            (0, r.createElement)(
              go.Button,
              {
                variant: "secondary",
                onClick: () => {
                  Kc("switch_to_classic_shortcode_click", {
                    shortcode:
                      "woocommerce/checkout" === e ? "checkout" : "cart",
                  }),
                    l(!0);
                },
              },
              _
            ),
            i &&
              (0, r.createElement)(
                go.Modal,
                {
                  size: "medium",
                  title: _,
                  onRequestClose: m,
                  className:
                    "wc-blocks-switch-to-classic-shortcode-modal-content",
                },
                (0, r.createElement)(qc, { blockType: e }),
                (0, r.createElement)(
                  go.TabbableContainer,
                  {
                    className:
                      "wc-blocks-switch-to-classic-shortcode-modal-actions",
                  },
                  (0, r.createElement)(
                    go.Button,
                    {
                      variant: "primary",
                      isDestructive: !0,
                      onClick: () => {
                        n(
                          t,
                          (0, u.createBlock)("woocommerce/classic-shortcode", {
                            shortcode:
                              "woocommerce/checkout" === e
                                ? "checkout"
                                : "cart",
                          })
                        ),
                          Kc("switch_to_classic_shortcode_confirm", {
                            shortcode:
                              "woocommerce/checkout" === e
                                ? "checkout"
                                : "cart",
                          }),
                          (() => {
                            const e = Hc({
                              blocks: g(),
                              findCondition: (e) =>
                                "woocommerce/classic-shortcode" === e.name,
                            });
                            e && s(e.clientId);
                          })(),
                          o(h, {
                            actions: [
                              {
                                label: (0, c.__)("Undo", "woocommerce"),
                                onClick: w,
                              },
                            ],
                            type: "snackbar",
                          }),
                          m();
                      },
                    },
                    (0, c.__)("Switch", "woocommerce")
                  ),
                  " ",
                  (0, r.createElement)(
                    go.Button,
                    {
                      variant: "secondary",
                      onClick: () => {
                        Kc("switch_to_classic_shortcode_cancel", {
                          shortcode:
                            "woocommerce/checkout" === e ? "checkout" : "cart",
                        }),
                          m();
                      },
                    },
                    (0, c.__)("Cancel", "woocommerce")
                  )
                )
              )
          );
        }
        function Wc({ toggleDismissedStatus: e, block: t, clientId: o }) {
          const [n, s, a, i] = ((e) => {
            const [t, o, r] = (() => {
                const e = {};
                (0, _.getSetting)("incompatibleExtensions") &&
                  (0, _.getSetting)("incompatibleExtensions").forEach((t) => {
                    e[t.id] = t.title;
                  });
                const t = Object.keys(e),
                  o = t.length;
                return [e, t, o];
              })(),
              [c, n, s] = (() => {
                const { incompatiblePaymentMethods: e } = (0, H.useSelect)(
                    (e) => {
                      const { getIncompatiblePaymentMethods: t } = e(mr);
                      return { incompatiblePaymentMethods: t() };
                    },
                    []
                  ),
                  t = Object.keys(e);
                return [e, t, t.length];
              })(),
              a = { ...t, ...c },
              i = [...o, ...n],
              l = r + s,
              [m, u] = Tc(
                "wc-blocks_dismissed_incompatible_extensions_notices",
                Yc
              ),
              [d, h] = (0, p.useState)(!1),
              g = m.some((t) => {
                return (
                  Object.keys(t).includes(e) &&
                  ((o = t[e]),
                  (r = i),
                  o.length === r.length &&
                    new Set([...o, ...r]).size === o.length)
                );
                var o, r;
              }),
              w = 0 === l || g;
            return (
              (0, p.useEffect)(() => {
                h(!w),
                  w ||
                    g ||
                    u((t) =>
                      t.reduce(
                        (t, o) => (Object.keys(o).includes(e) || t.push(o), t),
                        []
                      )
                    );
              }, [w, g, u, e]),
              [
                d,
                () => {
                  const t = new Set(m);
                  t.add({ [e]: i }), u([...t]);
                },
                ((k = a),
                Object.fromEntries(
                  Object.entries(k).sort(([, e], [, t]) => e.localeCompare(t))
                )),
                l,
              ]
            );
            var k;
          })(t);
          if (
            ((0, p.useEffect)(() => {
              e(!n);
            }, [n, e]),
            !n)
          )
            return null;
          const l = (0, r.createElement)(
              r.Fragment,
              null,
              i > 1
                ? (0, p.createInterpolateElement)(
                    (0, c.__)(
                      "Some active extensions do not yet support this block. This may impact the shopper experience. <a>Learn more</a>",
                      "woocommerce"
                    ),
                    {
                      a: (0, r.createElement)(go.ExternalLink, {
                        href: "https://woocommerce.com/document/cart-checkout-blocks-support-status/",
                      }),
                    }
                  )
                : (0, p.createInterpolateElement)(
                    (0, c.sprintf)(
                      // translators: %s is the name of the extension.
                      // translators: %s is the name of the extension.
                      (0, c.__)(
                        "<strong>%s</strong> does not yet support this block. This may impact the shopper experience. <a>Learn more</a>",
                        "woocommerce"
                      ),
                      Object.values(a)[0]
                    ),
                    {
                      strong: (0, r.createElement)("strong", null),
                      a: (0, r.createElement)(go.ExternalLink, {
                        href: "https://woocommerce.com/document/cart-checkout-blocks-support-status/",
                      }),
                    }
                  )
            ),
            u = Object.entries(a),
            d = u.length - 2;
          return (0, r.createElement)(
            go.Notice,
            {
              className: "wc-blocks-incompatible-extensions-notice",
              status: "warning",
              onRemove: s,
              spokenMessage: l,
            },
            (0, r.createElement)(
              "div",
              {
                className: "wc-blocks-incompatible-extensions-notice__content",
              },
              (0, r.createElement)(m.Z, {
                className:
                  "wc-blocks-incompatible-extensions-notice__warning-icon",
                icon: (0, r.createElement)(Fc, null),
              }),
              (0, r.createElement)(
                "div",
                null,
                (0, r.createElement)("p", null, l),
                i > 1 &&
                  (0, r.createElement)(
                    "ul",
                    null,
                    u
                      .slice(0, 2)
                      .map(([e, t]) =>
                        (0, r.createElement)(
                          "li",
                          {
                            key: e,
                            className:
                              "wc-blocks-incompatible-extensions-notice__element",
                          },
                          t
                        )
                      )
                  ),
                u.length > 2 &&
                  (0, r.createElement)(
                    "details",
                    null,
                    (0, r.createElement)(
                      "summary",
                      null,
                      (0, r.createElement)(
                        "span",
                        null,
                        (0, c.sprintf)(
                          // translators: %s is the number of incompatible extensions.
                          // translators: %s is the number of incompatible extensions.
                          (0, c._n)(
                            "%s more incompatibility",
                            "%s more incompatibilites",
                            d,
                            "woocommerce"
                          ),
                          d
                        )
                      ),
                      (0, r.createElement)(m.Z, { icon: Vc.Z })
                    ),
                    (0, r.createElement)(
                      "ul",
                      null,
                      u
                        .slice(2)
                        .map(([e, t]) =>
                          (0, r.createElement)(
                            "li",
                            {
                              key: e,
                              className:
                                "wc-blocks-incompatible-extensions-notice__element",
                            },
                            t
                          )
                        )
                    )
                  ),
                (0, r.createElement)(Zc, { block: t, clientId: o })
              )
            )
          );
        }
        o(8861), o(9781);
        var Gc = o(6554),
          Qc = o(5656);
        o(1612);
        const Xc = ({
            text: e,
            title: t = (0, c.__)("Feedback?", "woocommerce"),
            url: o,
          }) => {
            const [n, s] = (0, p.useState)(!1);
            return (
              (0, p.useEffect)(() => {
                s(!0);
              }, []),
              (0, r.createElement)(
                r.Fragment,
                null,
                n &&
                  (0, r.createElement)(
                    "div",
                    { className: "wc-block-feedback-prompt" },
                    (0, r.createElement)(m.Z, { icon: Gc.Z }),
                    (0, r.createElement)(
                      "h2",
                      { className: "wc-block-feedback-prompt__title" },
                      t
                    ),
                    (0, r.createElement)(
                      "p",
                      { className: "wc-block-feedback-prompt__text" },
                      e
                    ),
                    (0, r.createElement)(
                      "a",
                      {
                        href: o,
                        className: "wc-block-feedback-prompt__link",
                        rel: "noreferrer noopener",
                        target: "_blank",
                      },
                      (0, c.__)("Give us your feedback.", "woocommerce"),
                      (0, r.createElement)(m.Z, { icon: Qc.Z, size: 16 })
                    )
                  )
              )
            );
          },
          Jc = () =>
            (0, r.createElement)(Xc, {
              text: (0, c.__)(
                "We are currently working on improving our cart and checkout blocks to provide merchants with the tools and customization options they need.",
                "woocommerce"
              ),
              url: "https://github.com/woocommerce/woocommerce/discussions/new?category=checkout-flow&labels=type%3A+product%20feedback",
            }),
          en = (0, Ct.createHigherOrderComponent)(
            (e) => (t) => {
              const { clientId: o, name: c, isSelected: n } = t,
                [s, i] = (0, p.useState)(!0),
                {
                  isCart: l,
                  isCheckout: m,
                  isPaymentMethodsBlock: u,
                  hasPaymentMethods: d,
                  parentId: _,
                } = (0, H.useSelect)((e) => {
                  const { getBlockParentsByBlockName: t, getBlockName: r } = e(
                      a.store
                    ),
                    c = t(o, [
                      "woocommerce/cart",
                      "woocommerce/checkout",
                    ]).reduce((e, t) => ((e[r(t)] = t), e), {}),
                    n = r(o),
                    s = Object.keys(c).includes("woocommerce/cart"),
                    i = Object.keys(c).includes("woocommerce/checkout"),
                    l = "woocommerce/cart" === n || s,
                    m = l ? "woocommerce/cart" : "woocommerce/checkout";
                  return {
                    isCart: l,
                    isCheckout: "woocommerce/checkout" === n || i,
                    parentId: n === m ? o : c[m],
                    isPaymentMethodsBlock:
                      "woocommerce/checkout-payment-block" === n,
                    hasPaymentMethods:
                      e(Q.PAYMENT_STORE_KEY).paymentMethodsInitialized() &&
                      Object.keys(
                        e(Q.PAYMENT_STORE_KEY).getAvailablePaymentMethods()
                      ).length > 0,
                  };
                });
              return c.startsWith("woocommerce/") && n && (l || m)
                ? (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)(
                      a.InspectorControls,
                      null,
                      (0, r.createElement)(Wc, {
                        toggleDismissedStatus: (e) => {
                          i(e);
                        },
                        block: l ? "woocommerce/cart" : "woocommerce/checkout",
                        clientId: _,
                      }),
                      (0, r.createElement)(Dc, {
                        block: m ? "checkout" : "cart",
                      }),
                      s
                        ? (0, r.createElement)(Ac, {
                            block: m ? "checkout" : "cart",
                          })
                        : null,
                      u && !d && (0, r.createElement)(Bc, null),
                      (0, r.createElement)(Jc, null)
                    ),
                    (0, r.createElement)(e, { key: "edit", ...t })
                  )
                : (0, r.createElement)(e, { key: "edit", ...t });
            },
            "withSidebarNotices"
          );
        (0, Qe.hasFilter)(
          "editor.BlockEdit",
          "woocommerce/add/sidebar-compatibility-notice"
        ) ||
          (0, Qe.addFilter)(
            "editor.BlockEdit",
            "woocommerce/add/sidebar-compatibility-notice",
            en,
            11
          );
        const tn = (0, r.createElement)(
            i.SVG,
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            (0, r.createElement)("path", {
              fill: "none",
              d: "M0 0h24v24H0V0z",
            }),
            (0, r.createElement)("path", {
              d: "M12 6a9.77 9.77 0 0 1 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0 1 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z",
            })
          ),
          on = (e, t, o = !0) => {
            const { updateBlockAttributes: r, selectBlock: c } = (0,
            H.dispatch)("core/block-editor");
            var n, s;
            r(e, { currentView: t }),
              o &&
                c(
                  (null ===
                    (n = (0, H.select)("core/block-editor").getBlock(e)) ||
                  void 0 === n ||
                  null === (s = n.innerBlocks.find((e) => e.name === t)) ||
                  void 0 === s
                    ? void 0
                    : s.clientId) || e
                );
          },
          rn = { views: [], currentView: "", viewClientId: "" },
          cn = (e, t = 10, o = 0) => {
            const r = o + 1;
            if (r > t) return rn;
            const { getBlockAttributes: c, getBlockRootClientId: n } = (0,
              H.select)("core/block-editor"),
              s = n(e);
            if (null === s || "" === s) return rn;
            const a = c(s);
            return a
              ? void 0 !== a.editorViews
                ? {
                    views: a.editorViews,
                    currentView: a.currentView || a.editorViews[0].view,
                    viewClientId: s,
                  }
                : cn(s, t, r)
              : rn;
          },
          nn = ({ currentView: e, views: t, clientId: o }) => {
            const {
                getBlockName: n,
                getSelectedBlockClientId: s,
                getBlockParentsByBlockName: i,
              } = (0, H.useSelect)((e) => {
                const t = e("core/block-editor");
                return {
                  getBlockName: t.getBlockName,
                  getSelectedBlockClientId: t.getSelectedBlockClientId,
                  getBlockParentsByBlockName: t.getBlockParentsByBlockName,
                };
              }, []),
              l = s(),
              u = ((e, t) => t.find((t) => t.view === e))(e, t) || t[0],
              d = u.label;
            return (
              (0, p.useLayoutEffect)(() => {
                const r = l ? n(l) : null;
                if (!r || e === r) return;
                const c = t.map((e) => e.view);
                if (c.includes(r)) return void on(o, r);
                const s = i(l, c),
                  a = 1 === s.length ? n(s[0]) : null;
                a && e !== a && on(o, a, !1);
              }, [o, e, n, i, l, t]),
              (0, r.createElement)(
                a.BlockControls,
                null,
                (0, r.createElement)(
                  go.ToolbarGroup,
                  null,
                  (0, r.createElement)(go.ToolbarDropdownMenu, {
                    label: (0, c.__)("Switch view", "woocommerce"),
                    text: d,
                    icon: (0, r.createElement)(m.Z, {
                      icon: tn,
                      style: { marginRight: "8px" },
                    }),
                    controls: t.map((t) => ({
                      ...t,
                      title: (0, r.createElement)(
                        "span",
                        { style: { marginLeft: "8px" } },
                        t.label
                      ),
                      isActive: t.view === e,
                      onClick: () => {
                        on(o, t.view);
                      },
                    })),
                  })
                )
              )
            );
          };
        (0, Qe.hasFilter)(
          "editor.BlockEdit",
          "woocommerce/with-view-switcher"
        ) ||
          (0, Qe.addFilter)(
            "editor.BlockEdit",
            "woocommerce/with-view-switcher",
            (e) => (t) => {
              const { clientId: o } = t,
                {
                  views: c,
                  currentView: n,
                  viewClientId: s,
                } = (0, H.useSelect)((e) => {
                  const t = e("core/block-editor").getBlockAttributes(o);
                  return null != t && t.editorViews
                    ? {
                        views: t.editorViews,
                        currentView: t.currentView,
                        viewClientId: o,
                      }
                    : cn(o);
                });
              return 0 === c.length
                ? (0, r.createElement)(e, { ...t })
                : (0, r.createElement)(
                    r.Fragment,
                    null,
                    (0, r.createElement)(nn, {
                      currentView: n,
                      views: c,
                      clientId: s,
                    }),
                    (0, r.createElement)(e, { ...t })
                  );
            },
            11
          ),
          (0, Qe.hasFilter)(
            "blocks.registerBlockType",
            "core/lock/addAttribute"
          ) ||
            (0, H.subscribe)(() => {
              var e, t, o, r;
              const c = (0, H.select)(a.store);
              if (!c) return;
              const n = c.getSelectedBlock();
              n &&
                (xc(
                  "wc-lock-selected-block--remove",
                  !(
                    null == n ||
                    null === (e = n.attributes) ||
                    void 0 === e ||
                    null === (t = e.lock) ||
                    void 0 === t ||
                    !t.remove
                  )
                ),
                xc(
                  "wc-lock-selected-block--move",
                  !(
                    null == n ||
                    null === (o = n.attributes) ||
                    void 0 === o ||
                    null === (r = o.lock) ||
                    void 0 === r ||
                    !r.move
                  )
                ));
            });
        const sn = [
          "woocommerce/filled-cart-block",
          "woocommerce/empty-cart-block",
        ];
        o(2784);
        const an = {
            isPreview: { type: "boolean", default: !1 },
            currentView: {
              type: "string",
              default: "woocommerce/filled-cart-block",
              source: "readonly",
            },
            editorViews: {
              type: "object",
              default: [
                {
                  view: "woocommerce/filled-cart-block",
                  label: (0, c.__)("Filled Cart", "woocommerce"),
                  icon: (0, r.createElement)(m.Z, { icon: ft }),
                },
                {
                  view: "woocommerce/empty-cart-block",
                  label: (0, c.__)("Empty Cart", "woocommerce"),
                  icon: (0, r.createElement)(m.Z, { icon: Cr }),
                },
              ],
            },
            hasDarkControls: {
              type: "boolean",
              default: (0, _.getSetting)("hasDarkEditorStyleSupport", !1),
            },
            isShippingCalculatorEnabled: {
              type: "boolean",
              default: (0, _.getSetting)("isShippingCalculatorEnabled", !0),
            },
            checkoutPageId: { type: "number", default: 0 },
            showRateAfterTaxName: { type: "boolean", default: !0 },
            align: { type: "string", default: "wide" },
          },
          ln = {
            title: (0, c.__)("Cart", "woocommerce"),
            icon: {
              src: (0, r.createElement)(m.Z, {
                icon: l,
                className: "wc-block-editor-components-block-icon",
              }),
            },
            category: "woocommerce",
            keywords: [(0, c.__)("WooCommerce", "woocommerce")],
            description: (0, c.__)("Shopping cart.", "woocommerce"),
            supports: { align: ["wide"], html: !1, multiple: !1 },
            example: { attributes: { isPreview: !0 }, viewportWidth: 800 },
            attributes: an,
            edit: ({
              clientId: e,
              className: t,
              attributes: o,
              setAttributes: n,
            }) => {
              const {
                  hasDarkControls: i,
                  currentView: l,
                  isPreview: m = !1,
                } = o,
                d = ((e = {}) => {
                  const t = (0, p.useRef)(),
                    o = (0, a.useBlockProps)({ ref: t, ...e });
                  return (
                    (({ ref: e }) => {
                      const t = (0, Qe.hasFilter)(
                          "blocks.registerBlockType",
                          "core/lock/addAttribute"
                        ),
                        o = e.current;
                      (0, p.useEffect)(() => {
                        if (o && !t)
                          return (
                            o.addEventListener("keydown", e, {
                              capture: !0,
                              passive: !1,
                            }),
                            () => {
                              o.removeEventListener("keydown", e, {
                                capture: !0,
                              });
                            }
                          );
                        function e(e) {
                          const { keyCode: t, target: o } = e;
                          if (!(o instanceof HTMLElement)) return;
                          if (t !== Vt.BACKSPACE && t !== Vt.DELETE) return;
                          if ((0, Mt.isTextField)(o)) return;
                          const r = o;
                          if (void 0 === r.dataset.block) return;
                          const c = ((e) => {
                            var t, o, r, c, n;
                            if (!e) return !1;
                            const { getBlock: s } = (0, H.select)(a.store),
                              i = s(e);
                            if (
                              "boolean" ==
                              typeof (null == i ||
                              null === (t = i.attributes) ||
                              void 0 === t ||
                              null === (o = t.lock) ||
                              void 0 === o
                                ? void 0
                                : o.remove)
                            )
                              return i.attributes.lock.remove;
                            const l = (0, u.getBlockType)(i.name);
                            var m, d, p;
                            return (
                              "boolean" ==
                                typeof (null == l ||
                                null === (r = l.attributes) ||
                                void 0 === r ||
                                null === (c = r.lock) ||
                                void 0 === c ||
                                null === (n = c.default) ||
                                void 0 === n
                                  ? void 0
                                  : n.remove) &&
                              (null == l ||
                              null === (m = l.attributes) ||
                              void 0 === m ||
                              null === (d = m.lock) ||
                              void 0 === d ||
                              null === (p = d.default) ||
                              void 0 === p
                                ? void 0
                                : p.remove)
                            );
                          })(r.dataset.block);
                          c &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            e.stopImmediatePropagation());
                        }
                      }, [o, t]);
                    })({ ref: t }),
                    o
                  );
                })({
                  className: s()(t, "wp-block-woocommerce-cart", {
                    "is-editor-preview": m,
                  }),
                }),
                _ = (0, p.useRef)(
                  (0, Ne.getQueryArg)(window.location.href, "focus")
                );
              return (
                (0, p.useEffect)(() => {
                  "cart" !== _.current ||
                    (0, H.select)("core/block-editor").hasSelectedBlock() ||
                    ((0, H.dispatch)("core/block-editor").selectBlock(e),
                    (0, H.dispatch)("core/interface").enableComplementaryArea(
                      "core/edit-site",
                      "edit-site/block-inspector"
                    ));
                }, [e]),
                (0, r.createElement)(
                  "div",
                  { ...d },
                  (0, r.createElement)(
                    a.InspectorControls,
                    null,
                    (0, r.createElement)(Rc, {
                      attributes: o,
                      setAttributes: n,
                    })
                  ),
                  (0, r.createElement)(
                    K,
                    {
                      header: (0, c.__)("Cart Block Error", "woocommerce"),
                      text: (0, c.__)(
                        "There was an error whilst rendering the cart block. If this problem continues, try re-creating the block.",
                        "woocommerce"
                      ),
                      showErrorMessage: !0,
                      errorMessagePrefix: (0, c.__)(
                        "Error message:",
                        "woocommerce"
                      ),
                    },
                    (0, r.createElement)(
                      W,
                      {
                        previewData: { previewCart: Ge },
                        currentView: l,
                        isPreview: m,
                      },
                      (0, r.createElement)(
                        It.Provider,
                        { value: { hasDarkControls: i } },
                        (0, r.createElement)(
                          vt.SlotFillProvider,
                          null,
                          (0, r.createElement)(
                            bt,
                            null,
                            (0, r.createElement)(a.InnerBlocks, {
                              allowedBlocks: sn,
                              template: [
                                ["woocommerce/filled-cart-block", {}, []],
                                ["woocommerce/empty-cart-block", {}, []],
                              ],
                              templateLock: "insert",
                            })
                          )
                        )
                      )
                    )
                  )
                )
              );
            },
            save: () =>
              (0, r.createElement)(
                "div",
                { ...a.useBlockProps.save({ className: "is-loading" }) },
                (0, r.createElement)(a.InnerBlocks.Content, null)
              ),
            transforms: {
              to: [
                {
                  type: "block",
                  blocks: ["woocommerce/classic-shortcode"],
                  transform: (e) =>
                    (0, u.createBlock)(
                      "woocommerce/classic-shortcode",
                      { shortcode: "cart", align: e.align },
                      []
                    ),
                },
              ],
            },
            deprecated: [
              {
                attributes: an,
                save: ({ attributes: e }) =>
                  (0, r.createElement)(
                    "div",
                    { className: s()("is-loading", e.className) },
                    (0, r.createElement)(a.InnerBlocks.Content, null)
                  ),
                migrate: (e, t) => {
                  const { checkoutPageId: o, align: r } = e;
                  return [
                    e,
                    [
                      (0, u.createBlock)(
                        "woocommerce/filled-cart-block",
                        { align: r },
                        [
                          (0, u.createBlock)("woocommerce/cart-items-block"),
                          (0, u.createBlock)(
                            "woocommerce/cart-totals-block",
                            {},
                            [
                              (0, u.createBlock)(
                                "woocommerce/cart-order-summary-block",
                                {}
                              ),
                              (0, u.createBlock)(
                                "woocommerce/cart-express-payment-block"
                              ),
                              (0, u.createBlock)(
                                "woocommerce/proceed-to-checkout-block",
                                { checkoutPageId: o }
                              ),
                              (0, u.createBlock)(
                                "woocommerce/cart-accepted-payment-methods-block"
                              ),
                            ]
                          ),
                        ]
                      ),
                      (0, u.createBlock)(
                        "woocommerce/empty-cart-block",
                        { align: r },
                        t
                      ),
                    ],
                  ];
                },
                isEligible: (e, t) =>
                  !t.find((e) => "woocommerce/filled-cart-block" === e.name),
              },
            ],
          };
        (0, u.registerBlockType)("woocommerce/cart", ln);
      },
      4466: () => {},
      3030: () => {},
      2499: () => {},
      3902: () => {},
      9375: () => {},
      8406: () => {},
      1029: () => {},
      9510: () => {},
      6391: () => {},
      3169: () => {},
      2930: () => {},
      3804: () => {},
      6021: () => {},
      313: () => {},
      7099: () => {},
      1691: () => {},
      4970: () => {},
      4554: () => {},
      6968: () => {},
      2750: () => {},
      7368: () => {},
      991: () => {},
      946: () => {},
      333: () => {},
      6645: () => {},
      8968: () => {},
      906: () => {},
      6115: () => {},
      9660: () => {},
      7994: () => {},
      810: () => {},
      7002: () => {},
      7600: () => {},
      3964: () => {},
      4723: () => {},
      2800: () => {},
      5003: () => {},
      2317: () => {},
      2784: () => {},
      4828: () => {},
      1612: () => {},
      9781: () => {},
      9245: () => {},
      4413: () => {},
      8861: () => {},
      7440: () => {},
      9196: (e) => {
        "use strict";
        e.exports = window.React;
      },
      2819: (e) => {
        "use strict";
        e.exports = window.lodash;
      },
      5158: (e) => {
        "use strict";
        e.exports = window.wp.a11y;
      },
      4333: (e) => {
        "use strict";
        e.exports = window.wp.compose;
      },
      7180: (e) => {
        "use strict";
        e.exports = window.wp.deprecated;
      },
      5904: (e) => {
        "use strict";
        e.exports = window.wp.dom;
      },
      9307: (e) => {
        "use strict";
        e.exports = window.wp.element;
      },
      5736: (e) => {
        "use strict";
        e.exports = window.wp.i18n;
      },
      9127: (e) => {
        "use strict";
        e.exports = window.wp.isShallowEqual;
      },
      9630: (e) => {
        "use strict";
        e.exports = window.wp.keycodes;
      },
      444: (e) => {
        "use strict";
        e.exports = window.wp.primitives;
      },
      2560: (e) => {
        "use strict";
        e.exports = window.wp.warning;
      },
    },
    o = {};
  function r(e) {
    var c = o[e];
    if (void 0 !== c) return c.exports;
    var n = (o[e] = { exports: {} });
    return t[e].call(n.exports, n, n.exports, r), n.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = (t, o, c, n) => {
      if (!o) {
        var s = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [o, c, n] = e[m], a = !0, i = 0; i < o.length; i++)
            (!1 & n || s >= n) && Object.keys(r.O).every((e) => r.O[e](o[i]))
              ? o.splice(i--, 1)
              : ((a = !1), n < s && (s = n));
          if (a) {
            e.splice(m--, 1);
            var l = c();
            void 0 !== l && (t = l);
          }
        }
        return t;
      }
      n = n || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > n; m--) e[m] = e[m - 1];
      e[m] = [o, c, n];
    }),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (r.d = (e, t) => {
      for (var o in t)
        r.o(t, o) &&
          !r.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.j = 511),
    (() => {
      var e = { 511: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var c,
            n,
            [s, a, i] = o,
            l = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (c in a) r.o(a, c) && (r.m[c] = a[c]);
            if (i) var m = i(r);
          }
          for (t && t(o); l < s.length; l++)
            (n = s[l]), r.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return r.O(m);
        },
        o = (self.webpackChunkwebpackWcBlocksJsonp =
          self.webpackChunkwebpackWcBlocksJsonp || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var c = r.O(void 0, [2869], () => r(2258));
  (c = r.O(c)),
    (((this.wc = this.wc || {}).blocks = this.wc.blocks || {}).cart = c);
})();
