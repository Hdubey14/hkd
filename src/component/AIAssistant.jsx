import { useEffect, useRef, useState } from "react";
import {
    FaTimes,
    FaPaperPlane,
    FaUser,
} from "react-icons/fa";
import "./AIAssistant.css";

function AIAssistant() {

    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [conversations, setConversations] = useState([]);

    const latestConversationRef = useRef(null);


    // =========================================================
    // AUTO SCROLL TO LATEST CONVERSATION
    // =========================================================

    useEffect(() => {

        if (!latestConversationRef.current) return;

        const timer = setTimeout(() => {

            latestConversationRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });

        }, 100);

        return () => clearTimeout(timer);

    }, [conversations]);


    // =========================================================
    // XLLIGENT COMPANY KNOWLEDGE
    // =========================================================

    const companyInfo = {

        greeting:
            "Hello! 👋 Welcome to Xlligent Softwares. How can I help you today?",


        company:
            "Xlligent Softwares is a software and technology company focused on building business-oriented software products, customized software solutions, ERP systems, web applications and digital solutions.",


        founder:
            "Gaurav Shrivastava is the Founder of Xlligent Softwares and serves as the Creative Director & CEO.",


        services:
            "Xlligent Softwares provides Software Development, Customized ERP Solutions, Web Development, Web Designing, App Development, Digital Marketing and AI Integration services. Solutions can be customized according to specific business requirements.",


        software:
            "Xlligent Softwares develops business-focused software and customized solutions including School Management Software, Hospital Management Software, ERP Solutions, Billing Software, College Management Software, Pharmacy Management Software, Real Estate solutions, E-commerce solutions, Loan Management solutions, Manufacturing & Inventory systems, Clinic/Doctor Management solutions, CRM and other requirement-based business applications.",


        products:
            "Xlligent Softwares currently presents School Management, Hospital Management, ERP, Billing, College Management, Pharmacy Management, Custom Web Development, Real Estate, E-Commerce and Manufacturing ERP solutions. The team can also discuss custom software requirements based on a business workflow. Custom software can also be developed according to business requirements.",


        school:
            "Xlligent School Management Software is designed to digitally manage school operations from a centralized system. It can cover student management, teacher management, attendance, fees, academics, examinations, communication and other administrative activities. The solution can be customized according to the school's requirements.",


        hospital:
            "Xlligent Softwares provides Hospital Management Software designed to help healthcare organizations manage operational and administrative activities digitally. The solution can be customized according to the requirements of the hospital or healthcare organization.",


        erp:
            "Xlligent Softwares provides Customized ERP Solutions that can connect different business operations into a centralized system. ERP solutions can be designed around the company's workflow, departments, processes and specific business requirements.",


        billing:
            "Xlligent Softwares provides Billing Software solutions designed to digitally manage billing and related business operations. The system can be customized according to the business workflow and requirements.",


        college:
            "Xlligent Softwares provides College Management Software solutions for educational institutions. The software can help centralize and digitally manage academic and administrative operations according to institutional requirements.",


        pharmacy:
            "Xlligent Softwares provides Pharmacy Management Software designed to digitally manage pharmacy-related business operations. The solution can be customized according to the specific requirements of the pharmacy.",


        realestate:
            "Xlligent Softwares provides Real Estate software solutions that can be customized around property-related business operations, workflows and management requirements.",


        ecommerce:
            "Xlligent Softwares provides E-commerce solutions for businesses that want to manage their online operations. E-commerce platforms can be developed and customized according to business and customer requirements.",


        loan:
            "Xlligent Softwares provides Loan Management solutions designed to help manage loan-related business processes digitally. The solution can be customized according to the organization's workflow and requirements.",


        manufacturing:
            "Xlligent Softwares provides Manufacturing and Inventory Management solutions that can help businesses manage production-related workflows, inventory and other operational processes through a centralized digital system.",


        clinic:
            "Xlligent Softwares provides Clinic and Doctor Management solutions for managing healthcare-related workflows and administrative activities digitally. The system can be customized according to the requirements of the clinic or doctor.",


        crm:
            "Xlligent Softwares provides CRM solutions designed to help businesses manage customer-related information, interactions and business workflows in a centralized system. CRM functionality can be customized according to business requirements.",


        web:
            "Xlligent Softwares provides Web Development and Web Designing services to create modern, responsive and business-focused websites. Websites can be customized according to the client's requirements and business goals.",


        app:
            "Xlligent Softwares provides App Development services for businesses looking to build customized mobile applications based on their business requirements and workflows.",


        digital:
            "Xlligent Softwares provides Digital Marketing services to help businesses build their online presence and reach their target audience through digital channels.",


        ai:
            "Yes. Xlligent Softwares provides AI Integration services. AI can be integrated into business applications to automate repetitive tasks, assist users, analyze business information, generate useful insights and improve workflows. The exact AI functionality depends on the project requirements.",


        customSoftware:
            "Yes. Xlligent Softwares can develop customized software according to a company's specific requirements. The solution can be planned around the client's workflow, users, business processes and required features.",


        technology:
            "Xlligent Softwares works with modern web and software development technologies depending on the project requirements. The technology stack can vary according to the type of product, platform, integrations, performance and scalability requirements.",


        contact:
            "You can contact Xlligent Softwares at +91 6261900209 or sales@xlligent-softwares.com. Our team can help you with product information, software requirements, customization and project discussions.",


        location:
            "For the latest office and location details, please contact Xlligent Softwares at +91 6261900209. Our team can provide the current location information.",


        demo:
            "You can explore the available product demos through the Products section of the Xlligent Softwares website. For a specific product demo or access requirement, you can contact the Xlligent team.",


        pricing:
            "Software pricing depends on the product, required modules, customization, integrations and project scope. For an accurate quotation, please contact Xlligent Softwares at +91 6261900209 or sales@xlligent-softwares.com.",


        career:
            "For career and job-related opportunities at Xlligent Softwares, please check the Careers section of the website or contact the Xlligent team for current openings.",


        default:
            "I'm sorry, I don't have enough information about this at the moment. I can help with information related to Xlligent Softwares, its products, software solutions, services and AI capabilities. For more information, contact Xlligent Softwares at +91 6261900209."

    };


    // =========================================================
    // ONLY 6 QUICK QUESTIONS
    // =========================================================

    const quickQuestions = [

        "What does Xlligent Softwares do?",

        "What software and products do you provide?",

        "What services do you provide?",

        "Tell me about School Management Software",

        "How does AI help in your software?",

        "How can I contact Xlligent Softwares?"

    ];


    // =========================================================
    // NORMALIZE TEXT
    // =========================================================

    const normalizeText = (text) => {

        return text
            .toLowerCase()
            .trim()
            .replace(/[?!.,]/g, " ")
            .replace(/\s+/g, " ");

    };


    // =========================================================
    // GET ANSWER
    // =========================================================

    const getAnswer = (question) => {

        const text = normalizeText(question);


        // =====================================================
        // GREETING
        // =====================================================

        const greetings = [
            "hi",
            "hello",
            "hey",
            "hola",
            "hi there",
            "hello there",
            "hey there",
            "good morning",
            "good afternoon",
            "good evening"
        ];

        if (greetings.includes(text)) {

            return companyInfo.greeting;

        }


        // =====================================================
        // THANK YOU
        // =====================================================

        const thanks = [
            "thank you",
            "thanks",
            "thankyou",
            "thanks a lot",
            "thank you so much",
            "thank u"
        ];

        if (thanks.includes(text)) {

            return "You're welcome! 😊 If you have any questions about Xlligent Softwares, its products or services, feel free to ask.";

        }


        // =====================================================
        // FOUNDER / CEO
        // =====================================================

        if (

            text.includes("founder") ||
            text.includes("ceo") ||
            text.includes("chief executive") ||
            text.includes("creative director") ||
            text.includes("who founded xlligent") ||
            text.includes("who is the founder") ||
            text.includes("who is founder") ||
            text.includes("founder of xlligent") ||
            text.includes("xlligent founder") ||
            text.includes("xlligent ceo") ||
            text.includes("company founder") ||
            text.includes("founder kaun") ||
            text.includes("founder kon") ||
            text.includes("founder kaun hai") ||
            text.includes("founder kon hai") ||
            text.includes("ceo kaun") ||
            text.includes("ceo kon") ||
            text.includes("ceo kaun hai") ||
            text.includes("ceo kon hai")

        ) {

            return companyInfo.founder;

        }


        // =====================================================
        // COMPANY
        // =====================================================

        if (

            text.includes("what does xlligent do") ||
            text.includes("what does xlligent softwares do") ||
            text.includes("what does xlligent software do") ||
            text.includes("about xlligent") ||
            text.includes("about xlligent softwares") ||
            text.includes("tell me about xlligent") ||
            text.includes("tell me about xlligent softwares") ||
            text.includes("who is xlligent") ||
            text.includes("what is xlligent") ||
            text.includes("company information") ||
            text.includes("about company") ||
            text.includes("what kind of company") ||
            text.includes("xlligent kya karta hai") ||
            text.includes("xlligent kya hai") ||
            text.includes("company kya karti hai")

        ) {

            return companyInfo.company;

        }


        // =====================================================
        // SCHOOL
        // =====================================================

        if (

            text.includes("school management") ||
            text.includes("school software") ||
            text.includes("school system") ||
            text.includes("software for school") ||
            text.includes("school solution") ||
            text.includes("school erp") ||
            text.includes("school ka software") ||
            text.includes("school ke liye software") ||
            text.includes("school ke liye system")

        ) {

            return companyInfo.school;

        }


        // =====================================================
        // HOSPITAL
        // =====================================================

        if (

            text.includes("hospital management") ||
            text.includes("hospital software") ||
            text.includes("hospital system") ||
            text.includes("hospital solution") ||
            text.includes("software for hospital") ||
            text.includes("hospital erp") ||
            text.includes("hospital ka software") ||
            text.includes("hospital ke liye software")

        ) {

            return companyInfo.hospital;

        }


        // =====================================================
        // ERP
        // =====================================================

        if (

            text === "erp" ||
            text.includes("erp software") ||
            text.includes("erp solution") ||
            text.includes("erp system") ||
            text.includes("custom erp") ||
            text.includes("customized erp") ||
            text.includes("erp for business") ||
            text.includes("business erp") ||
            text.includes("what is your erp") ||
            text.includes("tell me about erp") ||
            text.includes("erp kya hai") ||
            text.includes("erp ka software") ||
            text.includes("business ke liye erp")

        ) {

            return companyInfo.erp;

        }


        // =====================================================
        // BILLING
        // =====================================================

        if (

            text.includes("billing software") ||
            text.includes("billing solution") ||
            text.includes("billing system") ||
            text.includes("billing application") ||
            text.includes("software for billing") ||
            text.includes("billing ka software") ||
            text.includes("billing ke liye software")

        ) {

            return companyInfo.billing;

        }


        // =====================================================
        // COLLEGE
        // =====================================================

        if (

            text.includes("college management") ||
            text.includes("college software") ||
            text.includes("college system") ||
            text.includes("college solution") ||
            text.includes("software for college") ||
            text.includes("college ka software") ||
            text.includes("college ke liye software")

        ) {

            return companyInfo.college;

        }


        // =====================================================
        // PHARMACY
        // =====================================================

        if (

            text.includes("pharmacy management") ||
            text.includes("pharmacy software") ||
            text.includes("pharmacy system") ||
            text.includes("pharmacy solution") ||
            text.includes("software for pharmacy") ||
            text.includes("pharmacy ka software") ||
            text.includes("pharmacy ke liye software")

        ) {

            return companyInfo.pharmacy;

        }


        // =====================================================
        // REAL ESTATE
        // =====================================================

        if (

            text.includes("real estate software") ||
            text.includes("real estate solution") ||
            text.includes("real estate system") ||
            text.includes("property management software") ||
            text.includes("property software") ||
            text.includes("real estate") ||
            text.includes("property management") ||
            text.includes("property ka software")

        ) {

            return companyInfo.realestate;

        }


        // =====================================================
        // E-COMMERCE
        // =====================================================

        if (

            text.includes("ecommerce") ||
            text.includes("e commerce") ||
            text.includes("e-commerce") ||
            text.includes("ecommerce software") ||
            text.includes("ecommerce solution") ||
            text.includes("online store") ||
            text.includes("online shopping software") ||
            text.includes("ecommerce ka software")

        ) {

            return companyInfo.ecommerce;

        }


        // =====================================================
        // LOAN
        // =====================================================

        if (

            text.includes("loan management") ||
            text.includes("loan software") ||
            text.includes("loan system") ||
            text.includes("loan solution") ||
            text.includes("loan ka software") ||
            text.includes("loan management software")

        ) {

            return companyInfo.loan;

        }


        // =====================================================
        // MANUFACTURING / INVENTORY
        // =====================================================

        if (

            text.includes("manufacturing software") ||
            text.includes("manufacturing system") ||
            text.includes("manufacturing management") ||
            text.includes("inventory software") ||
            text.includes("inventory management") ||
            text.includes("inventory system") ||
            text.includes("manufacturing and inventory") ||
            text.includes("stock management software")

        ) {

            return companyInfo.manufacturing;

        }


        // =====================================================
        // CLINIC / DOCTOR
        // =====================================================

        if (

            text.includes("clinic management") ||
            text.includes("clinic software") ||
            text.includes("clinic system") ||
            text.includes("doctor management") ||
            text.includes("doctor software") ||
            text.includes("doctor system") ||
            text.includes("clinic ka software") ||
            text.includes("doctor ke liye software")

        ) {

            return companyInfo.clinic;

        }


        // =====================================================
        // CRM
        // =====================================================

        if (

            text === "crm" ||
            text.includes("crm software") ||
            text.includes("crm system") ||
            text.includes("crm solution") ||
            text.includes("customer management software") ||
            text.includes("customer relationship management")

        ) {

            return companyInfo.crm;

        }


        // =====================================================
        // SOFTWARE
        // =====================================================

        if (

            text === "software" ||
            text === "softwares" ||
            text.includes("what software") ||
            text.includes("which software") ||
            text.includes("what kind of software") ||
            text.includes("what type of software") ||
            text.includes("what software do you build") ||
            text.includes("what software does xlligent build") ||
            text.includes("what software do you develop") ||
            text.includes("software do you make") ||
            text.includes("software products") ||
            text.includes("software banate ho") ||
            text.includes("kaun sa software banate ho") ||
            text.includes("kon sa software banate ho") ||
            text.includes("konsa software banate ho") ||
            text.includes("kis type ka software") ||
            text.includes("kis tarah ka software")

        ) {

            return companyInfo.software;

        }


        // =====================================================
        // PRODUCTS
        // =====================================================

        if (

            text === "product" ||
            text === "products" ||
            text.includes("what products") ||
            text.includes("which products") ||
            text.includes("what products do you provide") ||
            text.includes("what products do you offer") ||
            text.includes("products do you have") ||
            text.includes("your products") ||
            text.includes("xlligent products") ||
            text.includes("product list") ||
            text.includes("products list") ||
            text.includes("kaun se products") ||
            text.includes("kon se products")

        ) {

            return companyInfo.products;

        }


        // =====================================================
        // SERVICES
        // =====================================================

        if (

            text === "service" ||
            text === "services" ||
            text.includes("what services") ||
            text.includes("which services") ||
            text.includes("what are your services") ||
            text.includes("services do you provide") ||
            text.includes("services do you offer") ||
            text.includes("what can you do") ||
            text.includes("aap kya services dete ho") ||
            text.includes("kaun si services") ||
            text.includes("kon si services") ||
            text.includes("services kya hai") ||
            text.includes("what service do you provide")

        ) {

            return companyInfo.services;

        }


        // =====================================================
        // WEB
        // =====================================================

        if (

            text.includes("web development") ||
            text.includes("web designing") ||
            text.includes("web design") ||
            text.includes("website development") ||
            text.includes("website design") ||
            text.includes("web service") ||
            text.includes("website") ||
            text.includes("website banate ho") ||
            text.includes("website bana sakte ho") ||
            text.includes("web development karte ho")

        ) {

            return companyInfo.web;

        }


        // =====================================================
        // APP
        // =====================================================

        if (

            text.includes("app development") ||
            text.includes("mobile app") ||
            text.includes("mobile application") ||
            text.includes("application development") ||
            text.includes("android app") ||
            text.includes("ios app") ||
            text.includes("app banate ho") ||
            text.includes("mobile app banate ho")

        ) {

            return companyInfo.app;

        }


        // =====================================================
        // DIGITAL MARKETING
        // =====================================================

        if (

            text.includes("digital marketing") ||
            text.includes("online marketing") ||
            text.includes("marketing service") ||
            text.includes("digital promotion") ||
            text.includes("marketing karte ho")

        ) {

            return companyInfo.digital;

        }


        // =====================================================
        // AI
        // =====================================================

        if (

            text.includes("ai integration") ||
            text.includes("artificial intelligence") ||
            text.includes("do you provide ai") ||
            text.includes("do you offer ai") ||
            text.includes("ai service") ||
            text.includes("ai services") ||
            text.includes("ai in software") ||
            text.includes("ai in your software") ||
            text.includes("how can ai help") ||
            text.includes("how does ai help") ||
            text.includes("how ai helps") ||
            text.includes("ai kaise help") ||
            text.includes("software me ai") ||
            text.includes("ai software me") ||
            text.includes("ai use karte ho")

        ) {

            return companyInfo.ai;

        }


        // =====================================================
        // CUSTOM SOFTWARE
        // =====================================================

        if (

            text.includes("custom software") ||
            text.includes("customized software") ||
            text.includes("custom software development") ||
            text.includes("software customization") ||
            text.includes("build software for my business") ||
            text.includes("software for my business") ||
            text.includes("software according to my requirement") ||
            text.includes("software according to requirements") ||
            text.includes("my own software") ||
            text.includes("custom software bana sakte ho") ||
            text.includes("mere business ke liye software") ||
            text.includes("business ke according software")

        ) {

            return companyInfo.customSoftware;

        }


        // =====================================================
        // TECHNOLOGY
        // =====================================================

        if (

            text.includes("technology") ||
            text.includes("technologies") ||
            text.includes("tech stack") ||
            text.includes("which technology") ||
            text.includes("what technology") ||
            text.includes("what technologies") ||
            text.includes("which tech") ||
            text.includes("technology stack")

        ) {

            return companyInfo.technology;

        }


        // =====================================================
        // CONTACT
        // =====================================================

        if (

            text === "contact" ||
            text.includes("contact xlligent") ||
            text.includes("contact you") ||
            text.includes("how can i contact") ||
            text.includes("how to contact") ||
            text.includes("contact details") ||
            text.includes("contact number") ||
            text.includes("phone number") ||
            text.includes("email address") ||
            text.includes("email") ||
            text.includes("how can i reach you") ||
            text.includes("how to reach you") ||
            text.includes("contact kaise kare") ||
            text.includes("contact kaise karu") ||
            text.includes("number kya hai") ||
            text.includes("phone number kya hai") ||
            text.includes("email kya hai")

        ) {

            return companyInfo.contact;

        }


        // =====================================================
        // LOCATION
        // =====================================================

        if (

            text === "location" ||
            text.includes("where are you located") ||
            text.includes("where is xlligent") ||
            text.includes("xlligent location") ||
            text.includes("office location") ||
            text.includes("office address") ||
            text.includes("where is your office") ||
            text.includes("office kaha hai") ||
            text.includes("location kya hai")

        ) {

            return companyInfo.location;

        }


        // =====================================================
        // DEMO
        // =====================================================

        if (

            text.includes("demo") ||
            text.includes("product demo") ||
            text.includes("software demo") ||
            text.includes("can i see the demo") ||
            text.includes("where can i see demo") ||
            text.includes("demo dikhao") ||
            text.includes("demo kaha milega") ||
            text.includes("software ka demo")

        ) {

            return companyInfo.demo;

        }


        // =====================================================
        // PRICING
        // =====================================================

        if (

            text.includes("price") ||
            text.includes("pricing") ||
            text.includes("cost") ||
            text.includes("how much") ||
            text.includes("quotation") ||
            text.includes("quote") ||
            text.includes("kitne ka") ||
            text.includes("kitna cost") ||
            text.includes("price kya hai")

        ) {

            return companyInfo.pricing;

        }


        // =====================================================
        // CAREER
        // =====================================================

        if (

            text.includes("career") ||
            text.includes("job") ||
            text.includes("jobs") ||
            text.includes("vacancy") ||
            text.includes("vacancies") ||
            text.includes("hiring") ||
            text.includes("work with xlligent") ||
            text.includes("job at xlligent") ||
            text.includes("career at xlligent")

        ) {

            return companyInfo.career;

        }


        // =====================================================
        // DEFAULT
        // =====================================================

        return companyInfo.default;

    };


    // =========================================================
    // ADD CONVERSATION
    // =========================================================

    const addConversation = (question) => {

        if (!question.trim()) return;

        const userQuestion = question.trim();

        const answer = getAnswer(userQuestion);


        const newConversation = {

            id: Date.now(),

            question: userQuestion,

            answer: answer,

        };


        setConversations((previous) => [

            ...previous,

            newConversation,

        ]);

    };


    // =========================================================
    // SEND MESSAGE
    // =========================================================

    const handleSend = () => {

        if (!message.trim()) return;

        addConversation(message);

        setMessage("");

    };


    // =========================================================
    // QUICK QUESTION
    // =========================================================

    const handleQuickQuestion = (question) => {

        addConversation(question);

    };


    // =========================================================
    // QUICK QUESTIONS
    // =========================================================

    const QuickQuestions = () => {

        return (

            <div className="ai-quick-questions">

                <span>
                    You can ask:
                </span>


                {quickQuestions.map((question, index) => (

                    <button
                        key={index}
                        onClick={() =>
                            handleQuickQuestion(question)
                        }
                    >
                        {question}
                    </button>

                ))}

            </div>

        );

    };


    // =========================================================
    // RENDER
    // =========================================================

    return (

        <>

            {/* =================================================
                CHAT WINDOW
            ================================================= */}

            {isOpen && (

                <div className="ai-chat-box">


                    {/* =================================================
                        HEADER
                    ================================================= */}

                    <div className="ai-chat-header">

                        <div className="ai-header-left">

                            <div className="ai-header-icon">

                                <span className="xlligent-x-mark" aria-hidden="true">X</span>

                            </div>


                            <div>

                                <strong>
                                    Xlligent AI
                                </strong>

                                <span>
                                    AI Assistant
                                </span>

                            </div>

                        </div>


                        <button
                            onClick={() =>
                                setIsOpen(false)
                            }
                            aria-label="Close AI assistant"
                        >

                            <FaTimes />

                        </button>

                    </div>


                    {/* =================================================
                        CHAT BODY
                    ================================================= */}

                    <div className="ai-chat-body">


                        {/* =================================================
                            WELCOME MESSAGE
                        ================================================= */}

                        <div className="ai-conversation welcome-conversation">

                            <div className="ai-message">

                                <div className="ai-avatar">

                                    <span className="xlligent-x-mark" aria-hidden="true">X</span>

                                </div>


                                <p>

                                    Hi! 👋 I'm Xlligent AI Assistant.

                                    <br />

                                    How can I help you with
                                    Xlligent Softwares?

                                </p>

                            </div>


                            {/* INITIAL QUESTIONS */}

                            {conversations.length === 0 && (

                                <QuickQuestions />

                            )}

                        </div>


                        {/* =================================================
                            CONVERSATION HISTORY
                        ================================================= */}

                        <div className="ai-conversation-history">


                            {conversations.map(
                                (conversation, index) => (

                                    <div
                                        className="ai-conversation"
                                        key={conversation.id}
                                        ref={
                                            index === conversations.length - 1
                                                ? latestConversationRef
                                                : null
                                        }
                                    >


                                        {/* =================================================
                                            USER QUESTION
                                        ================================================= */}

                                        <div className="user-message">

                                            <p>
                                                {conversation.question}
                                            </p>


                                            <div className="user-avatar">

                                                <FaUser />

                                            </div>

                                        </div>


                                        {/* =================================================
                                            AI ANSWER
                                        ================================================= */}

                                        <div className="ai-message ai-answer">

                                            <div className="ai-avatar">

                                                <span className="xlligent-x-mark" aria-hidden="true">X</span>

                                            </div>


                                            <p>
                                                {conversation.answer}
                                            </p>

                                        </div>


                                        {/* =================================================
                                            QUESTIONS AFTER THIS ANSWER
                                        ================================================= */}

                                        <QuickQuestions />


                                    </div>

                                )
                            )}

                        </div>

                    </div>


                    {/* =================================================
                        INPUT
                    ================================================= */}

                    <div className="ai-chat-input">

                        <input
                            type="text"
                            placeholder="Ask about Xlligent Softwares..."
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                            onKeyDown={(e) => {

                                if (e.key === "Enter") {

                                    handleSend();

                                }

                            }}
                        />


                        <button
                            onClick={handleSend}
                            aria-label="Send message"
                            disabled={!message.trim()}
                        >

                            <FaPaperPlane />

                        </button>

                    </div>

                </div>

            )}


            {/* =================================================
                FLOATING BUTTON
            ================================================= */}

            <button
                className={`ai-button ${
                    isOpen ? "active" : ""
                }`}
                onClick={() =>
                    setIsOpen(!isOpen)
                }
                aria-label="Open AI assistant"
            >

                {isOpen
                    ? <FaTimes />
                    : <span className="xlligent-x-mark" aria-hidden="true">X</span>
                }

            </button>

        </>

    );

}

export default AIAssistant;
