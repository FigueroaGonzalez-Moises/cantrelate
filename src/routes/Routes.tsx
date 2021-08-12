import { Route, Redirect, Switch } from "react-router-dom";
import Products from "../components/products/Products";
import UsersOrders from "../components/UsersOrders";
import ProductDetails from "../components/products/ProductDetails";
import Cart from "../components/checkout/Cart";
import Checkout from "../components/checkout/Checkout";
import { Elements, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import ShippingPolicy from "../components/ShippingPolicy";
import OrderSuccess from "../components/OrderSuccess";
import ViewSection from "../components/Sections/ViewSection";

export const Routes = () => {
    const stripePromise = loadStripe(
        "pk_live_51IM63dFngR9vHhwSqY8SvxV2Ze2X07flq8R1TIEIzkXKRzmqPMMzU9Sz0b9crdxdY0NaTjqtkcP9gBf4lebXaX5R00uzQ5fPYw"
    );

    return (
        <Switch>
            <Route exact path="/products" render={() => <Products />} />
            <Route
                exact
                path="/product-details:id"
                render={() => <ProductDetails />}
            />
            <Route exact path="/my-orders" render={() => <UsersOrders />} />
            <Route exact path="/my-cart" render={() => <Cart />} />
            <Route
                exact
                path="/checkout"
                render={() => (
                    <Elements stripe={stripePromise}>
                        <ElementsConsumer>
                            {({ stripe, elements }) => (
                                <Checkout stripe={stripe} elements={elements} />
                            )}
                        </ElementsConsumer>
                    </Elements>
                )}
            />
            <Route exact path="order-success" render={() => <OrderSuccess />} />
            <Route
                exact
                path="/shipping_policy"
                render={() => <ShippingPolicy />}
            />
            <Route exact path="/FAQ" render={() => <FAQ />} />
            <Route exact path="/contact" render={() => <Contact />} />
            <Route
                exact
                path="/view-section:id"
                render={() => <ViewSection />}
            />
            <Route render={() => <Redirect to="/products" />} />
        </Switch>
    );
};
