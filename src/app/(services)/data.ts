interface Candidate {
    id: number;
    name: string;
    role: string;
    location: string;
    experience: string;
    rate: string;
    image: string;
    rating: number;
}


interface Service {
    id: number;
    seller: string;
    title: string;              // renamed `serviceTitle` → `title` to match data
    image: string;
    rating: number;
    reviews: number;
    price: string;              // renamed `startingPrice` → `price`
    vetted: boolean;
    name?: string;              // optional (not present in your data)
    role?: string;
    category?: string;
    location?: string;
    experience?: string;
    rate?: string;
    description?: string;
    deliveryTime?: string;
    level?: string;
}

export const candidates: Candidate[] = [
    {
        id: 1,
        name: "Ronald Richards",
        role: "Sr. UX/UI Designer",
        location: "New York, USA",
        experience: "2 Years Experience",
        rate: "$55 / hour",
        image: "/images/team/team-20.png",
        rating: 5,
    },
    {
        id: 2,
        name: "Jacob Jones",
        role: "Sr. UX/UI Designer",
        location: "New York, USA",
        experience: "2 Years Experience",
        rate: "$55 / hour",
        image: "/images/team/team-21.png",
        rating: 5,
    },
    {
        id: 3,
        name: "Arlene McCoy",
        role: "Sr. UX/UI Designer",
        location: "New York, USA",
        experience: "2 Years Experience",
        rate: "$55 / hour",
        image: "/images/team/team-22.png",
        rating: 5,
    },
    {
        id: 4,
        name: "Kristin Watson",
        role: "Sr. UX/UI Designer",
        location: "New York, USA",
        experience: "2 Years Experience",
        rate: "$55 / hour",
        image: "/images/team/team-23.png",
        rating: 5,
    },
];


export const services: Service[] = [
    {
        id: 1,
        image: "/images/team/user01.jpeg",
        seller: "SMCSE Solutions",
        title: "Our agency will develop a topnotch business website",
        rating: 4.9,
        reviews: 772,
        price: "$27,933",
        vetted: true,
    },
    {
        id: 2,
        image: "/images/team/user02.jpeg",
        seller: "Minesh",
        title: "I will design highlevel sales funnel landing page",
        rating: 4.9,
        reviews: 71,
        price: "$18,157",
        vetted: true,
    },
    {
        id: 3,
        image: "/images/team/user03.jpeg",
        seller: "Digital Kitsune",
        title:
            "Our agency will design or redesign ecommerce business wordpress website",
        rating: 4.9,
        reviews: 306,
        price: "$27,468",
        vetted: true,
    },
    {
        id: 4,
        image: "/images/team/user04.jpeg",
        seller: "Parshant R.",
        title: "I will build, redesign responsive wordpress website design for you",
        rating: 4.8,
        reviews: 464,
        price: "$22,812",
        vetted: true,
    },
    {
        id: 5,
        image: "/images/team/user01.jpeg",
        seller: "SMCSE Solutions",
        title: "Our agency will develop a topnotch business website",
        rating: 4.9,
        reviews: 772,
        price: "$27,933",
        vetted: true,
    },
    {
        id: 6,
        image: "/images/team/user02.jpeg",
        seller: "Minesh",
        title: "I will design highlevel sales funnel landing page",
        rating: 4.9,
        reviews: 71,
        price: "$18,157",
        vetted: true,
    },
    {
        id: 7,
        image: "/images/team/user03.jpeg",
        seller: "Digital Kitsune",
        title:
            "Our agency will design or redesign ecommerce business wordpress website",
        rating: 4.9,
        reviews: 306,
        price: "$27,468",
        vetted: true,
    },
    {
        id: 8,
        image: "/images/team/user04.jpeg",
        seller: "Parshant R.",
        title: "I will build, redesign responsive wordpress website design for you",
        rating: 4.8,
        reviews: 464,
        price: "$22,812",
        vetted: true,
    },
];


export const johnServices: Service[] = [
    {
        id: 1,
        image: "/images/services/wp.png",
        seller: "John",
        title: "Our agency will develop a topnotch business website",
        rating: 4.9,
        reviews: 772,
        price: "$27,933",
        vetted: true,
    },
    {
        id: 2,
        image: "/images/services/wp.png",
        seller: "John",
        title: "I will design highlevel sales funnel landing page",
        rating: 4.9,
        reviews: 71,
        price: "$18,157",
        vetted: true,
    },
    {
        id: 3,
        image: "/images/services/wp.png",
        seller: "John",
        title:
            "Our agency will design or redesign ecommerce business wordpress website",
        rating: 4.9,
        reviews: 306,
        price: "$27,468",
        vetted: true,
    },
    {
        id: 4,
        image: "/images/services/wp.png",
        seller: "John",
        title: "I will build, redesign responsive wordpress website design for you",
        rating: 4.8,
        reviews: 464,
        price: "$22,812",
        vetted: true,
    },
    {
        id: 5,
        image: "/images/services/wp.png",
        seller: "John",
        title: "Our agency will develop a topnotch business website",
        rating: 4.9,
        reviews: 772,
        price: "$27,933",
        vetted: true,
    },
    {
        id: 6,
        image: "/images/services/wp.png",
        seller: "John",
        title: "I will design highlevel sales funnel landing page",
        rating: 4.9,
        reviews: 71,
        price: "$18,157",
        vetted: true,
    },
    {
        id: 7,
        image: "/images/services/wp.png",
        seller: "John",
        title:
            "Our agency will design or redesign ecommerce business wordpress website",
        rating: 4.9,
        reviews: 306,
        price: "$27,468",
        vetted: true,
    },
    {
        id: 8,
        image: "/images/services/wp.png",
        seller: "John",
        title: "I will build, redesign responsive wordpress website design for you",
        rating: 4.8,
        reviews: 464,
        price: "$22,812",
        vetted: true,
    },
];


