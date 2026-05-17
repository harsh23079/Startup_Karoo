import { ArrowLeft, Shield, Eye, Lock, Database, Bell, UserCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicyPage() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const sections = [
        {
            icon: <Database className="w-6 h-6 text-white" />,
            title: "Information We Collect",
            content: [
                "Personal information such as name, email address, and phone number when you register an account.",
                "Usage data including pages visited, time spent on the platform, and interaction with content.",
                "Device information such as browser type, operating system, and IP address for analytics and security purposes.",
                "Payment information when you purchase courses or services, processed securely through third-party payment providers.",
            ],
        },
        {
            icon: <Eye className="w-6 h-6 text-white" />,
            title: "How We Use Your Information",
            content: [
                "To provide and maintain our learning platform and services.",
                "To personalize your learning experience and recommend relevant content.",
                "To communicate with you about updates, new courses, and promotional offers.",
                "To improve our platform through analytics and user feedback.",
                "To ensure security and prevent fraudulent activities.",
            ],
        },
        {
            icon: <Lock className="w-6 h-6 text-white" />,
            title: "Data Security",
            content: [
                "We implement industry-standard security measures to protect your personal data.",
                "All data transmissions are encrypted using SSL/TLS technology.",
                "Access to personal information is restricted to authorized personnel only.",
                "We regularly review and update our security practices to address emerging threats.",
            ],
        },
        {
            icon: <UserCheck className="w-6 h-6 text-white" />,
            title: "Your Rights",
            content: [
                "You can access, update, or delete your personal information at any time through your account settings.",
                "You have the right to opt out of marketing communications.",
                "You can request a copy of all personal data we hold about you.",
                "You have the right to withdraw consent for data processing where applicable.",
            ],
        },
        {
            icon: <Bell className="w-6 h-6 text-white" />,
            title: "Cookies & Tracking",
            content: [
                "We use cookies to enhance your browsing experience and remember your preferences.",
                "Analytics cookies help us understand how users interact with our platform.",
                "You can manage cookie preferences through your browser settings.",
                "Third-party services used on our platform may also set their own cookies.",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <button
                    onClick={handleGoBack}
                    className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-colors duration-200 mb-8 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
                    <span>Back</span>
                </button>

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Privacy{" "}
                        <span className="text-orange-500">Policy</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Your privacy is important to us. This policy explains
                        how we collect, use, and protect your personal
                        information.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        Last updated: May 18, 2026
                    </p>
                </div>

                {/* Introduction */}
                <div className="mb-12">
                    <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Startup Kroo, we are committed to protecting your
                            privacy and ensuring the security of your personal
                            information. This Privacy Policy outlines how we
                            collect, use, disclose, and safeguard your data when
                            you use our learning platform and services. By using
                            our platform, you agree to the terms described in
                            this policy.
                        </p>
                    </div>
                </div>

                {/* Policy Sections */}
                <div className="space-y-8 mb-16">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-colors duration-200"
                        >
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                    {section.icon}
                                </div>
                                <h2 className="text-2xl font-bold">
                                    {section.title}
                                </h2>
                            </div>
                            <ul className="space-y-3">
                                {section.content.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start space-x-3"
                                    >
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 flex-shrink-0"></span>
                                        <span className="text-gray-300 leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Third-Party Services */}
                <div className="mb-12">
                    <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">
                            Third-Party Services
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Our platform may contain links to third-party
                            websites and services. We are not responsible for the
                            privacy practices of these external sites. We
                            encourage you to review the privacy policies of any
                            third-party services you interact with through our
                            platform.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            We use third-party services for payment processing,
                            analytics, and content delivery. These services have
                            their own privacy policies and may collect
                            information as described in their respective
                            policies.
                        </p>
                    </div>
                </div>

                {/* Children's Privacy */}
                <div className="mb-12">
                    <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                        <h2 className="text-2xl font-bold mb-4">
                            Children's Privacy
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Our platform is not intended for children under the
                            age of 13. We do not knowingly collect personal
                            information from children. If we become aware that a
                            child under 13 has provided us with personal data, we
                            will take steps to delete such information
                            promptly.
                        </p>
                    </div>
                </div>

                {/* Changes to Policy */}
                <div className="mb-12">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-8">
                        <h2 className="text-2xl font-bold mb-4">
                            Changes to This Policy
                        </h2>
                        <p className="text-orange-100 leading-relaxed">
                            We may update this Privacy Policy from time to time
                            to reflect changes in our practices or legal
                            requirements. We will notify you of any significant
                            changes by posting the updated policy on our platform
                            and updating the "Last updated" date. We encourage
                            you to review this policy periodically.
                        </p>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center bg-gray-900 rounded-lg p-8 border border-gray-800">
                    <h2 className="text-2xl font-bold mb-4">
                        Questions About Our Privacy Policy?
                    </h2>
                    <p className="text-gray-400 mb-6">
                        If you have any questions or concerns about this Privacy
                        Policy or how we handle your data, please don't hesitate
                        to contact us.
                    </p>
                    <a
                        href="mailto:business@shunyeott.com"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
}
