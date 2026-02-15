import { useParams, useNavigate, Link } from 'react-router-dom';
import { mockOrders } from '../data/mockOrders';
import { useCart } from '../context/CartContext';

const OrderDetails = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    // Find order by ID or slug
    const order = mockOrders.find(o => o.id === orderId || o.slug === orderId);

    if (!order) {
        return (
            <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
                <div className="text-center">
                    <span className="material-symbols-outlined text-6xl text-gray-400 mb-4">receipt_long</span>
                    <h2 className="text-2xl font-bold mb-2">Không tìm thấy đơn hàng</h2>
                    <p className="text-gray-500 mb-6">Đơn hàng #{orderId} không tồn tại trong hệ thống</p>
                    <button
                        onClick={() => navigate('/orders')}
                        className="px-6 py-3 bg-[#135bec] text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Quay lại danh sách đơn hàng
                    </button>
                </div>
            </div>
        );
    }

    const handlePrint = () => {
        window.print();
    };

    const handleBack = () => {
        navigate('/orders');
    };

    const handleReorder = (product) => {
        addToCart({
            id: product.id,
            name: product.name,
            price: parseInt(product.price.replace(/[₫,.]/g, '')),
            image: product.image,
            quantity: 1
        });
        alert(`Đã thêm ${product.name} vào giỏ hàng!`);
    };

    const handleReorderAll = () => {
        order.products.forEach(product => {
            addToCart({
                id: product.id,
                name: product.name,
                price: parseInt(product.price.replace(/[₫,.]/g, '')),
                image: product.image,
                quantity: product.quantity
            });
        });
        alert('Đã thêm tất cả sản phẩm vào giỏ hàng!');
        navigate('/cart');
    };

    const handleReview = (product) => {
        alert(`Chức năng đánh giá sản phẩm "${product.name}" sẽ được phát triển trong phiên bản tiếp theo.`);
    };

    const handleReturnRequest = () => {
        alert('Yêu cầu trả hàng/hoàn tiền đã được ghi nhận.\n\nBộ phận chăm sóc khách hàng sẽ liên hệ với bạn trong vòng 24 giờ.');
    };

    const handleContactSupport = () => {
        alert('Đang kết nối với bộ phận hỗ trợ khách hàng...\n\nHotline: 1900-xxxx\nEmail: support@technova.vn');
    };

    const handleConfirmReceived = () => {
        if (window.confirm('Xác nhận bạn đã nhận được hàng?\n\nChỉ nhấn xác nhận khi bạn đã nhận và kiểm tra kỹ kiện hàng.')) {
            alert('Cảm ơn bạn đã xác nhận!\n\nĐơn hàng đã được cập nhật trạng thái "Hoàn thành".');
            navigate('/orders');
        }
    };

    const handleCopyTracking = (trackingNumber) => {
        navigator.clipboard.writeText(trackingNumber);
        alert('Đã sao chép mã vận đơn: ' + trackingNumber);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800/50';
            case 'shipping':
                return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50';
            case 'cancelled':
                return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800/50';
            case 'processing':
                return 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800/50';
            default:
                return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/30 dark:text-gray-400 dark:border-gray-800/50';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return 'check_circle';
            case 'shipping':
                return 'local_shipping';
            case 'cancelled':
                return 'cancel';
            case 'processing':
                return 'schedule';
            default:
                return 'schedule';
        }
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <main className="container mx-auto px-4 md:px-10 py-6 max-w-6xl">
                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
                    <Link to="/" className="hover:text-[#135bec] transition-colors">Trang chủ</Link>
                    <span className="mx-2 text-slate-300">/</span>
                    <Link to="/profile" className="hover:text-[#135bec] transition-colors">Hồ sơ</Link>
                    <span className="mx-2 text-slate-300">/</span>
                    <Link to="/orders" className="hover:text-[#135bec] transition-colors">Lịch sử đơn hàng</Link>
                    <span className="mx-2 text-slate-300">/</span>
                    <span className="text-slate-900 dark:text-white">#{order.id}</span>
                </nav>

                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
                                Chi tiết đơn hàng
                            </h1>
                            <span className={`hidden md:inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusColor(order.status)}`}>
                                {order.statusText}
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400">
                            Mã đơn hàng: <span className="text-slate-900 dark:text-white font-mono">#{order.id}</span> • Ngày đặt: {order.date}
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={handlePrint}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-[#2d343b] hover:bg-slate-50 dark:hover:bg-[#1e2227] transition-colors font-medium text-sm text-slate-700 dark:text-slate-200"
                        >
                            <span className="material-symbols-outlined text-[18px]">print</span>
                            <span>In hóa đơn</span>
                        </button>
                        <button
                            onClick={handleBack}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-[#1e2227] hover:bg-slate-200 dark:hover:bg-[#282e39] transition-colors font-medium text-sm text-slate-700 dark:text-slate-200"
                        >
                            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                            <span>Quay lại</span>
                        </button>
                    </div>
                </div>

                {/* Status Banner - Completed */}
                {order.status === 'completed' && (
                    <div className="bg-white dark:bg-[#1e2227] rounded-xl p-6 md:p-8 shadow-sm border border-slate-200 dark:border-[#2d343b] mb-6">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="size-10 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                <span className="material-symbols-outlined">local_shipping</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-green-600 dark:text-green-400">Giao hàng thành công</h2>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    Đơn hàng đã được giao thành công vào {order.deliveryTime}, {order.deliveryDate}
                                </p>
                            </div>
                        </div>

                        {/* Timeline - Completed */}
                        <div className="relative w-full">
                            <div className="absolute top-5 left-0 w-full h-1 bg-slate-100 dark:bg-slate-700 rounded-full"></div>
                            <div className="absolute top-5 left-0 w-full h-1 bg-green-500 rounded-full"></div>
                            <div className="relative flex justify-between w-full">
                                {order.timeline.map((step, index) => (
                                    <div key={index} className="flex flex-col items-center gap-2 group cursor-default">
                                        <div className={`size-10 rounded-full flex items-center justify-center z-10 font-bold shadow-[0_0_0_4px_rgba(255,255,255,1)] dark:shadow-[0_0_0_4px_rgba(30,34,39,1)] ${step.completed ? 'bg-green-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                                            }`}>
                                            <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                                        </div>
                                        <div className="flex flex-col items-center text-center max-w-[120px]">
                                            <span className={`text-sm font-bold ${step.completed ? 'text-slate-700 dark:text-slate-200' : 'text-slate-400'}`}>
                                                {step.title}
                                            </span>
                                            {step.time && (
                                                <span className="text-xs text-slate-500 dark:text-slate-400">{step.time}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Status Banner - Shipping */}
                {order.status === 'shipping' && (
                    <div className="bg-white dark:bg-[#1e2227] rounded-xl p-6 shadow-sm border border-slate-200 dark:border-[#2d343b] mb-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    <span className="material-symbols-outlined">local_shipping</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">Đang vận chuyển</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Dự kiến giao hàng: <span className="text-slate-900 dark:text-white font-medium">{order.estimatedDelivery}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/30 rounded-full text-sm font-semibold">
                                Đến đúng giờ
                            </div>
                        </div>

                        <div className="mb-2 flex justify-between text-sm font-medium text-slate-500 dark:text-slate-400">
                            <span>Đã xử lý</span>
                            <span className="text-blue-600 dark:text-blue-400">Đang giao</span>
                            <span>Đã nhận</span>
                        </div>
                        <div className="relative h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden mb-8">
                            <div className="absolute top-0 left-0 h-full bg-[#135bec] rounded-full" style={{ width: `${order.tracking?.progress || 0}%` }}>
                                <div className="absolute top-0 right-0 bottom-0 w-full animate-pulse bg-white/20"></div>
                            </div>
                        </div>

                        {/* Tracking Timeline */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="relative pl-2">
                                <div className="absolute top-2 bottom-0 left-[15px] w-0.5 bg-blue-200 dark:bg-blue-900/30"></div>
                                {order.timeline.map((step, index) => (
                                    <div key={index} className={`relative flex gap-4 ${index !== order.timeline.length - 1 ? 'pb-8' : ''}`}>
                                        <div className={`relative z-10 size-7 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white dark:border-[#1e2227] ${step.active
                                            ? 'bg-[#135bec] shadow-sm shadow-blue-500/30'
                                            : step.completed
                                                ? 'bg-[#135bec]'
                                                : 'bg-slate-200 dark:bg-slate-700'
                                            }`}>
                                            {step.completed && (
                                                <span className="material-symbols-outlined text-[16px] text-white font-bold">
                                                    {step.icon}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <p className={`${step.active ? 'font-bold text-slate-900 dark:text-white' : 'font-medium text-slate-800 dark:text-slate-200'}`}>
                                                {step.title}
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{step.time}</p>
                                            {step.description && (
                                                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{step.description}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="bg-slate-100 dark:bg-[#111c22] rounded-lg h-40 w-full overflow-hidden relative border border-slate-200 dark:border-[#2d343b]">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center opacity-80"
                                        style={{
                                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCyJcEBpe2cr1lVGlr6_9u6uU70n7GE-ghgoTXeS7-9BMT87QdXkVU20CD50B-OZd0BNAL3wGKmNoPunmOOFr7-bS_cszhaShzUJT72Ewy7Al2SAZ-sBhSEo3-8yS58qRT_oA8DRqIodoQouV9YVNzMFibI_sh_qyrxXHGVRFGYS1gs3zHkX1vmB9Hp0tXSzb3lm7A912zJjRAMt-dFwwQnAaC8ipnLTFZYduPAkRcy2NINi-0zAP70SC4N6UEVlj5d9_3WBbEydQP2')",
                                            filter: 'grayscale(100%) invert(100%) contrast(120%)'
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-[#135bec]/10 mix-blend-overlay"></div>
                                    <div className="absolute bottom-3 left-3 bg-white dark:bg-[#1e2227] px-3 py-1.5 rounded text-xs font-bold shadow-sm flex items-center gap-1">
                                        <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                                        Live Tracking
                                    </div>
                                </div>

                                {order.tracking && (
                                    <div className="bg-slate-50 dark:bg-[#23333e] p-4 rounded-lg border border-slate-200 dark:border-[#2d343b]">
                                        <div className="flex items-center justify-between mb-3">
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Đơn vị vận chuyển</p>
                                            <span className="font-bold text-[#135bec] flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[18px]">bolt</span>
                                                {order.tracking.carrier}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Mã vận đơn</p>
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono font-medium text-slate-900 dark:text-white">
                                                    {order.tracking.trackingNumber}
                                                </span>
                                                <button
                                                    onClick={() => handleCopyTracking(order.tracking.trackingNumber)}
                                                    className="text-slate-400 hover:text-[#135bec] transition-colors"
                                                    title="Copy"
                                                >
                                                    <span className="material-symbols-outlined text-[16px]">content_copy</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Status Banner - Cancelled */}
                {order.status === 'cancelled' && (
                    <div className="rounded-xl bg-red-50 border border-red-100 dark:bg-red-900/10 dark:border-red-800/30 p-5 flex items-start gap-4 mb-6">
                        <div className="p-2 rounded-full bg-white dark:bg-red-900/30 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-800/30 shrink-0">
                            <span className="material-symbols-outlined">info</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-bold text-red-700 dark:text-red-400">Đơn hàng đã bị hủy</h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                <span className="font-bold">Lý do hủy:</span> {order.cancelReason}
                            </p>
                            {order.refundTransaction && (
                                <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                                    Nếu quý khách đã thanh toán online, số tiền sẽ được hoàn về tài khoản nguồn trong vòng 3-5 ngày làm việc.
                                    Mã giao dịch hoàn tiền: <span className="font-mono text-slate-700 dark:text-slate-200">{order.refundTransaction}</span>.
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {/* Cancelled Order Timeline */}
                {order.status === 'cancelled' && (
                    <div className="bg-white dark:bg-[#1e2227] rounded-xl border border-slate-200 dark:border-[#2d343b] p-6 md:p-8 mb-6">
                        <h3 className="text-lg font-bold mb-6">Tiến độ đơn hàng</h3>
                        <div className="grid grid-cols-[32px_1fr] md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-x-4 gap-y-8 relative">
                            <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-[#2d343b] md:hidden"></div>
                            <div className="hidden md:block absolute top-[15px] left-4 right-4 h-0.5 bg-slate-200 dark:bg-[#2d343b] z-0"></div>

                            {order.timeline.map((step, index) => (
                                <div key={index} className="contents">{/* Fragment wrapper */}
                                    <div className={`contents md:flex md:flex-col md:items-center md:relative md:z-10 group ${step.disabled ? 'opacity-50' : ''}`}>
                                        <div className="flex flex-col items-center z-10">
                                            <div className={`size-8 rounded-full flex items-center justify-center border-4 border-white dark:border-[#1e2227] ${step.isCancelled
                                                ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                                                : step.completed
                                                    ? 'bg-[#135bec] text-white'
                                                    : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                                                }`}>
                                                <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center md:items-center md:mt-3 pl-2 md:pl-0">
                                            <p className={`text-sm font-bold ${step.isCancelled ? 'text-red-700 dark:text-red-400' : ''}`}>
                                                {step.title}
                                            </p>
                                            {step.time && (
                                                <p className="text-xs text-slate-500 dark:text-slate-400">{step.time}</p>
                                            )}
                                        </div>
                                    </div>
                                    {index < order.timeline.length - 1 && (
                                        <div className={`hidden md:block h-0.5 self-start mt-[15px] z-0 -mx-8 relative w-[calc(100%+4rem)] ${step.completed && !step.isCancelled ? 'bg-[#135bec]' : 'bg-slate-200 dark:bg-[#2d343b]'
                                            }`}></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Left Column - Address & Payment */}
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        {/* Shipping Address */}
                        <div className="bg-white dark:bg-[#1e2227] rounded-xl p-6 border border-slate-200 dark:border-[#2d343b] flex-1 shadow-sm">
                            <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                                <span className="material-symbols-outlined text-[#135bec]">location_on</span>
                                Địa chỉ nhận hàng
                            </h3>
                            <div className="space-y-1">
                                <p className="font-bold text-base text-slate-800 dark:text-slate-200">{order.shippingAddress.name}</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">{order.shippingAddress.phone}</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{order.shippingAddress.address}</p>
                                {order.shippingAddress.city && (
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{order.shippingAddress.city}</p>
                                )}
                            </div>
                        </div>

                        {/* Payment Info */}
                        <div className="bg-white dark:bg-[#1e2227] rounded-xl p-6 border border-slate-200 dark:border-[#2d343b] shadow-sm">
                            <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                                <span className="material-symbols-outlined text-[#135bec]">payments</span>
                                Thanh toán
                            </h3>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-6 bg-slate-100 dark:bg-white/10 rounded flex items-center justify-center text-slate-600 dark:text-slate-300">
                                    <span className="text-[10px] font-bold tracking-tighter">{order.payment.cardType}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                                        {order.payment.method} **** {order.payment.cardLast4}
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        Đã thanh toán ngày {order.payment.paidDate}
                                    </p>
                                </div>
                            </div>
                            {order.refundStatus && (
                                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-[#2d343b]">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-slate-600 dark:text-slate-300">Trạng thái hoàn tiền</span>
                                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500">
                                            {order.refundStatus}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Products */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {/* Products List */}
                        <div className="bg-white dark:bg-[#1e2227] rounded-xl border border-slate-200 dark:border-[#2d343b] overflow-hidden shadow-sm">
                            <div className="px-6 py-4 border-b border-slate-200 dark:border-[#2d343b] flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Sản phẩm</h3>
                                <span className="text-sm text-slate-500 dark:text-slate-400">{order.products.length} sản phẩm</span>
                            </div>

                            <div className="divide-y divide-slate-100 dark:divide-[#2d343b]">
                                {order.products.map((product, index) => (
                                    <div key={index} className="p-6 flex flex-col sm:flex-row gap-6">
                                        <Link
                                            to={`/product/${product.slug}`}
                                            className="w-24 h-24 shrink-0 bg-slate-100 dark:bg-white/5 rounded-lg flex items-center justify-center overflow-hidden border border-slate-200 dark:border-white/10 hover:border-[#135bec] transition-colors"
                                        >
                                            <img
                                                alt={product.name}
                                                src={product.image}
                                                className="w-full h-full object-cover"
                                            />
                                        </Link>
                                        <div className="flex-grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <Link
                                                        to={`/product/${product.slug}`}
                                                        className="font-bold text-lg leading-tight text-slate-900 dark:text-white hover:text-[#135bec] transition-colors"
                                                    >
                                                        {product.name}
                                                    </Link>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{product.variant}</p>
                                                </div>
                                                <p className="font-bold font-display text-lg text-slate-900 dark:text-white">{product.price}</p>
                                            </div>
                                            <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-4 gap-3">
                                                <span className="text-sm text-slate-500 dark:text-slate-400">Số lượng: {product.quantity}</span>
                                                {order.status === 'completed' && (
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => handleReorder(product)}
                                                            className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[#135bec] hover:border-[#135bec] border border-slate-200 dark:border-slate-600 flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors"
                                                        >
                                                            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                                            Mua lại
                                                        </button>
                                                        <button
                                                            onClick={() => handleReview(product)}
                                                            className="text-sm font-medium text-[#135bec] hover:text-blue-700 hover:bg-[#135bec]/5 flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#135bec]/20 transition-colors"
                                                        >
                                                            <span className="material-symbols-outlined text-[18px]">rate_review</span>
                                                            Đánh giá sản phẩm
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Price Summary */}
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-t border-slate-200 dark:border-[#2d343b] space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">Tạm tính</span>
                                    <span className="font-medium text-slate-800 dark:text-slate-200">{order.subtotal}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500 dark:text-slate-400">Phí vận chuyển</span>
                                    <span className="font-medium text-slate-800 dark:text-slate-200">{order.shippingFee}</span>
                                </div>
                                {order.shippingDiscount && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">Giảm giá vận chuyển</span>
                                        <span className="text-green-600 dark:text-green-400 font-medium">{order.shippingDiscount}</span>
                                    </div>
                                )}
                                {order.discount && order.discount !== '-0₫' && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500 dark:text-slate-400">Voucher giảm giá</span>
                                        <span className="text-green-600 dark:text-green-400 font-medium">{order.discount}</span>
                                    </div>
                                )}
                                <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex justify-between items-end">
                                    <span className="text-base font-bold text-slate-900 dark:text-white">Tổng thanh toán</span>
                                    <span className="text-2xl font-bold font-display text-[#135bec]">{order.total}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="sticky bottom-0 md:static bg-white dark:bg-[#1e2227] md:bg-transparent md:dark:bg-transparent border-t md:border-t-0 border-slate-200 dark:border-[#2d343b] p-4 md:p-0 -mx-4 md:mx-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:shadow-none mt-6">
                    <div className="flex flex-col md:flex-row justify-end gap-4 items-center">
                        {order.status === 'completed' && (
                            <>
                                <button
                                    onClick={handleReturnRequest}
                                    className="w-full md:w-auto px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    Yêu cầu trả hàng/Hoàn tiền
                                </button>
                                <button
                                    onClick={handleReorderAll}
                                    className="w-full md:w-auto px-8 py-3 rounded-lg bg-[#135bec] hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-[#135bec]/30 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined">shopping_bag</span>
                                    Mua lại đơn hàng
                                </button>
                            </>
                        )}

                        {order.status === 'shipping' && (
                            <>
                                <button
                                    onClick={handleContactSupport}
                                    className="w-full md:w-auto px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-[20px]">support_agent</span>
                                    Liên hệ hỗ trợ
                                </button>
                                <button
                                    onClick={handleConfirmReceived}
                                    className="w-full md:w-auto px-8 py-3 rounded-lg bg-[#135bec] hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-[#135bec]/25 transition-all flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined">check_circle</span>
                                    Đã nhận được hàng
                                </button>
                            </>
                        )}

                        {order.status === 'cancelled' && (
                            <>
                                <button
                                    onClick={handleContactSupport}
                                    className="w-full md:w-auto px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-[20px]">help</span>
                                    Hỗ trợ
                                </button>
                                <button
                                    onClick={handleReorderAll}
                                    className="w-full md:w-auto px-8 py-3 rounded-lg bg-[#135bec] hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-[#135bec]/20 transition-all flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-[20px]">refresh</span>
                                    Mua lại
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OrderDetails;
