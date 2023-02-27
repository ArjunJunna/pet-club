import { v4 as uuid } from "uuid";
//import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Exciting news! My next movie is going to be even more intense and action-packed than anything I've done before. Get ready for thrills, spills, and nonstop entertainment! #TomCruise #ActionMovie",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileAvatar:
      'https://res.cloudinary.com/djxonmiuo/image/upload/v1672933298/pet-club-images/tomcruise_yfdilf.jpg',
    username: 'tom_cruise',
    fullName: 'Tom Cruise',
    createdAt: new Date('June 21, 2022'),
    updatedAt: new Date('june 21, 2022'),
    comments: [
      {
        _id: uuid(),
        comment: 'This is amazing...',
        username: 'keanu_reeves',
        fullName: 'Keanu Reeves',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1672933292/pet-club-images/keanu_lhlmyz.jpg',
        createdAt: new Date('June 21, 2022'),
        updatedAt: new Date('June 21, 2022'),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "I've always had a special place in my heart for animals, and my next project is going to be all about celebrating and protecting our furry friends. Stay tuned for more details! #KeanuReeves #AnimalLovers",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileAvatar:
      'https://res.cloudinary.com/djxonmiuo/image/upload/v1672933292/pet-club-images/keanu_lhlmyz.jpg',
    username: 'keanu_reeves',
    fullName: 'Keanu Reeves',
    createdAt: new Date('July 14, 2022'),
    updatedAt: new Date('July 14, 2022'),
    comments: [
      {
        _id: uuid(),
        comment: 'Wow this an update that we all been waiting for.',
        fullName: 'Sergio De Paula',
        username: 'Sergio',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985411/pet-club-images/sergio-de-paula-c_GmwfHBDzk-unsplash_vkvwf1.jpg',
        createdAt: new Date('July 14, 2022'),
        updatedAt: new Date('July 14, 2022'),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      'Why is that its always orange cats that does the most naughtiest things',
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          fullName: 'Stefanie Cruz',
          username: 'Stefanie',
          profileAvatar:
            'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985413/pet-club-images/stefan-stefancik-QXevDflbl8A-unsplash_neaz2x.jpg',
        },
        {
          _id: uuid(),
          fullName: 'Keanu Reeves',
          username: 'keanu_reeves',
          profileAvatar:
            'https://res.cloudinary.com/djxonmiuo/image/upload/v1672933292/pet-club-images/keanu_lhlmyz.jpg',
        },
      ],
      dislikedBy: [],
    },
    profileAvatar:
      'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985396/pet-club-images/ethan-hoover-0YHIlxeCuhg-unsplash_wruvij.jpg',
    username: 'ethan hoover',
    fullName: 'Enthan Hoover',
    createdAt: new Date('June 14, 2022'),
    updatedAt: new Date('June 14, 2022'),
    comments: [
      {
        _id: uuid(),
        comment: 'So damn true...',
        username: 'keanu_reeves',
        fullName: 'Keanu Reeves',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1672933292/pet-club-images/keanu_lhlmyz.jpg',
        createdAt: new Date('June 14, 2022'),
        updatedAt: new Date('June 14, 2022'),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: 'Pets are the only family I could vouch for..',
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileAvatar:
      'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985408/pet-club-images/michael-dam-mEZ3PoFGs_k-unsplash_w4tjsz.jpg',
    username: 'Sasha Henriqez',
    fullName: 'Sasha',
    createdAt: new Date('June 10, 2022'),
    updatedAt: new Date('June 10, 2022'),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Just got a new puppy and she's already the light of my life! #puppylove #newpet",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          fullName: 'Christilla',
          username: 'Its Christilla',
          profileAvatar:
            'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985387/pet-club-images/christopher-campbell-rDEOVtE7vOs-unsplash_ibd6xu.jpg',
        },
        {
          _id: uuid(),
          fullName: 'Craig Mckay',
          username: 'craig',
          profileAvatar:
            'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985392/pet-club-images/craig-mckay-jmURdhtm7Ng-unsplash_aty4ty.jpg',
        },
      ],
      dislikedBy: [],
    },
    profileAvatar:
      'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985396/pet-club-images/ethan-hoover-0YHIlxeCuhg-unsplash_wruvij.jpg',
    username: 'ethan hoover',
    fullName: 'Enthan Hoover',
    createdAt: new Date('July 10, 2022'),
    updatedAt: new Date('July 10, 2022'),
    comments: [
      {
        _id: uuid(),
        comment: 'Awesome...',
        fullName: 'Sergio De Paula',
        username: 'Sergio',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985411/pet-club-images/sergio-de-paula-c_GmwfHBDzk-unsplash_vkvwf1.jpg',
        createdAt: new Date('July 10, 2022'),
        updatedAt: new Date('July 10, 2022'),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      'I think my fish might be trying to communicate with me. Every time I pass by the tank he swims over and bumps against the glass. #fishlove #petcommunication',
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          fullName: 'Christilla',
          username: 'Its Christilla',
          profileAvatar:
            'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985387/pet-club-images/christopher-campbell-rDEOVtE7vOs-unsplash_ibd6xu.jpg',
        },
      ],
      dislikedBy: [],
    },
    profileAvatar:
      'https://res.cloudinary.com/djxonmiuo/image/upload/v1672933292/pet-club-images/keanu_lhlmyz.jpg',
    fullName: 'Keanu Reeves',
    username: 'keanu_reeves',
    createdAt: new Date('July 11, 2022'),
    updatedAt: new Date('July 11, 2022'),
    comments: [
      {
        _id: uuid(),
        comment: 'Nice one!',
        fullName: 'Stefanie Cruz',
        username: 'Stefanie',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985413/pet-club-images/stefan-stefancik-QXevDflbl8A-unsplash_neaz2x.jpg',
        createdAt: new Date('July 11, 2022'),
        updatedAt: new Date('July 11, 2022'),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Just found out my cat can open doors. I'm both impressed and a little scared. #catlove #cleverpets",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          fullName: 'Daniel Lincoln',
          username: 'Linkcoln',
          profileAvatar:
            'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985394/pet-club-images/daniel-lincoln-NR705beN_CU-unsplash_a09sht.jpg',
        },
        {
          _id: uuid(),
          fullName: 'Jackie Nachos',
          username: 'jackie',
          profileAvatar:
            'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985401/pet-club-images/jake-nackos-IF9TK5Uy-KI-unsplash_bz2pmq.jpg',
        },
        {
          _id: uuid(),
          fullName: 'Julian Wan',
          username: 'jule',
          profileAvatar:
            'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985403/pet-club-images/julian-wan-WNoLnJo7tS8-unsplash_jtmsfb.jpg',
        },
      ],
      dislikedBy: [],
    },
    profileAvatar:
      'https://res.cloudinary.com/djxonmiuo/image/upload/v1672933298/pet-club-images/tomcruise_yfdilf.jpg',
    fullName: 'Tom Cruise',
    username: 'tom_cruise',
    createdAt: new Date('June 10, 2022'),
    updatedAt: new Date('June 10, 2022'),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "It's been a long day at work but coming home to my furry friends always makes everything better. #pettherapy",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profileAvatar:
      'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985413/pet-club-images/stefan-stefancik-QXevDflbl8A-unsplash_neaz2x.jpg',
    fullName: 'Stefanie Cruz',
    username: 'Stefanie',
    createdAt: new Date('July 10, 2022'),
    updatedAt: new Date('July 10, 2022'),
    comments: [
      {
        _id: uuid(),
        comment: 'Such a good thing in life...',
        fullName: 'Sergio De Paula',
        username: 'Sergio',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985411/pet-club-images/sergio-de-paula-c_GmwfHBDzk-unsplash_vkvwf1.jpg',
        createdAt: new Date('July 10, 2022'),
        updatedAt: new Date('July 10, 2022'),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: 'What an amazing community this is...',
        fullName: 'Sasha Henriqez',
        username: 'Sasha',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985408/pet-club-images/michael-dam-mEZ3PoFGs_k-unsplash_w4tjsz.jpg',
        createdAt: new Date('May 16, 2022'),
        updatedAt: new Date('May 16, 2022'),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
