import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";
import { LuCrown } from "react-icons/lu";
import { TbStarsFilled } from "react-icons/tb";
import { GiThreeLeaves } from "react-icons/gi";
import { IconType } from "react-icons";
import { FiHome, FiBook, FiStar, FiSearch, FiSettings, FiHelpCircle, FiLogOut } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";


export interface CaptionTitle {
    icon: IconType;
    title?: string;
    description: string
    feature?: boolean
}
export interface StatContent {
    title: string
    alignEnd?: boolean
}
export interface StatRatio {
    ratio: number;
    title: string
}
export interface Testimonials {
    name: string;
    star?: number;
    review?: string
}
export interface Footer {
    title: string
    links: {
        name: string,
        disabled?: boolean
    }[]
}
export interface Sidebar {
    icon: IconType;
    name: string;
    path: string;
    disabled?: boolean
    isLogout?: boolean
}
export interface Faqs {
    question: string;
    answer: string;
}
export const CaptionTitleData: CaptionTitle[] = [
    {
        icon: AiFillFileText,
        title: "Read or listen",
        description: "Save time by getting the core ideas from the best books."
    }, {
        icon: AiFillBulb,
        title: "Find your next read",
        description: "Explore book lists and personalized recommendations."
    },
    {
        icon: AiFillAudio,
        title: "Briefcasts",
        description: "Gain valuable insights from briefcasts. Use AI Audio Feature"
    },
]
export const StatisticContent1: StatContent[] = [
    { title: "Enhance your knowledge" },
    { title: "Achieve greater success" },
    { title: "Improve your health" },
    { title: "Develop better parenting skills" },
    { title: "Increase happiness" },
    { title: "Be the best version of yourself!" }
]
export const StatisticContent2: StatContent[] = [
    { title: "Expand your learning" },
    { title: "Accomplish your goals" },
    { title: "Strengthen your vitality" },
    { title: "Become a better caregiver" },
    { title: "Improve your mood" },
    { title: "Maximize your abilities" }
]
export const StatisticRatio1: StatRatio[] = [
    { ratio: 93, title: "of Summarist members significantly increase reading frequency." },
    { ratio: 96, title: "of Summarist members establish better habits." },
    { ratio: 90, title: "have made significant positive change to their lives." }
]
export const StatisticRatio2: StatRatio[] = [
    { ratio: 93, title: "of Summarist members significantly increase reading frequency." },
    { ratio: 96, title: "of Summarist members establish better habits." },
    { ratio: 90, title: "have made significant positive change to their lives." }
]
export const RealTestimonials: Testimonials[] = [
    { name: "Hanna M.", star: 5, review: "This app has been a game-changer for me! It's saved me so much time and effort in reading and comprehending books. Highly recommend it to all book lovers." },
    { name: "Rayn M.", star: 5, review: "I love this app! It provides concise and accurate summaries of books in a way that is easy to understand. It's also very user-friendly and intuitive." },
    { name: "Mathews G.", star: 5, review: "This app is a great way to get the main takeaways from a book without having to read the entire thing. The summaries are well-written and informative. Definitely worth downloading." },
    { name: "Nathan S.", star: 4, review: "If you're a busy person who loves reading but doesn't have the time to read every book in full, this app is for you! The summaries are thorough and provide a great overview of the book's content." },
]
export const FeatureTitles: CaptionTitle[] = [
    {
        icon: LuCrown,
        title: "3 Million",
        description: "Downloads on all platforms"
    }, {
        icon: TbStarsFilled,
        title: "4.5 Stars",
        description: "Average ratings on iOS and Google Play"
    },
    {
        icon: GiThreeLeaves,
        title: "97%",
        description: "Of Summarist members create a better reading habit"
    },
]
export const FooterLinks: Footer[] = [
    {
        title: "Actions",
        links: [
            { name: "Summarist Magazine", disabled: true },
            { name: "Cancel Subscription", disabled: true },
            { name: "Help", disabled: true },
            { name: "Contact us", disabled: true },
        ],
    },
    {
        title: "Useful Links",
        links: [
            { name: "Pricing", disabled: true },
            { name: "Summarist Business", disabled: true },
            { name: "Gift Cards", disabled: true },
            { name: "Authors & Publishers", disabled: true },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About", disabled: true },
            { name: "Careers", disabled: true },
            { name: "Partners", disabled: true },
            { name: "Code of Conduct", disabled: true },
        ],
    },
    {
        title: "Other",
        links: [
            { name: "Sitemap", disabled: true },
            { name: "Legal Notice", disabled: true },
            { name: "Terms of Service", disabled: true },
            { name: "Privacy Policies", disabled: true },
        ],
    },
]
export const SidebarLinks: Sidebar[] = [
    { icon: FiHome, name: "Home", path: "/for-you" },
    { icon: FiBook, name: "My Library", path: "/library", disabled: true },
    { icon: FiStar, name: "Highlights", path: "/highlights", disabled: true },
    { icon: FiSearch, name: "Search", path: "/search", disabled: true },

]
export const SidebarLinksAdditional: Sidebar[] = [
    { icon: FiSettings, name: "Settings", path: "/settings", disabled: true },
    { icon: FiHelpCircle, name: "Help", path: "/help", disabled: true },
    { icon: FiLogOut, name: "Logout", path: "/logout", disabled: false, isLogout: true },
]
export const ChoosePlans: CaptionTitle[] = [
    {
        icon: AiFillFileText,
        description: "Key ideas in few min with many books to read"
    }, {
        icon: RiPlantFill,
        description: "3 million people growing with Summarist everyday"
    },
    {
        icon: FaHandshake,
        description: "Precise recommendations collections curated by experts"
    },
]
export const FaqsData: Faqs[] = [
    {
        question: "How does the free 7-day trial work?",
        answer: "Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial."
    },
    {
        question: "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
        answer: "While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option."
    },
    {
        question: "What's included in the Premium plan?",
        answer: "Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle."
    },
    {
        question: "Can I cancel during my trial or subscription?",
        answer: "You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day."
    },
]