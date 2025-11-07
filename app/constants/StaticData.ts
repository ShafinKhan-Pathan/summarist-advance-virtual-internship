import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";
import { LuCrown } from "react-icons/lu";
import { TbStarsFilled } from "react-icons/tb";
import { GiThreeLeaves } from "react-icons/gi";
import { IconType } from "react-icons";

export interface CaptionTitle {
    icon: IconType;
    title: string;
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