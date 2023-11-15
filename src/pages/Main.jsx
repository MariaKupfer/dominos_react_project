import React from 'react';
import History from '../components/History/History';
import Animation from '../components/Animation/Animation';
import AppsComponent from '../components/AppsComponent/AppsComponent';
import OfferCard from '../components/OfferCard/OfferCard';
import ImageOfferCard from '../components/ImageOfferCard/ImageOfferCard';
import RedAndBlueBoxes from '../components/RedAndBlueBoxes/RedAndBlueBoxes';
import Container from '../components/Container/Container';

const offerCardsData = [
    {
        title: 'Liferung',
        content: '1 PIZZA/PASTA + 1 SNACK  ODER DESSERT AB €9.99',
        validity: 'NUR IN TEILNEHMENDEN STORES. GÜLTIG BIS 01-01-25. EINLÖSEBEDINGUNGEN >',
        buttonText: 'JETZT BESTELLEN'
    },
    {
        title: 'Liferung',
        content: '1 PIZZA/PASTA + 1 SNACK  ODER DESSERT AB €9.99',
        validity: 'NUR IN TEILNEHMENDEN STORES. GÜLTIG BIS 01-01-25. EINLÖSEBEDINGUNGEN >',
        buttonText: 'JETZT BESTELLEN '
    },
    {
        title: 'Liferung',
        content: '1 PIZZA/PASTA + 1 SNACK  ODER DESSERT AB €9.99',
        validity: 'NUR IN TEILNEHMENDEN STORES. GÜLTIG BIS 01-01-25. EINLÖSEBEDINGUNGEN >',
        buttonText: 'JETZT BESTELLEN'
    },
    {
        title: 'Liferung',
        content: '1 PIZZA/PASTA + 1 SNACK  ODER DESSERT AB €9.99',
        validity: 'NUR IN TEILNEHMENDEN STORES. GÜLTIG BIS 01-01-25. EINLÖSEBEDINGUNGEN >',
        buttonText: 'JETZT BESTELLEN'
    }
];

const imageOfferCardsData = [
    {
        image: 'https://www.dominos.de/media/enohtlcm/230606_dominosclub_mobileslider_768x768.jpg',
        title: 'JETZT REGISTRIEREN! PUNKTE SAMMELN & GRATISPIZZA BEKOMMEN!',
        buttonText: 'JETZT REGISTRIEREN'
    },
    {
        image: 'https://www.dominos.de/media/jmznn1ez/230127_landingpage_slidermobile_diverse_neu_768x768.jpg',
        title: 'JETZT REGISTRIEREN! PUNKTE SAMMELN &  GRATISPIZZA BEKOMMEN!',
        buttonText: 'JETZT EMDECKEN'
    },
    {
        image: 'https://www.dominos.de/media/y5ahwyan/gutscheinkarte.jpg',
        title: 'PROBIERE JETZT UNSERE NEUEN AKTIONPIZZEN!',
        buttonText: 'JETZT BESTELLEN'
    }
];

const Main = () => {
    return (
        <>
            <h1>ONLINE BESTELLUNG</h1>
            <RedAndBlueBoxes />
            <Animation />
            <hr />
            <h1>Store Angebote</h1>
            <Container cards={offerCardsData} CardComponent={OfferCard} />
            <h1>HUNGRIG NACH MEHR</h1>
            <Container cards={imageOfferCardsData} CardComponent={ImageOfferCard} />
            <AppsComponent />
            <hr />
            <h1>SCHMECK DEN UNTERSCHIED</h1>
            <History />
        </>
    );
};

export default Main;
