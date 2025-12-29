import React, { useState } from "react";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentsIcon from '@mui/icons-material/Payments';

const iconMap = {
    verified: VerifiedUserIcon,
    shipping: LocalShippingIcon,
    support: SupportAgentIcon,
    payments: PaymentsIcon,
};

export default function FeatureSection({ features }) {
    return (
        <section
            className="w-full mx-auto max-w-350 mb-16"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
                {features.map((feature) => {
                    const Icon = iconMap[feature.icon];
                    return (
                        <div
                            key={feature.id}
                            className="flex flex-col items-center justify-center gap-4 py-8 px-12 border border-solid border-[#282e39] rounded-lg bg-[#1c1f27]/50 backdrop-blur-sm"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#135bec]/10 flex items-center justify-center">
                                <Icon className="text-[#135bec] w-7 h-7" />
                            </div>
                            <h3 className="font-bold text-lg text-white">{feature.title}</h3>
                            <p className="text-[#9da6b9] text-sm text-center">{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};