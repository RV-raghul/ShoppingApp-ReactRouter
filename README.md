# E-ShopKart: E-commerce Store with React

**E-ShopKart** is a simple and interactive e-commerce web application built using React. The application fetches product data from a public API and allows users to add products to a shopping cart, manage cart items, and view pricing details, including discounts. 

## Features

- **Product Listing**: Displays a grid of products with details like name, image, price, and ratings.
- **Add to Cart**: Users can add products to the cart from the product listing page.
- **Remove from Cart**: Users can remove items directly from the cart or product page.
- **Cart Management**:
  - View cart items on a dedicated cart page.
  - Adjust quantities of items in the cart.
  - Automatically calculate the total price based on item quantities.
  - Apply a 10% discount on the final total price.
- **Navigation**:
  - A responsive navigation bar with a cart button to navigate to the cart page.
  - A "Return to Products" button in the cart to go back to the product listing.
- **Responsive Design**: Fully responsive design for seamless usage across devices.
- **Notifications**: Real-time feedback (e.g., "Item Added to Cart" or "Item Removed") using the `react-hot-toast` library.

## Technologies Used

- **React**: Component-based UI development.
- **React Router**: For page navigation and routing.
- **React Hot Toast**: For user notifications.
- **Tailwind CSS**: For styling the components and layout.
- **FakeStore API**: To fetch product data dynamically.

