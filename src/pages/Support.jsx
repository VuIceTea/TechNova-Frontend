import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Chat,
    Call,
    Mail,
    Search,
    ExpandMore,
    CheckCircle
} from '@mui/icons-material';
import { getFAQ, getSupportChannels, getSupportCategories, submitSupportRequest } from '../services/supportService';
import styles from './Support.module.css';

const Support = () => {
    const [faqList, setFaqList] = useState([]);
    const [supportChannels, setSupportChannels] = useState([]);
    const [supportCategories, setSupportCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaqId, setOpenFaqId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: 'warranty',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const [faq, channels, categories] = await Promise.all([
                getFAQ(),
                getSupportChannels(),
                getSupportCategories()
            ]);

            setFaqList(faq);
            setSupportChannels(channels);
            setSupportCategories(categories);
        };

        loadData();
    }, []);

    const handleFaqToggle = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const result = await submitSupportRequest(formData);
            setSubmitStatus({ type: 'success', message: result.message });
            setFormData({ name: '', email: '', category: 'warranty', message: '' });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Có lỗi xảy ra. Vui lòng thử lại sau.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const getChannelIcon = (iconName) => {
        switch (iconName) {
            case 'chat':
                return <Chat className="text-[28px]" />;
            case 'call':
                return <Call className="text-[28px]" />;
            case 'mail':
                return <Mail className="text-[28px]" />;
            default:
                return null;
        }
    };

    return (
        <div className="flex-1 flex flex-col items-center w-full">
            {/* Hero Section */}
            <div className="w-full max-w-350 mx-auto px-2 md:px-4 py-5">
                <div className="@container">
                    <div className="@[480px]:p-4">
                        <div
                            className="flex min-h-100 flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-2xl items-center justify-center p-8 relative overflow-hidden bg-gradient-to-br from-primary to-blue-700 dark:from-[#111722] dark:to-[#192233]"
                            style={{
                                backgroundImage: `linear-gradient(rgba(19, 91, 236, 0.85) 0%, rgba(37, 99, 235, 0.95) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200')`
                            }}
                        >
                            <div className="flex flex-col gap-3 text-center z-10 max-w-2xl">
                                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] font-display">
                                    Trung tâm hỗ trợ TechNova
                                </h1>
                                <h2 className="text-gray-300 text-base md:text-lg font-normal leading-relaxed">
                                    Chúng tôi có thể giúp gì cho thiết bị công nghệ của bạn hôm nay?
                                </h2>
                            </div>
                            <label className="flex flex-col h-14 w-full max-w-145 z-10 shadow-lg shadow-primary/10">
                                <div className="flex w-full flex-1 items-stretch rounded-xl h-full overflow-hidden border border-[#324467] dark:border-[#324467] border-slate-300 focus-within:border-primary transition-colors">
                                    <div className="text-[#92a4c9] dark:text-[#92a4c9] text-slate-600 flex bg-white dark:bg-[#192233] items-center justify-center pl-4 pr-2">
                                        <Search />
                                    </div>
                                    <input
                                        className="flex w-full min-w-0 flex-1 resize-none bg-white dark:bg-[#192233] text-slate-900 dark:text-white focus:outline-0 h-full placeholder:text-slate-500 dark:placeholder:text-[#92a4c9] px-2 text-base font-normal leading-normal border-none focus:ring-0"
                                        placeholder="Tìm kiếm câu hỏi hoặc chủ đề..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <div className="flex items-center justify-center bg-white dark:bg-[#192233] pr-1">
                                        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold leading-normal">
                                            <span className="truncate">Tìm kiếm</span>
                                        </button>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Contact Channels */}
            <div className="w-full max-w-350 mx-auto px-2 md:px-4 py-8">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.02em] font-display">
                            Kênh liên hệ nhanh
                        </h2>
                        <p className="text-slate-600 dark:text-[#92a4c9] text-base font-normal">
                            Chọn phương thức liên hệ phù hợp nhất với bạn.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {supportChannels.map((channel) => (
                            <div
                                key={channel.id}
                                className="group flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-[#324467] bg-white dark:bg-[#192233] p-6 flex-col hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-[#1e2a40] transition-all cursor-pointer shadow-sm"
                            >
                                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    {getChannelIcon(channel.icon)}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">{channel.name}</h3>
                                    <p className="text-slate-600 dark:text-[#92a4c9] text-sm font-normal leading-relaxed">
                                        {channel.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="w-full max-w-350 mx-auto px-2 md:px-4 py-8">
                <div className="flex flex-col gap-6">
                    <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.02em] font-display border-b border-slate-200 dark:border-[#324467] pb-4">
                        Câu hỏi thường gặp (FAQ)
                    </h2>
                    <div className="flex flex-col gap-3">
                        {faqList.map((faq) => (
                            <details
                                key={faq.id}
                                open={openFaqId === faq.id}
                                className="flex flex-col rounded-xl border border-slate-200 dark:border-[#324467] bg-white dark:bg-[#111722] open:bg-slate-50 dark:open:bg-[#192233] transition-colors group shadow-sm"
                            >
                                <summary
                                    className="flex cursor-pointer items-center justify-between gap-6 p-5 list-none"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleFaqToggle(faq.id);
                                    }}
                                >
                                    <span className="text-slate-900 dark:text-white text-base font-medium leading-normal group-hover:text-primary transition-colors">
                                        {faq.question}
                                    </span>
                                    <ExpandMore
                                        className={`text-slate-900 dark:text-white transition-transform text-[24px] ${openFaqId === faq.id ? 'rotate-180' : ''
                                            }`}
                                    />
                                </summary>
                                {openFaqId === faq.id && (
                                    <div className="px-5 pb-5 pt-0">
                                        <p className="text-[#92a4c9] text-sm leading-relaxed border-t border-[#324467] pt-3">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </details>
                        ))}
                    </div>
                </div>
            </div>

            {/* Support Request Form */}
            <div className="w-full max-w-350 mx-auto px-2 md:px-4 py-8 mb-12">
                <div className="flex flex-col md:flex-row gap-8 rounded-2xl border border-slate-200 dark:border-[#324467] bg-white dark:bg-[#192233] shadow-sm p-8">
                    <div className="flex flex-col gap-4 flex-1">
                        <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight font-display">
                            Gửi yêu cầu hỗ trợ
                        </h2>
                        <p className="text-slate-600 dark:text-[#92a4c9] text-sm">
                            Nếu bạn không tìm thấy câu trả lời, hãy điền vào biểu mẫu bên dưới.
                            Đội ngũ của chúng tôi sẽ liên hệ lại sớm nhất có thể.
                        </p>
                        <div className="mt-4 flex flex-col gap-4">
                            <div className="flex items-start gap-3 text-slate-600 dark:text-[#92a4c9]">
                                <CheckCircle className="text-primary" />
                                <span className="text-sm">Phản hồi nhanh trong 24h</span>
                            </div>
                            <div className="flex items-start gap-3 text-slate-600 dark:text-[#92a4c9]">
                                <CheckCircle className="text-primary" />
                                <span className="text-sm">Hỗ trợ kỹ thuật chuyên sâu</span>
                            </div>
                            <div className="flex items-start gap-3 text-slate-600 dark:text-[#92a4c9]">
                                <CheckCircle className="text-primary" />
                                <span className="text-sm">Bảo mật thông tin khách hàng</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-[1.5]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label className="flex flex-col gap-1.5">
                                <span className="text-slate-900 dark:text-white text-sm font-medium">Họ và tên</span>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full rounded-lg border border-slate-300 dark:border-[#324467] bg-white dark:bg-[#111722] p-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#5a6b8c] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm"
                                    placeholder="Nhập họ tên của bạn"
                                    type="text"
                                    required
                                />
                            </label>
                            <label className="flex flex-col gap-1.5">
                                <span className="text-slate-900 dark:text-white text-sm font-medium">Email liên hệ</span>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full rounded-lg border border-slate-300 dark:border-[#324467] bg-white dark:bg-[#111722] p-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#5a6b8c] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm"
                                    placeholder="example@email.com"
                                    type="email"
                                    required
                                />
                            </label>
                        </div>

                        <label className="flex flex-col gap-1.5">
                            <span className="text-slate-900 dark:text-white text-sm font-medium">Vấn đề cần hỗ trợ</span>
                            <div className="relative">
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full appearance-none rounded-lg border border-slate-300 dark:border-[#324467] bg-white dark:bg-[#111722] p-3 text-slate-900 dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm pr-10"
                                >
                                    {supportCategories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 dark:text-[#92a4c9]">
                                    <ExpandMore />
                                </div>
                            </div>
                        </label>

                        <label className="flex flex-col gap-1.5">
                            <span className="text-slate-900 dark:text-white text-sm font-medium">Nội dung chi tiết</span>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full rounded-lg border border-slate-300 dark:border-[#324467] bg-white dark:bg-[#111722] p-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#5a6b8c] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                                placeholder="Mô tả chi tiết vấn đề bạn đang gặp phải..."
                                rows="4"
                                required
                            />
                        </label>

                        {submitStatus && (
                            <div
                                className={`p-3 rounded-lg text-sm ${submitStatus.type === 'success'
                                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                    }`}
                            >
                                {submitStatus.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 w-full rounded-lg bg-primary py-3 text-sm font-bold text-white hover:bg-blue-600 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                        >
                            {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Support;
