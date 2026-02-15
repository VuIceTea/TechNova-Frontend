import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LockIcon from '@mui/icons-material/Lock';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartItemsCount } = useCart();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [couponCode, setCouponCode] = useState('');

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    const subtotal = getCartTotal();
    const shipping = subtotal > 10000000 ? 0 : subtotal > 0 ? 30000 : 0;
    const tax = 0; // VAT included in price
    const total = subtotal + shipping + tax;

    const handleApplyCoupon = () => {
        // TODO: Implement coupon logic
        console.log('Applying coupon:', couponCode);
    };

    const handleQuantityChange = (e, itemId, selectedVariant) => {
        const value = e.target.value;

        // Allow empty input for user to type
        if (value === '') {
            return;
        }

        // Parse and validate the input
        const newQuantity = parseInt(value);

        // Update only if valid positive number
        if (!isNaN(newQuantity) && newQuantity > 0 && newQuantity <= 99) {
            updateQuantity(itemId, selectedVariant, newQuantity);
        }
    };

    const handleQuantityBlur = (e, item) => {
        const value = e.target.value;

        // If empty or invalid, reset to current quantity or 1
        if (value === '' || parseInt(value) <= 0 || isNaN(parseInt(value))) {
            updateQuantity(item.id, item.selectedVariant, 1);
        }
    };

    const handleCheckout = () => {
        if (!isAuthenticated) {
            alert('Vui lòng đăng nhập để tiếp tục thanh toán!');
            navigate('/login', { state: { from: '/cart' } });
            return;
        }
        navigate('/checkout');
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-[#f6f6f8] dark:bg-[#101622] py-12">
                <div className="mx-auto w-full max-w-300 px-4 md:px-10">
                    <div className="text-center py-20">
                        <div className="mb-6">
                            <span className="material-symbols-outlined text-gray-400 dark:text-gray-600" style={{ fontSize: '80px' }}>
                                shopping_cart
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Giỏ hàng trống
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-8">
                            Bạn chưa có sản phẩm nào trong giỏ hàng
                        </p>
                        <Link
                            to="/category"
                            className="inline-block bg-[#135bec] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all"
                        >
                            Tiếp tục mua sắm
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f6f6f8] dark:bg-[#101622] py-8">
            <div className="mx-auto w-full max-w-300 px-4 md:px-10">
                {/* Page Heading */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Giỏ hàng của bạn
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        {getCartItemsCount()} sản phẩm trong giỏ hàng
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Column: Cart Items */}
                    <div className="w-full lg:flex-1 flex flex-col gap-4">
                        {/* Header Row for Desktop */}
                        <div className="hidden md:flex justify-between pb-2 border-b border-gray-200 dark:border-[#282e39] text-sm text-gray-500 dark:text-gray-400 font-medium">
                            <span className="flex-1">Sản phẩm</span>
                            <div className="flex gap-16 pr-8">
                                <span className="w-24 text-center">Số lượng</span>
                                <span className="w-24 text-right">Giá</span>
                            </div>
                        </div>

                        {/* Cart Items */}
                        {cartItems.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                className="group relative flex flex-col md:flex-row gap-4 bg-white dark:bg-[#1a2230] p-4 rounded-xl border border-gray-200 dark:border-transparent hover:border-[#135bec]/50 transition-all shadow-sm"
                            >
                                {/* Remove button */}
                                <button
                                    onClick={() => removeFromCart(item.id, item.selectedVariant)}
                                    className="absolute top-4 right-4 md:hidden text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <DeleteOutlineIcon style={{ fontSize: '20px' }} />
                                </button>

                                <div className="flex items-start gap-4 flex-1">
                                    {/* Product Image */}
                                    <Link to={`/product/${item.slug}`}>
                                        <div
                                            className="bg-center bg-no-repeat bg-cover rounded-lg size-24 md:size-28 shrink-0 bg-gray-100 dark:bg-[#282e39] hover:opacity-90 transition-opacity"
                                            style={{ backgroundImage: `url("${item.image}")` }}
                                        />
                                    </Link>

                                    {/* Product Info */}
                                    <div className="flex flex-col justify-between h-full py-1">
                                        <div>
                                            <Link to={`/product/${item.slug}`}>
                                                <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight mb-1 hover:text-[#135bec] transition-colors">
                                                    {item.name}
                                                </h3>
                                            </Link>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.brand}</p>

                                            {/* Variants */}
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {item.selectedVariant?.selectedColor && (
                                                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-[#282e39] text-gray-600 dark:text-gray-300">
                                                        {item.selectedVariant.selectedColor.name}
                                                    </span>
                                                )}
                                                {item.selectedVariant?.selectedStorage && (
                                                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-[#282e39] text-gray-600 dark:text-gray-300">
                                                        {item.selectedVariant.selectedStorage}
                                                    </span>
                                                )}
                                                {item.selectedVariant?.selectedRam && (
                                                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-[#282e39] text-gray-600 dark:text-gray-300">
                                                        {item.selectedVariant.selectedRam}
                                                    </span>
                                                )}
                                                {item.selectedVariant?.selectedScreenSize && (
                                                    <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 dark:bg-[#282e39] text-gray-600 dark:text-gray-300">
                                                        {item.selectedVariant.selectedScreenSize}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Desktop Remove Button */}
                                        <button
                                            onClick={() => removeFromCart(item.id, item.selectedVariant)}
                                            className="hidden md:flex items-center gap-1 text-sm text-gray-400 hover:text-red-500 transition-colors mt-auto pt-2 w-fit"
                                        >
                                            <DeleteOutlineIcon style={{ fontSize: '18px' }} />
                                            <span>Xóa</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Quantity & Price */}
                                <div className="flex md:flex-row flex-col items-center justify-between md:gap-16 mt-4 md:mt-0 md:pr-4">
                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-3 bg-gray-100 dark:bg-[#101622] rounded-lg p-1 w-fit">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.selectedVariant, item.quantity - 1)}
                                            className="size-8 flex items-center justify-center rounded-md bg-white dark:bg-[#282e39] hover:bg-gray-200 dark:hover:bg-[#323945] text-gray-900 dark:text-white shadow-sm transition-colors"
                                        >
                                            <RemoveIcon style={{ fontSize: '16px' }} />
                                        </button>
                                        <input
                                            className="w-8 text-center bg-transparent border-none text-gray-900 dark:text-white font-medium focus:ring-0 focus:outline-none p-0"
                                            type="number"
                                            min="1"
                                            max="99"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(e, item.id, item.selectedVariant)}
                                            onBlur={(e) => handleQuantityBlur(e, item)}
                                        />
                                        <button
                                            onClick={() => updateQuantity(item.id, item.selectedVariant, item.quantity + 1)}
                                            className="size-8 flex items-center justify-center rounded-md bg-white dark:bg-[#282e39] hover:bg-gray-200 dark:hover:bg-[#323945] text-gray-900 dark:text-white shadow-sm transition-colors"
                                        >
                                            <AddIcon style={{ fontSize: '16px' }} />
                                        </button>
                                    </div>

                                    {/* Price */}
                                    <div className="text-right w-full md:w-24 flex md:block justify-between items-center">
                                        <span className="md:hidden text-gray-500 dark:text-gray-400 text-sm">Đơn giá:</span>
                                        <p className="text-[#da2128] text-lg font-extrabold">
                                            {formatPrice(item.price * item.quantity)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="w-full lg:w-96 shrink-0">
                        <div className="sticky top-24 flex flex-col gap-6">
                            {/* Summary Card */}
                            <div className="bg-white dark:bg-[#1a2230] rounded-xl p-6 border border-gray-200 dark:border-[#282e39] shadow-lg">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                    Tóm tắt đơn hàng
                                </h2>

                                {/* Summary Items */}
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Tạm tính</span>
                                        <span className="font-medium text-[#da2128]">
                                            {formatPrice(subtotal)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Vận chuyển</span>
                                        <span className={`font-medium ${shipping === 0 ? 'text-green-500' : 'text-gray-900 dark:text-white'}`}>
                                            {shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Thuế (VAT)</span>
                                        <span className="font-medium text-gray-900 dark:text-white">
                                            {formatPrice(tax)}
                                        </span>
                                    </div>
                                </div>

                                {/* Coupon Input */}
                                <div className="mb-6">
                                    <div className="flex gap-2">
                                        <input
                                            className="flex-1 bg-gray-50 dark:bg-[#101622] border border-gray-300 dark:border-[#282e39] rounded-lg px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] transition-colors"
                                            placeholder="Mã giảm giá"
                                            type="text"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                        />
                                        <button
                                            onClick={handleApplyCoupon}
                                            className="px-4 py-2 bg-gray-200 dark:bg-[#282e39] text-gray-900 dark:text-white text-sm font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-[#323945] transition-colors"
                                        >
                                            Áp dụng
                                        </button>
                                    </div>
                                </div>

                                <div className="h-px w-full bg-gray-200 dark:bg-[#282e39] mb-6"></div>

                                {/* Total */}
                                <div className="flex justify-between items-end mb-6">
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                                        Tổng cộng
                                    </span>
                                    <span className="text-3xl font-bold text-[#da2128] tracking-tight">
                                        {formatPrice(total)}
                                    </span>
                                </div>

                                {/* Checkout Button */}
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-[#135bec] hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-lg shadow-[0_0_15px_rgba(19,91,236,0.4)] transition-all hover:shadow-[0_0_25px_rgba(19,91,236,0.6)] flex items-center justify-center gap-2 group"
                                >
                                    <span>Tiến hành thanh toán</span>
                                    <ArrowForwardIcon className="transition-transform" style={{ fontSize: '20px' }} />
                                </button>

                                {/* Payment Icons */}
                                <div className="mt-6 flex items-center justify-center gap-4 transition-all">
                                    <img src="/src/assets/icons/visa.svg" alt="Visa" className="h-8 object-contain" />
                                    <img src="/src/assets/icons/mastercard.svg" alt="Mastercard" className="h-8 object-contain" />
                                    <img src="/src/assets/icons/vnpay.svg" alt="VNPay" className="h-8 object-contain" />
                                    <img src="/src/assets/icons/momo.svg" alt="MoMo" className="h-8 object-contain" />
                                </div>

                                {/* Trust Badges */}
                                <div className="mt-4 flex flex-col gap-3 items-center">
                                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                        <LockIcon style={{ fontSize: '14px' }} />
                                        <span>Thanh toán bảo mật SSL</span>
                                    </div>
                                </div>
                            </div>

                            {/* Help Box */}
                            <div className="bg-gray-100 dark:bg-[#1a2230] rounded-xl p-4 flex items-center gap-3 border border-transparent dark:border-[#282e39]">
                                <div className="bg-[#135bec]/20 p-2 rounded-lg text-[#135bec]">
                                    <SupportAgentIcon style={{ fontSize: '24px' }} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">
                                        Cần hỗ trợ?
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        Liên hệ: 1900-TECH-NOVA
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
