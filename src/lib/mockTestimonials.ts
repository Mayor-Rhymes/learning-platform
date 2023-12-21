interface ITestimonial {
  id: number;
  content: string;
  author: string;
  location?: string;
}

export const testimonials: ITestimonial[] = [
  {
    id: 1,
    content:
      "Best Tutor for my kids from their foundation class and now their primary\
      classes. It has delivered Great results in their school work.\
      Frithland\
      Educational Consult has been professional, easy to schedule our online\
      classes, and amazing to work with. I will always recommend them.",

    author: "Mrs Kemi Idayi",
    location: "Accra, Ghana",
  },
  {
    id: 2,
    content:
      "My daughter got a very high score in her common entrance \
      last year which earned her admissions into three top schools here in Lagos including a Federal school.\
      The patience and professionalism displayed from her tutor in Frithland educational consult is very commendable.",

    author: "Mrs Bunmi Ojo",
    
  },
  {
    id: 3,
    content:
      "Frithland consult is an ideal educational consult for your family.  \
      Their services are topnotch. The level of dedication and creativity they put into their work \
      is nothing compared to other educational consults.  Keep up the good job.",

    author: "Mrs Kofoworola Ruth Folasade",
    
  },
  {
    id: 4,
    content: 
    "The Tutor from Frithland Educational Consult has been very instrumental in the education of my son Daniel,\
     her level professionalism is top notch, and this is evident in the progress in his academics. \
     The discipline he has gotten within this period is also reflecting in his daily activities. \
    This is also the case with my two daughters who prior to the experience with the Tutor were lagging behind a bit.\
    I would recommend the Tutor any day anytime.",

    author: "Mrs Racheal Chimezie",
    
  },
  {
    id: 5,
    content: 
    "I was referred to Frithland educational consult by a friend and \
    I have never regretted it because my children's educational needs have been met since I started working with them",

    author: "Mr Henry Unuavworeyeya",
    
  },
];
