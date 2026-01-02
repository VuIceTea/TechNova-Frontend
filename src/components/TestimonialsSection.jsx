import TestimonialCard from "./Cards/TestimonialCard";
import { mockTestimonials } from "../data/mockTestimonials";

const TestimonialsSection = () => {
    return (
        <section className="w-full mx-auto max-w-350 px-2 md:px-4 mb-16">
            <div className="bg-[#1c1f27]/50 py-12 rounded-xl px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-white text-3xl font-bold">Khách hàng nói gì về TechNova</h2>
                    <p className="text-[#9da6b9] mt-4">
                        Hơn 10.000 khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mockTestimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} data={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;