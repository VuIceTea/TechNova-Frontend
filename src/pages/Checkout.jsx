import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LockIcon from '@mui/icons-material/Lock';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentsIcon from '@mui/icons-material/Payments';
import HelpIcon from '@mui/icons-material/Help';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Checkout = () => {
    const { cartItems, getCartTotal, getCartItemsCount } = useCart();
    const navigate = useNavigate();
    const [couponCode, setCouponCode] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('card');

    const [shippingInfo, setShippingInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: 'Hà Nội',
        district: 'Quận 1'
    });

    const [cardInfo, setCardInfo] = useState({
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    const subtotal = getCartTotal();
    const shipping = subtotal > 10000000 ? 0 : subtotal > 0 ? 30000 : 0;
    const tax = 0;
    const total = subtotal + shipping + tax;

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement payment processing
        alert('Đơn hàng của bạn đã được đặt thành công!');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-[#f6f6f8] dark:bg-[#101622]">
            {/* Main Content */}
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-10 py-8">
                {/* Breadcrumbs */}
                <nav className="mb-8">
                    <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                        <Link to="/cart" className="text-gray-500 dark:text-[#9da6b9] hover:text-[#135bec] transition-colors flex items-center gap-1">
                            <span>Giỏ hàng</span>
                        </Link>
                        <ChevronRightIcon className="text-gray-400 dark:text-[#555e6f]" style={{ fontSize: '16px' }} />
                        <span className="text-[#135bec] flex items-center gap-1">
                            <span>Giao hàng</span>
                        </span>
                        <ChevronRightIcon className="text-gray-400 dark:text-[#555e6f]" style={{ fontSize: '16px' }} />
                        <span className="text-gray-400 dark:text-[#555e6f] cursor-default">Thanh toán</span>
                    </div>
                </nav>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16">
                    {/* Left Column: Input Forms */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        {/* Shipping Section */}
                        <section>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Thông tin giao hàng</h1>
                            <div className="space-y-4">
                                {/* Name Fields */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <label className="flex flex-col flex-1">
                                        <span className="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Họ</span>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-[#9da6b9]"
                                            placeholder="Nguyễn"
                                            type="text"
                                            value={shippingInfo.lastName}
                                            onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                                            required
                                        />
                                    </label>
                                    <label className="flex flex-col flex-1">
                                        <span className="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Tên</span>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-[#9da6b9]"
                                            placeholder="Văn A"
                                            type="text"
                                            value={shippingInfo.firstName}
                                            onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                                            required
                                        />
                                    </label>
                                </div>

                                {/* Contact Fields */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <label className="flex flex-col flex-1">
                                        <span className="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Email</span>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-[#9da6b9]"
                                            placeholder="email@example.com"
                                            type="email"
                                            value={shippingInfo.email}
                                            onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                                            required
                                        />
                                    </label>
                                    <label className="flex flex-col flex-1">
                                        <span className="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Số điện thoại</span>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-[#9da6b9]"
                                            placeholder="0912 345 678"
                                            type="tel"
                                            value={shippingInfo.phone}
                                            onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                                            required
                                        />
                                    </label>
                                </div>

                                {/* Address */}
                                <label className="flex flex-col">
                                    <span className="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Địa chỉ</span>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-[#9da6b9]"
                                        placeholder="Số nhà, tên đường"
                                        type="text"
                                        value={shippingInfo.address}
                                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                                        required
                                    />
                                </label>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <label className="flex flex-col flex-1">
                                        <span className="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Thành phố / Tỉnh</span>
                                        <div className="relative">
                                            <select
                                                className="w-full appearance-none rounded-lg border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all pr-10"
                                                value={shippingInfo.city}
                                                onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                                            >
                                                <option>Hà Nội</option>
                                                <option>Hồ Chí Minh</option>
                                                <option>Đà Nẵng</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </label>
                                    <label className="flex flex-col flex-1">
                                        <span className="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Quận / Huyện</span>
                                        <div className="relative">
                                            <select
                                                className="w-full appearance-none rounded-lg border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all pr-10"
                                                value={shippingInfo.district}
                                                onChange={(e) => setShippingInfo({ ...shippingInfo, district: e.target.value })}
                                            >
                                                <option>Quận 1</option>
                                                <option>Quận 3</option>
                                                <option>Quận 5</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </section>

                        <hr className="border-gray-200 dark:border-[#282e39]" />

                        {/* Payment Method Section */}
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Phương thức thanh toán</h2>
                            <div className="space-y-4">
                                {/* Credit Card Option */}
                                <label className={`relative flex cursor-pointer rounded-xl border ${paymentMethod === 'card' ? 'border-[#135bec] bg-[#135bec]/5' : 'border-gray-200 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27]'} p-4 shadow-sm focus:outline-none transition-all hover:border-[#135bec]/50`}>
                                    <input
                                        checked={paymentMethod === 'card'}
                                        className="sr-only"
                                        name="payment-method"
                                        type="radio"
                                        onChange={() => setPaymentMethod('card')}
                                    />
                                    <span className="flex flex-1">
                                        <span className="flex flex-col">
                                            <span className="block text-sm font-medium text-gray-900 dark:text-white">Thẻ Tín dụng / Ghi nợ</span>
                                            <span className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">Thanh toán an toàn qua Visa, Mastercard</span>
                                        </span>
                                    </span>
                                    {paymentMethod === 'card' && (
                                        <CheckCircleIcon className="text-[#135bec]" style={{ fontSize: '24px' }} />
                                    )}
                                </label>

                                {/* Credit Card Details */}
                                {paymentMethod === 'card' && (
                                    <div className="pl-4 border-l-2 border-gray-200 dark:border-[#282e39] ml-2 space-y-4 py-2">
                                        <label className="flex flex-col">
                                            <span className="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Số thẻ</span>
                                            <div className="relative">
                                                <input
                                                    className="w-full rounded-lg border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] pl-11 pr-4 py-3 text-sm font-mono text-gray-900 dark:text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-[#9da6b9]"
                                                    placeholder="0000 0000 0000 0000"
                                                    type="text"
                                                    value={cardInfo.cardNumber}
                                                    onChange={(e) => setCardInfo({ ...cardInfo, cardNumber: e.target.value })}
                                                />
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-gray-500">
                                                    <CreditCardIcon style={{ fontSize: '20px' }} />
                                                </div>
                                            </div>
                                        </label>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <label className="flex flex-col flex-1">
                                                <span className="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Hạn sử dụng</span>
                                                <input
                                                    className="w-full rounded-lg border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] px-4 py-3 text-sm font-mono text-gray-900 dark:text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-[#9da6b9]"
                                                    placeholder="MM/YY"
                                                    type="text"
                                                    value={cardInfo.expiry}
                                                    onChange={(e) => setCardInfo({ ...cardInfo, expiry: e.target.value })}
                                                />
                                            </label>
                                            <label className="flex flex-col flex-1">
                                                <span className="text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">CVV</span>
                                                <div className="relative">
                                                    <input
                                                        className="w-full rounded-lg border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27] px-4 py-3 text-sm font-mono text-gray-900 dark:text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-[#9da6b9]"
                                                        placeholder="123"
                                                        type="text"
                                                        value={cardInfo.cvv}
                                                        onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
                                                    />
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                                        <HelpIcon style={{ fontSize: '18px' }} />
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                )}

                                {/* COD Option */}
                                <label className={`relative flex cursor-pointer rounded-xl border ${paymentMethod === 'cod' ? 'border-[#135bec] bg-[#135bec]/5' : 'border-gray-200 dark:border-[#3b4354] bg-white dark:bg-[#1c1f27]'} p-4 shadow-sm focus:outline-none transition-all hover:border-[#135bec]/50`}>
                                    <input
                                        checked={paymentMethod === 'cod'}
                                        className="sr-only"
                                        name="payment-method"
                                        type="radio"
                                        onChange={() => setPaymentMethod('cod')}
                                    />
                                    <span className="flex flex-1">
                                        <span className="flex flex-col">
                                            <span className="block text-sm font-medium text-gray-900 dark:text-white">Thanh toán khi nhận hàng (COD)</span>
                                            <span className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">Thanh toán bằng tiền mặt khi giao hàng</span>
                                        </span>
                                    </span>
                                    <PaymentsIcon className={paymentMethod === 'cod' ? 'text-[#135bec]' : 'text-gray-400 dark:text-gray-500'} style={{ fontSize: '24px' }} />
                                </label>
                            </div>
                        </section>

                        {/* Action Buttons */}
                        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Link
                                to="/cart"
                                className="text-sm font-medium text-[#135bec] hover:text-blue-400 flex items-center gap-2 order-2 sm:order-1"
                            >
                                <ArrowBackIcon style={{ fontSize: '16px' }} />
                                Quay lại giỏ hàng
                            </Link>
                            <button
                                type="submit"
                                className="w-full sm:w-auto order-1 sm:order-2 bg-[#135bec] hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                            >
                                <span>Xác nhận thanh toán</span>
                                <ArrowForwardIcon style={{ fontSize: '16px' }} />
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-24 rounded-2xl bg-gray-100 dark:bg-[#1c1f27] p-6 xl:p-8 border border-gray-200 dark:border-[#282e39] shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Tóm tắt đơn hàng</h3>

                            {/* Products List */}
                            <div className="space-y-5 mb-8 max-h-75 overflow-y-auto pr-2 custom-scrollbar">
                                {cartItems.map((item, index) => (
                                    <div key={`${item.id}-${index}`} className="flex gap-4">
                                        <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                                            <img
                                                alt={item.name}
                                                className="size-full object-cover"
                                                src={item.image}
                                            />
                                            <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-gray-500 text-[10px] font-bold text-white shadow-sm">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-center">
                                            <div className="flex justify-between items-start gap-2">
                                                <h4 className="text-sm font-semibold leading-tight text-gray-900 dark:text-white">{item.name}</h4>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">{formatPrice(item.price * item.quantity)}</span>
                                            </div>
                                            {item.selectedVariant && (
                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                                    {item.selectedVariant.selectedColor?.name} - {item.selectedVariant.selectedStorage}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Discount Code */}
                            <div className="flex gap-2 mb-8">
                                <input
                                    className="w-full rounded-lg border border-gray-300 dark:border-[#3b4354] bg-white dark:bg-[#101622] px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-[#9da6b9]"
                                    placeholder="Mã giảm giá"
                                    type="text"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="bg-gray-200 dark:bg-[#3b4354] hover:bg-gray-300 dark:hover:bg-[#4b5563] text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors whitespace-nowrap"
                                >
                                    Áp dụng
                                </button>
                            </div>

                            <hr className="border-gray-200 dark:border-[#282e39] mb-6" />

                            {/* Calculations */}
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                    <span>Tạm tính</span>
                                    <span className="font-medium text-gray-900 dark:text-white">{formatPrice(subtotal)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                    <span>Phí vận chuyển</span>
                                    <span className={`font-medium ${shipping === 0 ? 'text-green-500' : 'text-gray-900 dark:text-white'}`}>
                                        {shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}
                                    </span>
                                </div>
                                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                    <span>Thuế (VAT)</span>
                                    <span className="font-medium text-gray-900 dark:text-white">{formatPrice(tax)}</span>
                                </div>
                            </div>

                            <hr className="border-gray-200 dark:border-[#282e39] my-6" />

                            {/* Total */}
                            <div className="flex justify-between items-end">
                                <span className="text-lg font-bold text-gray-900 dark:text-white">Tổng cộng</span>
                                <div className="flex flex-col items-end">
                                    <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">VND</span>
                                    <span className="text-2xl font-bold tracking-tight text-[#135bec]">{formatPrice(total)}</span>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-center gap-8 transition-all hover:grayscale-0">
                                <img src="/src/assets/icons/visa.svg" alt="Visa" className="h-6 object-contain" />
                                <img src="/src/assets/icons/mastercard.svg" alt="Mastercard" className="h-6 object-contain" />
                                <img src="/src/assets/icons/vnpay.svg" alt="VNPay" className="h-6 object-contain" />
                            </div>
                        </div>
                    </div>
                </form>
            </main>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #3b4354;
                    border-radius: 20px;
                }
            `}</style>
        </div>
    );
};

export default Checkout;
