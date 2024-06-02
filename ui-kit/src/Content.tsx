// Посилання в хедер
export const headerList = ["Про нас", "Контакти", "Змагання", "Тудим сюдим"];

const propposalDescription = [
  "Опис для Сервіс 1",
  "Опис для Сервіс 2", 
  "Опис для Сервіс 3",
  "Опис для Сервіс 4",
  "Опис для Сервіс 5",
  "Опис для Сервіс 6",
]

// Пропозиції
export const proposalList = {
  proposalItem: 
  [{
    title: "Пропозиція 1",
    description: "бла бла бла",
    price: 123,
    includedOfferList: ["Сервіс 4", "Сервіс 5"],
    notIncludedOfferList: [ "Сервіс 3", "Сервіс 2", "Сервіс 6"],
    infoExtendedDescription: propposalDescription
  },{
    title: "Пропозиція 2",
    description: "бла бла бла",
    price: 123,
    includedOfferList: ["Сервіс 1", "Сервіс 2", "Сервіс 3"],
    notIncludedOfferList: ["Сервіс 4", "Сервіс 5", "Сервіс 6"],
    infoExtendedDescription: propposalDescription
  },{
    title: "Пропозиція 3",
    description: "бла бла бла",
    price: 123,
    includedOfferList: ["Сервіс 1", "Сервіс 2", "Сервіс 3", "Сервіс 4"],
    notIncludedOfferList: ["Сервіс 5", "Сервіс 6"],
    infoExtendedDescription: propposalDescription
  },{
    title: "Пропозиція 3",
    description: "бла бла бла",
    price: 123,
    includedOfferList: ["Сервіс 1", "Сервіс 2", "Сервіс 3", "Сервіс 4", "Сервіс 5"],
    notIncludedOfferList: ["Сервіс 6"],
    infoExtendedDescription: propposalDescription
  },{
    title: "Пропозиція 3",
    description: "бла бла бла",
    price: 123,
    includedOfferList: ["Сервіс 1", "Сервіс 2", "Сервіс 3"],
    notIncludedOfferList: ["Сервіс 4", "Сервіс 5", "Сервіс 6"],
    infoExtendedDescription: propposalDescription
  },{
    title: "Пропозиція 3",
    description: "бла бла бла",
    price: 123,
    includedOfferList: ["Сервіс 1", "Сервіс 2", "Сервіс 3"],
    notIncludedOfferList: ["Сервіс 4", "Сервіс 5", "Сервіс 6"],
    infoExtendedDescription: propposalDescription
  },
]
  
}


// Контент всередині футер.
// В значення icon пишете назву фотографії з розширенням. Фотографія має знаходитись у папці footer
export const footerInfo = {

  footerMedia: [
    {
      icon: "instagram.svg",
      link: "https://www.instagram.com/",
    },
    {
      icon: "telegram.svg",
      link: "https://www.tg.com/"

    },
    {
      icon: "linkedin.svg",
      link: "https://www.instagram.com/",
    },
  ],

  footerLogo: "logo.png",
  footerDate: 2024
};
