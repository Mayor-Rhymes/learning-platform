interface ITestimonial {
  id: number;
  content: string;
  rating: number;
  author: string;
  location: string;
}

export const testimonials: ITestimonial[] = [
  {
    id: 1,
    content:
      "My daughter scored the highest mark in her common entrance exam and was immediately granted admission. All thanks to her tutor from learning platfom.",
    rating: 4,
    author: "Mrs Soetan",
    location: "Lekki, Lagos",
  },
  {
    id: 2,
    content:
      "I scored a great mark in my GRE exam. My tutor's wide experience impacted my understanding and helped me achieve unbelievable results",
    rating: 5,
    author: "Mrs Robert",
    location: "Ikorodu, Lagos",
  },
];
