import { Metadata } from 'next'
import AllGamesClient from './AllGamesClient'

export const metadata: Metadata = {
    title: 'Retro-Games.org - Play All Retro Games',
    description: 'Browse our complete collection of classic retro games from Nintendo, Sega, PlayStation, and more. Play your favorite retro games online.',
    keywords: ''
}

export const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'CollectionPage',
            '@id': 'https://retro-games.org/all-games#webpage',
            'url': 'https://retro-games.org/all-games',
            'name': 'All Retro Games - Retro Games',
            'description': 'Browse our complete collection of classic retro games from Nintendo, Sega, PlayStation, and more. Play your favorite retro games online.',
            'isPartOf': {
                '@id': 'https://retro-games.org//#website'
            }
        },
        {
            '@type': 'VideoGameSeries',
            '@id': 'https://retro-games.org/all-games#webpage',
            'name': 'Complete Retro Games Collection',
            'description': 'Comprehensive collection of classic retro games from multiple gaming platforms including Nintendo, Sega, PlayStation, and more.',
            'genre': ['Retro Games', 'Classic Games', 'Arcade Games'],
            'gamePlatform': [
                'Nintendo Entertainment System',
                'Super Nintendo',
                'Game Boy',
                'Game Boy Color',
                'Game Boy Advance',
                'Nintendo 64',
                'Nintendo DS',
                'Sega Genesis',
                'PlayStation',
                'Arcade'
            ]
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://retro-games.org/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "All Games",
                    "item": "https://retro-games.org/all-games"
                }
            ]
        }        
    ]
}

export default function AllGamesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AllGamesClient />
        </>
    )
}