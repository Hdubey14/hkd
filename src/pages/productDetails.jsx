import { Link, useParams } from "react-router-dom";

import {
    FaArrowLeft,
    FaArrowRight,
    FaCheckCircle,
    FaRobot,
    FaUsers,
    FaShieldAlt,
    FaChartLine,
    FaCogs,
    FaDatabase,
    FaCloud,
    FaMobileAlt,
    FaLock,
    FaQuestionCircle,
    FaChevronDown,
    FaUserGraduate,
    FaUserPlus,
    FaChalkboardTeacher,
    FaUserTie,
    FaClipboardCheck,
    FaFileAlt,
    FaCalendarAlt,
    FaMoneyBillWave,
    FaBook,
    FaBus,
    FaBed,
    FaHeartbeat,
    FaHospital,
    FaUserMd,
    FaClock,
    FaStethoscope,
    FaFlask,
    FaCapsules,
    FaReceipt,
    FaWarehouse,
    FaBoxes,
    FaShoppingCart,
    FaTruck,
    FaCalculator,
    FaHandshake,
    FaProjectDiagram,
    FaUsersCog,
    FaBullhorn,
    FaUniversity,
    FaGraduationCap,
    FaBriefcase,
    FaUserFriends,
    FaIdCard,
    FaFileInvoiceDollar,
    FaPrescriptionBottleAlt,
    FaSearch,
    FaHome,
    FaMapMarkerAlt,
    FaTags,
    FaKey,
    FaGlobe,
    FaPaintBrush,
    FaPlug,
    FaServer,
    FaCode,
    FaChartBar,
    FaCreditCard,
    FaPercent,
    FaUndo,
    FaMoneyCheckAlt,
    FaFolderOpen,
    FaCog,
    FaComments,
    FaUserCheck,
    FaChartPie,
    FaCog as FaSettings,
} from "react-icons/fa";

import usePageMeta from "../hooks/usePageMeta";
import "./productDetails.css";


// --------------------------------------------------
// ICON HELPER
// --------------------------------------------------

function getModuleIcon(title = "") {
    const text = title.toLowerCase();

    if (text.includes("student")) return <FaUserGraduate />;
    if (text.includes("admission") || text.includes("enrollment"))
        return <FaUserPlus />;
    if (text.includes("teacher") || text.includes("faculty"))
        return <FaChalkboardTeacher />;
    if (text.includes("staff") || text.includes("employee") || text.includes("hr"))
        return <FaUserTie />;
    if (text.includes("attendance")) return <FaClipboardCheck />;
    if (
        text.includes("exam") ||
        text.includes("grade") ||
        text.includes("result")
    )
        return <FaFileAlt />;
    if (
        text.includes("timetable") ||
        text.includes("schedule") ||
        text.includes("calendar")
    )
        return <FaCalendarAlt />;
    if (
        text.includes("fee") ||
        text.includes("billing") ||
        text.includes("invoice")
    )
        return <FaMoneyBillWave />;
    if (text.includes("parent") || text.includes("family"))
        return <FaUsers />;
    if (text.includes("library") || text.includes("book"))
        return <FaBook />;
    if (
        text.includes("transport") ||
        text.includes("vehicle") ||
        text.includes("driver") ||
        text.includes("route")
    )
        return <FaBus />;
    if (text.includes("hostel") || text.includes("room") || text.includes("bed"))
        return <FaBed />;
    if (text.includes("health") || text.includes("medical"))
        return <FaHeartbeat />;

    if (text.includes("hospital")) return <FaHospital />;
    if (text.includes("doctor")) return <FaUserMd />;
    if (text.includes("appointment")) return <FaClock />;
    if (text.includes("opd")) return <FaStethoscope />;
    if (text.includes("ipd") || text.includes("inpatient"))
        return <FaHospital />;
    if (
        text.includes("laboratory") ||
        text.includes("lab") ||
        text.includes("pathology") ||
        text.includes("radiology")
    )
        return <FaFlask />;
    if (text.includes("pharmacy") || text.includes("medicine"))
        return <FaCapsules />;
    if (text.includes("receipt")) return <FaReceipt />;
    if (
        text.includes("inventory") ||
        text.includes("stock") ||
        text.includes("warehouse")
    )
        return <FaWarehouse />;
    if (text.includes("product")) return <FaBoxes />;
    if (text.includes("purchase")) return <FaShoppingCart />;
    if (
        text.includes("sales") ||
        text.includes("order") ||
        text.includes("cart")
    )
        return <FaShoppingCart />;
    if (text.includes("shipping") || text.includes("delivery"))
        return <FaTruck />;
    if (
        text.includes("account") ||
        text.includes("accounting") ||
        text.includes("finance")
    )
        return <FaCalculator />;
    if (
        text.includes("crm") ||
        text.includes("customer") ||
        text.includes("lead")
    )
        return <FaHandshake />;
    if (text.includes("project")) return <FaProjectDiagram />;
    if (text.includes("workflow")) return <FaUsersCog />;
    if (
        text.includes("communication") ||
        text.includes("notification") ||
        text.includes("announcement")
    )
        return <FaBullhorn />;
    if (text.includes("college") || text.includes("university"))
        return <FaUniversity />;
    if (text.includes("course") || text.includes("academic"))
        return <FaGraduationCap />;
    if (text.includes("placement") || text.includes("career"))
        return <FaBriefcase />;
    if (text.includes("alumni")) return <FaUserFriends />;
    if (text.includes("identity") || text.includes("profile"))
        return <FaIdCard />;
    if (text.includes("gst") || text.includes("tax"))
        return <FaFileInvoiceDollar />;
    if (text.includes("prescription"))
        return <FaPrescriptionBottleAlt />;
    if (text.includes("search") || text.includes("filter"))
        return <FaSearch />;

    if (text.includes("property") || text.includes("real estate"))
        return <FaHome />;
    if (text.includes("location") || text.includes("site visit"))
        return <FaMapMarkerAlt />;
    if (text.includes("listing")) return <FaTags />;
    if (text.includes("seller") || text.includes("buyer"))
        return <FaHandshake />;
    if (text.includes("rent") || text.includes("lease"))
        return <FaKey />;

    if (
        text.includes("website") ||
        text.includes("web application") ||
        text.includes("web")
    )
        return <FaGlobe />;
    if (text.includes("ui") || text.includes("ux") || text.includes("design"))
        return <FaPaintBrush />;
    if (text.includes("api") || text.includes("integration"))
        return <FaPlug />;
    if (text.includes("database")) return <FaDatabase />;
    if (
        text.includes("authentication") ||
        text.includes("access")
    )
        return <FaLock />;
    if (
        text.includes("server") ||
        text.includes("deployment") ||
        text.includes("hosting")
    )
        return <FaServer />;
    if (
        text.includes("code") ||
        text.includes("development") ||
        text.includes("frontend") ||
        text.includes("backend")
    )
        return <FaCode />;

    if (text.includes("dashboard")) return <FaChartBar />;
    if (
        text.includes("analytics") ||
        text.includes("report")
    )
        return <FaChartLine />;
    if (
        text.includes("payment") ||
        text.includes("gateway")
    )
        return <FaCreditCard />;
    if (text.includes("coupon") || text.includes("discount"))
        return <FaPercent />;
    if (text.includes("return") || text.includes("refund"))
        return <FaUndo />;
    if (text.includes("payroll")) return <FaMoneyCheckAlt />;
    if (text.includes("document")) return <FaFolderOpen />;
    if (text.includes("setting") || text.includes("configuration"))
        return <FaSettings />;
    if (text.includes("security")) return <FaShieldAlt />;
    if (text.includes("comment") || text.includes("chat"))
        return <FaComments />;

    return <FaCogs />;
}


// --------------------------------------------------
// PRODUCT DATA
// --------------------------------------------------

const products = {

    "school-management": {
        category: "EDUCATION MANAGEMENT SOLUTION",
        title: "School Management Solution",
        image: "/image/school.png",

        description:
            "A complete digital school management platform designed to simplify academic, administrative, financial and communication tasks, including ID card generation, from one centralised system.",

        overview:
            "Our School Management System helps schools move from scattered registers, spreadsheets and manual processes to a centralized digital environment.",

        stats: [
            ["20+", "Core Modules"],
            ["100%", "Centralized Data"],
            ["24/7", "System Access"],
            ["Role", "Based Access"],
        ],

        features: [
            "Student Management",
            "Teacher & Staff Management",
            "Admissions & Enrollment",
            "Attendance Management",
            "Fees & Payment Management",
            "Examination & Results",
            "Class & Timetable Management",
            "Parent & Student Portal",
            "Homework & Assignment Management",
            "Library Management",
            "Transport Management",
            "Communication & Notifications",
            "Reports & Analytics",
            "Role-Based Access",
            "Document Management",
            "Student ID Card",
            "WhatsApp Communication",
            "Online Exam Management",
            "Certificate Management",
            "Class & Section Management",
            "Academic Session Management",
            "School Calendar",
            "SMS & Email Notifications",
            "Visitor Management",
            "Parent Communication Portal"
        ],

        ai: [
            "Attendance and academic performance analysis",
            "Automated summaries and management reports",
            "Smart assistance for routine parent and student queries",
            "Data pattern identification for better planning",
            "Automated communication and notice assistance",
        ],

        modules: [
            {
                title: "Student Management",
                description:
                    "Maintain complete student profiles including personal information, generate ID card, academic history, documents, class allocation and status.",
            },
            {
                title: "Admission & Enrollment",
                description:
                    "Manage enquiries, applications, student registration, document verification and admission workflows digitally.",
            },
            {
                title: "Teacher & Staff Management",
                description:
                    "Maintain teacher and staff profiles, responsibilities, attendance, departments and organizational information.",
            },
            {
                title: "Attendance Management",
                description:
                    "Record daily attendance, monitor student presence and generate attendance summaries and reports.",
            },
            {
                title: "Fees Management",
                description:
                    "Manage fee structures, collections, pending payments, receipts and financial summaries from one place.",
            },
            {
                title: "Examination & Results",
                description:
                    "Create examinations, manage marks, grades, subjects, results and academic performance records.",
            },
            {
                title: "Timetable Management",
                description:
                    "Create and manage class schedules, teacher schedules, subjects and classroom allocations.",
            },
            {
                title: "Parent & Student Portal",
                description:
                    "Provide role-based access for students and parents to view academic information, attendance, notices and updates.",
            },
            {
                title: "Library Management",
                description:
                    "Manage books, availability, issue-return records, members and library activity.",
            },
            {
                title: "Transport Management",
                description:
                    "Manage vehicles, routes, drivers, student transport allocation and transportation records.",
            },
            {
                title: "Communication",
                description:
                    "Share announcements, notices, reminders and important information with the right users.",
            },
            {
                title: "Reports & Analytics",
                description:
                    "Generate useful reports for attendance, fees, academics, students, staff and school operations.",
            },
        ],

        workflow: [
            "Admission",
            "Student Registration",
            "Class Allocation",
            "Attendance",
            "Academic Activities",
            "Examination",
            "Results",
            "Parent Communication",
        ],

        roles: [
            "School Administrator",
            "Principal / Management",
            "Teachers",
            "Students",
            "Parents",
            "Accountants",
            "Reception Staff",
            "Super Admin"
        ],

        reports: [
            "Student Performance Reports",
            "Attendance Reports",
            "Fee Collection Reports",
            "Examination & Result Reports",
            "Teacher & Staff Reports",
            "Class & Section Reports",
            "Admission Reports",
            "Management Dashboard",
        ],

        important: [
            "Centralized student and staff information",
            "Digital attendance and academic records",
            "Fee and payment tracking",
            "Examination and result management",
            "Parent and student communication",
            "Role-based access control",
            "Reports and management dashboards",
            "Reduced dependency on manual paperwork",
        ],

        benefits: [
            "Reduces repetitive administrative work",
            "Keeps important school information organized",
            "Improves communication between school and parents",
            "Provides faster access to reports",
            "Helps management make data-based decisions",
            "Improves day-to-day operational efficiency",
        ],

        security: [
            "Role-based user access",
            "Protected login and authentication",
            "Permission-based module access",
            "Controlled administrative access",
            "Centralized data management",
            "Audit Log & Activity Tracking",
        ],

        users: [
            "Schools",
            "School Administrators",
            "Teachers",
            "Students",
            "Parents",
            "Academic Coordinators",
        ],

        faqs: [
            {
                q: "Can the system be customized for our school?",
                a: "Yes. Modules, workflows, fields and dashboards can be customized according to the school's requirements.",
            },
            {
                q: "Can different users have different permissions?",
                a: "Yes. The system can provide role-based access so administrators, teachers, students and parents see relevant information.",
            },
            {
                q: "Can reports be generated?",
                a: "Yes. Different academic, attendance, fee and management reports can be generated according to the configured modules.",
            },
            {
                q: "Can additional modules be added later?",
                a: "Yes. The platform can be extended with additional modules or integrations as the organization's requirements grow.",
            },
        ],
    },


    "hospital-management": {
        category: "HEALTHCARE MANAGEMENT SOLUTION",
        title: "Hospital Management Solution",
        image: "/image/hospital.png",

        description:
            "A centralized hospital and clinic management solution for managing patients, doctors, appointments, OPD, IPD, pharmacy, laboratory, billing and reports on WhatsApp.",

        overview:
            "The Hospital Management System brings major healthcare operations into one connected platform. It helps hospitals and clinics organize patient information, appointments, medical records, billing, pharmacy, laboratory operations and management reporting.",

        stats: [
            ["20+", "Healthcare Modules"],
            ["24/7", "Data Access"],
            ["Role", "Based Access"],
            ["1", "Central Platform"],
        ],

        features: [
            "Patient Management",
            "Doctor Management",
            "Appointment Management",
            "OPD Management",
            "IPD Management",
            "Medical Records",
            "Laboratory Management",
            "Pharmacy Management",
            "Billing & Payments",
            "Insurance Information",
            "Reports & Analytics",
            "Staff Management",
            "Notifications",
            "Role-Based Access",
            "Patient Registration",
            "Prescription Management",
            "Bed & Room Management",
            "Discharge Management",
            "Medical History",
            "Emergency Management",
            "Blood Bank Management",
            "Nursing Management",
            "Invoice & Receipt Management",
            "Hospital Dashboard",
            "Patient Follow-Up Management"
        ],

        ai: [
            "Patient data summaries",
            "Management report assistance",
            "Appointment and operational insights",
            "Pattern identification in healthcare data",
            "Automated information assistance",
        ],

        modules: [
            {
                title: "Patient Management",
                description:
                    "Maintain patient profiles, contact information, medical history and healthcare-related records.",
            },
            {
                title: "Doctor Management",
                description:
                    "Manage doctor profiles, departments, availability and assigned patients.",
            },
            {
                title: "Appointment Management",
                description:
                    "Schedule, manage and monitor patient appointments and doctor availability.",
            },
            {
                title: "OPD Management",
                description:
                    "Manage outpatient visits, consultation details and patient flow.",
            },
            {
                title: "IPD Management",
                description:
                    "Manage inpatient admissions, rooms, beds, discharge information and related records.",
            },
            {
                title: "Laboratory Management",
                description:
                    "Manage laboratory requests, test information, results and diagnostic records.",
            },
            {
                title: "Pharmacy Management",
                description:
                    "Track medicines, prescriptions, stock, sales and pharmacy operations.",
            },
            {
                title: "Billing Management",
                description:
                    "Manage consultation, treatment, services, payments and billing records.",
            },
        ],

        workflow: [
            "Patient Registration",
            "Appointment",
            "Doctor Consultation",
            "OPD / IPD",
            "Laboratory",
            "Pharmacy",
            "Billing",
            "Reports",
        ],

        roles: [
            "Hospital Administrator",
            "Doctors",
            "Reception Staff",
            "Nurses",
            "Pharmacy Staff",
            "Laboratory Staff",
            "Accountants",
            "Super Admin"
        ],

        reports: [
            "Patient Reports",
            "Appointment Reports",
            "OPD Reports",
            "IPD Reports",
            "Billing Reports",
            "Pharmacy Reports",
            "Laboratory Reports",
            "Management Dashboard",
        ],

        important: [
            "Centralized patient records",
            "Appointment scheduling",
            "OPD and IPD workflow",
            "Billing and payment tracking",
            "Pharmacy and laboratory management",
            "Management reporting",
            "Role-based access",
        ],

        benefits: [
            "Reduces manual healthcare administration",
            "Improves patient information organization",
            "Makes daily operations easier to track",
            "Improves access to management reports",
            "Connects multiple departments through one system",
        ],

        security: [
            "Role-based access",
            "Secure authentication",
            "Permission-based modules",
            "Controlled administrative access",
            "Centralized information management",
            "Audit Log & Activity Tracking",
        ],

        users: [
            "Hospitals",
            "Clinics",
            "Doctors",
            "Reception Teams",
            "Pharmacy Teams",
            "Laboratory Teams",
            "Hospital Administrators",
        ],

        faqs: [
            {
                q: "Can the hospital workflow be customized?",
                a: "Yes. Modules and workflows can be adapted according to the operational requirements of the hospital or clinic.",
            },
            {
                q: "Can different departments have separate access?",
                a: "Yes. Role and permission-based access can be configured for different departments and users.",
            },
            {
                q: "Can billing and pharmacy be connected?",
                a: "Yes. Relevant modules can be integrated into a centralized operational workflow.",
            },
        ],
    },


    "erp-portals": {
        category: "BUSINESS MANAGEMENT SOLUTION",
        title: "ERP Solution",
        image: "/image/erp.png",

        description:
            "A centralized ERP platform that connects finance, employees, inventory, purchasing, sales, customers, workflows and business reporting.",

        overview:
            "The ERP Management Portal helps organizations bring important business operations into one connected environment. Instead of managing information across multiple disconnected systems, teams can manage core processes through a centralized platform.",

        stats: [
            ["20+", "Core Modules"],
            ["1", "Central Platform"],
            ["Role", "Based Access"],
            ["Real-Time", "Business Insights"],
        ],

        features: [
            "Finance & Accounting",
            "Employee Management",
            "Inventory Management",
            "Purchase Management",
            "Sales Management",
            "Customer Management",
            "Supplier Management",
            "Workflow Automation",
            "Business Dashboard",
            "Reports & Analytics",
            "Role-Based Access",
            "Document Management",
            "Notifications",
            "HR Management",
            "Payroll Management",
            "Expense Management",
            "Invoice Management",
            "Quotation Management",
            "Order Management",
            "Warehouse Management",
            "CRM Management",
            "Task Management",
            "Business Performance Tracking",
            "Multi-Department Management",
            "Workflow Approval Management"
        ],

        ai: [
            "Business report summaries",
            "Operational data analysis",
            "Smart dashboard insights",
            "Automated report assistance",
            "Workflow assistance",
        ],

        modules: [
            {
                title: "Finance & Accounting",
                description:
                    "Manage financial transactions, accounting records, expenses and business financial information.",
            },
            {
                title: "Employee Management",
                description:
                    "Maintain employee information, departments, roles and organizational records.",
            },
            {
                title: "Inventory Management",
                description:
                    "Track products, stock levels, warehouses, movement and inventory status.",
            },
            {
                title: "Purchase Management",
                description:
                    "Manage suppliers, purchase orders, procurement activities and purchase records.",
            },
            {
                title: "Sales Management",
                description:
                    "Manage customers, sales transactions, orders, invoices and sales information.",
            },
            {
                title: "Business Dashboard",
                description:
                    "View important business metrics and operational information through centralized dashboards.",
            },
        ],

        workflow: [
            "Lead / Customer",
            "Quotation",
            "Sales",
            "Purchase",
            "Inventory",
            "Finance",
            "Employee",
            "Reports",
        ],

        roles: [
            "Business Admin",
            "Management",
            "Accountants",
            "Sales Teams",
            "Purchase Teams",
            "HR Teams",
            "Inventory Teams",
            "Super Admin"
        ],

        reports: [
            "Financial Reports",
            "Sales Reports",
            "Purchase Reports",
            "Inventory Reports",
            "Employee Reports",
            "Customer Reports",
            "Business Performance Reports",
        ],

        important: [
            "Centralized business information",
            "Finance and accounting management",
            "Inventory visibility",
            "Purchase and sales workflows",
            "Employee management",
            "Business dashboards",
            "Reports and analytics",
        ],

        benefits: [
            "Connects different business departments",
            "Reduces duplicate data entry",
            "Improves operational visibility",
            "Provides centralized reporting",
            "Supports scalable business workflows",
        ],

        security: [
            "Role-based access",
            "Permission management",
            "Secure authentication",
            "Controlled module access",
            "Audit Log & Activity Tracking",
        ],

        users: [
            "Small Businesses",
            "Medium Businesses",
            "Enterprises",
            "Management Teams",
            "Finance Teams",
            "Operations Teams",
        ],

        faqs: [
            {
                q: "Can ERP modules be customized?",
                a: "Yes. ERP workflows can be designed around the organization's specific processes.",
            },
            {
                q: "Can different departments use the same system?",
                a: "Yes. Different departments can use separate modules while working through a centralized platform.",
            },
        ],
    },


    "college-management": {
        category: "EDUCATION MANAGEMENT SOLUTION",
        title: "College Management Solution",
        image: "/image/college.png",

        description:
            "A complete digital management solution for colleges and universities covering admissions, students, faculty, academics, examination, fees and reporting.",

        overview:
            "The College Management System centralizes academic and administrative operations for higher education institutions. It helps colleges manage student lifecycle, faculty information, courses, attendance, examinations, fees, placements and reporting.",

        stats: [
            ["20+", "Core Modules"],
            ["360°", "Student Lifecycle"],
            ["Role", "Based Access"],
            ["Central", "Academic Data"],
        ],

        features: [
            "Admissions & Enrollment",
            "Student Information",
            "Faculty Management",
            "Attendance Management",
            "Course & Subject Management",
            "Examination & Grading",
            "Fees & Payment",
            "Timetable & Scheduling",
            "Student & Faculty Portal",
            "Placement Management",
            "Alumni Management",
            "Reports & Analytics",
            "Department Management",
            "Academic Session Management",
            "Library Management",
            "Hostel Management",
            "Transport Management",
            "Scholarship Management",
            "Certificate Management",
            "Assignment Management",
            "Notice & Announcement",
            "Student ID Card",
            "Online Examination",
            "Campus Communication",
            "Student Lifecycle Tracking"
        ],

        ai: [
            "Academic performance summaries",
            "Student data analysis",
            "Automated reporting assistance",
            "Placement and academic insights",
        ],

        modules: [
            {
                title: "Admissions",
                description:
                    "Manage enquiries, applications, student registration and admission-related workflows.",
            },
            {
                title: "Student Management",
                description:
                    "Maintain student profiles, academic records, documents and enrollment information.",
            },
            {
                title: "Faculty Management",
                description:
                    "Manage faculty profiles, departments, subjects and teaching responsibilities.",
            },
            {
                title: "Attendance",
                description:
                    "Track student attendance and generate attendance summaries.",
            },
            {
                title: "Examination",
                description:
                    "Manage exams, marks, grades, results and academic performance.",
            },
            {
                title: "Fees Management",
                description:
                    "Track fee structures, payments, pending amounts and receipts.",
            },
            {
                title: "Placement Management",
                description:
                    "Manage placement activities, companies, student applications and placement records.",
            },
        ],

        workflow: [
            "Admission",
            "Enrollment",
            "Course Allocation",
            "Attendance",
            "Examination",
            "Result",
            "Placement",
            "Alumni",
        ],

        roles: [
            "College Admin",
            "Faculty",
            "Students",
            "Accounts Team",
            "Placement Team",
            "Management",
            "Super Admin"
        ],

        reports: [
            "Admission Reports",
            "Student Reports",
            "Attendance Reports",
            "Examination Reports",
            "Fee Reports",
            "Placement Reports",
            "Faculty Reports",
        ],

        important: [
            "Student lifecycle management",
            "Faculty and course management",
            "Attendance and examination",
            "Fees management",
            "Placement management",
            "Centralized academic reports",
        ],

        benefits: [
            "Improves academic administration",
            "Centralizes student information",
            "Simplifies faculty management",
            "Provides faster access to reports",
            "Improves student lifecycle visibility",
        ],

        security: [
            "Role-based access",
            "Secure authentication",
            "Permission-controlled modules",
            "Centralized access management",
            "Audit Log & Activity Tracking",
        ],

        users: [
            "Colleges",
            "Universities",
            "Faculty",
            "Students",
            "Accounts Teams",
            "Placement Departments",
        ],

        faqs: [
            {
                q: "Can the college system support different departments?",
                a: "Yes. Departments, courses, subjects and user roles can be configured according to institutional requirements.",
            },
            {
                q: "Can placement management be included?",
                a: "Yes. Placement workflows can be included as part of the overall college management platform.",
            },
        ],
    },


    "billing-management": {
        category: "BUSINESS BILLING SOLUTION",
        title: "Billing Management Solution",
        image: "/image/billing.png",

        description:
            "A smart billing platform for invoices, GST, products, customers, payments, expenses, inventory and business reports.",

        overview:
            "The Billing Management System helps businesses simplify daily billing and financial tracking. It provides centralized management of customers, products, invoices, payments, expenses, taxes and reports.",

        stats: [
            ["10+", "Billing Features"],
            ["GST", "Ready"],
            ["Real-Time", "Tracking"],
            ["Digital", "Invoices"],
        ],

        features: [
            "Invoice Management",
            "GST & Tax Management",
            "Customer Management",
            "Product & Service Management",
            "Sales & Purchase",
            "Payment Tracking",
            "Expense Management",
            "Inventory Management",
            "Invoice Printing & Sharing",
            "Reports & Analytics",
            "Customer History",
            "Business Dashboard",
            "Quotation Management",
            "Purchase Order Management",
            "Supplier Management",
            "Credit & Due Management",
            "Discount Management",
            "Payment Receipt Management",
            "Stock Adjustment",
            "Barcode Management",
            "GST Invoice Generation",
            "Sales Return Management",
            "Purchase Return Management",
            "Daily Business Summary",
            "Recurring Billing Management"
        ],

        ai: [
            "Sales summaries",
            "Business report assistance",
            "Customer trend analysis",
            "Automated billing insights",
        ],

        modules: [
            {
                title: "Invoice Management",
                description:
                    "Create, manage, track and organize professional invoices.",
            },
            {
                title: "Customer Management",
                description:
                    "Maintain customer information, billing history and transaction records.",
            },
            {
                title: "Product Management",
                description:
                    "Manage products, pricing, stock information and product details.",
            },
            {
                title: "Payment Tracking",
                description:
                    "Track received, pending and completed payments.",
            },
            {
                title: "Expense Management",
                description:
                    "Record and monitor business expenses.",
            },
            {
                title: "Reports",
                description:
                    "Generate sales, payment, expense and billing reports.",
            },
        ],

        workflow: [
            "Customer",
            "Product",
            "Invoice",
            "Payment",
            "Inventory",
            "Expense",
            "Reports",
        ],

        roles: [
            "Business Owner",
            "Accountant",
            "Billing Staff",
            "Sales Staff",
            "Management",
            "Super Admin"
        ],

        reports: [
            "Sales Reports",
            "Invoice Reports",
            "Payment Reports",
            "Expense Reports",
            "GST Reports",
            "Customer Reports",
        ],

        important: [
            "Professional invoices",
            "GST and tax support",
            "Customer records",
            "Payment tracking",
            "Expense tracking",
            "Inventory visibility",
            "Business reports",
        ],

        benefits: [
            "Faster billing process",
            "Reduced manual calculations",
            "Better payment visibility",
            "Centralized customer records",
            "Easy access to business reports",
        ],

        security: [
            "Secure authentication",
            "Role-based access",
            "Controlled billing permissions",
            "Centralized data",
            "Audit Log & Activity Tracking",
        ],

        users: [
            "Retail Businesses",
            "Wholesalers",
            "Service Businesses",
            "Jewellers",
            "Small Businesses",
            "Accountants",
        ],

        faqs: [
            {
                q: "Can GST billing be supported?",
                a: "Yes. GST and tax-related billing workflows can be configured according to business requirements.",
            },
            {
                q: "Can invoices be printed or shared?",
                a: "Yes. Invoice generation, printing and digital sharing can be supported.",
            },
        ],
    },


    "pharmacy-management": {
        category: "PHARMACY MANAGEMENT SOLUTION",
        title: "Pharmacy Management Solution",
        image: "/image/pharmacy.png",

        description:
            "A complete pharmacy management solution for medicines, inventory, purchase, sales, billing, batch tracking, expiry management and reports.",

        overview:
            "The Pharmacy Management System helps pharmacies organize medicine inventory, purchases, sales, billing, suppliers, prescriptions and expiry information from a centralized platform.",

        stats: [
            ["10+", "Pharmacy Features"],
            ["Batch", "Tracking"],
            ["Expiry", "Monitoring"],
            ["GST", "Billing"],
        ],

        features: [
    "Medicine Management",
    "Inventory & Stock",
    "Sales & Billing",
    "Purchase Management",
    "Batch & Expiry Tracking",
    "Prescription Management",
    "Supplier Management",
    "Low Stock Alerts",
    "GST Billing",
    "Reports & Analytics",
    "Medicine Categories",
    "Barcode Management",
    "Stock Adjustment",
    "Purchase Returns",
    "Sales Returns",
    "Customer Management",
    "Supplier Payment Tracking",
    "Medicine Pricing",
    "Expiry Alerts",
    "Stock Movement Tracking",
    "Invoice & Receipt Management",
    "Daily Sales Dashboard",
    "Profit & Sales Analysis",
    "Role-Based Access",
            "Medicine Reorder Management"
],

        ai: [
            "Stock trend analysis",
            "Low-stock insights",
            "Sales summaries",
            "Business report assistance",
        ],

        modules: [
            {
                title: "Medicine Management",
                description:
                    "Maintain medicine information, pricing, categories and availability.",
            },
            {
                title: "Inventory Management",
                description:
                    "Track medicine stock, stock movement and availability.",
            },
            {
                title: "Batch & Expiry",
                description:
                    "Track medicine batches and expiry information.",
            },
            {
                title: "Sales & Billing",
                description:
                    "Manage medicine sales, invoices, payments and billing records.",
            },
            {
                title: "Supplier Management",
                description:
                    "Maintain supplier information and purchase records.",
            },
            {
                title: "Reports",
                description:
                    "Generate sales, stock, purchase and expiry reports.",
            },
        ],

        workflow: [
            "Supplier",
            "Purchase",
            "Medicine Stock",
            "Sales",
            "Billing",
            "Payment",
            "Reports",
        ],

        roles: [
            "Pharmacy Owner",
            "Pharmacist",
            "Billing Staff",
            "Inventory Staff",
            "Management",
            "Super Admin"
        ],

        reports: [
            "Sales Reports",
            "Stock Reports",
            "Purchase Reports",
            "Expiry Reports",
            "Supplier Reports",
            "Billing Reports",
        ],

        important: [
            "Medicine inventory",
            "Batch and expiry tracking",
            "Supplier management",
            "Sales and billing",
            "Low stock monitoring",
            "GST billing",
            "Business reports",
        ],

        benefits: [
            "Better medicine stock visibility",
            "Reduces manual inventory tracking",
            "Improves billing efficiency",
            "Makes expiry monitoring easier",
            "Provides centralized pharmacy reports",
        ],

        security: [
            "Role-based access",
            "Secure login",
            "Controlled inventory permissions",
            "Centralized data management",
            "Audit Log & Activity Tracking",
        ],

        users: [
            "Retail Pharmacies",
            "Medical Stores",
            "Pharmacy Chains",
            "Pharmacists",
            "Pharmacy Owners",
        ],

        faqs: [
            {
                q: "Can batch and expiry information be tracked?",
                a: "Yes. Medicine batches and expiry details can be managed as part of inventory workflows.",
            },
            {
                q: "Can low-stock alerts be supported?",
                a: "Yes. Stock thresholds and alerts can be configured according to business requirements.",
            },
        ],
        unavailable: true,
    },


    "custom-web-development": {
        category: "CUSTOM DIGITAL SOLUTIONS",
        title: "Custom Web Development Solution",
        image: "/image/custom.png",

        description:
            "Custom websites and web applications designed around your business requirements, workflows, users and growth plans.",

        overview:
            "Our custom web development services focus on building scalable digital products instead of forcing businesses into one standard template. From corporate websites to business portals and web applications, solutions can be designed around specific requirements.",

        stats: [
            ["100%", "Customizable"],
            ["Responsive", "Design"],
            ["API", "Integration"],
            ["Scalable", "Architecture"],
        ],

        features: [
    "Custom UI/UX",
    "Responsive Web Development",
    "Web Applications",
    "API Integration",
    "Database Integration",
    "Authentication",
    "Admin Dashboards",
    "Third-Party Integrations",
    "Security & Access Control",
    "Scalable Architecture",
    "Custom Business Logic",
    "CMS Integration",
    "Payment Gateway Integration",
    "Cloud Deployment",
    "Performance Optimization",
    "SEO-Friendly Development",
    "Role-Based User Management",
    "Real-Time Features",
    "Notification Systems",
    "Search & Filter Systems",
    "Analytics Integration",
    "AI Integration",
    "Maintenance & Support",
    "Cross-Platform Compatibility",
            "Custom Notification Management"
],

        ai: [
            "AI chatbot integration",
            "AI-powered automation",
            "Smart search",
            "Content assistance",
            "Business data insights",
        ],

        modules: [
            {
                title: "UI/UX Design",
                description:
                    "Create modern and user-focused interfaces designed around your business and audience.",
            },
            {
                title: "Web Applications",
                description:
                    "Develop interactive web applications with custom workflows and functionality.",
            },
            {
                title: "API Integration",
                description:
                    "Connect applications with external services, platforms and business systems.",
            },
            {
                title: "Database Integration",
                description:
                    "Design and connect structured databases for secure application data management.",
            },
            {
                title: "Authentication",
                description:
                    "Implement login, registration, access control and user permissions.",
            },
            {
                title: "Admin Dashboards",
                description:
                    "Build centralized dashboards for managing users, data and business operations.",
            },
        ],

        workflow: [
            "Requirement",
            "UI/UX",
            "Development",
            "API Integration",
            "Testing",
            "Deployment",
            "Maintenance",
        ],

        roles: [
            "Business Owners",
            "Startups",
            "Enterprises",
            "Organizations",
            "Digital Teams",
            "Project Manager"
        ],

        reports: [
            "Admin Dashboards",
            "Business Analytics",
            "User Activity",
            "Operational Reports",
        ],

        important: [
            "Custom functionality",
            "Responsive design",
            "API integration",
            "Database integration",
            "Authentication",
            "Admin dashboard",
            "Scalable architecture",
            "Security",
        ],

        benefits: [
            "Built around your actual business requirements",
            "Better user experience",
            "Scalable architecture",
            "Flexible integrations",
            "Centralized administration",
        ],

        security: [
            "Authentication",
            "Role-based access",
            "Permission management",
            "Secure API communication",
            "Protected application data",
            "Audit Log & Activity Tracking",
        ],

        users: [
            "Startups",
            "Small Businesses",
            "Enterprises",
            "Organizations",
            "SaaS Businesses",
        ],

        faqs: [
            {
                q: "Can you build a completely custom website?",
                a: "Yes. Design, functionality, database structure and workflows can be developed around your requirements.",
            },
            {
                q: "Can existing APIs be integrated?",
                a: "Yes. Third-party and existing APIs can be integrated where technically supported.",
            },
            {
                q: "Can an admin panel be included?",
                a: "Yes. Custom admin dashboards can be developed for managing application data and operations.",
            },
        ],
    },


    "real-estate": {
        category: "REAL ESTATE MANAGEMENT SOLUTION",
        title: "Real Estate Solution",
        image: "/image/real.png",

        description:
            "A centralized real estate platform for properties, listings, leads, buyers, sellers, agents, enquiries and site visits.",

        overview:
            "The Real Estate Management System helps agencies and property businesses manage property information, listings, enquiries, leads, buyers, sellers, agents and site visits from one centralized platform.",

        stats: [
            ["10+", "Real Estate Features"],
            ["360°", "Lead Visibility"],
            ["Central", "Property Data"],
            ["Role", "Based Access"],
        ],

       features: [
    "Property Management",
    "Property Listings",
    "Property Search & Filters",
    "Lead Management",
    "Buyer Management",
    "Seller Management",
    "Inquiry Management",
    "Site Visit Management",
    "Agent Management",
    "Reports & Analytics",
    "Property Categories",
    "Property Images & Documents",
    "Location Management",
    "Property Pricing",
    "Follow-Up Management",
    "Deal Management",
    "Commission Management",
    "Customer Communication",
    "Property Status Tracking",
    "Advanced Search",
    "Agent Performance Tracking",
    "Property Availability",
    "Dashboard & Insights",
    "Role-Based Access",
            "Property Follow-Up Management"
],

        ai: [
            "Lead analysis",
            "Property search assistance",
            "Customer enquiry summaries",
            "Sales performance insights",
        ],

        modules: [
            {
                title: "Property Management",
                description:
                    "Maintain detailed property information, status, location, pricing and documentation.",
            },
            {
                title: "Property Listings",
                description:
                    "Create and manage property listings with relevant details and media.",
            },
            {
                title: "Lead Management",
                description:
                    "Capture and manage property leads, follow-ups and lead status.",
            },
            {
                title: "Buyer Management",
                description:
                    "Maintain buyer information, requirements and interaction history.",
            },
            {
                title: "Seller Management",
                description:
                    "Manage seller information and property ownership records.",
            },
            {
                title: "Site Visits",
                description:
                    "Schedule and track property visits for prospective buyers.",
            },
        ],

        workflow: [
            "Property",
            "Listing",
            "Lead",
            "Enquiry",
            "Buyer",
            "Site Visit",
            "Follow-up",
            "Deal",
        ],

        roles: [
            "Real Estate Admin",
            "Property Agents",
            "Sales Teams",
            "Property Managers",
            "Business Owners",
            "Super Admin"
        ],

        reports: [
            "Property Reports",
            "Lead Reports",
            "Site Visit Reports",
            "Agent Performance",
            "Sales Reports",
            "Enquiry Reports",
        ],

        important: [
            "Centralized property records",
            "Property listings",
            "Lead management",
            "Buyer and seller management",
            "Site visit tracking",
            "Agent management",
            "Business reports",
        ],

        benefits: [
            "Improves lead tracking",
            "Organizes property information",
            "Makes follow-ups easier",
            "Improves sales visibility",
            "Centralizes buyer and seller information",
        ],

        security: [
            "Role-based access",
            "Secure login",
            "Controlled property access",
            "Centralized data",
            "Audit Log & Activity Tracking",
        ],

        users: [
            "Real Estate Agencies",
            "Property Dealers",
            "Builders",
            "Property Consultants",
            "Real Estate Teams",
        ],

        faqs: [
            {
                q: "Can property listings be customized?",
                a: "Yes. Property fields, categories and listing workflows can be configured according to business requirements.",
            },
            {
                q: "Can leads and site visits be tracked?",
                a: "Yes. Lead management and site visit workflows can be included in the platform.",
            },
        ],
    },


    "e-commerce": {
        category: "ONLINE BUSINESS SOLUTION",
        title: "E-Commerce Solution",
        image: "/image/ecom.png",

        description:
            "A complete online commerce platform for products, categories, inventory, customers, orders, payments, shipping, discounts and analytics.",

        overview:
            "The E-Commerce Management System provides the core tools required to operate an online store. Businesses can manage products, customers, inventory, orders, payments, shipping, discounts and sales analytics through one connected platform.",

        stats: [
            ["20+", "Core Modules"],
            ["24/7", "Online Access"],
            ["Secure", "Payments"],
            ["Real-Time", "Order Tracking"],
        ],

       features: [
    "Product Management",
    "Category & Catalog",
    "Inventory Management",
    "Shopping Cart & Checkout",
    "Order Management",
    "Customer Management",
    "Payment Gateway",
    "Shipping Management",
    "Discount & Coupon",
    "Sales & Analytics",
    "Wishlist",
    "Reviews & Ratings",
    "Product Variants",
    "Product Search & Filters",
    "Order Tracking",
    "Returns & Refunds",
    "Customer Notifications",
    "Invoice Management",
    "Tax & GST Management",
    "Stock Alerts",
    "Admin Dashboard",
    "User Account Management",
    "Promotional Campaigns",
    "Role-Based Admin Access",
            "Abandoned Cart Management"
],

        ai: [
            "Product recommendations",
            "Customer behavior insights",
            "Sales trend analysis",
            "Smart search assistance",
            "Automated business summaries",
        ],

        modules: [
            {
                title: "Product Management",
                description:
                    "Manage product details, pricing, images, variants and availability.",
            },
            {
                title: "Inventory Management",
                description:
                    "Track stock levels, product movement and availability.",
            },
            {
                title: "Shopping Cart & Checkout",
                description:
                    "Provide customers with a streamlined cart and checkout experience.",
            },
            {
                title: "Order Management",
                description:
                    "Track orders from placement through processing, shipping and completion.",
            },
            {
                title: "Payment Integration",
                description:
                    "Connect supported payment gateways for online transactions.",
            },
            {
                title: "Shipping",
                description:
                    "Manage shipping information, delivery status and order fulfilment workflows.",
            },
            {
                title: "Discount & Coupons",
                description:
                    "Create promotional offers, discount rules and coupon campaigns.",
            },
            {
                title: "Analytics",
                description:
                    "Monitor sales, orders, customers and product performance.",
            },
        ],

        workflow: [
            "Product",
            "Customer",
            "Cart",
            "Checkout",
            "Payment",
            "Order",
            "Shipping",
            "Delivery",
        ],

        roles: [
            "Store Admin",
            "Business Owner",
            "Sales Team",
            "Inventory Team",
            "Customer Support",
            "Super Admin"
        ],

        reports: [
            "Sales Reports",
            "Order Reports",
            "Customer Reports",
            "Inventory Reports",
            "Product Performance",
            "Payment Reports",
        ],

        important: [
            "Product catalog",
            "Inventory management",
            "Shopping cart",
            "Online checkout",
            "Payment integration",
            "Order management",
            "Shipping",
            "Sales analytics",
        ],

        benefits: [
            "Centralized online store management",
            "Improves order visibility",
            "Makes inventory tracking easier",
            "Supports digital payments",
            "Provides useful sales insights",
        ],

        security: [
            "Secure authentication",
            "Role-based admin access",
            "Protected customer information",
            "Secure payment integration",
            "Controlled management access",
            "Audit Log & Activity Tracking",
        ],

        users: [
            "Online Stores",
            "Retail Businesses",
            "D2C Brands",
            "Startups",
            "Growing Businesses",
        ],

        faqs: [
            {
                q: "Can payment gateways be integrated?",
                a: "Yes. Supported payment gateways can be integrated according to the business and technical requirements.",
            },
            {
                q: "Can shipping functionality be added?",
                a: "Yes. Shipping and order fulfilment workflows can be configured according to the business model.",
            },
            {
                q: "Can coupons and discounts be managed?",
                a: "Yes. Promotional rules, coupons and discounts can be included.",
            },
        ],
    },

        // =========================================================
    // 04. MANUFACTURING ERP
    // =========================================================

    "manufacturing-erp": {
        category: "MANUFACTURING ERP SOLUTION",
        title: "Manufacturing ERP Solution",
        image: "/image/manu.png",

        description:
            "A complete ERP solution for production planning, raw materials, purchasing, inventory, quality control, costing, warehouse and dispatch management.",

        overview:
            "The Manufacturing ERP helps manufacturing businesses connect production, raw materials, purchasing, inventory, quality control, costing, warehouse and sales operations through one centralized platform.",

        stats: [
            ["7+", "Production Features"],
            ["6+", "BOM & Costing"],
            ["8+", "Purchase Features"],
            ["10+", "Advanced Features"],
        ],

        features: [
            "Production Planning",
            "Production Order Management",
            "Batch Management",
            "Production Entry",
            "Production Tracking",
            "Production Status",
            "Production Reports",
            "Bill of Materials",
            "Raw Material Mapping",
            "Product Costing",
            "Labour Cost Management",
            "Production Cost Analysis",
            "Raw Material Stock",
            "Material Requirement Planning",
            "Material Issue & Return",
            "Stock Transfer",
            "Supplier Management",
            "Purchase Requisition",
            "Purchase Order",
            "Goods Receipt",
            "Multiple Warehouse Management",
            "Warehouse Transfer",
            "Location Management",
            "Batch Tracking",
            "Raw Material Quality Control",
            "Production Quality Control",
            "Finished Goods QC",
            "Rejection Management",
            "Customer Management",
            "Sales Order Management",
            "Dispatch Management",
            "Delivery Challan",
            "Invoice Generation",
            "Expiry Management",
            "Barcode Management",
            "Machine Maintenance",
            "MIS Reports",
            "Multi-Branch Management",
            "Inventory Management",
            "Business Dashboard",
        ],

        ai: [
            "Production and inventory data analysis",
            "Production performance summaries",
            "Raw material and stock insights",
            "Cost and operational analysis",
            "Management report assistance",
        ],

        modules: [
            {
                title: "Production Management",
                description:
                    "Plan production activities, create production orders, track production progress and monitor production status from one centralized system.",
            },
            {
                title: "BOM & Costing",
                description:
                    "Manage bills of materials, raw material mapping, product costing, labour costs and overall production cost analysis.",
            },
            {
                title: "Raw Material & Purchase",
                description:
                    "Manage raw material stock, material requirements, suppliers, purchase requisitions, purchase orders and goods receipt processes.",
            },
            {
                title: "Warehouse & Quality",
                description:
                    "Manage multiple warehouses, stock transfers, storage locations, batch tracking and quality control across raw materials and finished goods.",
            },
            {
                title: "Sales & Dispatch",
                description:
                    "Manage customers, sales orders, dispatch activities, delivery challans, invoices and finished goods movement.",
            },
            {
                title: "Machine Maintenance",
                description:
                    "Track machine-related activities, maintenance requirements and operational information to support manufacturing operations.",
            },
            {
                title: "MIS & Business Reports",
                description:
                    "Generate production, inventory, purchase, costing, sales and management reports for better operational visibility.",
            },
        ],

        workflow: [
            "Material Requirement",
            "Purchase",
            "Raw Material",
            "BOM & Costing",
            "Production",
            "Quality Control",
            "Warehouse",
            "Sales & Dispatch",
        ],

        roles: [
            "Manufacturing Admin",
            "Production Manager",
            "Purchase Team",
            "Inventory Team",
            "Warehouse Team",
            "Quality Control Team",
            "Sales Team",
            "Management",
            "Super Admin",
        ],

        reports: [
            "Production Reports",
            "Production Status Reports",
            "Raw Material Reports",
            "Purchase Reports",
            "Inventory Reports",
            "Costing Reports",
            "Quality Control Reports",
            "Warehouse Reports",
            "Sales Reports",
            "Dispatch Reports",
            "MIS Reports",
        ],

        important: [
            "Production planning and tracking",
            "Bill of Materials management",
            "Raw material management",
            "Purchase management",
            "Inventory and warehouse control",
            "Quality control",
            "Production costing",
            "Sales and dispatch management",
            "Machine maintenance",
            "MIS reporting",
        ],

        benefits: [
            "Connects production and business operations",
            "Improves raw material visibility",
            "Helps monitor production progress",
            "Provides better costing visibility",
            "Simplifies warehouse management",
            "Improves quality control tracking",
            "Centralizes purchase and sales workflows",
            "Provides management-level operational reports",
        ],

        security: [
            "Role-based access",
            "Secure authentication",
            "Permission-based module access",
            "Controlled production access",
            "Controlled inventory access",
            "Centralized data management",
            "Audit Log & Activity Tracking",
        ],

        users: [
            "Manufacturing Companies",
            "Factories",
            "Production Units",
            "Industrial Businesses",
            "Warehouse Teams",
            "Production Teams",
            "Operations Teams",
        ],

        faqs: [
            {
                q: "Can the ERP support production planning?",
                a:
                    "Yes. Production planning, production orders, production tracking and production status workflows can be included.",
            },
            {
                q: "Can raw materials and finished goods be managed?",
                a:
                    "Yes. Raw materials, finished goods, stock movement, warehouses and inventory records can be managed centrally.",
            },
            {
                q: "Can BOM and production costing be included?",
                a:
                    "Yes. Bill of Materials, raw material mapping, labour cost and production cost analysis can be configured.",
            },
            {
                q: "Can quality control be managed?",
                a:
                    "Yes. Raw material, production and finished goods quality control workflows can be included.",
            },
        ],
    },



    // =========================================================

};




// PDF-aligned feature groups from the Xlligent Softwares Website Guide.
// These are shown in addition to the existing product content.
const pdfFeatureGroups = {
    "school-management": [
        { title: "Student & Admission", items: ["Student Registration", "Admission Management", "Student Profile", "Documents", "Class & Section", "Student Promotion", "Admission Enquiry & Follow-up"] },
        { title: "Fees & Attendance", items: ["Fee Structure", "Fee Collection", "Online Fee Payment", "Auto Receipts", "Due Tracking", "Late Fee & Discounts", "Student & Staff Attendance", "Leave Management"] },
        { title: "Academic & Examination", items: ["Subjects & Classes", "Timetable", "Homework & Assignments", "Exam Scheduling", "Marks Entry", "Theory & Practical Marks", "Grades", "Report Cards"] },
        { title: "Staff & Parent Communication", items: ["Teacher & Employee Management", "Payroll", "Parent Login", "Performance & Attendance", "Fee Details", "Notices", "SMS/WhatsApp Notifications"] },
        { title: "Additional Modules", items: ["Transport", "Library", "Inventory", "ID Cards", "Certificates", "School Website Integration", "Mobile App", "Reports & Cloud Backup"] }
    ],
    "hospital-management": [
        { title: "Patient & OPD Management", items: ["Patient Registration", "Patient Profile & History", "Electronic Medical Records", "OPD Registration", "Doctor Assignment", "Token Management", "Prescription & Follow-up"] },
        { title: "IPD & Appointment", items: ["Patient Admission", "Bed & Room Management", "Ward Management", "Patient Transfer", "Discharge Management", "Online Appointment", "Doctor Availability & Reminders"] },
        { title: "Billing & Pharmacy", items: ["Patient Billing", "Invoice & Payment Collection", "Package Billing", "Discount & Refund", "Medicine Management", "Purchase & Sales", "Batch, Expiry & Low Stock Alerts"] },
        { title: "Lab, Inventory & Reports", items: ["Pathology & Radiology", "Sample & Test Management", "Digital Reports", "Inventory & Stock Ledger", "Supplier Management", "MIS Reports", "Dashboard & Analytics"] },
        { title: "Advanced Modules", items: ["TPA & Insurance", "Blood Bank", "Ambulance", "Referral Doctor", "HR & Attendance", "Email/SMS", "WhatsApp Integration", "Role-Based Access"] }
    ],
    "billing-management": [
        { title: "Billing & POS", items: ["Fast POS Billing", "GST Billing", "Invoice Generation", "Thermal Printer Support", "Barcode Billing", "Discount Management", "Multiple Payment Modes", "Credit/Due Billing", "Returns & Refunds"] },
        { title: "Inventory", items: ["Product Management", "Categories", "Stock In/Out", "Low Stock Alerts", "Expiry Management", "Barcode Management", "Stock Adjustment", "Stock Ledger"] },
        { title: "Purchase & Supplier", items: ["Supplier Management", "Purchase Entry", "Purchase Return", "Purchase Invoice", "Supplier Payments", "Purchase Reports"] },
        { title: "Customer Management", items: ["Customer Database", "Customer Credit", "Payment History", "Outstanding Management", "Customer Statements"] },
        { title: "Reports & Advanced", items: ["Sales Report", "Purchase Report", "Profit & Loss", "GST Reports", "Daily Collection", "Multi-User", "User Permissions", "Cloud Backup", "WhatsApp Invoice Sharing"] }
    ],
    "erp-portals": [
        { title: "Production", items: ["Production Planning", "Production Orders", "Batch Management", "Production Entry", "Production Tracking", "Production Status", "Production Reports"] },
        { title: "BOM & Costing", items: ["Bill of Materials", "Raw Material Mapping", "Product Costing", "Labour Cost", "Production Cost", "Cost Analysis"] },
        { title: "Raw Material & Purchase", items: ["Raw Material Stock", "Material Requirement", "Material Issue & Return", "Stock Transfer", "Supplier Management", "Purchase Requisition", "Purchase Order", "Goods Receipt"] },
        { title: "Warehouse & Quality", items: ["Multiple Warehouses", "Warehouse Transfer", "Location Management", "Batch Tracking", "Raw Material QC", "Production QC", "Finished Goods QC", "Rejection Management"] },
        { title: "Sales, Dispatch & Advanced", items: ["Customer Management", "Sales Orders", "Dispatch Management", "Delivery Challan", "Invoice Generation", "Expiry", "Barcode", "Machine Maintenance", "MIS Reports", "Multi-Branch"] }
    ],
    "e-commerce": [
        { title: "Customer Experience", items: ["Modern Homepage", "Product Categories", "Search & Filters", "Product Details & Gallery", "Wishlist", "Shopping Cart", "Checkout", "Customer Login", "Order History"] },
        { title: "Product & Inventory", items: ["Product Creation", "Categories & Sub-Categories", "Variants", "SKU Management", "Pricing", "Discounts & Offers", "Stock Management", "Product Images"] },
        { title: "Orders & Payments", items: ["Order Processing", "Order Status", "Cancellation", "Returns & Refunds", "Invoice Generation", "Online Payment Gateway", "COD", "Payment Status"] },
        { title: "Delivery & Admin", items: ["Shipping Management", "Delivery Charges", "Pincode Management", "Order Tracking", "Admin Dashboard", "Customer Management", "Coupons", "Reviews", "Reports"] },
        { title: "Marketing & Security", items: ["Coupon Campaigns", "Promotional Banners", "Email/SMS/WhatsApp", "SEO-Friendly URLs", "Meta Management", "Sitemap", "Mobile Responsive", "SSL", "Backup & Analytics"] }
    ],
    "custom-web-development": [
        { title: "Website Types", items: ["Business Website", "Corporate Website", "School Website", "Hospital Website", "Hotel Website", "Portfolio", "E-Commerce", "Landing Page", "Custom Web Application"] },
        { title: "UI/UX & Design", items: ["Modern UI/UX", "Responsive Design", "Mobile & Tablet Friendly", "Custom Design", "Interactive Sections", "Animation & Micro Interactions", "Professional Typography", "Image & Video Integration"] },
        { title: "Business Features", items: ["Contact Forms", "Enquiry Forms", "WhatsApp Integration", "Google Maps", "Social Media Integration", "Newsletter", "Testimonials", "Gallery", "FAQ", "Blog", "Team Section"] },
        { title: "Technical Features", items: ["Fast Loading", "SEO Friendly", "Secure Development", "SSL", "Admin Panel", "CMS Integration", "Database Integration", "API Integration", "Backup", "Analytics"] },
        { title: "Advanced Development", items: ["Custom Web Applications", "API Development", "Third-Party Integrations", "Payment Gateway", "CRM Integration", "ERP Integration", "WhatsApp Integration", "Custom Dashboards"] }
    ],
    "hotel-management": [
        { title: "Front Office & Guests", items: ["Guest Registration", "Check-In/Check-Out", "Guest Profiles", "Room Allocation", "Reservation Management", "Booking History", "Guest ID/Document Management"] },
        { title: "Rooms & Reservation", items: ["Room Categories", "Room Types", "Room Status", "Room Availability", "Room Pricing", "Floor Management", "Occupancy Management", "Online Booking", "Cancellation & Rescheduling"] },
        { title: "Billing & Restaurant", items: ["Guest Billing", "Room Charges", "Food & Service Charges", "Tax & Discounts", "Advance Payments", "Final Invoice", "Restaurant POS", "Menu Management", "Table Management", "Room Service"] },
        { title: "Housekeeping & Operations", items: ["Housekeeping Tasks", "Room Cleaning Status", "Maintenance Requests", "Room Inspection", "Staff Assignment", "Hotel Operations Dashboard"] },
        { title: "Reports & Advanced", items: ["Occupancy Report", "Revenue Report", "Booking Report", "Collection Report", "Room Status Report", "GST/Tax Reports", "Multi-Property", "Role Permissions", "Payment Gateway", "WhatsApp & Email Notifications"] }
    ],
    "travel-erp": [
        { title: "Customer & Packages", items: ["Customer Registration", "Travel History", "Document Management", "Follow-up Management", "Package Creation", "Destination Management", "Itinerary", "Hotel & Transport Details", "Custom Package Pricing"] },
        { title: "Bookings", items: ["Tour Booking", "Hotel Booking", "Flight Booking", "Bus Booking", "Cab Booking", "Booking Confirmation", "Cancellation", "Rescheduling"] },
        { title: "Quotation & Vendor", items: ["Travel Quotation", "Custom Quotation", "Package Costing", "Discount & Tax", "Quotation PDF", "Hotel Vendors", "Transport Vendors", "Supplier Management", "Vendor Payments"] },
        { title: "Payments & Operations", items: ["Advance Payment", "Customer Payment", "Due Payment", "Refund", "Expense Management", "Profit Calculation", "Trip Management", "Passenger Management", "Vehicle & Driver Management", "Hotel Allocation"] },
        { title: "Reports & Advanced", items: ["Booking Reports", "Sales Reports", "Payment Reports", "Outstanding Reports", "Expense Reports", "Profit Reports", "Online Booking", "Payment Gateway", "WhatsApp/Email", "Multi-User & Branch Management"] }
    ]
};


// --------------------------------------------------
// COMPONENT
// --------------------------------------------------

function ProductDetails() {

    const { slug } = useParams();

    const product = products[slug];

    usePageMeta(
        product
            ? `${product.title} | Xlligent Softwares`
            : "Product Details | Xlligent Softwares",
        product?.description || "Explore industry-focused business software from Xlligent Softwares.",
        product ? `${product.title}, business software, industry management software, Xlligent Softwares` : "business software, ERP products, Xlligent Softwares"
    );


    if (!product) {
        return (
            <div className="product-not-found">
                <FaQuestionCircle />

                <h1>Product Not Found</h1>

                <p>
                    The product you are looking for does not exist or may have
                    been moved.
                </p>

                <Link to="/products" className="product-primary-button">
                    <FaArrowLeft />
                    Back to Products
                </Link>
                <br />
            </div>
        );
    }


    return (
        <main className="product-details-page">


            {


/* =========================================
                HERO
            ========================================= */}

            <section className="product-details-hero">

                <div className="product-hero-glow glow-one"></div>
                <div className="product-hero-glow glow-two"></div>

                <div className="product-details-hero-content">

                    <Link to="/products" className="product-back-link">
                        <FaArrowLeft />
                        Back to Products
                    </Link>
                    <br />
                    <div className="section-tag">
                        {product.category}
                    </div>

                    <h1>
                        {product.title}
                    </h1>

                    <p className="product-hero-description">
                        {product.description}
                    </p>


                    <div className="product-hero-actions">


                        <Link
                            to="/contact"
                            className="product-secondary-button"
                        >
                            Talk to Our Team
                            <FaArrowRight />
                        </Link>

                    </div>


                    <div className="product-mini-points">

                        <span>
                            <FaCheckCircle />
                            Customizable
                        </span>

                        <span>
                            <FaShieldAlt />
                            Secure
                        </span>

                        <span>
                            <FaMobileAlt />
                            Responsive
                        </span>

                        <span>
                            <FaChartLine />
                            Analytics
                        </span>

                    </div>

                </div>


                <div className="product-details-hero-image">

                    <div className="product-image-glow"></div>

                    <div className="product-image-frame">
                        <img
                            src={product.image}
                            alt={product.title}
                        />
                    </div>

                </div>

            </section>


            {


/* =========================================
                STATS
            ========================================= */}

            <section className="product-stats-section">

                <div className="product-stats-container">

                    {product.stats?.map(([number, label]) => (
                        <div
                            className="product-stat-card"
                            key={`${number}-${label}`}
                        >
                            <strong>{number}</strong>
                            <span>{label}</span>
                        </div>
                    ))}

                </div>

            </section>


            {


/* =========================================
                OVERVIEW
            ========================================= */}

            <section className="product-detail-section">

                <div className="product-section-heading">

                    <span>OVERVIEW</span>

                    <h2>
                        Everything you need to manage{" "}
                        <span>your operations better.</span>
                    </h2>

                    <p>
                        A centralized platform designed to simplify
                        processes, organize information and improve
                        everyday business operations.
                    </p>

                </div>


                <div className="product-overview-card">

                    <div className="overview-icon">
                        <FaCogs />
                    </div>

                    <div>
                        <h3>
                            About {product.title}
                        </h3>

                        <p>
                            {product.overview}
                        </p>

                        <p>
                            {product.title} brings important workflows,
                            information and daily activities together into
                            one structured digital environment.
                        </p>

                        <p>
                            It helps teams reduce dependency on manual
                            processes, improve information visibility and
                            manage routine activities more efficiently.
                        </p>

                        <p>
                            With centralized data, reporting, controlled
                            access and scalable modules, organizations can
                            build a more connected and manageable workflow.
                        </p>
                    </div>

                </div>

            </section>


            {


/* =========================================
                WHY THIS PRODUCT
            ========================================= */}

            <section className="product-detail-section product-light-section">

                <div className="product-section-heading center">

                    <span>WHY THIS SOLUTION</span>

                    <h2>
                        Built for smarter and more organized operations
                    </h2>

                    <p>
                        Bring your important workflows, information and
                        teams together in one structured digital platform.
                    </p>

                </div>


                <div className="product-why-grid">

                    <div className="product-why-card">
                        <FaDatabase />
                        <h3>Centralized Data</h3>
                        <p>
                            Keep important operational information organized
                            in one centralized system.
                        </p>
                    </div>

                    <div className="product-why-card">
                        <FaCogs />
                        <h3>Process Automation</h3>
                        <p>
                            Reduce repetitive manual work and streamline
                            everyday workflows.
                        </p>
                    </div>

                    <div className="product-why-card">
                        <FaShieldAlt />
                        <h3>Secure Access</h3>
                        <p>
                            Control access to information with user roles
                            and permission-based workflows.
                        </p>
                    </div>

                    <div className="product-why-card">
                        <FaChartLine />
                        <h3>Better Insights</h3>
                        <p>
                            Turn operational information into useful reports
                            and management insights.
                        </p>
                    </div>

                    <div className="product-why-card">
                        <FaMobileAlt />
                        <h3>Responsive Experience</h3>
                        <p>
                            Access important features across desktop, tablet
                            and mobile devices.
                        </p>
                    </div>

                    <div className="product-why-card">
                        <FaCloud />
                        <h3>Scalable Platform</h3>
                        <p>
                            Start with required modules and expand the
                            platform as your organization grows.
                        </p>
                    </div>

                </div>

            </section>


            {


/* =========================================
                AI
            ========================================= */}

            <section className="product-ai-section">

                <div className="product-ai-header">

                    <div className="product-ai-icon">
                        <FaRobot />
                    </div>

                    <div>

                        <span>AI & SMART CAPABILITIES</span>

                        <h2>
                            Make your product smarter with AI
                        </h2>

                        <p>
                            AI capabilities can be integrated to help
                            analyze information, automate repetitive
                            tasks and provide useful insights.
                        </p>

                    </div>

                </div>


                <div className="product-ai-grid">
                    {product.ai.map((item, index) => (

                        <div
                            className="product-ai-item"
                            key={item}
                        >
                            <FaRobot />
                            <span>{item}</span>
                        </div>

                    ))}

                </div>

            </section>


            {


/* =========================================
                DETAILED MODULES
            ========================================= */}

            <section className="product-detail-section product-light-section">

                <div className="product-section-heading center">

                    <span>COMPLETE MODULES</span>

                    <h2>
                        Explore every important module
                    </h2>

                    <p>
                        Each module is designed to handle a specific
                        operational requirement while working together
                        as one complete system.
                    </p>

                </div>


                <div className="product-modules-grid">

                    {product.modules.map((module, index) => (

                        <div
                            className="product-module-card"
                            key={index}
                        >

                            <div className="product-module-top">

                                <div className="product-module-icon">
                                    {getModuleIcon(module.title)}
                                </div>

                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                            </div>

                            <h3>
                                {module.title}
                            </h3>

                            <p>
                                {module.description}
                            </p>

                            <div className="module-read-more">
                                Explore Module
                                <FaArrowRight />
                            </div>

                        </div>

                    ))}

                </div>

            </section>


      
         {


/* =========================================
                ROLES
            ========================================= */}

            <section className="product-detail-section product-light-section">

                <div className="product-section-heading">

                    <span>USER ROLES</span>

                    <h2>
                        Designed for every team involved
                    </h2>

                    <p>
                        Different users can work with different
                        permissions and responsibilities.
                    </p>

                </div>


                <div className="product-users-grid">

                    {product.roles.map((role, index) => (

                        <div
                            className="product-user-card"
                            key={index}
                        >
                            <div className="product-users-icon">
                                <FaUserCheck />
                            </div>

                            <span>
                                {role}
                            </span>

                            <FaArrowRight />
                        </div>

                    ))}

                </div>

            </section>


         
      
            {


/* =========================================
                FEATURES
            ========================================= */}

            {pdfFeatureGroups[slug] && (
                <section className="product-detail-section product-light-section">
                    <div className="product-section-heading center">
                        <span>FEATURE GUIDE</span>
                        <h2>Complete {product.title} Features</h2>
                        <p>Explore the feature categories and capabilities outlined in the Xlligent Softwares product guide.</p>
                    </div>
                    <div className="product-modules-grid-1">
                        {pdfFeatureGroups[slug].map((group, index) => (
                            <article className="product-module-card" key={group.title}>
                                <div className="product-module-top">
                                    <div className="product-module-icon">{getModuleIcon(group.title)}</div>
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                </div>
                                <h3>{group.title}</h3>
                                <p>{group.items.length} capabilities included in this category.</p>
                                <ul className="pdf-feature-list">
                                    {group.items.map((item) => <li key={item}><FaCheckCircle />{item}</li>)}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>
            )}

            <section className="product-detail-section">

                <div className="product-section-heading">

                    <span>KEY FEATURES</span>

                    <h2>
                        Powerful features for complete management
                    </h2>

                    <p>
                        Everything important is organized into clear
                        modules so your team can work faster and smarter.
                    </p>

                </div>


                <div className="product-features-grid">

                    {product.features.map((feature, index) => (

                        <div
                            className="product-feature-card"
                            key={index}
                        >

                            <div className="product-feature-icon">
                                {getModuleIcon(feature)}
                            </div>

                            <div>
                                <h3>{feature}</h3>

                                <p>
                                    Manage and organize {feature.toLowerCase()}
                                    through a centralized digital workflow.
                                </p>
                            </div>

                            <FaCheckCircle className="product-check-icon" />

                        </div>

                    ))}

                </div>

            </section>


            {


/* =========================================
                WORKFLOW
            ========================================= */}

            <section className="product-detail-section">

                <div className="product-section-heading center">

                    <span>WORKFLOW</span>

                    <h2>
                        From start to finish, everything stays connected
                    </h2>

                    <p>
                        A structured workflow helps teams understand
                        what happens at every stage of the process.
                    </p>

                </div>


                <div className="product-workflow">

                    {product.workflow.map((step, index) => (

                        <div
                            className="product-workflow-item"
                            key={index}
                        >

                            <div className="workflow-number">
                                {index + 1}
                            </div>

                            <div className="workflow-content">
                                <span>STEP {index + 1}</span>
                                <h3>{step}</h3>
                            </div>

                            {index !== product.workflow.length - 1 && (
                                <FaArrowRight className="workflow-arrow" />
                            )}

                        </div>

                    ))}

                </div>

            </section>


            {


/* =========================================
                REPORTS
            ========================================= */}

            <section className="product-detail-section">

                <div className="product-section-heading center">

                    <span>REPORTS & ANALYTICS</span>

                    <h2>
                        Turn your data into useful information
                    </h2>

                    <p>
                        Generate structured reports that help teams
                        understand performance and make informed decisions.
                    </p>

                </div>


                <div className="product-reports-grid">

                    {product.reports.map((report, index) => (

                        <div
                            className="product-report-card"
                            key={index}
                        >

                            <div className="report-icon">
                                {index % 2 === 0
                                    ? <FaChartBar />
                                    : <FaChartPie />
                                }
                            </div>

                            <div>
                                <h3>{report}</h3>

                                <p>
                                    Organized information for better
                                    monitoring and decision-making.
                                </p>
                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {


/* =========================================
                SECURITY
            ========================================= */}

            <section className="product-security-section">

                <div className="security-main">

                    <div className="security-icon">
                        <FaShieldAlt />
                    </div>

                    <div>

                        <span>SECURITY & ACCESS</span>

                        <h2>
                            Keep your information protected
                        </h2>

                        <p>
                            Security and controlled access can be built
                            into the platform so users only access the
                            information and functionality relevant to
                            their responsibilities.
                        </p>

                    </div>

                </div>


                <div className="security-list">

                    {product.security.map((item, index) => (

                        <div key={index}>
                            <FaCheckCircle />
                            <span>{item}</span>
                        </div>

                    ))}

                </div>

            </section>


            {


/* =========================================
                BENEFITS
            ========================================= */}

            <section className="product-detail-section">

                <div className="product-section-heading center">

                    <span>BUSINESS BENEFITS</span>

                    <h2>
                        What your organization can achieve
                    </h2>

                    <p>
                        The goal is not only digitization, but creating
                        a more organized and efficient way of working.
                    </p>

                </div>


                <div className="product-benefits-grid">

                    {product.benefits.map((benefit, index) => (

                        <div
                            className="product-benefit-card"
                            key={index}
                        >

                            <div>
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <FaCheckCircle />

                            <p>
                                {benefit}
                            </p>

                        </div>

                    ))}

                </div>

            </section>


            {


/* =========================================
                USERS
            ========================================= */}

            <section className="product-users-section">

                <div className="product-users-heading">

                    <div className="product-users-icon">
                        <FaUsers />
                    </div>

                    <div>

                        <span>WHO CAN USE IT?</span>

                        <h2>
                            Built for different types of users
                        </h2>

                    </div>

                </div>


                <div className="product-users-list">

                    {product.users.map((user, index) => (

                        <div key={index}>

                            <FaCheckCircle />

                            <span>
                                {user}
                            </span>

                        </div>

                    ))}

                </div>

            </section>


            {


/* =========================================
                FAQ
            ========================================= */}

            <section className="product-detail-section">

                <div className="product-section-heading center">

                    <span>FAQ</span>

                    <h2>
                        Frequently asked questions
                    </h2>

                    <p>
                        Some common questions about the product and
                        its customization possibilities.
                    </p>

                </div>


                <div className="product-faq-list">

                    {product.faqs.map((faq, index) => (

                        <details
                            className="product-faq-item"
                            key={index}
                        >

                            <summary>
                                <span>
                                    {faq.q}
                                </span>

                                <FaChevronDown />
                            </summary>

                            <p>
                                {faq.a}
                            </p>

                        </details>

                    ))}

                </div>

            </section>


            {


/* =========================================
                FINAL CTA
            ========================================= */}

            <section className="product-final-cta">

                <div className="cta-decoration cta-decoration-one"></div>
                <div className="cta-decoration cta-decoration-two"></div>

                <div className="product-final-cta-content">

                    <span>
                        LET'S BUILD SOMETHING BETTER
                    </span>

                    <h2>
                        Ready to transform your <strong>{product.title}</strong>?
                    </h2>

                    <p>
                        Tell us about your requirements and our team
                        can help you plan a solution around your
                        organization's actual workflow.
                    </p>

                    <div className="product-final-actions">

                        <Link
                            to="/contact"
                            className="product-secondary-button"
                        >
                            Contact Us
                            <FaArrowRight />
                        </Link>

                    </div>

                </div>

            </section>
            {/* 

            <CTA /> */}
        </main>
    );
}

export default ProductDetails;
