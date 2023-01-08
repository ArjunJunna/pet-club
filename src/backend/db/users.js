import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Tom',
    lastName: 'Cruise',
    fullName: 'Tom Cruise',
    username: 'tom_cruise',
    password: 'tomcruise123',
    bio: 'Actor',
    website: 'https://tomcruise.in',
    profileAvatar:
      'https://res.cloudinary.com/djxonmiuo/image/upload/v1672933298/pet-club-images/tomcruise_yfdilf.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: 'Stefanie Cruz',
        username: 'Stefanie',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985413/pet-club-images/stefan-stefancik-QXevDflbl8A-unsplash_neaz2x.jpg',
      },
      {
        _id: uuid(),
        fullName: 'Sergio De Paula',
        username: 'Sergio',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985411/pet-club-images/sergio-de-paula-c_GmwfHBDzk-unsplash_vkvwf1.jpg',
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: 'Stefanie Cruz',
        username: 'Stefanie',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985413/pet-club-images/stefan-stefancik-QXevDflbl8A-unsplash_neaz2x.jpg',
      },
      {
        _id: uuid(),
        fullName: 'Sergio De Paula',
        username: 'Sergio',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985411/pet-club-images/sergio-de-paula-c_GmwfHBDzk-unsplash_vkvwf1.jpg',
      },
      {
        _id: uuid(),
        fullName: 'Sasha Henriqez',
        username: 'Sasha',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985408/pet-club-images/michael-dam-mEZ3PoFGs_k-unsplash_w4tjsz.jpg',
      },
    ],
  },
  {
    _id: uuid(),
    firstName: 'Keanu',
    lastName: 'Reeves',
    fullName: 'Keanu Reeves',
    username: 'keanu_reeves',
    password: 'keanureeves123',
    bio: 'Do not mess with my dog',
    website: 'https://hireme.in',
    profileAvatar:
      'https://res.cloudinary.com/djxonmiuo/image/upload/v1672933292/pet-club-images/keanu_lhlmyz.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: 'Stefanie Cruz',
        username: 'Stefanie',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985413/pet-club-images/stefan-stefancik-QXevDflbl8A-unsplash_neaz2x.jpg',
      },
      {
        _id: uuid(),
        fullName: 'Sergio De Paula',
        username: 'Sergio',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985411/pet-club-images/sergio-de-paula-c_GmwfHBDzk-unsplash_vkvwf1.jpg',
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: 'Stefanie Cruz',
        username: 'Stefanie',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985413/pet-club-images/stefan-stefancik-QXevDflbl8A-unsplash_neaz2x.jpg',
      },
    ],
  },
  {
    _id: uuid(),
    firstName: 'Stefanie',
    lastName: 'Cruz',
    fullName: 'Stefanie Cruz',
    username: 'Stefanie',
    password: 'stefanie1',
    bio: 'Life is Beautiful',
    website: 'https://stefanie.com',
    profileAvatar:
      'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985413/pet-club-images/stefan-stefancik-QXevDflbl8A-unsplash_neaz2x.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: 'Sergio De Paula',
        username: 'Sergio',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985411/pet-club-images/sergio-de-paula-c_GmwfHBDzk-unsplash_vkvwf1.jpg',
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: 'Keanu Reeves',
        username: 'keanu_reeves',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1672933292/pet-club-images/keanu_lhlmyz.jpg',
      },
    ],
  },
  {
    _id: uuid(),
    firstName: 'Ethan',
    lastName: 'Hoover',
    fullName: 'Enthan Hoover',
    username: 'ethan hoover',
    password: 'ethan123',
    bio: 'Web Developer',
    website: 'https://ethancodes.in',
    profileAvatar:
      'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985396/pet-club-images/ethan-hoover-0YHIlxeCuhg-unsplash_wruvij.jpg',
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: 'Stefanie Cruz',
        username: 'Stefanie',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985413/pet-club-images/stefan-stefancik-QXevDflbl8A-unsplash_neaz2x.jpg',
      },
      {
        _id: uuid(),
        fullName: 'Sergio De Paula',
        username: 'Sergio',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985411/pet-club-images/sergio-de-paula-c_GmwfHBDzk-unsplash_vkvwf1.jpg',
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: 'Stefanie Cruz',
        username: 'Stefanie',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985413/pet-club-images/stefan-stefancik-QXevDflbl8A-unsplash_neaz2x.jpg',
      },
      {
        _id: uuid(),
        fullName: 'Sergio De Paula',
        username: 'Sergio',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985411/pet-club-images/sergio-de-paula-c_GmwfHBDzk-unsplash_vkvwf1.jpg',
      },
      {
        _id: uuid(),
        fullName: 'Sasha Henriqez',
        username: 'Sasha',
        profileAvatar:
          'https://res.cloudinary.com/djxonmiuo/image/upload/v1671985408/pet-club-images/michael-dam-mEZ3PoFGs_k-unsplash_w4tjsz.jpg',
      },
    ],
  },
  
];
