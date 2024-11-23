import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import store from "./redux/store/store";
import HeroSection from "./components/HomePage";
import PublicNavbar from "./components/Navbar/PublicNavbar";
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import PrivateNavbar from "./components/Navbar/PrivateNavbar";
import AddCategory from "./components/Category/AddCategory";
import CategoriesList from "./components/Category/CategoriesList";
import UpdateCategory from "./components/Category/UpdateCategory";
import TransactionForm from "./components/Transcation/TransactionForm";
import UserProfile from "./components/Users/UserProfile";
// Create a QueryClient instance with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Avoid refetching on focus for a better user experience
      retry: 1, // Retry failed queries once
    },
  },
});

function App() {
  // get the token

  const user = useSelector((state) => state?.auth?.user);

  return (
    // Wrap the entire app with Redux Provider for state management
    <Provider store={store}>
      {/* Wrap the app with QueryClientProvider for React Query */}
      <QueryClientProvider client={queryClient}>
        {/* Wrap the app with BrowserRouter for routing */}
        <BrowserRouter>
          {/* PublicNavbar is outside of Routes so it will be displayed on all pages */}
          {user ? <PrivateNavbar /> : <PublicNavbar />}
          <Routes>
            {/* Define routes for your app */}
            <Route path="/" element={<HeroSection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="/categories" element={<CategoriesList />} />
            <Route path="/update-category/:id" element={<UpdateCategory />} />
            <Route path="/add-transaction" element={<TransactionForm />} />
            <Route path="/profile" element={<UserProfile />} />
            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
