const Footer = () => {
  return (
    <div className="container mx-auto text-center mt-28">
      {/* footer heading */}
      <div className="grid gap-4 my-10">
        <h3 className="text-3xl font-bold">Gadget Heaven</h3>
        <p className="text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <hr />
      {/* footer links */}
      <div className="flex gap-7 justify-evenly my-10">
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Product Support</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Product Support</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Product Support</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
